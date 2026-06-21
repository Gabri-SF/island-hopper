export interface TeamMember {
  id: string;
  name: string;
  number: string;
}

export interface Supervisor {
  name: string;
  title: string;
}

export const teamMembers: TeamMember[] = [
  { id: "gabriel-faria", name: "Gabriel Faria", number: "109306" },
  { id: "ruben-sousa", name: "Rúben Sousa", number: "109463" },
  { id: "rodrigo-santos", name: "Rodrigo Santos", number: "109647" },
  { id: "afonso-pimentel", name: "Afonso Pimentel", number: "109697" },
  { id: "goncalo-rodrigues", name: "Gonçalo Rodrigues", number: "109887" },
  { id: "santiago-brujas", name: "Santiago Brujas", number: "109953" },
  { id: "gabriel-ribeiro", name: "Gabriel Ribeiro", number: "110576" },
  { id: "rodrigo-boulhosa", name: "Rodrigo Boulhosa", number: "110716" },
  { id: "pedro-machado", name: "Pedro Machado", number: "110718" },
];

export const supervisors: Supervisor[] = [
  { name: "Prof. Afzal Suleman", title: "Orientador" },
  { name: "Prof. Alain de Souza", title: "Orientador" },
  { name: "Prof. Frederico Afonso", title: "Orientador" },
];
