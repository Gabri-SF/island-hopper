export interface TeamMember {
  id: string;
  name: string;
}

export interface Supervisor {
  name: string;
  title: string;
}

export const teamMembers: TeamMember[] = [
  { id: "gabriel-faria", name: "Gabriel Faria" },
  { id: "ruben-sousa", name: "Rúben Sousa" },
  { id: "rodrigo-santos", name: "Rodrigo Santos" },
  { id: "afonso-pimentel", name: "Afonso Pimentel" },
  { id: "goncalo-rodrigues", name: "Gonçalo Rodrigues" },
  { id: "santiago-brujas", name: "Santiago Brujas" },
  { id: "gabriel-ribeiro", name: "Gabriel Ribeiro" },
  { id: "rodrigo-boulhosa", name: "Rodrigo Boulhosa" },
  { id: "pedro-machado", name: "Pedro Machado" },
];

export const supervisors: Supervisor[] = [
  { name: "Prof. Afzal Suleman", title: "Orientador" },
  { name: "Prof. Alain de Souza", title: "Orientador" },
  { name: "Prof. Frederico Afonso", title: "Orientador" },
];
