#!/bin/bash
set -eu

# build the website and put it in the ./build folder
docker buildx build --target artifacts --output build .

#docker buildx build --target publish --ssh default .