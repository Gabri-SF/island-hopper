// ──────────────────────────────────────────────────────────────────────────────
// Aircraft Technical Specifications — Structural Definition Map
// Source: Chapters 5, 6, 7, 8, 9 of g11_report.pdf
// ──────────────────────────────────────────────────────────────────────────────

export interface SpecGroup {
  id: string;
  icon: string;
  specs: { id: string }[];
}

export interface MassComponent {
  id: string; // The required mass number property was removed here since data is driven by dictionaries
}

export interface MissionPhase {
  id: number;
  altitude: string;
  velocity: string;
  duration: string;
  range: string;
}

export const specGroups: SpecGroup[] = [
  {
    id: "dimensions",
    icon: "📐",
    specs: [
      { id: "mtow" },
      { id: "length" },
      { id: "diameter" },
      { id: "wingspan" },
      { id: "aspectRatio" },
      { id: "wingArea" },
    ],
  },
  {
    id: "propulsion",
    icon: "⚡",
    specs: [
      { id: "rotors" },
      { id: "radius" },
      { id: "motorPower" },
      { id: "totalPower" },
      { id: "motorModel" },
      { id: "architectureType" },
    ],
  },
  {
    id: "performance",
    icon: "🚀",
    specs: [
      { id: "cruiseSpeed" },
      { id: "stallSpeed" },
      { id: "cruiseAltitude" },
      { id: "range" },
      { id: "flightDuration" },
      { id: "capacity" },
    ],
  },
  {
    id: "energy",
    icon: "🔋",
    specs: [
      { id: "totalEnergy" },
      { id: "vtolEnergy" },
      { id: "climbEnergy" },
      { id: "cruiseEnergy" },
      { id: "hybridMass" },
      { id: "dcBusVoltage" },
    ],
  },
  {
    id: "aerodynamics",
    icon: "🌊",
    specs: [
      { id: "wingAirfoil" },
      { id: "canardAirfoil" },
      { id: "taperRatio" },
      { id: "sweepAngle" },
      { id: "staticMargin" },
      { id: "cmAlpha" },
    ],
  },
];

export const massComponents: MassComponent[] = [
  { id: "passengers" },
  { id: "fuselage" },
  { id: "mainWing" },
  { id: "ducts" },
  { id: "motors" },
  { id: "fuelCell" },
  { id: "canard" },
  { id: "battery" },
  { id: "avionics" },
  { id: "tail" },
  { id: "cabling" },
];

export const missionPhases: MissionPhase[] = [
  { id: 1, altitude: "0 → 91 m", velocity: "4 m/s", duration: "22,75 s", range: "0 km" },
  { id: 2, altitude: "91 m", velocity: "0 m/s", duration: "15 s", range: "0 km" },
  { id: 3, altitude: "91 → 2.286 m", velocity: "60 m/s", duration: "419,75 s", range: "25,18 km" },
  { id: 4, altitude: "2.286 m", velocity: "85 m/s", duration: "1.176 s", range: "100 km" },
  { id: 5, altitude: "2.286 → 91 m", velocity: "70 m/s", duration: "359,78 s", range: "25,18 km" },
  { id: 6, altitude: "91 m", velocity: "0 m/s", duration: "15 s", range: "0 km" },
  { id: 7, altitude: "91 → 0 m", velocity: "4 m/s", duration: "22,75 s", range: "0 km" },
];