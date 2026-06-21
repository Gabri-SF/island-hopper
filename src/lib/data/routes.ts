export interface Route {
  id: string;
  name: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  distanceKm: number;
  vtolMinutes: number;
  ferryMinutes: number;
  ferryFastMinutes: number;
  coords: { x1: number; y1: number; x2: number; y2: number };
}

export interface TransportMode {
  mode: string;
  travelTime: string;
  costPerPax: string;
  emissionsPerPax: string;
  notes?: string;
}

export const routes: Route[] = [
  {
    id: "ibiza-mallorca",
    name: "Ibiza ↔ Palma de Mallorca",
    from: "Ibiza",
    fromCode: "IBZ",
    to: "Palma de Mallorca",
    toCode: "PMI",
    distanceKm: 140,
    vtolMinutes: 33,
    ferryMinutes: 150,
    ferryFastMinutes: 75,
    coords: { x1: 100, y1: 200, x2: 260, y2: 140 },
  },
  {
    id: "mallorca-menorca",
    name: "Palma de Mallorca ↔ Menorca",
    from: "Palma de Mallorca",
    fromCode: "PMI",
    to: "Menorca",
    toCode: "MAH",
    distanceKm: 132,
    vtolMinutes: 31,
    ferryMinutes: 105,
    ferryFastMinutes: 60,
    coords: { x1: 260, y1: 140, x2: 410, y2: 90 },
  },
];

export const transportModes: TransportMode[] = [
  {
    mode: "Avião Convencional",
    travelTime: "35–40 min (≈2–3 h c/ aeroporto)",
    costPerPax: "€45–140",
    emissionsPerPax: "≈18–20 kg CO₂",
  },
  {
    mode: "Ferry Rápido",
    travelTime: "1 h – 1 h 15 min",
    costPerPax: "€70–95",
    emissionsPerPax: "≈2–4 kg CO₂",
  },
  {
    mode: "Helicóptero",
    travelTime: "35–45 min (+10 min embarque)",
    costPerPax: "€1.800–5.000",
    emissionsPerPax: "≈27–85 kg CO₂ + ruído elevado",
    notes: "Custo proibitivo e impacto sonoro significativo",
  },
  {
    mode: "Island Hopper (VTOL)",
    travelTime: "33–35 min (+10 min embarque)",
    costPerPax: "≈€136",
    emissionsPerPax: "≈15 kg CO₂-eq (H₂ verde + rede local)",
    notes: "Zero emissões diretas em voo",
  },
];
