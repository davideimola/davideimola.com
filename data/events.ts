export interface Event {
  date: Date;
  name: string;
  city: string | null;
  country: EventCountry;
  title: string;
  url: string | null;
  language: EventLanguage;
  type: EventType;
}

export enum EventType {
  Course = "Course",
}

export enum EventLanguage {
  Italian = "Italian",
}

export enum EventCountry {
  Remote = "Remote",
}

export const events: Event[] = [
  //2021
  {
    date: new Date(2021, 12, 21),
    name: "Codemotion",
    city: "Milan",
    country: EventCountry.Remote,
    title: "Conosci le vere potenzialità di IaC (Infrastructure as Code)?",
    url: "https://talks.codemotion.com/paths/conosci-le-vere-potenzialit-di-iac-infra",
    language: EventLanguage.Italian,
    type: EventType.Course,
  },
  {
    date: new Date(2021, 12, 21),
    name: "Codemotion",
    city: "Milan",
    country: EventCountry.Remote,
    title:
      "Applicazioni DevOps: CI/CD e Log Aggregation con Github Actions e Loki",
    url: "https://www.codemotion.com/learning/tp/applicazioni-devops-ci-cd-e-log-aggregation-con-github-actions-e-loki-1166",
    language: EventLanguage.Italian,
    type: EventType.Course,
  },
  {
    date: new Date(2021, 12, 21),
    name: "Codemotion",
    city: "Milan",
    country: EventCountry.Remote,
    title:
      "Shift Left e Continuous Monitoring: come migliorare la Security della propria Web App",
    url: "https://www.codemotion.com/learning/tp/shift-left-e-continuous-monitoring-come-migliorare-la-security-della-propria-web-app-1271",
    language: EventLanguage.Italian,
    type: EventType.Course,
  },
];
