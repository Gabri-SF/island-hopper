// ──────────────────────────────────────────────────────────────────────────────
// Aircraft Technical Specifications — "Mega-Duct" (Island Hopper)
// Source: Chapters 5, 6, 7, 8, 9 of g11_report.pdf
// ──────────────────────────────────────────────────────────────────────────────

export interface SpecGroup {
  category: string;
  icon: string;
  specs: { label: string; value: string; unit?: string }[];
}

export interface MassComponent {
  component: string;
  mass: number; // kg
  details: string;
}

export interface MissionPhase {
  id: number;
  label: string;
  type: string;
  altitude: string;
  velocity: string;
  duration: string;
  range: string;
}

// Main spec groups
export const specGroups: SpecGroup[] = [
  {
    category: "Dimensões Gerais",
    icon: "📐",
    specs: [
      { label: "MTOW (Peso Máx. de Descolagem)", value: "2.595", unit: "kg" },
      { label: "Comprimento da Fuselagem", value: "9,89", unit: "m" },
      { label: "Diâmetro Máximo da Fuselagem", value: "2,20", unit: "m" },
      { label: "Envergadura da Asa Principal", value: "13", unit: "m" },
      { label: "Razão de Aspeto (AR)", value: "9", unit: "" },
      { label: "Área de Referência da Asa", value: "18,78", unit: "m²" },
    ],
  },
  {
    category: "Propulsão",
    icon: "⚡",
    specs: [
      { label: "Número de Rotores/Motores", value: "6", unit: "" },
      { label: "Raio de cada Rotor", value: "1,00", unit: "m" },
      { label: "Potência Máxima por Motor", value: "260", unit: "kW" },
      { label: "Potência Total Instalada", value: "1.560", unit: "kW" },
      { label: "Motor Selecionado", value: "EMRAX 348 MV", unit: "" },
      { label: "Arquitetura", value: "Tilt-Duct Híbrida", unit: "" },
    ],
  },
  {
    category: "Desempenho",
    icon: "🚀",
    specs: [
      { label: "Velocidade de Cruzeiro", value: "85", unit: "m/s (306 km/h)" },
      { label: "Velocidade de Stall", value: "40", unit: "m/s" },
      { label: "Altitude de Cruzeiro", value: "2.286", unit: "m (7.500 ft)" },
      { label: "Autonomia (Rota Principal)", value: "140", unit: "km" },
      { label: "Duração do Voo", value: "≈34", unit: "minutos" },
      { label: "Capacidade", value: "1 piloto + 6 passageiros", unit: "" },
    ],
  },
  {
    category: "Energia",
    icon: "🔋",
    specs: [
      { label: "Energia Total da Missão", value: "71,66", unit: "kWh" },
      { label: "Energia VTOL + Hover", value: "20,20", unit: "kWh" },
      { label: "Energia de Subida", value: "21,60", unit: "kWh" },
      { label: "Energia de Cruzeiro", value: "32,30", unit: "kWh" },
      { label: "Massa do Sistema de Energia Híbrido", value: "197,73", unit: "kg" },
      { label: "Tensão do Barramento DC", value: "800", unit: "V" },
    ],
  },
  {
    category: "Aerodinâmica",
    icon: "🌊",
    specs: [
      { label: "Perfil Aerodinâmico da Asa", value: "NACA 4412", unit: "" },
      { label: "Perfil do Canard e Cauda", value: "NACA 0015", unit: "" },
      { label: "Razão de Afilamento (λ)", value: "0,40", unit: "" },
      { label: "Ângulo de Enflechamento (LE)", value: "2,73°", unit: "" },
      { label: "Margem Estática (SM)", value: "11,2%", unit: "" },
      { label: "Derivada CMα", value: "-0,75", unit: "/°" },
    ],
  },
];

// Mass breakdown
export const massComponents: MassComponent[] = [
  { component: "Passageiros & Piloto", mass: 700.0, details: "7 × 100 kg (incl. bagagem)" },
  { component: "Fuselagem", mass: 612.75, details: "300,45 kg (fibra) + 312,3 kg (metal estrutural)" },
  { component: "Asa Principal", mass: 273.0, details: "13 kg/m² × 21 m²" },
  { component: "Ductos (6 unidades)", mass: 300.0, details: "20 kg hélice + 15 kg ducto + 15 kg inclinação" },
  { component: "Motores Elétricos (6)", mass: 249.0, details: "6 × 41,5 kg (EMRAX 348)" },
  { component: "Célula de Combustível", mass: 139.36, details: "PEMFC 200 kW + armazenamento H₂" },
  { component: "Canard", mass: 85.0, details: "Superfície dianteira" },
  { component: "Bateria Li-S", mass: 58.37, details: "26,26 kWh a 0,45 kWh/kg" },
  { component: "Sistemas & Aviónicos", mass: 70.0, details: "Controlo e navegação" },
  { component: "Cauda (T-tail)", mass: 70.0, details: "Estabilizador e leme" },
  { component: "Cablagem HV", mass: 37.7, details: "Rede de 800 V DC — 60 m de cabo" },
];

// Mission profile phases
export const missionPhases: MissionPhase[] = [
  {
    id: 1,
    label: "Descolagem Vertical",
    type: "Subida Vertical",
    altitude: "0 → 91 m",
    velocity: "4 m/s",
    duration: "22,75 s",
    range: "0 km",
  },
  {
    id: 2,
    label: "Hover (Descolagem)",
    type: "Hover",
    altitude: "91 m",
    velocity: "0 m/s",
    duration: "15 s",
    range: "0 km",
  },
  {
    id: 3,
    label: "Subida",
    type: "Subida (5°)",
    altitude: "91 → 2.286 m",
    velocity: "60 m/s",
    duration: "419,75 s",
    range: "25,18 km",
  },
  {
    id: 4,
    label: "Cruzeiro",
    type: "Cruzeiro",
    altitude: "2.286 m",
    velocity: "85 m/s",
    duration: "1.176 s",
    range: "100 km",
  },
  {
    id: 5,
    label: "Descida",
    type: "Descida (−5°)",
    altitude: "2.286 → 91 m",
    velocity: "70 m/s",
    duration: "359,78 s",
    range: "25,18 km",
  },
  {
    id: 6,
    label: "Hover (Aterragem)",
    type: "Hover",
    altitude: "91 m",
    velocity: "0 m/s",
    duration: "15 s",
    range: "0 km",
  },
  {
    id: 7,
    label: "Aterragem Vertical",
    type: "Descida Vertical",
    altitude: "91 → 0 m",
    velocity: "4 m/s",
    duration: "22,75 s",
    range: "0 km",
  },
];
