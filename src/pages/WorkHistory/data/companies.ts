import { Company } from "./types";

export const companies: { [key: string]: Company } = {
  fcps: {
    fullName: "Fairfax County Public Schools",
    displayName: "FCPS",
    url: "https://fcps.edu",
    location: "Alexandria, VA",
    logo: { imageFile: "fcps.png" },
  },
  npr: {
    fullName: "National Public Radio",
    displayName: "NPR",
    url: "https://npr.org",
    location: "Washington, DC",
    logo: { imageFile: "npr.png" },
  },
  sytech: {
    fullName: "SyTech Corporation",
    displayName: "SyTech",
    url: "https://sytechcorp.com",
    location: "Alexandria, VA",
    logo: { imageFile: "sytech.png" },
  },
  pantheon: {
    fullName: "Pantheon Software",
    displayName: "Pantheon",
    url: "https://pantheonsoftware.com",
    location: "Arlington, VA",
    logo: { imageFile: "panth.png" },
  },
  ids: {
    fullName: "IDS International",
    displayName: "IDS International",
    url: "https://idsinternational.com",
    location: "Arlington, VA; Remote",
    logo: { imageFile: "ids.png" },
  },
  rii: {
    fullName: "Research Innovations, Inc.",
    displayName: "Research Innovations",
    url: "https://researchinnovations.com",
    location: "Springfield, VA; Remote",
    logo: { imageFile: "rii.webp" },
  },
};
