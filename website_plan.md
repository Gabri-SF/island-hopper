 1      📋 Plano de Arquitectura — Website Island Hopper                                                
    2                                                                                                      
    3     ## Visão Geral                                                                                   
    4                                                                                                      
    5     Website multi-página em Next.js 16 (App Router), TypeScript, Tailwind CSS v4,                    
    6     escrito inteiramente em Português, com estrutura modular em  /components .                       
    7                                                                                                      
    8     O conteúdo é extraído do relatório técnico  g11_report.pdf  (96 páginas, Grupo 11, IST 2026).    
          ──────                                                                                           
   12     ## Estrutura de Ficheiros Final                                                                  
   13                                                                                                      
   15       src/                                                                                           
   16       ├── app/                                                                                       
   17       │   ├── layout.tsx               # Root layout (Navbar + Footer compartilhados)                
   18       │   ├── globals.css              # Tailwind v4 + Geist Mono + tokens globais                   
   19       │   ├── page.tsx                 # Landing page (já implementada - não tocar)                  
   20       │   │                                                                                          
   21       │   ├── project/                 # /project                                                    
   22       │   │   └── page.tsx             # Sobre o Projeto                                             
   23       │   │                                                                                          
   24       │   ├── concept/                 # /concept                                                    
   25       │   │   └── page.tsx             # O Conceito Técnico                                          
   26       │   │                                                                                          
   27       │   ├── service/                 # /service                                                    
   28       │   │   └── page.tsx             # O Serviço (rotas, missão)
   29       │   │                                                                                          
   30       │   ├── sustainability/          # /sustainability                                             
   31       │   │   └── page.tsx             # Sustentabilidade                                            
   32       │   │                                                                                          
   33       │   └── contacts/                # /contacts                                                   
   34       │       └── page.tsx             # Contactos                                                   
   35       │                                                                                              
   36       ├── components/                                                                                
   37       │   ├── layout/                                                                                
   38       │   │   ├── Navbar.tsx           # Navegação principal (sticky, mobile-friendly)               
   39       │   │   └── Footer.tsx           # Footer com links e créditos académicos                      
   40       │   │                                                                                          
   41       │   ├── ui/                                                                                    
   42       │   │   ├── SectionHeader.tsx    # Título + subtítulo de secção reutilizável                   
   43       │   │   ├── StatCard.tsx         # Card de métrica/KPI                                         
   44       │   │   ├── InfoCard.tsx         # Card de informação genérico                                 
   45       │   │   ├── DataTable.tsx        # Tabela de dados estilizada                                  
   46       │   │   ├── TimelineStep.tsx     # Passo de timeline (perfil de missão)                        
   47       │   │   └── Badge.tsx            # Badge de destaque (labels)                                  
   48       │   │                                                                                          
   49       │   └── sections/                # Secções específicas de página                               
   50       │       ├── project/                                                                           
   51       │       │   ├── TeamGrid.tsx     # Grid com membros da equipa + supervisores                   
   52       │       │   └── ReportDownload.tsx # CTA para download do PDF                                  
>  53       │       │     

54       │       ├── concept/                                                                           
   55       │       │   ├── ArchitectureComparison.tsx  # 4 configurações (TR/TW/TD/FW)                    
   56       │       │   ├── AHPExplorer.tsx             # Scores interativos AHP                           
   57       │       │   ├── AircraftSpecs.tsx           # Parâmetros técnicos (MTOW, asa, etc.)            
   58       │       │   ├── PropulsionSystem.tsx        # Híbrido Li-S + PEMFC + motores                   
   59       │       │   └── MissionProfile.tsx          # Perfil de voo animado (7 fases)                  
   60       │       │                                                                                      
   61       │       ├── service/                                                                           
   62       │       │   ├── RouteMap.tsx     # Mapa SVG interativo (já existe na landing)                  
   63       │       │   └── MarketComparison.tsx  # Tabela ferry vs avião vs VTOL                          
   64       │       │                                                                                      
   65       │       └── sustainability/                                                                    
   66       │           ├── EmissionsCalculator.tsx  # Comparação green H2 vs grey H2                      
   67       │           └── NoiseProfile.tsx         # SPL e comparações de ruído                          
   68       │                                                                                              
   69       └── lib/                                                                                       
   70           └── data/                                                                                  
   71               ├── team.ts              # Membros e supervisores do Grupo 11                          
   72               ├── specs.ts             # Especificações técnicas do Mega-Duct                        
   73               ├── routes.ts            # Dados das rotas Baleares (já usados)                        
   74               └── ahp.ts               # Scores AHP e critérios                                      
   75       ──────                           


   ## Páginas — Conteúdo Detalhado                                                                  
   80                                                                                                      
   81     ### 🏠  /  — Landing Page (existente, não alterar)                                               
                                                                                                           
   82     │ Já implementada com hero, mapa radar, cards do conceito, KPIs e footer da equipa.              
          ──────                                                                                           
          ### 📁  /project  — O Projeto                                                                    
   83                                                                                                      
   87     Baseado em: Cap. 1 (Introdução), Cap. 2.1 (Mercado), páginas 1 e 9-11 do PDF                     
   88                                                                                                      
          Conteúdo:                                                                                        
                                                                                                           
   90     • Hero da página — "O Projeto Island Hopper" com badge IST 2026                                  
   91     • Contexto académico — Unidade curricular, instituto, orientadores                               
   92     • Motivação — Problema de transporte inter-ilhas (oportunidade UAM Baleares)                     
   93     • Objetivos do projeto — 3 objetivos principais (eletrificação, alternativa limpa, zero CO₂)     
   94     • A Equipa — Grid com 9 membros (nome + nº mecanográfico) + 3 supervisores                       
   95     • Download do Relatório — Botão de download do  g11_report.pdf  com descrição                    
          ──────                                                                                           
          ### ⚙️  /concept  — O Conceito                                                                   
   96                                                                                                      
  100     Baseado em: Cap. 3 (UAM Global), Cap. 4 (ConOps), Cap. 5 (ADT), Cap. 6 (Aerodinâmica), Cap. 7    
          (Propulsão), Cap. 8 (CAD), Cap. 9 (Estabilidade)                                                 
> 101                                                                                    

103     1. As 4 Arquiteturas Estudadas — Fixed-Wing VTOL, Tilt-Rotor, Tilt-Wing, Tilt-Duct               
  104         • Para cada: descrição, vantagens/desvantagens, exemplos reais (Joby S4, AW609, Lilium, Bell 
              Nexus)                                                                                       
  106     2. Seleção via AHP — Painel interativo mostrando os critérios e scores finais                    
  107         • Tilt-Duct: 0.279 | Fixed-Wing: 0.256 | Tilt-Rotor: 0.265 | Tilt-Wing: 0.195                
  109     3. Dimensionamento do "Mega-Duct" — Especificações técnicas chave:                               
  110         • MTOW: 2.595 kg | Envergadura: 13m | AR: 9 | Área: 18,78 m²                                 
  111         • 6 motores (EMRAX 348, 260 kW cada) | Perfil NACA 4412                                      
  113     4. Perfil de Missão — Timeline visual das 7 fases de voo:                                        
  114         • Descolagem vertical → Hover → Subida → Cruzeiro → Descida → Hover → Aterragem              
  116     5. Sistema de Propulsão Híbrido — Diagrama explicativo:                                          
  117         • Bateria Li-S: 58,37 kg (VTOL + transientes)                                                
  118         • PEMFC H₂: 100 kg + 39,36 kg armazenamento (cruzeiro + subida)                              
  119         • Total: 197,73 kg (vs 329,89 kg all-electric)                                               
  121     6. Aerodinâmica e Estabilidade — Resultados XFLR5:                                               
  122         • Margem estática: 11,2% | CMα: -0,75/° | Clβ: -0,14/°                                       
  123                                                                                                      
  124     ──────                                                                                           
  126     ### 🗺️  /service  — O Serviço      

  127     Baseado em: Cap. 2 (Mercado), Cap. 4.1 (ConOps), Cap. 11.2.1 (Custos operacionais)               
  128                                                                                                      
          Conteúdo:                                                                                        
                                                                                                           
  130     1. O Mercado-Alvo — 1,26M residentes + 19M turistas (2025), segmento premium                     
  131     2. As Rotas — Mapa interativo (reutilizar RouteMap da landing)                                   
  132         • Rota 1: Ibiza (IBZ) → Palma de Mallorca (PMI) — 140 km — ~33 min                           
  133         • Rota 2: Palma de Mallorca (PMI) → Menorca (MAH) — 132 km — ~31 min                         
  134     3. Comparação de Modos de Transporte — Tabela (ferry / avião / helicóptero / VTOL)               
  135         • Tempo, custo/pax, emissões CO₂                                                             
  136     4. Estimativa de Preço de Bilhete — ~$136,5/passageiro com margem 50%                            
  137     5. Condições de Operação — Verão, vento médio 11,6 km/h, alta visibilidade                       
          ──────                                                                                           
          ### 🌱  /sustainability  — Sustentabilidade                                                      
  138                                                                                                      
  142     Baseado em: Cap. 10 (Emissões & Ruído), Cap. 12 (Conclusão)                                      
  143                                                                                                      
          Conteúdo:                                                                                        
                                                                                                           
  145     1. Missão Ambiental — Zero emissões diretas em voo                                               
  146     2. Análise de Ciclo de Vida (LCA) — Pegada de carbono por voo:                                   
  147         • Cenário A (Hidrogénio Verde): 14,974 kg CO₂-eq/voo                                         
  148         • Cenário B (Hidrogénio Cinzento): 30,505 kg CO₂-eq/voo                                      
> 149         • vs Avião convencional: ~18-20 kg CO₂ POR PASSAGEIRO   



3. Calculadora de Emissões — Toggle interativo verde vs cinzento                                 
  151     4. Ruído — SPL: pico próximo do avião durante VTOL, muito menor em cruzeiro                      
  152         • Benefícios dos ducted fans: redução de 8-10 dB vs rotores abertos                          
  153     5. Visão Futura — Rede de hidrogénio verde + grid renovável Baleares                             
          ──────                                                                                           
          ### 📬  /contacts  — Contactos                                                                   
  154                                                                                                      
  155     Conteúdo:                                                                                        
  156                                                                                                      
  159     • Mensagem de apresentação: projeto académico, aberto a feedback                                 
  160     • Lista da equipa com emails (placeholder) / LinkedIn (placeholder)                              
  161     • Supervisores e instituição (IST, Universidade de Lisboa)                                       
  162     • Formulário de contacto (UI sem backend, estado local)                                          
  163     • Links: Download PDF, GitHub (placeholder)                                                      
          ──────                                                                                           
  167     ## Componentes Partilhados                                                                       
  168                                                                                                      
          ###  Navbar.tsx                                                                                  
                                                                                                           
  170     • Logo "IH" + nome                                                                               
  171     • Links: Início / Projeto / Conceito / Serviço / Sustentabilidade / Contactos                    
  172     • Indicador de página activa                                                                     
  173     • Sticky com backdrop blur (já existe no landing, extrair para componente)                       
  174     • Mobile: menu hamburger       
175                                                                                                      
          ###  Footer.tsx                                                                                  
                                                                                                           
  177     • Logo + copyright                                                                               
  178     • Links de navegação                                                                             
  179     • Créditos: IST 2026, Grupo 11                                                                   
  180     • Badge "Desenvolvido com Next.js 16 + Tailwind v4"                                              
          ──────                                                                                           
  184     ## Paleta de Cores e Design                                                                      
  185                                                                                                      
  186     Consistente com o landing page:                                                                  
                                                                                                           
  187     • Fundo:  zinc-950                                                                               
  188     • Acentos:  emerald-400/500  (principal),  cyan-400  (secundário)                                
  189     • Texto:  zinc-50  /  zinc-400                                                                   
  190     • Cards:  zinc-900  com border  zinc-800                                                         
  191     • Perigo/Problema:  red-500/10                                                                   
  192     • Sucesso/Solução:  emerald-500/10                                                               
  193     • Fonte: Geist Mono (configurada no layout)                                                      
          ──────                                                                                           
  197     ## Ordem de Implementação Sugerida                                                               
  198                                                                                                      
  199     1. Layout global —  Navbar.tsx  +  Footer.tsx  + atualizar  layout.tsx                           
  200     2. Componentes UI —  SectionHeader ,  StatCard ,  InfoCard ,  DataTable ,  Badg
201     3. Dados —  lib/data/  (team, specs, routes, ahp)                                                
  202     4. Página  /project  — Mais simples, boa para começar                                            
  203     5. Página  /service  — Reutiliza RouteMap existente                                              
  204     6. Página  /concept  — A mais rica em conteúdo técnico                                           
  205     7. Página  /sustainability  — Dados de emissões e ruído                                          
  206     8. Página  /contacts  — Formulário + info da equipa                                              
          ──────                                                                                           
  210     ## Notas Técnicas                                                                                
  211                                                                                                      
  212     • Todas as páginas usam  "use client"  onde necessário para interatividade                       
  213     • Dados hardcoded em  lib/data/*.ts  (sem CMS por agora)                                         
  214     • O PDF permanece em  /public/g11_report.pdf  para download direto                               
  215     • Manter a  page.tsx  do landing intacta                                                         
> 216     • Remover os ficheiros  guide  das pastas de rotas após implementação  
