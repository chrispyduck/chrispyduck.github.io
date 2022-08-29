import { Typography } from "@mui/material";
import { usePageContainerContext } from "../PageContainer";

const SectionHeader = ({
  children,
  ...props
}: {
  children: JSX.Element | string;
}) => {
  return <Typography variant="h2">{children}</Typography>;
};

export default function ProfessionalSummary() {
  const pageContainer = usePageContainerContext();
  pageContainer.configurePage("Summary");

  return (
    <Typography component="article">
      <SectionHeader>Background</SectionHeader>
      <Typography>
        I am a self-taught software architect and designer, experienced in
        understanding customer needs and firsthand user feedback, translating
        them to processes, flows, and models, and relaying that information as
        actionable tasks for a development team.
      </Typography>
      <SectionHeader>Recent Work</SectionHeader>
      <Typography>
        Over the past four years, I have been focused on applying this process
        to create <a href="https://smeir.net">SMEIR</a>, an information warfare
        training environment for the US special forces, that leverages a wide
        variety of commercial, open-source, and purpose-built software and
        hardware to replicate social media, news, commerce, utilities, and other
        major industries, enabling operators to “train as they fight.” SMEIR
        began as a proof of concept with a few LAMP stack websites replicating
        the functionality and appearance of Twitter, Facebook, and YouTube,
        running on a single box. When users wanted to test offensive cyber
        operations against one website without disrupting another, I split the
        applications across several VMs and began migrating to Docker containers
        to simplify deployments; when exercise planners needed a means of easily
        manipulating the cyber range, I created a central command and control
        tool capable of managing the websites. Over time, more products were
        added: Wikipedia, SnapChat, Gmail, IRC, and Tor, to name a few. As new
        feedback and new requests came in, I reviewed what they meant for the
        product and whether they fit into the vision or whether the vision
        needed to be refined. At each stage I also evaluated whether the
        architecture and infrastructure supported the current vision, which led
        me to the realization that SMEIR had outgrown Docker Swarm and led me to
        migrate to Kubernetes to take advantage of it's more mature automation
        and scaling capabilities. Throughout my four years of leadership, SMEIR
        grew from that single server running a LAMP stack to a highly scalable
        and rapidly replicable Kubernetes cluster consisting of over 100
        distinct components, and I grew the team to more than 15 developers,
        testers, DevOps, and sysadmins.
      </Typography>
      <SectionHeader>Objective</SectionHeader>
      <Typography>
        I am currently looking for opportunities that stretch my current
        capabilities, introduce me to new and emerging technologies, and expose
        me to the ideas of other architects and designers. My ideal position
        would offer a mixture of architecture, design, proof of concept work,
        team leadership, and mentoring less experienced developers, for a small
        or mid-sized company, working with modern, cloud-native technologies.
      </Typography>
      <SectionHeader>Goal</SectionHeader>
      <Typography>
        My professional goal, at this time, is to become a better architect so
        that I may create better solutions that cost less, are ready in less
        time, and are more resilient to the ravages of time. Personally, I wish
        to focus on solving problems that impact people's everyday lives; over
        time, I aim to address problems of ever greater magnitude and
        importance, to improve my community, my country, and the world.
      </Typography>
    </Typography>
  );
}
