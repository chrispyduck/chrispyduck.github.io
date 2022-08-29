import { Technology } from "./types";
import { faReact } from "@fortawesome/free-brands-svg-icons"
export const technologies: { [key: string]: Technology } = {
  // frontend 
  react: {
    name: "ReactJS",
    logo: {
      fontAwesomeIcon: faReact,
    }
  },
  meteor: {
    name: "MeteorJS",
  },

  // databases
  mongo: {
    name: "MongoDB",
    logo: {

    }
  },

  // orchestration
  kubernetes: {
    name: "Kubernetes",
  }
}