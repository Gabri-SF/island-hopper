// ──────────────────────────────────────────────────────────────────────────────
// AHP Data — Analytic Hierarchy Process (Structural Configurations)
// Source: Chapter 4.3 and Appendix A.1 of g11_report.pdf
// ──────────────────────────────────────────────────────────────────────────────

export interface Architecture {
  id: string;
  shortName: string;
  ahpScore: number;
  winner: boolean;
  examples: string[];
  color: string;
}

export interface AHPCriterion {
  id: string;
  weight: number; // 0–1
  weightPct: number; // percentage
}

export const ahpCriteria: AHPCriterion[] = [
  { id: "range", weight: 0.2108, weightPct: 21.1 },
  { id: "cruiseSpeed", weight: 0.1052, weightPct: 10.5 },
  { id: "stability", weight: 0.158, weightPct: 15.8 },
  { id: "cabinNoise", weight: 0.158, weightPct: 15.8 },
  { id: "acoustic", weight: 0.1054, weightPct: 10.5 },
  { id: "fixedCosts", weight: 0.0919, weightPct: 9.2 },
  { id: "maintenance", weight: 0.105, weightPct: 10.5 },
  { id: "pollutant", weight: 0.0526, weightPct: 5.3 },
  { id: "varCosts", weight: 0.0131, weightPct: 1.3 },
];

export const architectures: Architecture[] = [
  {
    id: "tilt-duct",
    shortName: "TD",
    ahpScore: 0.279,
    winner: true,
    examples: ["Lilium Jet", "Bell Nexus 4EX"],
    color: "emerald",
  },
  {
    id: "tilt-rotor",
    shortName: "TR",
    ahpScore: 0.265,
    winner: false,
    examples: ["Joby S4", "Leonardo AW609"],
    color: "blue",
  },
  {
    id: "fixed-wing",
    shortName: "FW",
    ahpScore: 0.256,
    winner: false,
    examples: ["Archer Midnight", "Beta Technologies ALIA-250", "Wisk Aero Gen6"],
    color: "zinc",
  },
  {
    id: "tilt-wing",
    shortName: "TW",
    ahpScore: 0.195,
    winner: false,
    examples: ["Airbus Vahana", "Dufour Aero3"],
    color: "amber",
  },
];