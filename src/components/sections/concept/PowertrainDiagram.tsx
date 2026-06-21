export default function PowertrainDiagram() {
  const cx = 480;

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 overflow-hidden p-4">
      <svg
        viewBox="0 0 960 660"
        className="w-full"
        style={{ fontFamily: "var(--font-geist-mono), monospace" }}
        aria-label="Diagrama de powertrain — Island Hopper, vista superior"
      >
        {/* ── DIRECTION LABELS ── */}
        <text x={cx} y="28" textAnchor="middle" fontSize="8.5" fill="#3f3f46" letterSpacing="3" fontWeight="600">▲  PROA</text>
        <text x={cx} y="642" textAnchor="middle" fontSize="8.5" fill="#3f3f46" letterSpacing="3" fontWeight="600">▼  CAUDA</text>

        {/* ── STRUCTURE ── */}

        {/* Fuselage */}
<path
  d={`M ${cx} 50 C ${cx-35} 50 ${cx-50} 80 ${cx-50} 110 L ${cx-50} 520 C ${cx-50} 558 ${cx-30} 586 ${cx} 589 C ${cx+30} 586 ${cx+50} 558 ${cx+50} 520 L ${cx+50} 110 C ${cx+50} 80 ${cx+35} 50 ${cx} 50 Z`}
  fill="#1c1c20"
  stroke="#52525b"
  strokeWidth="1.5"
/>

        {/* Canard wings (swept leading edge, straight trailing edge) */}
        <polygon points={`${cx-34},150 300,180 300,196 ${cx-34},182`} fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
        <polygon points={`${cx+34},150 660,180 660,196 ${cx+34},182`} fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
        <text x="370" y="150" fontSize="7.5" fill="#3f3f46">CANARD</text>

        {/* Main wings (swept leading edge, straight trailing edge) - Corda aumentada */}
        {/* Main wings (root cord aumentada) */}
        <polygon points={`${cx-34},318 190,408 190,428 ${cx-34},408`} fill="#27272a" stroke="#52525b" strokeWidth="1.5" />
        <polygon points={`${cx+34},318 770,408 770,428 ${cx+34},408`} fill="#27272a" stroke="#52525b" strokeWidth="1.5" />
        <text x="610" y="330" textAnchor="middle" fontSize="7.5" fill="#3f3f46">ASA PRINCIPAL</text>

        {/* Horizontal stabilizer (Envergadura aumentada) */}
        {/* Lado esquerdo - Ponta movida de 390 para 350 */}
        <polygon points={`${cx-34},510 350,530 350,555 ${cx-34},550`} fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
        {/* Lado direito - Ponta movida de 570 para 610 */}
        <polygon points={`${cx+34},510 610,530 610,555 ${cx+34},550`} fill="#27272a" stroke="#3f3f46" strokeWidth="1" />

        {/* Vertical fin (mantendo a conexão central) */}
        <line x1={cx} y1="505" x2={cx} y2="550" stroke="#3f3f46" strokeWidth="3" />
        <text x={cx} y="582" textAnchor="middle" fontSize="7.5" fill="#3f3f46">T-TAIL</text>

        {/* ── POWER HARNESS ── */}

        {/* Bus → wing root (vertical inside fuselage, to main wing) */}
        <line x1={cx} y1="410" x2={cx} y2="363" stroke="#f97316" strokeWidth="2" opacity="0.7" />
        {/* Main wing root horizontal bus */}
        <line x1="280" y1="388" x2="680" y2="388" stroke="#f97316" strokeWidth="2" opacity="0.7" />

        {/* Canard harness (from fuselage top to canard motors) */}
        <line x1={cx} y1="178" x2={cx} y2="390  " stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="7,4" opacity="0.65" />
        <line x1={cx} y1="163" x2="318" y2="188" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="7,4" opacity="0.65" />
        <line x1={cx} y1="163" x2="642" y2="188" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="7,4" opacity="0.65" />

        {/* Main wing harness (root bus out to tip motors) */}
        <line x1="280" y1="388" x2="232" y2="388" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="7,4" opacity="0.65" />
        <line x1="680" y1="388" x2="728" y2="388" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="7,4" opacity="0.65" />

        {/* Fuselage-mounted motor harness (forward of T-tail) */}
        <line x1={cx} y1="470" x2={cx} y2="412" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="7,4" opacity="0.65" />
        <line x1={cx} y1="470" x2="420" y2="470" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="7,4" opacity="0.65" />
        <line x1={cx} y1="470" x2="540" y2="470" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="7,4" opacity="0.65" />

        {/* Drops from harness to each ESC */}
        {[318, 642, 232, 728].map((x, i) => {
          const y = i < 2 ? 188 : 388;
          return <line key={`drop-${i}`} x1={x} y1={y} x2={x} y2={y + 18} stroke="#f59e0b" strokeWidth="1" opacity="0.7" />;
        })}
        {[420, 540].map((x, i) => (
          <line key={`drop-fus-${i}`} x1={x} y1="473" x2={x} y2="491" stroke="#f59e0b" strokeWidth="1" opacity="0.7" />
        ))}

        {/* ── MOTOR PODS (6× ducted fans) ── */}
        {/* Canard tip motors */}
        {[
          { x: 318, label: "M1" },
          { x: 642, label: "M2" },
        ].map((m) => (
          <g key={m.label}>
            <circle cx={m.x} cy="188" r="24" fill="#0d1117" stroke="#10b981" strokeWidth="2" />
            <circle cx={m.x} cy="188" r="14" fill="#052e16" stroke="#34d399" strokeWidth="1.5" opacity="0.9" />
            <line x1={m.x - 10} y1="188" x2={m.x + 10} y2="188" stroke="#6ee7b7" strokeWidth="1.5" opacity="0.6" />
            <line x1={m.x} y1="178" x2={m.x} y2="198" stroke="#6ee7b7" strokeWidth="1.5" opacity="0.6" />
            <text x={m.x} y="148" textAnchor="middle" fontSize="8" fill="#6ee7b7" fontWeight="700">EMRAX</text>
            <text x={m.x} y="159" textAnchor="middle" fontSize="7" fill="#34d399">{m.label}</text>
            <rect x={m.x - 17} y="215" width="34" height="20" rx="3" fill="#431407" stroke="#f59e0b" strokeWidth="1" />
            <text x={m.x} y="228" textAnchor="middle" fontSize="8" fill="#fdba74" fontWeight="700">ESC</text>
          </g>
        ))}

        {/* Main wing tip motors */}
        {[
          { x: 205, label: "M3" },
          { x: 760, label: "M4" },
        ].map((m) => (
          <g key={m.label}>
            <circle cx={m.x} cy="388" r="24" fill="#0d1117" stroke="#10b981" strokeWidth="2" />
            <circle cx={m.x} cy="388" r="14" fill="#052e16" stroke="#34d399" strokeWidth="1.5" opacity="0.9" />
            <line x1={m.x - 10} y1="388" x2={m.x + 10} y2="388" stroke="#6ee7b7" strokeWidth="1.5" opacity="0.6" />
            <line x1={m.x} y1="378" x2={m.x} y2="398" stroke="#6ee7b7" strokeWidth="1.5" opacity="0.6" />
            <text x={m.x} y="350" textAnchor="middle" fontSize="8" fill="#6ee7b7" fontWeight="700">EMRAX</text>
            <text x={m.x} y="360" textAnchor="middle" fontSize="7" fill="#34d399">{m.label}</text>
            <rect x={m.x - 17} y="415" width="34" height="20" rx="3" fill="#431407" stroke="#f59e0b" strokeWidth="1" />
            <text x={m.x} y="428" textAnchor="middle" fontSize="8" fill="#fdba74" fontWeight="700">ESC</text>
          </g>
        ))}

        {/* Fuselage-mounted motors (levemente mais juntos) */}
        {[
          { x: 400, label: "M5" },
          { x: 560, label: "M6" },
        ].map((m) => (
          <g key={m.label}>
            <circle cx={m.x} cy="473" r="22" fill="#0d1117" stroke="#10b981" strokeWidth="2" />
            <circle cx={m.x} cy="473" r="13" fill="#052e16" stroke="#34d399" strokeWidth="1.5" opacity="0.9" />
            <line x1={m.x - 9} y1="473" x2={m.x + 9} y2="473" stroke="#6ee7b7" strokeWidth="1.5" opacity="0.6" />
            <line x1={m.x} y1="464" x2={m.x} y2="482" stroke="#6ee7b7" strokeWidth="1.5" opacity="0.6" />
            <text x={m.x} y="436" textAnchor="middle" fontSize="8" fill="#6ee7b7" fontWeight="700">EMRAX</text>
            <text x={m.x} y="446" textAnchor="middle" fontSize="7" fill="#34d399">{m.label}</text>
            <rect x={m.x - 17} y="498" width="34" height="20" rx="3" fill="#431407" stroke="#f59e0b" strokeWidth="1" />
            <text x={m.x} y="511" textAnchor="middle" fontSize="8" fill="#fdba74" fontWeight="700">ESC</text>
          </g>
        ))}

        {/* ── FUSELAGE COMPONENTS ── */}

        {/* 1 — Avionics / BMS / FCS */}
        <rect x="420" y="60" width="120" height="60" rx="4" fill="#14532d" stroke="#22c55e" strokeWidth="1.5" />
        <text x={cx} y="80" textAnchor="middle" fontSize="9.5" fill="#86efac" fontWeight="700">AVIÓNICA</text>
        <text x={cx} y="93" textAnchor="middle" fontSize="8" fill="#4ade80">BMS · FCS</text>
        <text x={cx} y="105" textAnchor="middle" fontSize="7" fill="#22c55e" opacity="0.8">Controlo de Voo</text>

        {/* 2a — Li-S Battery */}
        <rect x="422" y="208" width="54" height="56" rx="3" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="449" y="226" textAnchor="middle" fontSize="9" fill="#93c5fd" fontWeight="700">Bat.</text>
        <text x="449" y="238" textAnchor="middle" fontSize="8" fill="#7dd3fc">Li-S</text>
        <text x="449" y="251" textAnchor="middle" fontSize="7.5" fill="#60a5fa">58 kg</text>

        {/* 2b — H₂ Tank */}
        <rect x="484" y="208" width="54" height="56" rx="3" fill="#0c2340" stroke="#0ea5e9" strokeWidth="1.5" />
        <text x="511" y="226" textAnchor="middle" fontSize="9" fill="#7dd3fc" fontWeight="700">H₂</text>
        <text x="511" y="238" textAnchor="middle" fontSize="8" fill="#7dd3fc">Tank</text>
        <text x="511" y="251" textAnchor="middle" fontSize="7.5" fill="#38bdf8">39 kg</text>

        {/* Thermal management background */}
        <rect x="420" y="272" width="120" height="86" rx="4" fill="#0d3330" stroke="#14b8a6" strokeWidth="1" strokeDasharray="4,3" opacity="0.75" />
        <text x="430" y="284" fontSize="7" fill="#2dd4bf" opacity="0.7">Gestão Térmica</text>

        {/* 3 — PEMFC */}
        <rect x="430" y="294" width="100" height="54" rx="3" fill="#115e59" stroke="#0d9488" strokeWidth="1.5" />
        <text x={cx} y="315" textAnchor="middle" fontSize="9.5" fill="#5eead4" fontWeight="700">PEMFC H₂</text>
        <text x={cx} y="328" textAnchor="middle" fontSize="8" fill="#14b8a6">200 kW · 100 kg</text>
        <text x={cx} y="339" textAnchor="middle" fontSize="7" fill="#2dd4bf">η ≈ 50–60 %</text>

        {/* 4 — DC Bus 800V */}
        <rect x="412" y="366" width="136" height="34" rx="4" fill="#431407" stroke="#f97316" strokeWidth="1.5" />
        <text x={cx} y="387" textAnchor="middle" fontSize="9" fill="#fb923c" fontWeight="700">Barramento DC · 800 V</text>

        {/* 5a — HV Converters */}
        <rect x="422" y="408" width="54" height="42" rx="3" fill="#2c1303" stroke="#f97316" strokeWidth="1" />
        <text x="449" y="426" textAnchor="middle" fontSize="8" fill="#fdba74" fontWeight="600">Conv.</text>
        <text x="449" y="438" textAnchor="middle" fontSize="7.5" fill="#f97316">HV ×2</text>

        {/* 5b — DC/DC Converter */}
        <rect x="484" y="408" width="54" height="42" rx="3" fill="#2c1303" stroke="#f97316" strokeWidth="1" />
        <text x="511" y="426" textAnchor="middle" fontSize="8" fill="#fdba74" fontWeight="600">Conv.</text>
        <text x="511" y="438" textAnchor="middle" fontSize="7.5" fill="#f97316">DC/DC</text>

        {/* 6 — Flight Computer */}
        <rect x="424" y="130" width="112" height="48" rx="3" fill="#1e1033" stroke="#a855f7" strokeWidth="1.5" />
        <text x={cx} y="150" textAnchor="middle" fontSize="9" fill="#d8b4fe" fontWeight="700">Computador</text>
        <text x={cx} y="163" textAnchor="middle" fontSize="7.5" fill="#a78bfa">FMS · GNSS</text>

        {/* ── DIMENSION LINES ── */}
        {/* Linha de medição de envergadura (posicionada ainda mais abaixo) */}
        <line x1="190" y1="600" x2="770" y2="605" stroke="#2a2a2e" strokeWidth="0.8" />
        <line x1="190" y1="600" x2="190" y2="605" stroke="#2a2a2e" strokeWidth="0.8" />
        <line x1="770" y1="600" x2="770" y2="605" stroke="#2a2a2e" strokeWidth="0.8" />
        <text x="650" y="595" textAnchor="middle" fontSize="8.5" fill="#3f3f46">↔  Envergadura: 13 m</text>

{/* Fuselage length indicator (deslocado +40 unidades) */}
<line x1="790" y1="50" x2="790" y2="589" stroke="#2a2a2e" strokeWidth="0.6" />
<line x1="787" y1="50" x2="793" y2="50" stroke="#2a2a2e" strokeWidth="0.6" />
<line x1="787" y1="589" x2="793" y2="589" stroke="#2a2a2e" strokeWidth="0.6" />
<text
  x="742" y="320"
  textAnchor="middle"
  fontSize="8"
  fill="#3f3f46"
  transform="rotate(90, 806, 320)"
>
  Fuselagem: 9,89 m
</text>

        {/* ── BORDO LABELS ── */}
        <text x="120" y="392" textAnchor="middle" fontSize="8" fill="#3f3f46" fontWeight="600">◄  BORDO ESQUERDO</text>
        <text x="840" y="392" textAnchor="middle" fontSize="8" fill="#3f3f46" fontWeight="600">BORDO DIREITO  ►</text>

        {/* ── LEGEND ── */}
        <g transform="translate(28, 30)">
          <rect x="0" y="0" width="178" height="166" rx="6" fill="#0a0a0b" stroke="#27272a" strokeWidth="1" />
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
          <text x="10" y="160" fontSize="7" fill="#52525b">Canard · Asa · T-tail</text>
        </g>
      </svg>

      <p className="text-center text-[11px] text-zinc-600 mt-2 pb-1 font-mono">
        Vista superior esquemática — powertrain do Island Hopper "Mega-Duct" (não à escala) · Cap. 7 do Relatório
      </p>
    </div>
  );
}