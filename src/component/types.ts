export interface ProjectProps {
  header: string;
  src: string;
  path: string;
  index?: number;
}

export interface ClientsProps {
  name: string;
  src: string;
  path: string;
}

export interface MainContentPropss {
  offer: any;
  overUs: any;
  about: any;
  offerTest: any;
  Project: any;
  customersAndClients: any;
  location: any;
}

interface SubContentProps {
  title: string;
  content: string;
}

interface SectionProps {
  title: string;
  content: SubContentProps[];
  id?: string; // id is optional because it doesn't exist in all sections
}

export interface MainContentProps {
  offer: SectionProps[];
  overUs: SectionProps[];
  about: SectionProps;
  offerTest: SectionProps;
  project: SectionProps;
  customersAndClients: SectionProps;
  location: SectionProps;
}
