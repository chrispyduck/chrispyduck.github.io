import { WorkHistoryItem } from "./types";
import { companies } from "./companies";

export const history: Array<WorkHistoryItem> = [
  {
    id: "2003-ehs-contractor",
    position: "IT Contractor",
    startDate: new Date(2003, 1),
    endDate: new Date(2007, 6),
    summary: "IT Contractor for Thomas Edison High School",
    highlights: [
      "Design and implement remote computer management and monitoring solution for Virginia SOL testing pilots",
      "Automate common administrative tasks using Windows Scripting Host",
      "Implement and maintain Group Policy to secure and maintain domain systems",
      "Design and implement a variety of internal ASP.NET web applications",
      "Manage and maintain first wireless network infrastructure in a Virginia public school",
    ],
    type: "contractor",
    company: companies.fcps,
    skills: [
      "Cisco Devices",
      "Wireless Networking",
      "Troubleshooting",
      ".NET Framework",
      "ASP.NET",
      "Active Directory",
      "Group Policies",
    ]
  },
  {
    id: "2006-fcps-teacher",
    position: "Teacher, Network Administration",
    startDate: new Date(2006, 8),
    endDate: new Date(2007, 6),
    summary: "Academy instructor for Microsoft certifications",
    highlights: [
      "Develop lab-based curriculum covering basic networking and Windows client and server administration skills",
      "Prepare students to enter the industry as Microsoft Certified Professionals",
      "Design and implement secure network architecture for student computer lab",
    ],
    type: "salaried",
    company: companies.fcps,
    skills: [
      "Network Security",
      "Classroom Device Management",
      "Group Policies",
    ]
  },
  {
    id: "2007-npr-engineer",
    position: "Systems Engineer",
    startDate: new Date(2007, 6),
    endDate: new Date(2009, 7),
    summary: "Tier 3 IT support and root cause analysis",
    highlights: [
      "Perform root cause analysis to identify and eliminate a wide variety of technical problems",
      "Create a workstation patch management policy and implement it using WSUS",
      "Design and implement an automated asset inventory validation tool using .NET that interfaced with LANDesk, Service-Now and Active Directory to reduce inventory errors from >50% to <5%",
      "Rapidly deploy and verify software to enterprise workstations using LANDesk Management Suite",
      "Identify and correct problems with configuration of LANDesk server and services ",
      "Maintain and update “IT Forms” internal ASP.NET application to automate management of domain user accounts",
      "Design IT asset lifecycle management policy and begin planning its implementation",
    ],
    type: "salaried",
    company: companies.npr,
    skills: [
      "Root Cause Analysis",
      "ITIL",
      "Patch Management",
      "Small Application Development",
      "ASP.NET",
      ".NET Framework"
    ]
  },
  {
    id: "2009-npr-developer",
    position: "Senior Software Developer",
    startDate: new Date(2009, 7),
    endDate: new Date(2015, 8),
    summary:
      "Lead developer on several business projects and primary DevOps and reliability engineer for NPR's own NewsFlex content management system",
    highlights: [
      "Act as part of a dynamic and fast-paced software development team to meet the needs of a demanding customer with no tolerance for failure or downtime",
      "Design redundant and scalable architecture for mission critical production systems",
      "Perform live and post-mortem root cause analysis of problems; identify and implement appropriate and immediate stopgap measures as well as long term solutions",
      "Coordinate software releases with IT Operations staff; provide technical documentation, guidance, and support as needed before, during and after upgrades",
      "Support a variety of development and DevOps tools, including: Assembla; Subversion; TeamCity; Atlassian’s Confluence, Jira, and Bamboo; and Slack",
      "Support and maintain a variety of lab environments for development, QA testing, and pre-production staging, using VMware’s ESXi, vCenter, PowerCLI, vCloud Director, and Lab Manager",
      "Drive the effort to better document production systems, their interdependencies, and their interactions with various business units",
      "Act as lead developer and assistant project manager for several business projects",
      "Maintain NPR Shop website and perform annual internal PCI-DSS audit",
      "Develop and maintain MSI packages using WiX",
      "Prepare NewsFlex, NPR’s newsroom management system, for sale to NPR member stations",
      "Develop and maintain personnel information management system that integrates with systems all over the organization to help streamline business processes",
    ],
    type: "salaried",
    company: companies.npr,
    skills: [
      "Magento",
      ".NET Framework",
      "node.js",
      "WPF",
      "Performance Counters",
      "Performance Tuning",
    ]
  },
  {
    id: "2015-sytech-developer",
    position: "Developer",
    startDate: new Date(2015, 9),
    endDate: new Date(2017, 1),
    summary:
      "Staff developer for ADACS wiretapping software focused on improving performance and reliability of internet traffic inspection",
    highlights: [
      "Maintain and improve upon packet data wiretapping capabilities in [ADACS](http://sytechcorp.com/products)",
      "Find and create methods for helping law enforcement find meaning in wiretapped internet traffic",
      "Update and maintain Android SmartBug application designed to turn phones into covert monitoring devices, along with Windows clients used for remote control and monitoring",
      "Performance tuning of large Microsoft SQL datasets (>100 million rows) using SQL Profiler and third party tools",
    ],
    type: "salaried",
    company: companies.sytech,
    skills: [
      ".NET Framework",
      "WPF",
      "WinForms",
      "Android",
      "Protocol dissection",
      "Wiretapping",
      "Encryption",
      "Profiling",
      "Performance Tuning",
      "Performance Counters",
    ]
  },
  {
    id: "2017-panth-developer",
    position: "Developer",
    startDate: new Date(2017, 1),
    endDate: new Date(2018, 1),
    summary: "Developer for various government healthcare projects",
    highlights: [
      "Maintain .NET codebases for [MONAHRQ](https://www.ahrq.gov/professionals/systems/monahrq/index.html) and [WinQI](https://www.qualityindicators.ahrq.gov/Software/Default.aspx), applying regular data updates as necessary",
      "Sanitize and organize MONAHRQ codebase in preparation for [open source release](https://github.com/AHRQ/MONAHRQ-Open-Source)",
      "Automate and maintain build processes for MONAHRQ, WinQI, and other related software using TeamCity, MSBuild, and InstallShield",
      "Troubleshoot performance problems during data processing steps of various AHRQ applications",
      "Wrote and debugged a variety of data processing programs in SAS and R",
    ],
    type: "salaried",
    company: companies.pantheon,
    skills: [
      ".NET Framework",
      "WPF",
      "T-SQL",
      "SAS",
      "R",
      "Angular",
      "WinForms",
      "HIPPA",
      "PII",
    ]
  },
  {
    id: "2018-panth-architect",
    position: "Software Architect",
    startDate: new Date(2018, 1),
    endDate: new Date(2019, 6, 31),
    summary: "Contract developer for SMEIR",
    highlights: [
      "Adapt an inherited suite of monolithic applications to use modern microservices architecture and cloud-native principles to improve maintainability, and facilitate future scalability, orchestration, and flexibility.",
      "Contributed to proposals and ROMs for potential government and commercial clients.",
      "Utilize AWS ECS, Docker Swarm, and Kubernetes at various stages during the development and maturation of the SMEIR product suite.",
      "Perform a wide variety of DevOps, development, networking, routing, and infrastructure setup, troubleshooting, and maintenance tasks as needed to support ongoing development, product demos, and training exercises. ",
      "Conceived of and developed a service broker and management tool capable of interfacing with and controlling all SMEIR components, enabling the orchestration of all content in a SMEIR environment from a single user interface with minimal user effort.",
    ],
    type: "salaried",
    company: companies["pantheon"],
    skills: [
      "dotnet core",
      "Docker Swarm",
      "React",
      "Meteor",
      "PHP",
      "MongoDB",
      "MariaDB"
    ]
  },
  {
    id: "2019-ids-architect",
    position: "Chief Software Architect",
    startDate: new Date(2019, 7, 1),
    endDate: new Date(2021, 9, 30),
    summary:
      "Chief architect and development lead for SMEIR, an information warfare training environment",
    highlights: [
      "Lead a small fast-paced software development team building [SMEIR](https://smeir.net) in an environment with frequently changing requirements and deadlines, and competing priorities",
      "Grow the product development team from 2 part time developers to its peak of 16 people, including a 2 person DevOps team, 3 person QA team, a SCRUM Master, development manager, and two smaller dev teams",
      "Mentor and advise team members at all levels through professional and technical challenges",
      'Start and host weekly "group therapy" sessions where team members can discuss what they\'re working on, ask questions, and work through problems as equals',
      "Re-architect command and control system to use dotnet core for primary microservices, gRPC for synchronous communication, AMQP for async communication, and a mixture of nodejs, python, and PHP for other services",
      "Host open design meetings to work through the details of upcoming architectural changes and gain input from designers, developers, team leads, and stakeholders as needed",
      "Complete a variety of development and devops tasks as needed, in multiple languages and frameworks, to support the team, clear roadblocks, and improve everyone’s quality of life",
    ],
    type: "salaried",
    company: companies.ids,
    skills: [
      "dotnet core",
      "Kubernetes",
      "Docker",
      "Microservices",
      "React",
      "Meteor",
      "PHP",
      "Python",
      "TypeScript",
      "node.js",
      "Golang",
      "MongoDB",
      "MariaDB",
      "Keycloak",
      "mTLS",
    ]
  },
  {
    id: "2021-rii-designer",
    position: "Software Designer",
    startDate: new Date(2021, 11, 1),
    endDate: null,
    summary:
      "Led an architecture and infrastructure modernization effort with an emphasis on implementing DevOps and reliability engineering practices",
    highlights: [
      "Lead inter-departmental effort to modernize outdated application and infrastructure architectures for the purpose of improving the utility and resiliency of, and decreasing costs associated with, deployments, routine maintenance, and ad-hoc changes",
      "Regularly collaborate with multiple teams across the organization, and with staff at all levels, to share plans and ideas, solicit feedback, and understand the organization",
      "Conduct or participate in routine production system maintenance to learn current processes and pitfalls",
    ],
    type: "salaried",
    company: companies.rii,
    skills: [
      "Java",
      "Spring Boot, Spring Cloud",
      "Kubernetes",
      "Docker",
      "Ansible",
      "Terraform",
      "mTLS"
    ]
  },
];
