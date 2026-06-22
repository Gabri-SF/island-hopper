export const dictionaries = {
  pt: {
    nav: [
      { href: "/", label: "Início" },
      { href: "/project", label: "Projeto" },
      { href: "/concept", label: "Conceito" },
      { href: "/service", label: "Serviço" },
      { href: "/sustainability", label: "Sustentabilidade" },
      { href: "/contacts", label: "Contactos" },
    ],

    home: {
      hero: {
        badge: "Em Fase de Desenvolvimento",
        titleP1: "A Revolução da Mobilidade nas",
        titleP2: "Ilhas Baleares",
        desc1:
          "Estamos a desenvolver o futuro da aviação regional sustentável. O",
        desc2: "é uma solução de mobilidade elétrica inovadora com arquitetura",
        desc3:
          "desenhada para descolar verticalmente e efetuar ligações inter-ilhas ultrarrápidas com zero emissões diretas de carbono.",
        btnExplore: "Explorar Rotas",
        btnConcept: "Conceito Técnico",
        specs: {
          propulsion: { label: "Propulsão", value: "Elétrica (DEP)" },
          architecture: { label: "Arquitetura", value: "Tilt-Duct VTOL" },
          fuel: { label: "Combustível", value: "Híbrido Bateria + H₂" },
        },
        image: {
          badge: "Render 3D Conceptual",
          caption:
            "Arquitetura de asa com 6 rotores elétricos inclináveis (Tilt-Duct).",
        },
      },
      map: {
        title: "Mapa de Operação Inter-Ilhas",
        subtitle:
          "Selecione uma rota para simular a drástica redução nos tempos de viagem em comparação com os ferries marítimos tradicionais.",
        ui: {
          selectedRoute: "Rota Selecionada",
          durationVTOL: "Duração (VTOL)",
          directFlight: "Voo Direto",
          durationFerry: "Ferries Convencionais",
          estimatedAvg: "Média estimada",
          savingsPrefix: "O",
          savingsMid: "poupa aproximadamente",
          savingsSuffix: "de viagem nesta ligação inter-ilhas.",
        },
        radar: {
          online: "ATC RADAR: ONLINE",
          version: "GRID BALEARIC v1.0.2",
          simulation: "SIMULATION INTERVAL: 1S",
          status: "SYSTEM STABLE",
        },
        routes: [
          {
            id: "ibiza-mallorca",
            name: "Ibiza ↔ Palma de Mallorca",
            distance: "140 km",
            timeVTOL: "33 min",
            timeFerry: "2h 30m",
            savingsTime: "1 hora e 57 minutos",
            coords: { x1: 100, y1: 200, x2: 260, y2: 140 },
          },
          {
            id: "mallorca-menorca",
            name: "Palma de Mallorca ↔ Menorca",
            distance: "132 km",
            timeVTOL: "31 min",
            timeFerry: "1h 45m",
            savingsTime: "1 hora e 14 minutos",
            coords: { x1: 260, y1: 140, x2: 410, y2: 90 },
          },
        ],
      },
      problemSolution: {
        problem: {
          title: "O Problema",
          subtitle: "Obstáculos nas viagens insulares atuais",
          items: [
            {
              title: "Procura Altamente Sazonal",
              desc: "As ligações inter-ilhas enfrentam sobrecarga massiva e picos de tráfego, complicando a logística regional.",
            },
            {
              title: "Infraestruturas Marítimas Saturadas",
              desc: "As viagens de ferry prolongam-se por horas, provocando longos atrasos no embarque e desconforto aos passageiros.",
            },
            {
              title: "Pegada de Carbono e Impacto Sonoro",
              desc: "Os transportes aéreos e marítimos atuais emitem poluentes e criam elevados níveis de ruído em ecossistemas de elevada sensibilidade ambiental.",
            },
          ],
        },
        solution: {
          title: "A Solução Sustentável",
          subtitle: "Conectividade e inovação regional verde",
          items: [
            {
              title: "Eletrificação e Tecnologia Limpa",
              desc: "Operações com zero emissões diretas propiciadas por propulsão elétrica distribuída de alta eficiência.",
            },
            {
              title: "Mobilidade Ponto a Ponto Rápida",
              desc: "Descolagem e aterragem vertical (VTOL) que dispensa aeroportos extensos e liga diretamente portos urbanos em minutos.",
            },
            {
              title: "Respeito pela Biodiversidade Insular",
              desc: "Uma assinatura sonora reduzida garantida pelo projeto acústico dos ducted-fans elétricos, protegendo a fauna das ilhas.",
            },
          ],
        },
      },
      concept: {
        title: "O Conceito Inovador",
        subtitle:
          "Equilíbrio perfeito entre eficiência mecânica, autonomia energética e segurança operacional.",
        cards: [
          {
            title: 'Arquitetura "Tilt-Duct"',
            desc: "Asas integradas com condutas inclináveis. Combina a flexibilidade de descolagem vertical de um helicóptero com a velocidade e eficiência de voo sustentado de uma asa fixa.",
            tag: "CAPACIDADE VTOL",
          },
          {
            title: "Bateria Híbrida + Pilha H₂",
            desc: "Sistema avançado que combina densidade energética superior de células de combustível a hidrogénio de alto desempenho com o poder imediato de resposta de baterias de iões de lítio.",
            tag: "ENERGIA EFICIENTE",
          },
          {
            title: "Propulsão DEP (6 Motores)",
            desc: "Propulsão Elétrica Distribuída estruturada em 6 motores independentes. Garante redundância extrema, aumentando exponencialmente a segurança em caso de falha mecânica.",
            tag: "REDUNDÂNCIA TOTAL",
          },
        ],
      },
      kpisSection: {
        title: "Especificações Chave e Desempenho",
        subtitle:
          "Métricas de desenho obtidas através da simulação estrutural e ensaios virtuais do projeto Island Hopper.",
        ui: {
          details: "Detalhes",
          metricLabel: "Métrica Técnico-Operacional",
          optimization: "NÍVEL DE OTIMIZAÇÃO",
          stable: "98.5% STABLE",
        },
        kpis: [
          {
            id: "range",
            value: "140 km",
            label: "Autonomia",
            desc: "Rota principal Ibiza–Palma de Mallorca com 140 km de extensão, coberta sem escalas com o sistema híbrido Li-S + PEMFC H₂.",
          },
          {
            id: "speed",
            value: "306 km/h",
            label: "Velocidade Cruzeiro",
            desc: "85 m/s em cruzeiro a 3 000 ft, proporcionados pela aerodinâmica avançada da asa de razão de aspeto 9 e propulsão elétrica distribuída.",
          },
          {
            id: "noise",
            value: "62 dB",
            label: "Ruído em Cruzeiro",
            desc: "Nível de pressão sonora em altitude de cruzeiro — comparável a uma conversa normal. Os ducted fans reduzem o ruído em 8–10 dB face a rotores abertos equivalentes.",
          },
          {
            id: "emissions",
            value: "0 g",
            label: "Emissões CO₂/km",
            desc: "Zero emissões diretas em voo com H₂ verde. A análise de ciclo de vida completo aponta para 14,97 kg CO₂-eq por voo com hidrogénio renovável.",
          },
          {
            id: "weight",
            value: "2 595 kg",
            label: "MTOW (Peso Máx.)",
            desc: "Peso máximo de descolagem: estrutura 692 kg, propulsão 417 kg, bateria Li-S 371 kg, célula PEMFC 130 kg, H₂ 16,6 kg e payload de 4 PAX + bagagem.",
          },
        ],
      },
    },
    project: {
      hero: {
        badge: "IST 2026 · Grupo 11",
        titleP1: "O Projeto",
        titleP2: "Island Hopper",
        description:
          "Projeto Integrado de 1.º Ciclo em Engenharia Aeroespacial no Instituto Superior Técnico, Universidade de Lisboa. Concebemos e dimensionamos um eVTOL inter-ilhas com arquitetura Tilt-Duct para servir as Ilhas Baleares.",
      },
      motivation: {
        header: {
          badge: "Motivação",
          title: "Porquê as Baleares?",
          subtitle:
            "As ilhas Baleares enfrentam desafios únicos de mobilidade que a aviação tradicional não resolve de forma sustentável.",
        },
        stats: [
          {
            value: "1,26M",
            label: "Residentes",
            desc: "Mais de 1,26 milhões de residentes dependem das ligações inter-ilhas para trabalho, saúde e mobilidade quotidiana.",
          },
          {
            value: "19M",
            label: "Turistas/Ano",
            desc: "Em 2025, as Baleares receberam cerca de 19 milhões de turistas, criando uma procura massiva de transporte premium inter-ilhas.",
          },
          {
            value: "0g",
            label: "CO₂ em Voo",
            desc: "O Island Hopper opera com zero emissões diretas de carbono, essencial para proteger o ecossistema Mediterrânico.",
          },
        ],
      },
      objectives: {
        header: {
          badge: "Objetivos",
          title: "O Que Queremos Alcançar",
          subtitle:
            "Três objetivos fundamentais guiam todo o processo de design e engenharia do Island Hopper.",
        },
        items: [
          {
            num: "01",
            title: "Eletrificação Total",
            desc: "Desenvolver uma aeronave de propulsão 100% elétrica, eliminando dependência de combustíveis fósseis e reduzindo custos operacionais.",
          },
          {
            num: "02",
            title: "Alternativa Limpa aos Ferries",
            desc: "Oferecer uma solução 5× mais rápida que os ferries convencionais, com menor impacto ambiental e custos competitivos.",
          },
          {
            num: "03",
            title: "Zero Emissões Diretas",
            desc: "Garantir operações com zero emissões diretas de CO₂ em voo, utilizando hidrogénio verde e baterias Li-S de nova geração.",
          },
        ],
      },
      context: {
        header: {
          badge: "Contexto Académico",
          title: "Instituto Superior Técnico",
          subtitle:
            "Projeto desenvolvido no âmbito da unidade curricular de Projeto Integrado de 1.º Ciclo em Engenharia Aeroespacial.",
        },
        course: {
          label: "Unidade Curricular",
          title: "Projeto Integrado de 1.º Ciclo",
          subtitle: "Engenharia Aeroespacial · IST",
        },
        year: {
          label: "Ano Letivo",
          title: "2025/2026",
          subtitle: "Junho 2026 · Grupo 11",
        },
      },
      report: {
        header: {
          badge: "Relatório",
          title: "Download do Relatório Técnico",
          subtitle:
            "96 páginas de engenharia aeroespacial, com dimensionamento, simulações e análise de viabilidade.",
        },
      },
    },
    concept: {
      hero: {
        badge: "Engenharia Técnica",
        titleP1: "O",
        titleP2: "Conceito",
        description:
          'Do processo de seleção de arquitetura via AHP até ao dimensionamento completo do "Mega-Duct" — a aeronave Tilt-Duct com 6 motores distribuídos e propulsão híbrida Li-S + PEMFC H₂.',
      },
      architectures: {
        badge: "Arquiteturas",
        title: "As 4 Configurações Estudadas",
        subtitle:
          "Analisámos quatro arquiteturas distintas de eVTOL antes de selecionar o Tilt-Duct como arquitetura vencedora.",
      },
      ahp: {
        badge: "AHP",
        title: "Seleção por Analytic Hierarchy Process",
        subtitle:
          "9 critérios ponderados por stakeholders: autonomia, velocidade, estabilidade, ruído, emissões, custos e manutenção.",
      },
      specs: {
        badge: "Especificações",
        title: "Dimensionamento do Mega-Duct",
        subtitle:
          "Parâmetros técnicos chave do Island Hopper: geometria da asa, propulsão, desempenho e balanço de massa.",
      },
      propulsion: {
        badge: "Propulsão",
        title: "Sistema de Propulsão Híbrido",
        subtitle:
          "Combinação inovadora de bateria Li-S para VTOL e célula de combustível PEMFC H₂ para cruzeiro.",
      },
      powertrain: {
        badge: "Arquitetura de Powertrain",
        title: "Vista Superior — Sistema de Propulsão",
        subtitle:
          "Distribuição dos componentes de potência na fuselagem e fiação de alta tensão para os 6 motores EMRAX 348.",
      },
      mission: {
        badge: "Perfil de Missão",
        title: "As 7 Fases de Voo",
        subtitle:
          "Da descolagem vertical em Ibiza até à aterragem em Palma de Mallorca — 140 km em ~34 minutos.",
      },
    },
    service: {
      hero: {
        badge: "Operações Inter-Ilhas",
        titleP1: "O",
        titleP2: "Serviço",
        description:
          "O Island Hopper opera dois corredores estratégicos nas Ilhas Baleares, servindo residentes e turistas com uma alternativa 5× mais rápida que o ferry, com zero emissões diretas em voo.",
      },
      market: {
        header: {
          badge: "Mercado-Alvo",
          title: "Baleares: Um Mercado Único",
          subtitle:
            "Arquipélago com elevada procura de transporte inter-ilhas, especialmente no segmento turístico premium.",
        },
        stats: [
          { value: "1,26M", label: "Residentes", desc: "Mercado base anual" },
          {
            value: "19M",
            label: "Turistas/Ano",
            desc: "2025 — procura sazonal",
          },
          { value: "~€136", label: "Preço / Pax", desc: "Com margem de 50%" },
          {
            value: "Premium",
            label: "Segmento",
            desc: "Turismo de alto valor",
          },
        ],
      },
      routes: {
        header: {
          badge: "Rotas",
          title: "Mapa de Operação Inter-Ilhas",
          subtitle:
            "Dois corredores estratégicos ligando as principais ilhas em menos de 35 minutos.",
        },
      },
      conops: {
        header: {
          badge: "Condições de Operação",
          title: "Conops — Conceito de Operações",
          subtitle:
            "O Island Hopper opera em condições VMC com vento médio típico das Baleares.",
        },
        conditions: [
          {
            icon: "☀️",
            title: "Condições Meteorológicas",
            items: [
              "Operação VFR diurna (Verão)",
              "Vento médio: 11,6 km/h",
              "Alta visibilidade",
              "Temperatura: 22–30°C",
            ],
          },
          {
            icon: "🛫",
            title: "Operação VTOL",
            items: [
              "Descolagem vertical de veriports",
              "Altitude cruzeiro: 2.286 m (7.500 ft)",
              "1 piloto + 6 passageiros",
              "Sem pista convencional necessária",
            ],
          },
          {
            icon: "⚡",
            title: "Reabastecimento",
            items: [
              "Recarga rápida de bateria Li-S",
              "Reabastecimento de H₂ no veriport",
              "Turnaround: ~20 minutos",
              "Infraestrutura de H₂ verde",
            ],
          },
        ],
      },
      comparison: {
        header: {
          badge: "Comparação",
          title: "Island Hopper vs. Modos Convencionais",
          subtitle:
            "Análise comparativa de tempo, custo e impacto ambiental nas rotas inter-ilhas Baleares.",
        },
      },
      economics: {
        header: {
          badge: "Estimativa de Preço",
          title: "Viabilidade Económica",
          subtitle:
            "Preço por passageiro calculado para cobrir custos operacionais com margem de lucro de 50%.",
        },
        costBreakdown: {
          title: "Custo Operacional por Voo",
          items: [
            {
              label: "Energia (71,66 kWh × tarifa H₂/elétrica)",
              value: "~€42",
            },
            { label: "Manutenção (amortizada por voo)", value: "~€45" },
            { label: "Seguro e regulação", value: "~€18" },
            { label: "Operações & handling", value: "~€15" },
          ],
          total: {
            label: "Total por voo (6 pax)",
            value: "~€120",
          },
        },
        pricing: {
          title: "Preço por Passageiro",
          price: "≈€136",
          subtitle: "por passageiro · com margem de 50%",
          benefits: [
            "Competitivo vs. helicóptero (€1.800+)",
            "Premium justificado pela velocidade",
            "Inclui zero emissões diretas",
          ],
        },
      },
    },
    sustainability: {
      hero: {
        badge: "Impacto Ambiental",
        title: "Sustentabilidade",
        description:
          "O Island Hopper foi concebido com sustentabilidade no centro do design — zero emissões diretas em voo, emissões de ciclo de vida drasticamente inferiores ao avião convencional, e uma assinatura sonora compatível com operações urbanas.",
      },
      mission: {
        header: {
          badge: "Missão Ambiental",
          title: "Zero Emissões Diretas em Voo",
          subtitle:
            "A propulsão híbrida garante zero emissões de CO₂, NOx e partículas durante toda a operação.",
        },
        stats: [
          {
            value: "0 g",
            label: "CO₂ Direto em Voo",
            desc: "Propulsão elétrica pura — sem combustão",
          },
          {
            value: "0 g",
            label: "NOx / Partículas",
            desc: "Sem emissões poluentes locais",
          },
          {
            value: "15 kg",
            label: "CO₂-eq / Voo (LCA)",
            desc: "Com H₂ verde · vs. 126 kg avião",
          },
        ],
      },
      lca: {
        badge: "Análise LCA",
        title: "Calculadora de Emissões de Ciclo de Vida",
        subtitle:
          "Compare o impacto de carbono do Island Hopper com H₂ verde versus H₂ cinzento e transportes convencionais.",
      },
      noise: {
        badge: "Ruído",
        title: "Perfil Acústico",
        subtitle:
          "Os ducted fans reduzem o ruído em 8–10 dB comparado a rotores abertos equivalentes.",
      },
      future: {
        header: {
          badge: "Visão Futura",
          title: "Caminho para a Descarbonização Total",
          subtitle:
            "A viabilidade ambiental do Island Hopper melhora com a expansão das redes de H₂ verde e energias renováveis.",
        },
        horizon: {
          title: "Horizonte 2030",
          items: [
            "Expansão da rede de produção de H₂ verde nas Baleares",
            "Integração com grid renovável (solar + eólica offshore)",
            "Certificação EASA para operações comerciais UAM",
            "Redução do custo do H₂ verde para <€3/kg",
          ],
        },
        regional: {
          title: "Impacto Regional",
          items: [
            "Substituição gradual das rotas de ferry de curta distância",
            "Redução do tráfego aéreo convencional inter-ilhas",
            "Preservação da biodiversidade marinha e terrestre",
            "Modelo replicável para outros arquipélagos europeus",
          ],
        },
      },
    },
    contacts: {
      hero: {
        badge: "Grupo 11 · IST 2026",
        title: "Contactos",
        description:
          "Este é um projeto académico aberto a feedback. Se tens questões sobre a metodologia, os resultados técnicos ou potenciais colaborações, entra em contacto connosco.",
      },
      form: {
        header: {
          badge: "Formulário",
          title: "Envia uma Mensagem",
        },
        success: {
          title: "Mensagem enviada!",
          description:
            "Obrigado pelo contacto. Responderemos assim que possível.",
          button: "Nova mensagem",
        },
        labels: {
          name: "Nome",
          email: "Email",
          subject: "Assunto",
          message: "Mensagem",
        },
        placeholders: {
          name: "O teu nome",
          email: "email@exemplo.com",
          subject: "Sobre o projeto...",
          message: "A tua mensagem...",
        },
        submit: "Enviar Mensagem",
      },
      team: {
        header: {
          badge: "Equipa",
          title: "Grupo 11",
        },
        numberPrefix: "nº",
      },
      supervisors: {
        title: "Orientadores",
        roles: {
          Orientador: "Orientador",
          "Co-orientador": "Co-orientador",
        },
      },
      institution: {
        title: "Instituição",
        name: "Instituto Superior Técnico",
        university: "Universidade de Lisboa",
        address: "Av. Rovisco Pais, 1 · 1049-001 Lisboa",
        downloadBtn: "Download do Relatório Técnico (PDF)",
      },
    },
  },
  en: {
    nav: [
      { href: "/", label: "Home" },
      { href: "/project", label: "Project" },
      { href: "/concept", label: "Concept" },
      { href: "/service", label: "Service" },
      { href: "/sustainability", label: "Sustainability" },
      { href: "/contacts", label: "Contacts" },
    ],

    home: {
      hero: {
        badge: "In Development Phase",
        titleP1: "The Mobility Revolution in the",
        titleP2: "Balearic Islands",
        desc1:
          "We are developing the future of sustainable regional aviation. The",
        desc2: "is an innovative electric mobility solution with a",
        desc3:
          "architecture, designed for vertical takeoff and ultra-fast inter-island connections with zero direct carbon emissions.",
        btnExplore: "Explore Routes",
        btnConcept: "Technical Concept",
        specs: {
          propulsion: { label: "Propulsion", value: "Electric (DEP)" },
          architecture: { label: "Architecture", value: "Tilt-Duct VTOL" },
          fuel: { label: "Fuel", value: "Battery + H₂ Hybrid" },
        },
        image: {
          badge: "Conceptual 3D Render",
          caption:
            "Wing architecture with 6 tiltable electric rotors (Tilt-Duct).",
        },
      },
      map: {
        title: "Inter-Island Operation Map",
        subtitle:
          "Select a route to simulate the drastic reduction in travel times compared to traditional maritime ferries.",
        ui: {
          selectedRoute: "Selected Route",
          durationVTOL: "Duration (VTOL)",
          directFlight: "Direct Flight",
          durationFerry: "Conventional Ferries",
          estimatedAvg: "Estimated average",
          savingsPrefix: "The",
          savingsMid: "saves approximately",
          savingsSuffix: "of travel time on this inter-island connection.",
        },
        radar: {
          online: "ATC RADAR: ONLINE",
          version: "GRID BALEARIC v1.0.2",
          simulation: "SIMULATION INTERVAL: 1S",
          status: "SYSTEM STABLE",
        },
        routes: [
          {
            id: "ibiza-mallorca",
            name: "Ibiza ↔ Palma de Mallorca",
            distance: "140 km",
            timeVTOL: "33 min",
            timeFerry: "2h 30m",
            savingsTime: "1 hour and 57 minutes",
            coords: { x1: 100, y1: 200, x2: 260, y2: 140 },
          },
          {
            id: "mallorca-menorca",
            name: "Palma de Mallorca ↔ Menorca",
            distance: "132 km",
            timeVTOL: "31 min",
            timeFerry: "1h 45m",
            savingsTime: "1 hour and 14 minutes",
            coords: { x1: 260, y1: 140, x2: 410, y2: 90 },
          },
        ],
      },
      problemSolution: {
        problem: {
          title: "The Problem",
          subtitle: "Obstacles in current island travel",
          items: [
            {
              title: "Highly Seasonal Demand",
              desc: "Inter-island connections face massive overload and traffic spikes, complicating regional logistics.",
            },
            {
              title: "Saturated Maritime Infrastructure",
              desc: "Ferry trips take hours, causing long boarding delays and discomfort for passengers.",
            },
            {
              title: "Carbon Footprint & Noise Impact",
              desc: "Current air and maritime transport emit pollutants and create high noise levels in highly sensitive environmental ecosystems.",
            },
          ],
        },
        solution: {
          title: "The Sustainable Solution",
          subtitle: "Green regional connectivity and innovation",
          items: [
            {
              title: "Electrification & Clean Tech",
              desc: "Zero direct emission operations powered by high-efficiency distributed electric propulsion.",
            },
            {
              title: "Fast Point-to-Point Mobility",
              desc: "Vertical Takeoff and Landing (VTOL) eliminates the need for extensive airports, directly linking urban ports in minutes.",
            },
            {
              title: "Respect for Island Biodiversity",
              desc: "A reduced acoustic signature guaranteed by the electric ducted-fans' acoustic design, protecting island fauna.",
            },
          ],
        },
      },
      concept: {
        title: "The Innovative Concept",
        subtitle:
          "A perfect balance between mechanical efficiency, energy autonomy, and operational safety.",
        cards: [
          {
            title: "Tilt-Duct Architecture",
            desc: "Wings integrated with tiltable ducts. It combines the vertical takeoff flexibility of a helicopter with the sustained flight speed and efficiency of a fixed-wing aircraft.",
            tag: "VTOL CAPABILITY",
          },
          {
            title: "Hybrid Battery + H₂ Cell",
            desc: "An advanced system combining the superior energy density of high-performance hydrogen fuel cells with the immediate response power of lithium-ion batteries.",
            tag: "EFFICIENT ENERGY",
          },
          {
            title: "DEP Propulsion (6 Motors)",
            desc: "Distributed Electric Propulsion structured across 6 independent motors. It ensures extreme redundancy, exponentially increasing safety in case of mechanical failure.",
            tag: "TOTAL REDUNDANCY",
          },
        ],
      },
      kpisSection: {
        title: "Key Specifications & Performance",
        subtitle:
          "Design metrics obtained through structural simulation and virtual testing of the Island Hopper project.",
        ui: {
          details: "Details",
          metricLabel: "Technical-Operational Metric",
          optimization: "OPTIMIZATION LEVEL",
          stable: "98.5% STABLE",
        },
        kpis: [
          {
            id: "range",
            value: "140 km",
            label: "Range",
            desc: "Main route Ibiza–Palma de Mallorca with a 140 km stretch, covered non-stop with the hybrid Li-S + PEMFC H₂ system.",
          },
          {
            id: "speed",
            value: "306 km/h",
            label: "Cruise Speed",
            desc: "85 m/s cruising at 3,000 ft, provided by the advanced aerodynamics of the aspect ratio 9 wing and distributed electric propulsion.",
          },
          {
            id: "noise",
            value: "62 dB",
            label: "Cruise Noise",
            desc: "Sound pressure level at cruise altitude — comparable to a normal conversation. Ducted fans reduce noise by 8–10 dB compared to equivalent open rotors.",
          },
          {
            id: "emissions",
            value: "0 g",
            label: "CO₂/km Emissions",
            desc: "Zero direct flight emissions with green H₂. Full life-cycle analysis points to 14.97 kg CO₂-eq per flight with renewable hydrogen.",
          },
          {
            id: "weight",
            value: "2 595 kg",
            label: "MTOW (Max Weight)",
            desc: "Maximum takeoff weight: structure 692 kg, propulsion 417 kg, Li-S battery 371 kg, PEMFC cell 130 kg, H₂ 16.6 kg, and a payload of 4 PAX + luggage.",
          },
        ],
      },
    },
    project: {
      hero: {
        badge: "IST 2026 · Group 11",
        titleP1: "The Project",
        titleP2: "Island Hopper",
        description:
          "1st Cycle Integrated Project in Aerospace Engineering at Instituto Superior Técnico, University of Lisbon. We designed and sized an inter-island eVTOL with a Tilt-Duct architecture to serve the Balearic Islands.",
      },
      motivation: {
        header: {
          badge: "Motivation",
          title: "Why the Balearics?",
          subtitle:
            "The Balearic Islands face unique mobility challenges that traditional aviation cannot solve sustainably.",
        },
        stats: [
          {
            value: "1.26M",
            label: "Residents",
            desc: "Over 1.26 million residents depend on inter-island connections for work, health, and daily mobility.",
          },
          {
            value: "19M",
            label: "Tourists/Year",
            desc: "In 2025, the Balearics received around 19 million tourists, creating massive demand for premium inter-island transport.",
          },
          {
            value: "0g",
            label: "In-Flight CO₂",
            desc: "The Island Hopper operates with zero direct carbon emissions, essential for protecting the Mediterranean ecosystem.",
          },
        ],
      },
      objectives: {
        header: {
          badge: "Objectives",
          title: "What We Aim to Achieve",
          subtitle:
            "Three fundamental objectives guide the entire design and engineering process of the Island Hopper.",
        },
        items: [
          {
            num: "01",
            title: "Total Electrification",
            desc: "Develop a 100% electric propulsion aircraft, eliminating dependence on fossil fuels and reducing operational costs.",
          },
          {
            num: "02",
            title: "Clean Alternative to Ferries",
            desc: "Offer a solution 5× faster than conventional ferries, with lower environmental impact and competitive costs.",
          },
          {
            num: "03",
            title: "Zero Direct Emissions",
            desc: "Ensure operations with zero direct CO₂ emissions in flight, using green hydrogen and next-generation Li-S batteries.",
          },
        ],
      },
      context: {
        header: {
          badge: "Academic Context",
          title: "Instituto Superior Técnico",
          subtitle:
            "Project developed within the scope of the 1st Cycle Integrated Project in Aerospace Engineering course.",
        },
        course: {
          label: "Course Unit",
          title: "1st Cycle Integrated Project",
          subtitle: "Aerospace Engineering · IST",
        },
        year: {
          label: "Academic Year",
          title: "2025/2026",
          subtitle: "June 2026 · Group 11",
        },
      },
      report: {
        header: {
          badge: "Report",
          title: "Download Technical Report",
          subtitle:
            "96 pages of aerospace engineering, featuring sizing, simulations, and feasibility analysis.",
        },
      },
    },
    concept: {
      hero: {
        badge: "Technical Engineering",
        titleP1: "The",
        titleP2: "Concept",
        description:
          'From the architecture selection process via AHP to the complete sizing of the "Mega-Duct" — the Tilt-Duct aircraft with 6 distributed engines and Li-S + PEMFC H₂ hybrid propulsion.',
      },
      architectures: {
        badge: "Architectures",
        title: "The 4 Configurations Studied",
        subtitle:
          "We analyzed four distinct eVTOL architectures before selecting the Tilt-Duct as the winning architecture.",
      },
      ahp: {
        badge: "AHP",
        title: "Analytic Hierarchy Process Selection",
        subtitle:
          "9 criteria weighted by stakeholders: range, speed, stability, noise, emissions, costs, and maintenance.",
      },
      specs: {
        badge: "Specifications",
        title: "Mega-Duct Sizing",
        subtitle:
          "Key technical parameters of the Island Hopper: wing geometry, propulsion, performance, and mass balance.",
      },
      propulsion: {
        badge: "Propulsion",
        title: "Hybrid Propulsion System",
        subtitle:
          "Innovative combination of a Li-S battery for VTOL and a PEMFC H₂ fuel cell for cruise.",
      },
      powertrain: {
        badge: "Powertrain Architecture",
        title: "Top View — Propulsion System",
        subtitle:
          "Distribution of power components in the fuselage and high-voltage wiring for the 6 EMRAX 348 engines.",
      },
      mission: {
        badge: "Mission Profile",
        title: "The 7 Flight Phases",
        subtitle:
          "From vertical takeoff in Ibiza to landing in Palma de Mallorca — 140 km in ~34 minutes.",
      },
    },
    service: {
      hero: {
        badge: "Inter-Island Operations",
        titleP1: "The",
        titleP2: "Service",
        description:
          "The Island Hopper operates two strategic corridors in the Balearic Islands, serving residents and tourists with an alternative 5× faster than the ferry, with zero direct flight emissions.",
      },
      market: {
        header: {
          badge: "Target Market",
          title: "Balearics: A Unique Market",
          subtitle:
            "Archipelago with high demand for inter-island transport, especially in the premium tourist segment.",
        },
        stats: [
          { value: "1.26M", label: "Residents", desc: "Annual base market" },
          {
            value: "19M",
            label: "Tourists/Year",
            desc: "2025 — seasonal demand",
          },
          {
            value: "~€136",
            label: "Price / Pax",
            desc: "With 50% profit margin",
          },
          { value: "Premium", label: "Segment", desc: "High-value tourism" },
        ],
      },
      routes: {
        header: {
          badge: "Routes",
          title: "Inter-Island Operations Map",
          subtitle:
            "Two strategic corridors connecting the main islands in under 35 minutes.",
        },
      },
      conops: {
        header: {
          badge: "Operating Conditions",
          title: "Conops — Concept of Operations",
          subtitle:
            "The Island Hopper operates under VMC conditions with typical Balearic average winds.",
        },
        conditions: [
          {
            icon: "☀️",
            title: "Weather Conditions",
            items: [
              "Daytime VFR operation (Summer)",
              "Average wind: 11.6 km/h",
              "High visibility",
              "Temperature: 22–30°C",
            ],
          },
          {
            icon: "🛫",
            title: "VTOL Operation",
            items: [
              "Vertical takeoff from vertiports",
              "Cruise altitude: 2,286 m (7,500 ft)",
              "1 pilot + 6 passengers",
              "No conventional runway needed",
            ],
          },
          {
            icon: "⚡",
            title: "Refueling",
            items: [
              "Fast charging of Li-S battery",
              "H₂ refueling at vertiport",
              "Turnaround: ~20 minutes",
              "Green H₂ infrastructure",
            ],
          },
        ],
      },
      comparison: {
        header: {
          badge: "Comparison",
          title: "Island Hopper vs. Conventional Modes",
          subtitle:
            "Comparative analysis of time, cost, and environmental impact on Balearic inter-island routes.",
        },
      },
      economics: {
        header: {
          badge: "Price Estimate",
          title: "Economic Feasibility",
          subtitle:
            "Price per passenger calculated to cover operating costs with a 50% profit margin.",
        },
        costBreakdown: {
          title: "Operating Cost per Flight",
          items: [
            { label: "Energy (71.66 kWh × H₂/electric rate)", value: "~€42" },
            { label: "Maintenance (amortized per flight)", value: "~€45" },
            { label: "Insurance and regulation", value: "~€18" },
            { label: "Operations & handling", value: "~€15" },
          ],
          total: {
            label: "Total per flight (6 pax)",
            value: "~€120",
          },
        },
        pricing: {
          title: "Price per Passenger",
          price: "≈€136",
          subtitle: "per passenger · with 50% margin",
          benefits: [
            "Competitive vs. helicopter (€1,800+)",
            "Premium justified by speed",
            "Includes zero direct emissions",
          ],
        },
      },
    },
    sustainability: {
      hero: {
        badge: "Environmental Impact",
        title: "Sustainability",
        description:
          "The Island Hopper was designed with sustainability at its core — zero direct flight emissions, lifecycle emissions drastically lower than conventional aircraft, and an acoustic signature compatible with urban operations.",
      },
      mission: {
        header: {
          badge: "Environmental Mission",
          title: "Zero Direct Flight Emissions",
          subtitle:
            "Hybrid propulsion ensures zero emissions of CO₂, NOx, and particulates throughout the entire operation.",
        },
        stats: [
          {
            value: "0 g",
            label: "Direct In-Flight CO₂",
            desc: "Pure electric propulsion — no combustion",
          },
          {
            value: "0 g",
            label: "NOx / Particulates",
            desc: "No local pollutant emissions",
          },
          {
            value: "15 kg",
            label: "CO₂-eq / Flight (LCA)",
            desc: "With green H₂ · vs. 126 kg for airplanes",
          },
        ],
      },
      lca: {
        badge: "LCA Analysis",
        title: "Lifecycle Emissions Calculator",
        subtitle:
          "Compare the carbon impact of the Island Hopper with green H₂ versus gray H₂ and conventional transport modes.",
      },
      noise: {
        badge: "Noise",
        title: "Acoustic Profile",
        subtitle:
          "Ducted fans reduce noise by 8–10 dB compared to equivalent open rotors.",
      },
      future: {
        header: {
          badge: "Future Vision",
          title: "Path to Total Decarbonization",
          subtitle:
            "The environmental viability of the Island Hopper improves with the expansion of green H₂ networks and renewable energy grids.",
        },
        horizon: {
          title: "2030 Horizon",
          items: [
            "Expansion of the green H₂ production network in the Balearics",
            "Integration with renewable grids (solar + offshore wind)",
            "EASA certification for commercial UAM operations",
            "Reduction of green H₂ cost to <€3/kg",
          ],
        },
        regional: {
          title: "Regional Impact",
          items: [
            "Gradual replacement of short-distance ferry routes",
            "Reduction of conventional inter-island air traffic",
            "Preservation of marine and terrestrial biodiversity",
            "Replicable model for other European archipelagos",
          ],
        },
      },
    },
    contacts: {
      hero: {
        badge: "Group 11 · IST 2026",
        title: "Contacts",
        description:
          "This is an academic project open to feedback. If you have questions about the methodology, technical results, or potential collaborations, please get in touch with us.",
      },
      form: {
        header: {
          badge: "Form",
          title: "Send a Message",
        },
        success: {
          title: "Message sent!",
          description:
            "Thank you for reaching out. We will get back to you as soon as possible.",
          button: "New message",
        },
        labels: {
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Message",
        },
        placeholders: {
          name: "Your name",
          email: "email@example.com",
          subject: "About the project...",
          message: "Your message...",
        },
        submit: "Send Message",
      },
      team: {
        header: {
          badge: "Team",
          title: "Group 11",
        },
        numberPrefix: "No.",
      },
      supervisors: {
        title: "Advisors",
        roles: {
          Orientador: "Advisor",
          "Co-orientador": "Co-advisor",
        },
      },
      institution: {
        title: "Institution",
        name: "Instituto Superior Técnico",
        university: "University of Lisbon",
        address: "Av. Rovisco Pais, 1 · 1049-001 Lisbon",
        downloadBtn: "Download Technical Report (PDF)",
      },
    },
  },
};

export type Language = keyof typeof dictionaries;
