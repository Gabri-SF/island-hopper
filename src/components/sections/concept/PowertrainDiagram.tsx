export default function PowertrainDiagram() {
  const cx = 480;
  const wingY = 263;
  const portMotors = [393, 327, 261];
  const stbdMotors = [567, 633, 699];

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 overflow-hidden p-4">
      <svg
        viewBox="0 0 960 520"
        className="w-full"
        style={{ fontFamily: "var(--font-geist-mono), monospace" }}
        aria-label="Diagrama de powertrain — Island Hopper, vista superior"
      >
        {/* ── STRUCTURE ── */}

        {/* Fuselage */}
        <path
          d={`M ${cx} 38 C ${cx-25} 38 ${cx-39} 72 ${cx-39} 105 L ${cx-39} 400 C ${cx-39} 443 ${cx-21} 475 ${cx} 478 C ${cx+21} 475 ${cx+39} 443 ${cx+39} 400 L ${cx+39} 105 C ${cx+39} 72 ${cx+25} 38 ${cx} 38 Z`}
          fill="#1c1c20"
          stroke="#52525b"
          strokeWidth="1.5"
        />

        {/* Canard wings */}
        <polygon points={`${cx-39},116 365,110 365,126 ${cx-39},130`} fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
        <polygon points={`${cx+39},116 595,110 595,126 ${cx+39},130`} fill="#27272a" stroke="#3f3f46" strokeWidth="1" />

        {/* Main wings */}
        <polygon points={`${cx-39},254 228,258 228,272 ${cx-39},274`} fill="#27272a" stroke="#52525b" strokeWidth="1.5" />
        <polygon points={`${cx+39},254 732,258 732,272 ${cx+39},274`} fill="#27272a" stroke="#52525b" strokeWidth="1.5" />

        {/* Horizontal stabilizer */}
        <polygon points={`${cx-39},437 392,435 392,447 ${cx-39},449`} fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
        <polygon points={`${cx+39},437 568,435 568,447 ${cx+39},449`} fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
        {/* Vertical fin (edge-on) */}
        <line x1={cx} y1="415" x2={cx} y2="462" stroke="#3f3f46" strokeWidth="3" />

        {/* ── POWER HARNESS ── */}

        {/* Bus → wing root (vertical inside fuselage) */}
        <line x1={cx} y1="304" x2={cx} y2={wingY} stroke="#f97316" strokeWidth="2" opacity="0.7" />
        {/* Wing root horizontal bus */}
        <line x1={cx-39} y1={wingY} x2={cx+39} y2={wingY} stroke="#f97316" strokeWidth="2" opacity="0.7" />
        {/* Port wing harness */}
        <line x1={cx-39} y1={wingY} x2={261} y2={wingY} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="7,4" opacity="0.65" />
        {/* Starboard wing harness */}
        <line x1={cx+39} y1={wingY} x2={699} y2={wingY} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="7,4" opacity="0.65" />

        {/* Drops from harness to each ESC */}
        {[...portMotors, ...stbdMotors].map((x, i) => (
          <line key={`drop-${i}`} x1={x} y1={wingY} x2={x} y2={wingY + 18} stroke="#f59e0b" strokeWidth="1" opacity="0.7" />
        ))}

        {/* ── MOTOR PODS (6× ducted fans) ── */}
        {[...portMotors, ...stbdMotors].map((x, i) => (
          <g key={`motor-${i}`}>
            {/* Duct ring */}
            <circle cx={x} cy={wingY} r="21" fill="#0d1117" stroke="#10b981" strokeWidth="2" />
            {/* Rotor disk */}
            <circle cx={x} cy={wingY} r="13" fill="#052e16" stroke="#34d399" strokeWidth="1.5" opacity="0.9" />
            {/* Blade cross */}
            <line x1={x - 10} y1={wingY} x2={x + 10} y2={wingY} stroke="#6ee7b7" strokeWidth="1.5" opacity="0.6" />
            <line x1={x} y1={wingY - 10} x2={x} y2={wingY + 10} stroke="#6ee7b7" strokeWidth="1.5" opacity="0.6" />
            {/* Label above */}
            <text x={x} y={wingY - 27} textAnchor="middle" fontSize="8" fill="#6ee7b7" fontWeight="700">EMRAX</text>
            <text x={x} y={wingY - 16} textAnchor="middle" fontSize="7" fill="#34d399">M{i + 1}</text>
            {/* ESC box below */}
            <rect x={x - 17} y={wingY + 19} width="34" height="18" rx="3" fill="#431407" stroke="#f59e0b" strokeWidth="1" />
            <text x={x} y={wingY + 31} textAnchor="middle" fontSize="8" fill="#fdba74" fontWeight="700">ESC</text>
          </g>
        ))}

        {/* ── FUSELAGE COMPONENTS ── */}

        {/* 1 — Avionics / BMS / FCS */}
        <rect x="447" y="148" width="66" height="44" rx="4" fill="#14532d" stroke="#22c55e" strokeWidth="1.5" />
        <text x={cx} y="164" textAnchor="middle" fontSize="9" fill="#86efac" fontWeight="700">AVIÓNICA</text>
        <text x={cx} y="176" textAnchor="middle" fontSize="7.5" fill="#4ade80">BMS · FCS</text>
        <text x={cx} y="187" textAnchor="middle" fontSize="7" fill="#22c55e" opacity="0.8">Controlo de Voo</text>

        {/* 2a — Li-S Battery */}
        <rect x="447" y="200" width="31" height="36" rx="3" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="462" y="213" textAnchor="middle" fontSize="8" fill="#93c5fd" fontWeight="700">Bat.</text>
        <text x="462" y="224" textAnchor="middle" fontSize="7" fill="#7dd3fc">Li-S</text>
        <text x="462" y="232" textAnchor="middle" fontSize="6.5" fill="#60a5fa">58 kg</text>

        {/* 2b — H₂ Tank */}
        <rect x="482" y="200" width="31" height="36" rx="3" fill="#0c2340" stroke="#0ea5e9" strokeWidth="1.5" />
        <text x="497" y="213" textAnchor="middle" fontSize="8" fill="#7dd3fc" fontWeight="700">H₂</text>
        <text x="497" y="224" textAnchor="middle" fontSize="7" fill="#7dd3fc">Tank</text>
        <text x="497" y="232" textAnchor="middle" fontSize="6.5" fill="#38bdf8">39 kg</text>

        {/* Thermal management background */}
        <rect x="447" y="244" width="66" height="54" rx="4" fill="#0d3330" stroke="#14b8a6" strokeWidth="1" strokeDasharray="4,3" opacity="0.75" />
        <text x="449" y="253" fontSize="6.5" fill="#2dd4bf" opacity="0.7">Gestão Térmica</text>

        {/* 3 — PEMFC */}
        <rect x="452" y="254" width="56" height="40" rx="3" fill="#115e59" stroke="#0d9488" strokeWidth="1.5" />
        <text x={cx} y="269" textAnchor="middle" fontSize="9" fill="#5eead4" fontWeight="700">PEMFC H₂</text>
        <text x={cx} y="281" textAnchor="middle" fontSize="7.5" fill="#14b8a6">200 kW · 100 kg</text>
        <text x={cx} y="290" textAnchor="middle" fontSize="6.5" fill="#2dd4bf">η ≈ 50–60 %</text>

        {/* 4 — DC Bus 800V */}
        <rect x="447" y="305" width="66" height="22" rx="4" fill="#431407" stroke="#f97316" strokeWidth="1.5" />
        <text x={cx} y="320" textAnchor="middle" fontSize="8.5" fill="#fb923c" fontWeight="700">Barramento DC · 800 V</text>

        {/* 5a — HV Converters */}
        <rect x="447" y="334" width="31" height="28" rx="3" fill="#2c1303" stroke="#f97316" strokeWidth="1" />
        <text x="462" y="346" textAnchor="middle" fontSize="7.5" fill="#fdba74" fontWeight="600">Conv.</text>
        <text x="462" y="356" textAnchor="middle" fontSize="7" fill="#f97316">HV ×2</text>

        {/* 5b — DC/DC Converter */}
        <rect x="482" y="334" width="31" height="28" rx="3" fill="#2c1303" stroke="#f97316" strokeWidth="1" />
        <text x="497" y="346" textAnchor="middle" fontSize="7.5" fill="#fdba74" fontWeight="600">Conv.</text>
        <text x="497" y="356" textAnchor="middle" fontSize="7" fill="#f97316">DC/DC</text>

        {/* 6 — Flight Computer */}
        <rect x="452" y="370" width="56" height="30" rx="3" fill="#1e1033" stroke="#a855f7" strokeWidth="1.5" />
        <text x={cx} y="383" textAnchor="middle" fontSize="8.5" fill="#d8b4fe" fontWeight="700">Computador</text>
        <text x={cx} y="394" textAnchor="middle" fontSize="7" fill="#a78bfa">FMS · GNSS</text>

        {/* ── DIMENSION LINES ── */}
        <line x1="228" y1="286" x2="732" y2="286" stroke="#2a2a2e" strokeWidth="0.8" />
        <line x1="228" y1="283" x2="228" y2="289" stroke="#2a2a2e" strokeWidth="0.8" />
        <line x1="732" y1="283" x2="732" y2="289" stroke="#2a2a2e" strokeWidth="0.8" />
        <text x={cx} y="298" textAnchor="middle" fontSize="8.5" fill="#3f3f46">↔  Envergadura: 13 m</text>

        {/* Fuselage length indicator */}
        <line x1="528" y1="38" x2="528" y2="478" stroke="#2a2a2e" strokeWidth="0.6" />
        <line x1="525" y1="38" x2="531" y2="38" stroke="#2a2a2e" strokeWidth="0.6" />
        <line x1="525" y1="478" x2="531" y2="478" stroke="#2a2a2e" strokeWidth="0.6" />
        <text
          x="544" y="258"
          textAnchor="middle"
          fontSize="8"
          fill="#3f3f46"
          transform="rotate(90, 544, 258)"
        >
          Fuselagem: 9,89 m
        </text>

        {/* ── DIRECTION LABELS ── */}
        <text x={cx} y="22" textAnchor="middle" fontSize="8.5" fill="#3f3f46" letterSpacing="3" fontWeight="600">▲  PROA</text>
        <text x={cx} y="510" textAnchor="middle" fontSize="8.5" fill="#3f3f46" letterSpacing="3" fontWeight="600">▼  CAUDA</text>
        <text x="165" y={wingY + 2} textAnchor="middle" fontSize="8" fill="#3f3f46" fontWeight="600">◄  BORDO ESQUERDO</text>
        <text x="795" y={wingY + 2} textAnchor="middle" fontSize="8" fill="#3f3f46" fontWeight="600">BORDO DIREITO  ►</text>
        <text x="395" y="122" textAnchor="middle" fontSize="7.5" fill="#3f3f46">CANARD</text>
        <text x={cx} y="460" textAnchor="middle" fontSize="7.5" fill="#3f3f46">T-TAIL</text>

        {/* ── LEGEND ── */}
        <g transform="translate(28, 315)">
          <rect x="0" y="0" width="178" height="148" rx="6" fill="#0a0a0b" stroke="#27272a" strokeWidth="1" />
          <text x="89" y="16" textAnchor="middle" fontSize="7.5" fill="#52525b" fontWeight="700" letterSpacing="2">LEGENDA</text>
          {(
            [
              { color: "#22c55e", label: "Aviónica / BMS / FCS" },
              { color: "#3b82f6", label: "Bateria Li-S (58 kg)" },
              { color: "#0ea5e9", label: "Tanque H₂ (39 kg)" },
              { color: "#0d9488", label: "PEMFC 200 kW" },
              { color: "#f97316", label: "Bus DC 800V / Conversores" },
              { color: "#a855f7", label: "Computador de Bordo" },
              { color: "#10b981", label: "Motor EMRAX 348 MV (×6)" },
              { color: "#f59e0b", label: "Fiação Alta Tensão" },
            ] as { color: string; label: string }[]
          ).map((item, i) => (
            <g key={item.label} transform={`translate(10, ${25 + i * 15})`}>
              <rect x="0" y="0" width="9" height="9" rx="2" fill={item.color} />
              <text x="15" y="8.5" fontSize="8" fill="#71717a">
                {item.label}
              </text>
            </g>
          ))}
        </g>
      </svg>

      <p className="text-center text-[11px] text-zinc-600 mt-2 pb-1 font-mono">
        Vista superior esquemática — powertrain do Island Hopper "Mega-Duct" (não à escala) · Cap. 7 do Relatório
      </p>
    </div>
  );
}
