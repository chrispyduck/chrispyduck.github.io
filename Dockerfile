ARG REPO=git@github.com:chrispyduck/chrispyduck.github.io.git
ARG PAGES_BRANCH=gh-pages

# build stage: npm i && npm run build
FROM node:17 AS build

WORKDIR /work
ADD . /work
RUN npm install
RUN npm run build

# artifacts stage: empty container with only build artifacts, for exporting artifacts
FROM scratch AS artifacts
COPY --from=build /work/build /

# publish stage: clone git repo, add files, commit changes
FROM alpine AS publish
RUN apk add git rsync openssh
WORKDIR /work 

RUN <<EOF
#!/bin/sh 
set -eu

mkdir -p -m 0700 ~/.ssh
ssh-keyscan github.com >> ~/.ssh/known_hosts
EOF

ARG REPO
ARG PAGES_BRANCH
RUN --mount=type=ssh,required=true git clone --depth 1 -b ${PAGES_BRANCH} ${REPO} /work
RUN git rm -r *
COPY --from=build /work/build /work
RUN git add *
RUN git commit -m "publish latest site"
