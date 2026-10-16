export type PortfolioLocale = "en" | "es";

type Project = {
  number: string;
  status: string;
  title: string;
  description: string;
  outcome: string;
  tags: string[];
};

export type LabScenario = {
  id: string;
  label: string;
  signal: string;
  title: string;
  challenge: string;
  decision: string;
  flow: string[];
  properties: { label: string; value: string }[];
};

type MapNode = {
  id: string;
  label: string;
  title: string;
  description: string;
};

export type PortfolioContent = {
  availability: string;
  nav: { work: string; lab: string; practice: string };
  hero: { kicker: string; title: string; emphasis: string; body: string; primaryCta: string; secondaryCta: string; proof: string[] };
  map: { label: string; status: string; diagramLabel: string; selectedLabel: string; nodes: MapNode[] };
  work: { eyebrow: string; title: string; note: string; projects: Project[] };
  lab: { eyebrow: string; title: string; body: string; scenarioLabel: string; challengeLabel: string; decisionLabel: string; systemLabel: string; propertiesLabel: string; scenarios: LabScenario[] };
  practice: { eyebrow: string; title: string; body: string; practices: { title: string; description: string }[] };
  closing: { title: string; body: string; contactLabel: string };
  footer: string;
};

export const portfolioContent: Record<PortfolioLocale, PortfolioContent> = {
  en: {
    availability: "AVAILABLE FOR SENIOR ENGINEERING CONVERSATIONS",
    nav: { work: "Work", lab: "Lab", practice: "Practice" },
    hero: {
      kicker: "MARCOS VISSIO / FULL-STACK ENGINEERING",
      title: "I turn product pressure into",
      emphasis: "systems teams can ship.",
      body: "Senior full-stack engineering, pragmatic architecture, and hands-on technical leadership for products that need to move without losing their shape.",
      primaryCta: "See selected work",
      secondaryCta: "Run the architecture lab",
      proof: ["Product-minded delivery", "Architecture with trade-offs", "Leadership in the details"],
    },
    map: {
      label: "PORTFOLIO MAP / EXPLORE THE SYSTEM",
      status: "INTERACTIVE OVERVIEW",
      diagramLabel: "Portfolio paths diagram",
      selectedLabel: "Selected path",
      nodes: [
        { id: "portfolio", label: "Portfolio", title: "A clear entry point for the work.", description: "A short positioning statement gives visitors context, then routes them to the right kind of evidence: a case, a live application, a lab, or an architecture pattern." },
        { id: "cases", label: "Case studies", title: "Context before claims.", description: "Approved case studies can show the problem, role, constraints, decisions, and outcome without exposing confidential client or employer details." },
        { id: "apps", label: "Live apps", title: "Make the work inspectable.", description: "Public applications and demos provide a direct path from the portfolio to something visitors can use, explore, and evaluate." },
        { id: "labs", label: "Architecture labs", title: "Turn technical judgment into interaction.", description: "Hands-on labs expose trade-offs, system shapes, and delivery choices in a way a static technology list cannot." },
        { id: "aws", label: "AWS patterns", title: "Explain the cloud through decisions.", description: "Cloud patterns can be organized around edge delivery, APIs, events, data, and observability, with public-safe examples instead of unverified claims." },
      ],
    },
    work: {
      eyebrow: "01 / SELECTED WORK",
      title: "Proof should be something you can inspect.",
      note: "Professional case studies are added only when their context and publication permission are confirmed. The lab below is a public, functional demonstration.",
      projects: [
        {
          number: "01",
          status: "LIVE INTERACTIVE LAB",
          title: "Architecture Trade-off Simulator",
          description: "A working systems-design lab that makes architecture choices visible: select a product constraint and inspect the resulting flow, operational properties, and rationale.",
          outcome: "Built to demonstrate how technical decisions change with the problem — not as a decorative diagram.",
          tags: ["TypeScript", "Systems design", "Interactive UI"],
        },
        {
          number: "02",
          status: "NEXT LAB",
          title: "Delivery Signal Board",
          description: "A functional product-delivery workspace is being shaped to explore technical risk, release readiness, and decision ownership.",
          outcome: "Planned as a public-safe lab; no client or employer data is used.",
          tags: ["Product delivery", "Quality signals", "Engineering leadership"],
        },
      ],
    },
    lab: {
      eyebrow: "02 / FUNCTIONAL DEMONSTRATOR",
      title: "Architecture is a response to constraints.",
      body: "Choose a product signal. The lab updates the system shape and explains the decision behind it.",
      scenarioLabel: "Product signal",
      challengeLabel: "The challenge",
      decisionLabel: "The design move",
      systemLabel: "System flow",
      propertiesLabel: "What this optimizes for",
      scenarios: [
        {
          id: "launch",
          label: "New product launch",
          signal: "FAST LEARNING",
          title: "Ship the core before scaling the surface area.",
          challenge: "The product needs fast feedback, a coherent domain model, and an operating model a small team can own.",
          decision: "Start with a modular core and explicit boundaries. Keep deployment simple; make the seams ready for extraction only when evidence demands it.",
          flow: ["Web app", "API boundary", "Modular core", "Relational data"],
          properties: [{ label: "Speed to learn", value: "High" }, { label: "Operational load", value: "Low" }, { label: "Change safety", value: "Explicit modules" }],
        },
        {
          id: "peak",
          label: "Demand spike",
          signal: "RESILIENCE",
          title: "Protect the transaction; absorb the burst.",
          challenge: "A narrow part of the journey becomes hot while downstream work should not make the customer wait or put the core transaction at risk.",
          decision: "Separate synchronous confirmation from asynchronous work. Add a durable queue, observable consumers, and idempotent boundaries around side effects.",
          flow: ["Web app", "Transactional API", "Event queue", "Workers + integrations"],
          properties: [{ label: "Burst handling", value: "Buffered" }, { label: "Failure isolation", value: "Queued" }, { label: "Traceability", value: "Events" }],
        },
        {
          id: "expansion",
          label: "Regional expansion",
          signal: "CONTROLLED SCALE",
          title: "Add locality without multiplying ambiguity.",
          challenge: "The same product must respect regional requirements while keeping shared behavior and deployment practices understandable.",
          decision: "Make tenancy and regional policy explicit at the edge. Keep shared domain logic central, then add regional data and delivery boundaries where they earn their cost.",
          flow: ["Edge policy", "Regional API", "Shared domain", "Regional data"],
          properties: [{ label: "Regional control", value: "Explicit" }, { label: "Shared logic", value: "Central" }, { label: "Growth path", value: "Incremental" }],
        },
      ],
    },
    practice: {
      eyebrow: "03 / HOW I WORK",
      title: "Useful systems are more than a stack.",
      body: "The strongest work joins product context, technical judgment, and delivery discipline. These are the areas I bring to the table.",
      practices: [
        { title: "Build", description: "Full-stack delivery across web interfaces, APIs, data boundaries, and the quality practices that keep change safe." },
        { title: "Design", description: "Architecture that makes trade-offs visible, keeps options open, and earns complexity only when the product needs it." },
        { title: "Lead", description: "Technical discovery, clear decision-making, and collaboration that turns ambiguous work into momentum." },
      ],
    },
    closing: { title: "The next case study can be a real conversation.", body: "Professional case studies and contact routes will be added once their wording and publication scope are confirmed.", contactLabel: "Selected work in progress" },
    footer: "MARCOS VISSIO — ENGINEERING PORTFOLIO / 2026",
  },
  es: {
    availability: "DISPONIBLE PARA CONVERSACIONES DE INGENIERÍA SENIOR",
    nav: { work: "Trabajo", lab: "Lab", practice: "Práctica" },
    hero: {
      kicker: "MARCOS VISSIO / INGENIERÍA FULL STACK",
      title: "Transformo presión de producto en",
      emphasis: "sistemas que los equipos pueden entregar.",
      body: "Ingeniería full stack senior, arquitectura pragmática y liderazgo técnico hands-on para productos que deben avanzar sin perder su forma.",
      primaryCta: "Ver trabajo seleccionado",
      secondaryCta: "Probar el lab de arquitectura",
      proof: ["Ejecución con foco en producto", "Arquitectura con trade-offs", "Liderazgo en los detalles"],
    },
    map: {
      label: "MAPA DEL PORTFOLIO / EXPLORAR EL SISTEMA",
      status: "VISTA INTERACTIVA",
      diagramLabel: "Diagrama de recorridos del portfolio",
      selectedLabel: "Recorrido seleccionado",
      nodes: [
        { id: "portfolio", label: "Portfolio", title: "Un punto de entrada claro para el trabajo.", description: "Una propuesta breve da contexto y después dirige a la evidencia adecuada: un caso, una aplicación en vivo, un lab o un patrón de arquitectura." },
        { id: "cases", label: "Casos técnicos", title: "Contexto antes que afirmaciones.", description: "Los casos aprobados pueden mostrar el problema, el rol, las restricciones, las decisiones y el resultado sin exponer información confidencial de clientes o empleadores." },
        { id: "apps", label: "Apps en vivo", title: "Hacer que el trabajo se pueda inspeccionar.", description: "Las aplicaciones y demos públicas crean un recorrido directo desde el portfolio hacia algo que las personas pueden usar, explorar y evaluar." },
        { id: "labs", label: "Labs de arquitectura", title: "Convertir criterio técnico en interacción.", description: "Los labs prácticos muestran trade-offs, formas de sistema y decisiones de entrega de un modo que una lista estática de tecnologías no puede lograr." },
        { id: "aws", label: "Patrones AWS", title: "Explicar la nube mediante decisiones.", description: "Los patrones cloud pueden organizarse por edge, APIs, eventos, datos y observabilidad, con ejemplos públicos y seguros en lugar de afirmaciones sin verificar." },
      ],
    },
    work: {
      eyebrow: "01 / TRABAJO SELECCIONADO",
      title: "La prueba debería ser algo que puedas inspeccionar.",
      note: "Los casos profesionales se agregan solo cuando su contexto y permiso de publicación están confirmados. El lab de abajo es una demostración pública y funcional.",
      projects: [
        {
          number: "01",
          status: "LAB INTERACTIVO EN VIVO",
          title: "Simulador de trade-offs de arquitectura",
          description: "Un lab funcional de diseño de sistemas que vuelve visibles las decisiones: elegí una restricción de producto e inspeccioná el flujo, las propiedades operativas y su razonamiento.",
          outcome: "Construido para demostrar cómo cambia una decisión técnica según el problema, no como un diagrama decorativo.",
          tags: ["TypeScript", "Diseño de sistemas", "UI interactiva"],
        },
        {
          number: "02",
          status: "PRÓXIMO LAB",
          title: "Tablero de señales de entrega",
          description: "Se está definiendo un espacio funcional de delivery de producto para explorar riesgo técnico, preparación de releases y ownership de decisiones.",
          outcome: "Planeado como lab público y seguro; no utiliza datos de clientes ni empleadores.",
          tags: ["Delivery de producto", "Señales de calidad", "Liderazgo técnico"],
        },
      ],
    },
    lab: {
      eyebrow: "02 / DEMOSTRADOR FUNCIONAL",
      title: "La arquitectura responde a restricciones.",
      body: "Elegí una señal de producto. El lab actualiza la forma del sistema y explica la decisión.",
      scenarioLabel: "Señal de producto",
      challengeLabel: "El desafío",
      decisionLabel: "La decisión de diseño",
      systemLabel: "Flujo del sistema",
      propertiesLabel: "Qué optimiza",
      scenarios: [
        {
          id: "launch",
          label: "Lanzamiento de producto",
          signal: "APRENDIZAJE RÁPIDO",
          title: "Entregar el núcleo antes de escalar la superficie.",
          challenge: "El producto necesita feedback rápido, un modelo de dominio coherente y una forma de operar que un equipo pequeño pueda sostener.",
          decision: "Comenzar con un núcleo modular y límites explícitos. Mantener el despliegue simple y preparar las separaciones para extraerlas solo cuando la evidencia lo justifique.",
          flow: ["App web", "Límite API", "Núcleo modular", "Datos relacionales"],
          properties: [{ label: "Velocidad de aprendizaje", value: "Alta" }, { label: "Carga operativa", value: "Baja" }, { label: "Seguridad de cambio", value: "Módulos explícitos" }],
        },
        {
          id: "peak",
          label: "Pico de demanda",
          signal: "RESILIENCIA",
          title: "Proteger la transacción; absorber el pico.",
          challenge: "Una parte puntual del recorrido se vuelve crítica mientras el trabajo posterior no debería hacer esperar al usuario ni poner en riesgo la transacción central.",
          decision: "Separar la confirmación síncrona del trabajo asíncrono. Agregar una cola durable, consumidores observables y límites idempotentes alrededor de efectos secundarios.",
          flow: ["App web", "API transaccional", "Cola de eventos", "Workers e integraciones"],
          properties: [{ label: "Manejo de picos", value: "Bufferizado" }, { label: "Aislamiento de fallas", value: "Encolado" }, { label: "Trazabilidad", value: "Eventos" }],
        },
        {
          id: "expansion",
          label: "Expansión regional",
          signal: "ESCALA CONTROLADA",
          title: "Agregar localidad sin multiplicar ambigüedad.",
          challenge: "El mismo producto debe respetar requisitos regionales manteniendo comprensible el comportamiento compartido y las prácticas de despliegue.",
          decision: "Hacer explícitas la tenencia y las políticas regionales en el borde. Mantener central la lógica compartida y sumar límites regionales de datos y entrega cuando justifiquen su costo.",
          flow: ["Política de borde", "API regional", "Dominio compartido", "Datos regionales"],
          properties: [{ label: "Control regional", value: "Explícito" }, { label: "Lógica compartida", value: "Central" }, { label: "Camino de crecimiento", value: "Incremental" }],
        },
      ],
    },
    practice: {
      eyebrow: "03 / CÓMO TRABAJO",
      title: "Los sistemas útiles son más que un stack.",
      body: "El trabajo más sólido une contexto de producto, juicio técnico y disciplina de entrega. Estas son las áreas que aporto.",
      practices: [
        { title: "Construir", description: "Ejecución full stack en interfaces web, APIs, límites de datos y las prácticas de calidad que hacen seguros los cambios." },
        { title: "Diseñar", description: "Arquitectura que vuelve visibles los trade-offs, mantiene opciones abiertas y gana complejidad solo cuando el producto la necesita." },
        { title: "Liderar", description: "Discovery técnico, decisiones claras y colaboración que convierte trabajo ambiguo en impulso." },
      ],
    },
    closing: { title: "El próximo caso de estudio puede ser una conversación real.", body: "Los casos profesionales y canales de contacto se agregarán cuando su redacción y alcance de publicación estén confirmados.", contactLabel: "Trabajo seleccionado en progreso" },
    footer: "MARCOS VISSIO — PORTFOLIO DE INGENIERÍA / 2026",
  },
};
