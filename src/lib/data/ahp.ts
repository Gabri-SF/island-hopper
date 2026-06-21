// ──────────────────────────────────────────────────────────────────────────────
// AHP Data — Analytic Hierarchy Process
// Source: Chapter 4.3 and Appendix A.1 of g11_report.pdf
// ──────────────────────────────────────────────────────────────────────────────

export interface Architecture {
  id: string;
  name: string;
  shortName: string;
  ahpScore: number;
  winner: boolean;
  description: string;
  pros: string[];
  cons: string[];
  examples: string[];
  color: string;
}

export interface AHPCriterion {
  id: string;
  label: string;
  weight: number; // 0–1
  weightPct: number; // percentage
}

export const ahpCriteria: AHPCriterion[] = [
  { id: "range", label: "Autonomia", weight: 0.2108, weightPct: 21.1 },
  { id: "cruiseSpeed", label: "Velocidade de Cruzeiro", weight: 0.1052, weightPct: 10.5 },
  { id: "stability", label: "Estabilidade", weight: 0.158, weightPct: 15.8 },
  { id: "cabinNoise", label: "Ruído Interior", weight: 0.158, weightPct: 15.8 },
  { id: "acoustic", label: "Emissões Acústicas", weight: 0.1054, weightPct: 10.5 },
  { id: "fixedCosts", label: "Custos Fixos", weight: 0.0919, weightPct: 9.2 },
  { id: "maintenance", label: "Manutenção", weight: 0.105, weightPct: 10.5 },
  { id: "pollutant", label: "Emissões Poluentes", weight: 0.0526, weightPct: 5.3 },
  { id: "varCosts", label: "Custos Variáveis", weight: 0.0131, weightPct: 1.3 },
];

export const architectures: Architecture[] = [
  {
    id: "tilt-duct",
    name: "Tilt-Duct",
    shortName: "TD",
    ahpScore: 0.279,
    winner: true,
    description:
      "Rotores embutidos em condutas aerodinâmicas inclináveis. Combina VTOL com cruzeiro eficiente, baixo ruído e perfil compacto — ideal para operações urbanas.",
    pros: [
      "Perfil acústico muito reduzido — condutas atenuam o ruído dos rotores",
      "Segurança: lâminas encapsuladas protegem pessoal em terra",
      "Pegada compacta — compatível com veriports urbanos",
      "Propulsão elétrica distribuída (DEP) com 6 motores independentes",
      "Boa eficiência aerodinâmica em cruzeiro",
    ],
    cons: [
      "Massa adicional das estruturas das condutas",
      "Gestão térmica mais complexa (motores encapsulados)",
      "Alta complexidade de certificação (6 unidades inclináveis)",
      "Desempenho em hover ligeiramente inferior por disc loading elevado",
    ],
    examples: ["Lilium Jet", "Bell Nexus 4EX"],
    color: "emerald",
  },
  {
    id: "tilt-rotor",
    name: "Tilt-Rotor",
    shortName: "TR",
    ahpScore: 0.265,
    winner: false,
    description:
      "Naceles pivotantes nas pontas da asa. Excelente desempenho em cruzeiro de longa distância, mas mecanicamente complexo e com elevado downwash em hover.",
    pros: [
      "Excelente alcance e velocidade de cruzeiro",
      "Operação a alta altitude (até 25.000 ft)",
      "Conceito comprovado (ex: AW609)",
    ],
    cons: [
      "Alta complexidade mecânica dos mecanismos de inclinação",
      "Downwash intenso em hover — requer veriports especializados",
      "Razão payload/peso reduzida",
      "Manutenção mais exigente",
    ],
    examples: ["Joby S4", "Leonardo AW609"],
    color: "blue",
  },
  {
    id: "fixed-wing",
    name: "Fixed-Wing + VTOL",
    shortName: "FW",
    ahpScore: 0.256,
    winner: false,
    description:
      'Arquitetura "Lift + Cruise" com dois sistemas de propulsão independentes. Simples e fiável, mas os rotores de sustentação tornam-se "peso morto" em cruzeiro.',
    pros: [
      "Simplicidade mecânica — sem mecanismos de inclinação",
      "Alta redundância através de DEP",
      "Boa viabilidade de certificação",
      "Transição baseada em software",
    ],
    cons: [
      "Arrasto parasita dos rotores de sustentação em cruzeiro",
      "Rotores verticais são peso não-utilizado durante o voo horizontal",
      "Alcance e capacidade de payload limitados",
      "Menos eficiente para rotas inter-ilhas de média distância",
    ],
    examples: ["Archer Midnight", "Beta Technologies ALIA-250", "Wisk Aero Gen6"],
    color: "zinc",
  },
  {
    id: "tilt-wing",
    name: "Tilt-Wing",
    shortName: "TW",
    ahpScore: 0.195,
    winner: false,
    description:
      "Toda a asa (com propulsores integrados) roda em torno do eixo transversal. Elimina o downwash em hover, mas é vulnerável a rajadas laterais na transição.",
    pros: [
      "Eficiência aerodinâmica na transição (slipstream sobre a asa)",
      "Eliminação do download em hover",
      "Perfil aerodinâmico compacto em terra",
    ],
    cons: [
      "Extremamente vulnerável a rajadas laterais na transição",
      "Actuadores de alta torque e peso elevado na junta asa-fuselagem",
      "Momento de pitch massivo durante a rotação da asa",
      "Controlo complexo em condições de vento cruzado",
    ],
    examples: ["Airbus Vahana", "Dufour Aero3"],
    color: "amber",
  },
];
