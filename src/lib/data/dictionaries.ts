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
            value: "150 km",
            label: "Autonomia",
            desc: "Rota principal Ibiza–Palma de Mallorca com 140 km de extensão, coberta sem escalas com o sistema híbrido Li-S + PEMFC H₂.",
          },
          {
            id: "speed",
            value: "306 km/h",
            label: "Velocidade Cruzeiro",
            desc: "85 m/s em cruzeiro a 7 500 ft, proporcionados pela aerodinâmica avançada da asa de razão de aspeto 9 e propulsão elétrica distribuída.",
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
            desc: "Inclui 600 kg de payload ou 6 passageiros.",
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
          'Do processo de seleção de arquitetura via AHP até ao dimensionamento completo do Island Hopper — a aeronave Tilt-Duct com 6 motores distribuídos e propulsão híbrida Li-S + PEMFC H₂.',
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
        title: "Dimensionamento do Island Hopper",
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
          { value: "€91 - 135", label: "Preço / Pax", desc: "Com margem de 50%" },
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
          price: "€91 - 135",
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
    navFooter: {
      home: "Início",
      project: "Projeto",
      concept: "Conceito",
      service: "Serviço",
      sustainability: "Sustentabilidade",
      contacts: "Contactos",
    },
    footer: {
      description:
        "Projeto académico de mobilidade aérea urbana inter-ilhas nas Ilhas Baleares.",
      titles: {
        navigation: "Navegação",
        institution: "Instituição",
        team: "Membros da Equipa",
      },
      institution: {
        name: "Instituto Superior Técnico",
        university: "Universidade de Lisboa",
        dateGroup: "Junho 2026 · Grupo 11",
      },
      supervisors: {
        Orientador: "Orientador",
        "Co-orientador": "Co-orientador",
      },
      copyright: "© 2026 Island Hopper. Todos os direitos reservados.",
    },
    ahp: {
      scoreLabel: "AHP score",
      prosLabel: "Vantagens",
      consLabel: "Desvantagens",
      criteriaTitle: "Critérios de Avaliação (9 critérios, pesos AHP)",
      criteriaLabels: {
        range: "Autonomia",
        cruiseSpeed: "Velocidade de Cruzeiro",
        stability: "Estabilidade",
        cabinNoise: "Ruído Interior",
        acoustic: "Emissões Acústicas",
        fixedCosts: "Custos Fixos",
        maintenance: "Manutenção",
        pollutant: "Emissões Poluentes",
        varCosts: "Custos Variáveis",
      },
      architectures: {
        "tilt-duct": {
          name: "Tilt-Duct",
          description:
            "Rotores embutidos em condutas aerodinâmicas inclináveis. Combina VTOL com cruzeiro eficiente, baixo ruído e perfil compacto — ideal para operações urbanas.",
          pros: [
            "Perfil acústico muito reduzido — condutas atenuam o ruído dos rotores",
            "Segurança: lâminas encapsuladas protegem pessoal em terra",
            "Pegada compacta — compatível com vertiports urbanos",
            "Propulsão elétrica distribuída (DEP) com 6 motores independentes",
            "Boa eficiência aerodinâmica em cruzeiro",
          ],
          cons: [
            "Massa adicional das estruturas das condutas",
            "Gestão térmica mais complexa (motores encapsulados)",
            "Alta complexidade de certificação (6 unidades inclináveis)",
            "Desempenho em hover ligeiramente inferior por disc loading elevado",
          ],
        },
        "tilt-rotor": {
          name: "Tilt-Rotor",
          description:
            "Naceles pivotantes nas pontas da asa. Excelente desempenho em cruzeiro de longa distância, mas mecanicamente complexo e com elevado downwash em hover.",
          pros: [
            "Excelente alcance e velocidade de cruzeiro",
            "Operação a alta altitude (até 25.000 ft)",
            "Conceito comprovado (ex: AW609)",
          ],
          cons: [
            "Alta complexidade mecânica dos mecanismos de inclinação",
            "Downwash intenso em hover — requer vertiports especializados",
            "Razão payload/peso reduzida",
            "Manutenção mais exigente",
          ],
        },
        "fixed-wing": {
          name: "Fixed-Wing + VTOL",
          description:
            "Arquitetura 'Lift + Cruise' com dois sistemas de propulsão independentes. Simples e fiável, mas os rotores de sustentação tornam-se 'peso morto' em cruzeiro.",
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
        },
        "tilt-wing": {
          name: "Tilt-Wing",
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
        },
      },
    },
    specs: {
      massTabLabel: "⚖️ Massa",
      tableHeaders: {
        component: "Componente",
        mass: "Massa (kg)",
        details: "Detalhes",
      },
      mtowRow: {
        label: "MTOW Total",
        value: "2.595",
        details: "Peso Máximo de Descolagem",
      },
      categories: {
        dimensions: "Dimensões Gerais",
        propulsion: "Propulsão",
        performance: "Desempenho",
        energy: "Energia",
        aerodynamics: "Aerodinâmica",
      },
      items: {
        mtow: {
          label: "MTOW (Peso Máx. de Descolagem)",
          value: "2.595",
          unit: "kg",
        },
        length: { label: "Comprimento da Fuselagem", value: "9,89", unit: "m" },
        diameter: {
          label: "Diâmetro Máximo da Fuselagem",
          value: "2,20",
          unit: "m",
        },
        wingspan: {
          label: "Envergadura da Asa Principal",
          value: "13",
          unit: "m",
        },
        aspectRatio: { label: "Razão de Aspeto (AR)", value: "9", unit: "" },
        wingArea: {
          label: "Área de Referência da Asa",
          value: "18,78",
          unit: "m²",
        },
        rotors: { label: "Número de Rotores/Motores", value: "6", unit: "" },
        radius: { label: "Raio de cada Rotor", value: "1,00", unit: "m" },
        motorPower: {
          label: "Potência Máxima por Motor",
          value: "260",
          unit: "kW",
        },
        totalPower: {
          label: "Potência Total Instalada",
          value: "1.560",
          unit: "kW",
        },
        motorModel: {
          label: "Motor Selecionado",
          value: "EMRAX 348 MV",
          unit: "",
        },
        architectureType: {
          label: "Arquitetura",
          value: "Tilt-Duct Híbrida",
          unit: "",
        },
        cruiseSpeed: {
          label: "Velocidade de Cruzeiro",
          value: "85",
          unit: "m/s (306 km/h)",
        },
        stallSpeed: { label: "Velocidade de Stall", value: "40", unit: "m/s" },
        cruiseAltitude: {
          label: "Altitude de Cruzeiro",
          value: "2.286",
          unit: "m (7.500 ft)",
        },
        range: {
          label: "Autonomia (Rota Principal)",
          value: "140",
          unit: "km",
        },
        flightDuration: {
          label: "Duração do Voo",
          value: "≈34",
          unit: "minutos",
        },
        capacity: {
          label: "Capacidade",
          value: "1 piloto + 6 passageiros",
          unit: "",
        },
        totalEnergy: {
          label: "Energia Total da Missão",
          value: "71,66",
          unit: "kWh",
        },
        vtolEnergy: {
          label: "Energia VTOL + Hover",
          value: "20.20",
          unit: "kWh",
        },
        climbEnergy: {
          label: "Energia de Subida",
          value: "21.60",
          unit: "kWh",
        },
        cruiseEnergy: {
          label: "Energia de Cruzeiro",
          value: "32.30",
          unit: "kWh",
        },
        hybridMass: {
          label: "Massa do Sistema de Energia Híbrido",
          value: "197.73",
          unit: "kg",
        },
        dcBusVoltage: {
          label: "Tensão do Barramento DC",
          value: "800",
          unit: "V",
        },
        wingAirfoil: {
          label: "Perfil Aerodinâmico da Asa",
          value: "NACA 4412",
          unit: "",
        },
        canardAirfoil: {
          label: "Perfil do Canard e Cauda",
          value: "NACA 0015",
          unit: "",
        },
        taperRatio: {
          label: "Razão de Afilamento (λ)",
          value: "0,40",
          unit: "",
        },
        sweepAngle: {
          label: "Ângulo de Enflechamento (LE)",
          value: "2,73°",
          unit: "",
        },
        staticMargin: {
          label: "Margem Estática (SM)",
          value: "11,2%",
          unit: "",
        },
        cmAlpha: { label: "Derivada CMα", value: "-0,75", unit: "/°" },
      },
      massBreakdown: {
        passengers: {
          name: "Passageiros & Piloto",
          mass: "700,0",
          details: "7 × 100 kg (incl. bagagem)",
        },
        fuselage: {
          name: "Fuselagem",
          mass: "612,75",
          details: "300,45 kg (fibra) + 312,3 kg (metal estrutural)",
        },
        mainWing: {
          name: "Asa Principal",
          mass: "273,0",
          details: "13 kg/m² × 21 m²",
        },
        ducts: {
          name: "Ductos (6 unidades)",
          mass: "300,0",
          details: "20 kg hélice + 15 kg ducto + 15 kg inclinação",
        },
        motors: {
          name: "Motores Elétricos (6)",
          mass: "249,0",
          details: "6 × 41,5 kg (EMRAX 348)",
        },
        fuelCell: {
          name: "Célula de Combustível",
          mass: "139,36",
          details: "PEMFC 200 kW + armazenamento H₂",
        },
        canard: {
          name: "Canard",
          mass: "85,0",
          details: "Superfície dianteira",
        },
        battery: {
          name: "Bateria Li-S",
          mass: "58,37",
          details: "26,26 kWh a 0,45 kWh/kg",
        },
        avionics: {
          name: "Sistemas & Aviónicos",
          mass: "70,0",
          details: "Controlo e navegação",
        },
        tail: {
          name: "Cauda (T-tail)",
          mass: "70,0",
          details: "Estabilizador e leme",
        },
        cabling: {
          name: "Cablagem HV",
          mass: "37,7",
          details: "Rede de 800 V DC — 60 m de cabo",
        },
      },
      phases: {
        p1: { label: "Descolagem Vertical", type: "Subida Vertical" },
        p2: { label: "Hover (Descolagem)", type: "Hover" },
        p3: { label: "Subida", type: "Subida (5°)" },
        p4: { label: "Cruzeiro", type: "Cruzeiro" },
        p5: { label: "Descida", type: "Descida (−5°)" },
        p6: { label: "Hover (Aterragem)", type: "Hover" },
        p7: { label: "Aterragem Vertical", type: "Descida Vertical" },
      },
    },
    profileSection: {
      energyTitle: "Energia por Fase de Missão",
      energyBreakdown: {
        vtol: { label: "VTOL + Hover", value: "20,20 kWh" },
        climb: { label: "Subida", value: "21,60 kWh" },
        cruise: { label: "Cruzeiro", value: "32,30 kWh" },
        descent: {
          label: "Descida + Aterragem",
          value: "2.44 kWh (regenerativo)",
        },
      },
      timelineLabels: {
        altitude: "Altitude",
        velocity: "Velocidade",
        duration: "Duração",
        distance: "Distância",
      },
      summary: {
        totalLabel: "Total da Missão",
        totalValue: "71.66 kWh",
        durationLabel: "Duração total",
        durationValue: "≈34 min",
        distanceLabel: "Distância total",
        distanceValue: "140 km",
      },
      phases: {
        p1: { label: "Descolagem Vertical", type: "Subida Vertical" },
        p2: { label: "Hover (Descolagem)", type: "Hover" },
        p3: { label: "Subida", type: "Subida (5°)" },
        p4: { label: "Cruzeiro", type: "Cruzeiro" },
        p5: { label: "Descida", type: "Descida (−5°)" },
        p6: { label: "Hover (Aterragem)", type: "Hover" },
        p7: { label: "Aterragem Vertical", type: "Descida Vertical" },
      },
    },
    powertrainDiagram: {
      proa: "▲  PROA",
      cauda: "▼  CAUDA",
      canard: "CANARD",
      asaPrincipal: "ASA PRINCIPAL",
      ttail: "T-TAIL",
      bordoEsquerdo: "◄  BORDO ESQUERDO",
      bordoDireito: "BORDO DIREITO  ►",
      envergadura: "↔  Envergadura: 13 m",
      fuselagem: "Fuselagem: 9,89 m",
      caption:
        'Vista superior esquemática — powertrain do Island Hopper (não à escala) · Cap. 7 do Relatório',
      legendTitle: "LEGENDA",
      legendLabel: "Canard · Asa · T-tail",
      labels: {
        avionica: "AVIÓNICA",
        bmsFcs: "BMS · FCS",
        controloVoo: "Controlo de Voo",
        bateria: "Bat.",
        lis: "Li-S",
        massaBat: "58 kg",
        tanque: "Tanque",
        massaTanque: "39 kg",
        gestaoTermica: "Gestão Térmica",
        pemfc: "PEMFC H₂",
        metricaPemfc: "200 kW · 100 kg",
        barramento: "Barramento DC · 800 V",
        conv: "Conv.",
        hvx2: "HV ×2",
        dcdc: "DC/DC",
        computador: "Computador",
        fmsGnss: "FMS · GNSS",
      },
      items: [
        { color: "#22c55e", label: "Aviónica / BMS / FCS" },
        { color: "#3b82f6", label: "Bateria Li-S (58 kg)" },
        { color: "#0ea5e9", label: "Tanque H₂ (39 kg)" },
        { color: "#0d9488", label: "PEMFC 200 kW" },
        { color: "#f97316", label: "Bus DC 800V / Conversores" },
        { color: "#a855f7", label: "Computador de Bordo" },
        { color: "#10b981", label: "Motor EMRAX 348 MV (×6)" },
        { color: "#f59e0b", label: "Fiação Alta Tensão" },
      ],
    },
    propulsionSystem: {
      comparisonTitle: "Comparação: Híbrido vs. Totalmente Elétrico",
      selectedLabel: "Sistema Híbrido (selecionado)",
      hybridValue: "197,73 kg",
      hybridSub: "Li-S (58,37) + PEMFC (100) + H₂ (39,36)",
      electricLabel: "Totalmente Elétrico",
      electricValue: "329,89 kg",
      electricSub: "Apenas baterias — 67% mais pesado",
      savingsText:
        "Poupança de <strong>132,16 kg</strong> com a arquitetura híbrida — equivale a mais de um passageiro adicional de payload.",
      cards: [
        {
          title: "Bateria Li-S",
          sub: "VTOL + Transientes",
          metrics: [
            { label: "Massa", value: "58,37 kg" },
            { label: "Energia", value: "26,26 kWh" },
            { label: "Densidade", value: "0,45 kWh/kg" },
            { label: "Missões", value: "Descolagem + Hover" },
          ],
        },
        {
          title: "Célula de Combustível (PEMFC)",
          sub: "Cruzeiro + Subida",
          metrics: [
            { label: "Potência", value: "200 kW" },
            { label: "Massa PEMFC", value: "100 kg" },
            { label: "Armazenamento H₂", value: "39,36 kg" },
            { label: "Missões", value: "Subida + Cruzeiro" },
          ],
        },
        {
          title: "6× Motores EMRAX 348",
          sub: "Propulsão Distribuída (DEP)",
          metrics: [
            { label: "Potência/Motor", value: "260 kW" },
            { label: "Potência Total", value: "1.560 kW" },
            { label: "Massa/Motor", value: "41,5 kg" },
            { label: "Tensão DC", value: "800 V" },
          ],
        },
      ],
    },
    reportDownload: {
      title: "Relatório Técnico Completo",
      meta: "96 páginas · PDF · IST 2026 · Grupo 11",
      description:
        "Inclui dimensionamento aerodinâmico, propulsão híbrida, análise de estabilidade, avaliação de ciclo de vida e estimativas de custos operacionais.",
      buttonText: "Download PDF",
    },
    teamGrid: {
      membersTitle: "Membros — Grupo 11",
      supervisorsTitle: "Orientadores",
      numberPrefix: "nº",
      titles: {
        Supervisor: "Orientador",
        "Co-Supervisor": "Coorientador",
      },
    },
    marketComparison: {
      headers: {
        mode: "Modo",
        time: "Tempo de Viagem",
        cost: "Custo / Pax",
        emissions: "Emissões CO₂",
      },
      translations: {
        // Optional data-value mappings override if your data strings are in Portuguese
        "Zero (Propulsão H₂/Elétrica)": "Zero (Propulsão H₂/Elétrica)",
        "Direto de ponto a ponto": "Direto de ponto a ponto",
      },
    },
    routeMap: {
      selectedRouteLabel: "Rota Selecionada",
      vtolLabel: "Island Hopper",
      vtolSub: "Voo direto VTOL",
      ferryLabel: "Ferry Convencional",
      ferrySub: "Média estimada",
      savingsPrefix: "O Island Hopper poupa aproximadamente",
      savingsSuffix: "de viagem nesta ligação inter-ilhas.",
      hourUnit: "h",
      minuteUnit: "min",
      minutesOnlyUnit: "minutos",
      radar: {
        online: "ATC RADAR: ONLINE",
        version: "GRID BALEARIC v1.0.2",
        simulation: "INTERVALO SIM: 1S",
        status: "SISTEMA ESTÁVEL",
      },
      translations: {
        "Maiorca a Menorca": "Maiorca a Menorca",
        "Ibiza a Maiorca": "Ibiza a Maiorca",
        "Ibiza a Formentera": "Ibiza a Formentera",
      },
    },
    emissionsCalculator: {
      comparisonTitle: "Comparação com Modos Convencionais (por voo, 7 pax)",
      perPassengerLabel: "Por passageiro",
      perFlightUnit: "kg CO₂-eq / voo",
      perPaxSubtitle: "kg/pax · Zero emissões diretas",
      airplaneLabel: "✈ Avião Convencional",
      ferryLabel: "⛴ Ferry Rápido",
      scenarios: {
        green: {
          label: "Hidrogénio Verde",
          total: 14.974,
          note: "Hidrogénio produzido por electrólise com energia renovável (solar/eólica Baleares).",
          badge: "Cenário A — Recomendado",
          breakdown: [
            {
              label: "Produção H₂ (electrólise renovável)",
              value: 6.32,
              unit: "kg CO₂-eq",
            },
            {
              label: "Produção de eletricidade (bateria)",
              value: 5.89,
              unit: "kg CO₂-eq",
            },
            {
              label: "Fabrico e manutenção (amortizado)",
              value: 2.76,
              unit: "kg CO₂-eq",
            },
          ],
        },
        grey: {
          label: "Hidrogénio Cinzento",
          total: 30.505,
          note: "Hidrogénio obtido por reforma de gás natural — tecnologia atual predominante.",
          badge: "Cenário B — Transição",
          breakdown: [
            {
              label: "Produção H₂ (reforma de gás natural)",
              value: 19.65,
              unit: "kg CO₂-eq",
            },
            {
              label: "Produção de eletricidade (bateria)",
              value: 7.84,
              unit: "kg CO₂-eq",
            },
            {
              label: "Fabrico e manutenção (amortizado)",
              value: 3.02,
              unit: "kg CO₂-eq",
            },
          ],
        },
      },
      reference: {
        airplane: { value: "18–20", perFlight: "~126–140" },
        ferry: { value: "2–4", perFlight: "~14–28" },
      },
    },
    noiseProfile: {
      advantageTitle: "Vantagem dos Ducted Fans",
      noteText:
        "Nota: Valores de SPL aproximados baseados em literatura técnica e análise de referências equivalentes (Cap. 10 do Relatório Técnico). Medições em condições padronizadas ISO 3745.",
      cards: {
        reduction: {
          value: "−8 a −10 dB",
          desc: "Redução de ruído proporcionada pelos ducted fans em relação a rotores abertos equivalentes. As condutas aerodinâmicas atuam como barreiras acústicas naturais.",
        },
        loudness: {
          value: "3× menos",
          desc: "Em termos de percepção humana de loudness (escala A-weighted), o Island Hopper é percepcionado como significativamente mais silencioso que um helicóptero urbano.",
        },
      },
      noiseData: [
        {
          label: "Avião Comercial (descolagem)",
          spl: 140,
          note: "Perto da pista",
        },
        {
          label: "Helicóptero (100 m)",
          spl: 100,
          note: "Operação urbana típica",
        },
        {
          label: "Island Hopper — VTOL (100 m)",
          spl: 85,
          note: "Pico durante descolagem vertical",
          isVTOL: true,
        },
        {
          label: "Tráfego automóvel intenso",
          spl: 80,
          note: "Referência urbana",
        },
        {
          label: "Island Hopper — Cruzeiro (300 m)",
          spl: 62,
          note: "Em altitude de cruzeiro",
          isVTOL: true,
          isCruise: true,
        },
        { label: "Conversa normal", spl: 60, note: "Referência quotidiana" },
        { label: "Residencial tranquilo", spl: 40, note: "Referência noturna" },
      ],
    },
    notFound: {
      alertLabel: "ATC ALERTA · ROTA NÃO ENCONTRADA",
      title: "Este voo não existe no nosso sistema.",
      desc: "O Island Hopper opera apenas 2 rotas. Esta não é nenhuma delas. Talvez tenhas tentado voar para Formentera? Não fazemos isso.",
      btnHome: "Regressar ao Hangar",
      btnRoutes: "Ver Rotas Disponíveis",
      log: "FLIGHT LOG: ERR_ROUTE_NOT_FOUND · IST 2026 · GRUPO 11",
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
            value: "150 km",
            label: "Range",
            desc: "Main route Ibiza–Palma de Mallorca with a 140 km stretch, covered non-stop with the hybrid Li-S + PEMFC H₂ system.",
          },
          {
            id: "speed",
            value: "306 km/h",
            label: "Cruise Speed",
            desc: "85 m/s cruising at 7 500 ft, provided by the advanced aerodynamics of the aspect ratio 9 wing and distributed electric propulsion.",
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
            desc: "Including 600 kg payload or 6 passengers.",
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
          'From the architecture selection process via AHP to the complete sizing of the Island Hopper — the Tilt-Duct aircraft with 6 distributed engines and Li-S + PEMFC H₂ hybrid propulsion.',
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
        title: "Island Hopper Sizing",
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
            value: "€91 - 135",
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
          price: "€91 - 135",
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
    navFooter: {
      home: "Home",
      project: "Project",
      concept: "Concept",
      service: "Service",
      sustainability: "Sustainability",
      contacts: "Contacts",
    },
    footer: {
      description:
        "Academic project for inter-island urban air mobility in the Balearic Islands.",
      titles: {
        navigation: "Navigation",
        institution: "Institution",
        team: "Team Members",
      },
      institution: {
        name: "Instituto Superior Técnico",
        university: "University of Lisbon",
        dateGroup: "June 2026 · Group 11",
      },
      supervisors: {
        Orientador: "Advisor",
        "Co-orientador": "Co-advisor",
      },
      copyright: "© 2026 Island Hopper. All rights reserved.",
    },
    ahp: {
      scoreLabel: "AHP score",
      prosLabel: "Pros",
      consLabel: "Cons",
      criteriaTitle: "Evaluation Criteria (9 criteria, AHP weights)",
      criteriaLabels: {
        range: "Range",
        cruiseSpeed: "Cruise Speed",
        stability: "Stability",
        cabinNoise: "Cabin Noise",
        acoustic: "Acoustic Emissions",
        fixedCosts: "Fixed Costs",
        maintenance: "Maintenance",
        pollutant: "Pollutant Emissions",
        varCosts: "Variable Costs",
      },
      architectures: {
        "tilt-duct": {
          name: "Tilt-Duct",
          description:
            "Rotors embedded in tilting aerodynamic ducts. Combines VTOL with efficient cruise, low noise, and a compact profile — ideal for urban operations.",
          pros: [
            "Significantly reduced acoustic profile — ducts mitigate rotor noise",
            "Safety: enclosed blades protect ground personnel",
            "Compact footprint — fully compatible with urban vertiports",
            "Distributed Electric Propulsion (DEP) featuring 6 independent motors",
            "Excellent aerodynamic efficiency during cruise flight",
          ],
          cons: [
            "Additional weight structural overhead from duct assemblies",
            "More complex thermal management due to enclosed motor pods",
            "High certification complexity with 6 tilting propulsor assemblies",
            "Slightly lower hovering efficiency caused by higher disc loading",
          ],
        },
        "tilt-rotor": {
          name: "Tilt-Rotor",
          description:
            "Tilting nacelles located at the wingtips. Delivers outstanding performance for long-range cruise routes, though mechanically complex with heavy hover downwash.",
          pros: [
            "Excellent range capability and cruise speeds",
            "High-altitude operational threshold (up to 25,000 ft)",
            "Proven architecture benchmark configuration (e.g., AW609)",
          ],
          cons: [
            "High mechanical complexity inside tilting actuation linkages",
            "Intense downwash velocity profile in hover requiring specialized vertiports",
            "Reduced payload-to-weight fraction ratios",
            "More demanding maintenance requirements",
          ],
        },
        "fixed-wing": {
          name: "Fixed-Wing + VTOL",
          description:
            "A standard 'Lift + Cruise' system layout featuring completely independent propulsion sets. Simple and reliable, though lifting rotors act as dead weight during cruise.",
          pros: [
            "Mechanical simplicity — eliminates complex mechanical tilting mechanisms",
            "High fault redundancy architecture through DEP design",
            "Straightforward regulatory certification framework roadmap",
            "Software-governed transit flight phase regimes",
          ],
          cons: [
            "High parasitic drag penalties from exposure of static lift rotors in cruise",
            "Vertical lift engines are unutilized dead weight during forward wing-borne flight",
            "Constrained maximum range limits and total payload capacity",
            "Lower systems efficiency across medium-distance inter-island sectors",
          ],
        },
        "tilt-wing": {
          name: "Tilt-Wing",
          description:
            "The entire wing platform (housing integrated propulsors) rotates around the lateral axis. Eliminates hover wing download, but introduces severe crosswind transition vulnerability.",
          pros: [
            "High aerodynamic transitions efficiency (accelerated slipstream over wing chord)",
            "Complete elimination of hover downwash structural download penalties",
            "Highly compact structural ground footprint storage profile",
          ],
          cons: [
            "Extremely vulnerable to sudden lateral crosswind gusts during wing rotation phases",
            "High-torque, high-weight actuator overhead demands at the wing-to-fuselage interface joint",
            "Massive pitching moment fluctuations during dynamic wing re-orientation sweeps",
            "Complex aerodynamic vehicle control laws under crosswind approach vectors",
          ],
        },
      },
    },
    specs: {
      massTabLabel: "⚖️ Mass Breakdown",
      tableHeaders: {
        component: "Component",
        mass: "Mass (kg)",
        details: "Design Details",
      },
      mtowRow: {
        label: "Total MTOW",
        value: "2,595",
        details: "Maximum Takeoff Weight",
      },
      categories: {
        dimensions: "General Dimensions",
        propulsion: "Propulsion Architecture",
        performance: "Performance Flight Envelope",
        energy: "Energy Systems",
        aerodynamics: "Aerodynamics & Stability",
      },
      items: {
        mtow: {
          label: "MTOW (Max. Takeoff Weight)",
          value: "2,595",
          unit: "kg",
        },
        length: { label: "Fuselage Length", value: "9.89", unit: "m" },
        diameter: { label: "Max Fuselage Diameter", value: "2.20", unit: "m" },
        wingspan: { label: "Main Wingspan", value: "13", unit: "m" },
        aspectRatio: { label: "Aspect Ratio (AR)", value: "9", unit: "" },
        wingArea: { label: "Wing Reference Area", value: "18.78", unit: "m²" },
        rotors: { label: "Number of Rotors/Motors", value: "6", unit: "" },
        radius: { label: "Rotor Radius", value: "1.00", unit: "m" },
        motorPower: { label: "Max Power per Motor", value: "260", unit: "kW" },
        totalPower: {
          label: "Total Installed Power",
          value: "1,560",
          unit: "kW",
        },
        motorModel: {
          label: "Selected Motor Spec",
          value: "EMRAX 348 MV",
          unit: "",
        },
        architectureType: {
          label: "Configuration Type",
          value: "Hybrid Tilt-Duct",
          unit: "",
        },
        cruiseSpeed: {
          label: "Cruise Velocity",
          value: "85",
          unit: "m/s (306 km/h)",
        },
        stallSpeed: { label: "Stall Velocity", value: "40", unit: "m/s" },
        cruiseAltitude: {
          label: "Cruise Altitude Ceiling",
          value: "2,286",
          unit: "m (7,500 ft)",
        },
        range: {
          label: "Range (Primary Mission Route)",
          value: "140",
          unit: "km",
        },
        flightDuration: {
          label: "Flight Sector Duration",
          value: "≈34",
          unit: "minutes",
        },
        capacity: {
          label: "Payload Capacity",
          value: "1 pilot + 6 passengers",
          unit: "",
        },
        totalEnergy: {
          label: "Total Mission Energy Demand",
          value: "71.66",
          unit: "kWh",
        },
        vtolEnergy: {
          label: "VTOL + Hover Segment Energy",
          value: "20.20",
          unit: "kWh",
        },
        climbEnergy: {
          label: "Climb Segment Energy Allocation",
          value: "21.60",
          unit: "kWh",
        },
        cruiseEnergy: {
          label: "Cruise Phase Energy Consumption",
          value: "32.30",
          unit: "kWh",
        },
        hybridMass: {
          label: "Hybrid Powertrain System Mass",
          value: "197.73",
          unit: "kg",
        },
        dcBusVoltage: {
          label: "DC Bus Operating Voltage",
          value: "800",
          unit: "V",
        },
        wingAirfoil: {
          label: "Main Wing Airfoil Profile",
          value: "NACA 4412",
          unit: "",
        },
        canardAirfoil: {
          label: "Canard & Tail Airfoil Section",
          value: "NACA 0015",
          unit: "",
        },
        taperRatio: { label: "Taper Ratio (λ)", value: "0.40", unit: "" },
        sweepAngle: {
          label: "Leading-Edge Sweep Angle",
          value: "2.73°",
          unit: "",
        },
        staticMargin: {
          label: "Aircraft Static Margin (SM)",
          value: "11.2%",
          unit: "",
        },
        cmAlpha: {
          label: "Pitching Moment Derivative (CMα)",
          value: "-0.75",
          unit: "/°",
        },
      },
      massBreakdown: {
        passengers: {
          name: "Passengers & Pilot",
          mass: "700.0",
          details: "7 × 100 kg (incl. baggage limits)",
        },
        fuselage: {
          name: "Fuselage Structure",
          mass: "612.75",
          details:
            "300.45 kg (carbon composite) + 312.3 kg (structural metal frame)",
        },
        mainWing: {
          name: "Main Wing Assembly",
          mass: "273.0",
          details: "13 kg/m² wing loading × 21 m² structural envelope",
        },
        ducts: {
          name: "Duct Cells (6 assemblies)",
          mass: "300.0",
          details:
            "20 kg rotor assembly + 15 kg structural duct ring + 15 kg dynamic tilt actuator",
        },
        motors: {
          name: "Electric Motor Drives (6)",
          mass: "249.0",
          details: "6 × 41.5 kg units (EMRAX 348 powerheads)",
        },
        fuelCell: {
          name: "Hydrogen Fuel Cell System",
          mass: "139.36",
          details: "200 kW PEMFC stack + gaseous H₂ storage configuration",
        },
        canard: {
          name: "Canard Surface",
          mass: "85.0",
          details: "Forward lifting aerodynamic plane assembly",
        },
        battery: {
          name: "Li-S Energy Storage Battery",
          mass: "58.37",
          details: "26.26 kWh core buffer rated @ 0.45 kWh/kg grid",
        },
        avionics: {
          name: "Core Systems & Avionics",
          mass: "70.0",
          details:
            "Fly-by-wire flight control arrays and primary navigation arrays",
        },
        tail: {
          name: "Empennage Group (T-tail)",
          mass: "70.0",
          details:
            "Vertical stabilizer structural box and rudder surface control linkage",
        },
        cabling: {
          name: "High-Voltage DC Cabling",
          mass: "37.7",
          details:
            "800 V DC distribution bus harness — 60 m conductor path run",
        },
      },
      phases: {
        p1: { label: "Vertical Takeoff", type: "Vertical Climb" },
        p2: { label: "Hover (Takeoff Phase)", type: "Stationary Hover" },
        p3: { label: "Transition Climb", type: "Vector Climb (5°)" },
        p4: { label: "Main Cruise Phase", type: "Aerodynamic Cruise" },
        p5: { label: "Transition Descent", type: "Vector Descent (−5°)" },
        p6: { label: "Hover (Approach Phase)", type: "Stationary Hover" },
        p7: { label: "Vertical Landing", type: "Vertical Descent" },
      },
    },
    profileSection: {
      energyTitle: "Energy Consumption per Mission Phase",
      energyBreakdown: {
        vtol: { label: "VTOL + Hover Segments", value: "20.20 kWh" },
        climb: { label: "Climb Phase", value: "21.60 kWh" },
        cruise: { label: "Cruise Profile", value: "32.30 kWh" },
        descent: { label: "Descent & Landing", value: "2.44 kWh (regenerative)" },
      },
      timelineLabels: {
        altitude: "Altitude",
        velocity: "Velocity",
        duration: "Duration",
        distance: "Distance",
      },
      summary: {
        totalLabel: "Total Mission Profile Allocation",
        totalValue: "71.66 kWh",
        durationLabel: "Total block duration",
        durationValue: "≈34 min",
        distanceLabel: "Total mission distance",
        distanceValue: "140 km",
      },
      phases: {
        p1: { label: "Vertical Takeoff", type: "Vertical Climb" },
        p2: { label: "Hover (Takeoff)", type: "Stationary Hover" },
        p3: { label: "Climb Transition", type: "Climb (5° Profile)" },
        p4: { label: "Aerodynamic Cruise", type: "Main Cruise Phase" },
        p5: { label: "Descent Transition", type: "Descent (−5° Profile)" },
        p6: { label: "Hover (Approach)", type: "Stationary Hover" },
        p7: { label: "Vertical Landing", type: "Vertical Descent" },
      },
    },
    powertrainDiagram: {
      proa: "▲  FORE (NOSE)",
      cauda: "▼  AFT (TAIL)",
      canard: "FORWARD CANARD",
      asaPrincipal: "MAIN WING BOX",
      ttail: "T-TAIL ASSEMBLY",
      bordoEsquerdo: "◄  PORT SIDE (LEFT)",
      bordoDireito: "STARBOARD SIDE (RIGHT)  ►",
      envergadura: "↔  Wingspan: 13 m",
      fuselagem: "Fuselage Length: 9.89 m",
      caption:
        'Top schematic layout view — Island Hopper hybrid powertrain architecture (not to scale) · Ch. 7 Report',
      legendTitle: "MAP KEY",
      legendLabel: "Canard · Wing · T-tail",
      labels: {
        avionica: "AVIONICS BAY",
        bmsFcs: "BMS · FCS GRID",
        controloVoo: "Primary Flight Ctrl",
        bateria: "Batt.",
        lis: "Li-S Array",
        massaBat: "58 kg pack",
        tanque: "H₂ Storage",
        massaTanque: "39 kg cell",
        gestaoTermica: "Thermal Exhaust Management",
        pemfc: "H₂ PEMFC Core",
        metricaPemfc: "200 kW · 100 kg",
        barramento: "800V High-Voltage DC Bus",
        conv: "Conv.",
        hvx2: "HV ×2 Split",
        dcdc: "DC/DC Buck",
        computador: "Main Computer",
        fmsGnss: "FMS · GNSS Core",
      },
      items: [
        { color: "#22c55e", label: "Avionics System / BMS / FCS" },
        { color: "#3b82f6", label: "Li-S Battery Buffer (58 kg)" },
        { color: "#0ea5e9", label: "Gaseous H₂ Tank (39 kg)" },
        { color: "#0d9488", label: "200 kW PEMFC Stack Fuel Cell" },
        { color: "#f97316", label: "800V DC Bus / HV Converters" },
        { color: "#a855f7", label: "Integrated Flight Computer" },
        { color: "#10b981", label: "EMRAX 348 MV Outrunners (×6)" },
        { color: "#f59e0b", label: "High-Voltage Harness Paths" },
      ],
    },
    propulsionSystem: {
      comparisonTitle: "Weight Comparison: Hybrid vs. All-Electric Alternative",
      selectedLabel: "Hybrid Powertrain (Selected Design)",
      hybridValue: "197.73 kg",
      hybridSub: "Li-S Buffer (58.37) + PEMFC Stack (100) + H₂ Fuel (39.36)",
      electricLabel: "Pure Battery Electric",
      electricValue: "329.89 kg",
      electricSub: "Battery-only configuration — 67% higher weight envelope",
      savingsText:
        "Weight reduction of <strong>132.16 kg</strong> achieved via hybrid architecture — effectively enabling one additional passenger payload sector capacity.",
      cards: [
        {
          title: "Li-S Battery Pack",
          sub: "VTOL Phases + Power Transients",
          metrics: [
            { label: "Mass", value: "58.37 kg" },
            { label: "Energy Capacity", value: "26.26 kWh" },
            { label: "Specific Density", value: "0.45 kWh/kg" },
            { label: "Mission Stages", value: "Takeoff + Vertical Hover" },
          ],
        },
        {
          title: "Hydrogen Fuel Cell (PEMFC)",
          sub: "Steady Cruise + Climb Vectors",
          metrics: [
            { label: "Power Output", value: "200 kW" },
            { label: "PEMFC Stack Mass", value: "100 kg" },
            { label: "H₂ Gas Storage", value: "39.36 kg" },
            { label: "Mission Stages", value: "Climb Segment + Cruise" },
          ],
        },
        {
          title: "6× EMRAX 348 Systems",
          sub: "Distributed Electric Propulsion (DEP)",
          metrics: [
            { label: "Power per Unit", value: "260 kW" },
            { label: "Total Power Rating", value: "1,560 kW" },
            { label: "Mass per Unit", value: "41.5 kg" },
            { label: "DC Link Voltage", value: "800 V" },
          ],
        },
      ],
    },
    reportDownload: {
      title: "Complete Technical Report",
      meta: "96 pages · PDF · IST 2026 · Group 11",
      description:
        "Includes aerodynamic sizing parameters, hybrid propulsion system optimization, stability analysis calculations, life cycle assessment, and comprehensive operational cost estimates.",
      buttonText: "Download PDF",
    },
    teamGrid: {
      membersTitle: "Team Members — Group 11",
      supervisorsTitle: "Academic Advisors",
      numberPrefix: "No.",
      titles: {
        Supervisor: "Advisor",
        "Co-Supervisor": "Co-Advisor",
      },
    },
    marketComparison: {
      headers: {
        mode: "Transport Mode",
        time: "Travel Duration",
        cost: "Cost / Pax",
        emissions: "CO₂ Emissions",
      },
      translations: {
        // mode names
        "Avião Convencional": "Commercial Airliner",
        "Ferry Rápido": "High-Speed Ferry",
        "Helicóptero": "Helicopter",
        "Island Hopper (VTOL)": "Island Hopper (VTOL)",
        // travel times
        "35–40 min (≈2–3 h c/ aeroporto)": "35–40 min (≈2–3 h with airport)",
        "35–45 min (+10 min embarque)": "35–45 min (+10 min boarding)",
        "33–35 min (+10 min embarque)": "33–35 min (+10 min boarding)",
        // emissions
        "≈27–85 kg CO₂ + ruído elevado": "≈27–85 kg CO₂ + high noise",
        "≈15 kg CO₂-eq (H₂ verde + rede local)": "≈15 kg CO₂-eq (green H₂ + local grid)",
        // notes
        "Custo proibitivo e impacto sonoro significativo": "Prohibitive cost and significant noise impact",
        "Zero emissões diretas em voo": "Zero direct in-flight emissions",
      },
    },
    routeMap: {
      selectedRouteLabel: "Selected Flight Path",
      vtolLabel: "Island Hopper",
      vtolSub: "Direct VTOL Flight Cruise",
      ferryLabel: "Conventional Ferry",
      ferrySub: "Estimated average travel transit",
      savingsPrefix: "The Island Hopper saves approximately",
      savingsSuffix: "of travel transit time across this regional island link.",
      hourUnit: "h",
      minuteUnit: "m",
      minutesOnlyUnit: "minutes",
      radar: {
        online: "ATC RADAR: ONLINE",
        version: "GRID BALEARIC v1.0.2",
        simulation: "SIMULATION INTERVAL: 1S",
        status: "SYSTEM STABLE",
      },
      translations: {
        "Maiorca a Menorca": "Mallorca to Menorca",
        "Ibiza a Maiorca": "Ibiza to Mallorca",
        "Ibiza a Formentera": "Ibiza to Formentera",
      },
    },
    emissionsCalculator: {
      comparisonTitle:
        "Benchmark Comparison with Conventional Transit (Per Flight, 7 Pax)",
      perPassengerLabel: "Per Passenger",
      perFlightUnit: "kg CO₂-eq / flight",
      perPaxSubtitle: "kg/pax · Zero direct tailpipe emissions",
      airplaneLabel: "✈ Regional Commercial Jet",
      ferryLabel: "⛴ High-Speed Marine Ferry",
      scenarios: {
        green: {
          label: "Green Hydrogen",
          total: 14.974,
          note: "Hydrogen produced via clean water electrolysis powered by dedicated regional solar/wind arrays in the Balearics.",
          badge: "Scenario A — Recommended Strategy",
          breakdown: [
            {
              label: "H₂ Production (Renewable Electrolysis)",
              value: 6.32,
              unit: "kg CO₂-eq",
            },
            {
              label: "Electricity Generation (Battery Buffer)",
              value: 5.89,
              unit: "kg CO₂-eq",
            },
            {
              label: "Airframe Manufacturing & Maintenance (Amortized)",
              value: 2.76,
              unit: "kg CO₂-eq",
            },
          ],
        },
        grey: {
          label: "Grey Hydrogen",
          total: 30.505,
          note: "Hydrogen extracted via Steam Methane Reforming (SMR) of natural gas — representing standard current supply chains.",
          badge: "Scenario B — Transitional Matrix",
          breakdown: [
            {
              label: "H₂ Production (Steam Methane Reforming)",
              value: 19.65,
              unit: "kg CO₂-eq",
            },
            {
              label: "Electricity Generation (Battery Buffer)",
              value: 7.84,
              unit: "kg CO₂-eq",
            },
            {
              label: "Airframe Manufacturing & Maintenance (Amortized)",
              value: 3.02,
              unit: "kg CO₂-eq",
            },
          ],
        },
      },
      reference: {
        airplane: { value: "18–20", perFlight: "~126–140" },
        ferry: { value: "2–4", perFlight: "~14–28" },
      },
    },
    noiseProfile: {
      advantageTitle: "Acoustic Advantage of Ducted Fan Assemblies",
      noteText:
        "Note: Approximate Sound Pressure Level (SPL) matrix configured from technical literature baselines and equivalent reference frameworks (Tech Report Ch. 10). Conditions benchmarked under ISO 3745 testing standards.",
      cards: {
        reduction: {
          value: "−8 to −10 dB",
          desc: "Noise mitigation achieved by integrating custom ducted fan shrouding over open blade configurations. The structural cowlings function as built-in acoustic barriers.",
        },
        loudness: {
          value: "3× quieter",
          desc: "Based on human loudness perception frameworks (A-weighted decibel arrays), the Island Hopper is registered as distinctly less intrusive than a conventional urban helicopter footprint.",
        },
      },
      noiseData: [
        {
          label: "Commercial Airliner (Takeoff)",
          spl: 140,
          note: "Proximate to runway threshold",
        },
        {
          label: "Conventional Helicopter (100 m)",
          spl: 100,
          note: "Standard low-altitude urban mission envelope",
        },
        {
          label: "Island Hopper — VTOL (100 m)",
          spl: 85,
          note: "Transient power spike during vertical lift stage",
          isVTOL: true,
        },
        {
          label: "Dense Vehicle Traffic",
          spl: 80,
          note: "Metropolitan urban environment benchmark",
        },
        {
          label: "Island Hopper — Cruise (300 m)",
          spl: 62,
          note: "Steady-state cruise altitude footprint",
          isVTOL: true,
          isCruise: true,
        },
        {
          label: "Normal Conversation",
          spl: 60,
          note: "Everyday ambient benchmark",
        },
        {
          label: "Quiet Residential Area",
          spl: 40,
          note: "Nighttime ambient benchmark",
        },
      ],
    },
    notFound: {
      alertLabel: "ATC ALERT · ROUTE NOT FOUND",
      title: "This flight does not exist in our system.",
      desc: "Island Hopper only operates 2 routes. This isn't one of them. Maybe you tried to fly to Formentera? We don't do that.",
      btnHome: "Return to Hangar",
      btnRoutes: "View Available Routes",
      log: "FLIGHT LOG: ERR_ROUTE_NOT_FOUND · IST 2026 · GROUP 11",
    },
  },
};

export type Language = keyof typeof dictionaries;
