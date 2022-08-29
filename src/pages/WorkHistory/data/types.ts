import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Company {
  fullName: string;
  displayName: string;
  url: string;
  location: string;
  logo: Icon;
}

export interface WorkHistoryItem {
  id: string;
  company: Company;
  position: string;
  startDate: Date;
  endDate: Date | null;
  summary: string;
  highlights: Array<string>;
  type: "salaried" | "contractor";
  skills: Array<string>;
}

export interface Icon {
  materialIcon?: string;
  imageFile?: string;
  fontAwesomeIcon?: IconDefinition;
}

// for future use
export interface Technology {
  name: string;
  logo?: Icon;
}