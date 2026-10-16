export type PortfolioLocale = "en" | "es";

type Pillar = {
  number: string;
  title: string;
  description: string;
};

type CapabilityGroup = {
  title: string;
  items: string[];
};

type PortfolioContent = {
  heroEyebrow: string;
  positioning: string;
  heroTitle: string;
  heroEmphasis: string;
  intro: string;
  exploreLabel: string;
  integrityNote: string;
  approachEyebrow: string;
  approachTitle: string;
  pillars: Pillar[];
  foundationEyebrow: string;
  foundationTitle: string;
  foundationEmphasis: string;
  foundationBody: string;
  nextLabel: string;
  capabilitiesEyebrow: string;
  capabilitiesTitle: string;
  capabilityGroups: CapabilityGroup[];
  focusEyebrow: string;
  focusTitle: string;
  focusAreas: string[];
  footer: string;
};

export const portfolioContent: Record<PortfolioLocale, PortfolioContent> = {
  en: {
    heroEyebrow: "MARCOS VISSIO / ENGINEERING PORTFOLIO",
    positioning: "Senior Full-Stack Engineer · Software Architecture · Technical Leadership",
    heroTitle: "I build clear paths through",
    heroEmphasis: "complex systems.",
    intro:
      "I combine full-stack delivery, software architecture, and technical leadership to help teams turn ambitious product ideas into durable systems.",
    exploreLabel: "Explore the approach",
    integrityNote:
      "Professional experience and case studies are being curated for responsible publication.",
    approachEyebrow: "A PRACTICAL POINT OF VIEW",
    approachTitle: "The work behind the work.",
    pillars: [
      {
        number: "01",
        title: "Build",
        description:
          "Full-stack product engineering across modern web interfaces, services, APIs, and data boundaries.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "Pragmatic architecture for modular systems, evolving domains, and decisions that stay clear over time.",
      },
      {
        number: "03",
        title: "Lead",
        description:
          "Technical discovery, thoughtful trade-offs, and collaboration that turns ambiguity into momentum.",
      },
    ],
    foundationEyebrow: "PROFESSIONAL FOCUS",
    foundationTitle: "Depth where it matters.",
    foundationEmphasis: "Clarity everywhere.",
    foundationBody:
      "The work focuses on full-stack engineering, application architecture, and technical leadership. Detailed work stories will be added as their context and publication approval are confirmed.",
    nextLabel: "Explore focus areas",
    capabilitiesEyebrow: "TECHNICAL FOCUS",
    capabilitiesTitle: "The range to move from idea to production.",
    capabilityGroups: [
      { title: "Web engineering", items: ["TypeScript", "Angular", "React", "Next.js"] },
      { title: "Services & APIs", items: ["Node.js", "NestJS", "REST", "GraphQL"] },
      { title: "Data & cloud", items: ["PostgreSQL", "AWS", "Azure", "Docker"] },
      { title: "Systems thinking", items: ["Distributed systems", "Modular monoliths", "Microservices", "CI/CD"] },
    ],
    focusEyebrow: "TARGET ROLE FAMILIES",
    focusTitle: "Built for the conversations that matter.",
    focusAreas: [
      "Senior Full-Stack Engineering",
      "Software & Application Architecture",
      "Hands-on Technical Leadership",
    ],
    footer: "ENGINEERING PORTFOLIO — 2026",
  },
  es: {
    heroEyebrow: "MARCOS VISSIO / PORTFOLIO DE INGENIERÍA",
    positioning: "Senior Full-Stack Engineer · Arquitectura de Software · Liderazgo Técnico",
    heroTitle: "Construyo caminos claros en",
    heroEmphasis: "sistemas complejos.",
    intro:
      "Combino ejecución full stack, arquitectura de software y liderazgo técnico para transformar ideas ambiciosas de producto en sistemas sostenibles.",
    exploreLabel: "Conocer el enfoque",
    integrityNote:
      "La experiencia profesional y los casos de estudio se están curando para una publicación responsable.",
    approachEyebrow: "UN ENFOQUE PRÁCTICO",
    approachTitle: "El trabajo detrás del trabajo.",
    pillars: [
      {
        number: "01",
        title: "Construir",
        description:
          "Ingeniería de producto full stack en interfaces web modernas, servicios, APIs y límites de datos.",
      },
      {
        number: "02",
        title: "Diseñar",
        description:
          "Arquitectura pragmática para sistemas modulares, dominios en evolución y decisiones claras en el tiempo.",
      },
      {
        number: "03",
        title: "Liderar",
        description:
          "Discovery técnico, trade-offs conscientes y colaboración que convierte ambigüedad en impulso.",
      },
    ],
    foundationEyebrow: "ENFOQUE PROFESIONAL",
    foundationTitle: "Profundidad donde importa.",
    foundationEmphasis: "Claridad en todo.",
    foundationBody:
      "El foco está en ingeniería full stack, arquitectura de aplicaciones y liderazgo técnico. Los casos detallados se incorporarán al confirmar su contexto y permiso de publicación.",
    nextLabel: "Explorar áreas de enfoque",
    capabilitiesEyebrow: "ENFOQUE TÉCNICO",
    capabilitiesTitle: "El alcance para llevar una idea a producción.",
    capabilityGroups: [
      { title: "Ingeniería web", items: ["TypeScript", "Angular", "React", "Next.js"] },
      { title: "Servicios y APIs", items: ["Node.js", "NestJS", "REST", "GraphQL"] },
      { title: "Datos y cloud", items: ["PostgreSQL", "AWS", "Azure", "Docker"] },
      { title: "Pensamiento sistémico", items: ["Sistemas distribuidos", "Monolitos modulares", "Microservicios", "CI/CD"] },
    ],
    focusEyebrow: "FAMILIAS DE POSICIONES OBJETIVO",
    focusTitle: "Pensado para las conversaciones que importan.",
    focusAreas: [
      "Ingeniería Full Stack Senior",
      "Arquitectura de Software y Aplicaciones",
      "Liderazgo Técnico Hands-on",
    ],
    footer: "PORTFOLIO DE INGENIERÍA — 2026",
  },
};
