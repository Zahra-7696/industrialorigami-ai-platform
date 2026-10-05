import en from "@/i18n/dictionaries/en.json";
import type { Locale } from "@/i18n/config";

type Dictionary = typeof en;
type ServiceItem = Dictionary["services"]["items"][number];
type ProjectItem = Dictionary["projects"]["items"][number];

type LocalisedUpdates = {
  service: ServiceItem;
  aiProject: ProjectItem;
  cadProject: ProjectItem;
};

const updates: Partial<Record<Locale, LocalisedUpdates>> = {
  en: {
    service: {
      slug: "agentic-generative-ai-systems",
      title: "Agentic AI, GenAI, RAG & LLM Systems",
      menuDescription:
        "Agentic workflows, grounded RAG, LLMs, multimodal QA and intelligent automation.",
      summary:
        "Production-oriented AI systems that combine LLMs, retrieval, tools, memory and governed agent workflows for real business tasks.",
      overview: [
        "Modern generative AI systems are moving beyond single-turn chat toward agents that can plan, use tools, retrieve evidence, coordinate specialists and maintain state across multi-step work.",
        "We design systems around grounded retrieval and controlled actions: hybrid search, reranking, citations, structured outputs, tool and API integration, memory, multimodal inputs, human approval and access controls.",
        "Current architectures can also use open interoperability patterns such as MCP for tool and context connections and A2A-style agent collaboration, with tracing and evaluation used to test reliability before wider deployment."
      ],
      capabilities: [
        "LLM and multimodal model integration",
        "Agentic orchestration and multi-agent handoffs",
        "RAG with hybrid retrieval, reranking and citations",
        "Tool and function calling, APIs and MCP connectivity",
        "Memory and stateful workflows",
        "QA systems and structured outputs",
        "Evaluation, tracing, guardrails and human approval",
        "Model routing and cost-latency optimisation"
      ],
      deliverables: [
        "AI and agent architecture",
        "Knowledge ingestion and retrieval pipeline",
        "Agent and tool workflows",
        "Multimodal QA or assistant interface",
        "Evaluation and observability dashboard",
        "Security and access-control plan"
      ],
      fit: [
        "Enterprise knowledge and technical support",
        "Engineering and research assistants",
        "Workflow automation and operations",
        "Customer and employee service",
        "Document-heavy QA and compliance"
      ]
    },
    aiProject: {
      slug: "industrial-agentic-ai-platform",
      title: "Industrial Agentic AI Platform",
      menuDescription:
        "A governed platform combining agents, GenAI, RAG, LLMs, tools and source-grounded QA.",
      category: "Agentic & Generative AI",
      status: "Portfolio architecture and prototype concept",
      statusDescription:
        "This project is presented as a portfolio and future service concept rather than a completed customer deployment.",
      summary:
        "A multilingual industrial AI platform that combines source-grounded knowledge retrieval with agentic workflows, tool use, multimodal interaction and evaluated LLM responses.",
      overview: [
        "Industrial organisations often store valuable knowledge across manuals, policies, reports, specifications, databases and project systems.",
        "The platform combines modern RAG with hybrid retrieval, reranking and citations, then adds agentic orchestration so specialised agents can use tools, call APIs, coordinate tasks and preserve useful state across multi-step work.",
        "The architecture is designed for responsible deployment with access controls, structured outputs, human approval where needed, tracing, feedback and evaluation rather than treating a fluent model response as proof of correctness."
      ],
      technology: [
        "Next.js and TypeScript user experience",
        "FastAPI or Node.js AI and tool services",
        "PostgreSQL with pgvector or equivalent vector storage",
        "Hybrid retrieval, metadata filters and reranking",
        "LLM and multimodal model routing",
        "Agent orchestration, tool calling and MCP-ready integrations",
        "A2A-ready patterns for specialist agent collaboration",
        "Tracing, evaluation, guardrails and source citation"
      ],
      value: [
        "Faster access to approved technical knowledge",
        "Automation of multi-step knowledge workflows",
        "More transparent answers with citations and evaluation",
        "Reusable platform for internal and customer-facing AI",
        "A controlled path from assistant prototypes to production agents"
      ],
      roadmap: [
        {
          phase: "Phase 1",
          title: "Knowledge foundation",
          description:
            "Build ingestion, metadata, hybrid retrieval, reranking, permissions and source-aware QA."
        },
        {
          phase: "Phase 2",
          title: "Agentic workflows",
          description:
            "Add specialised agents, tool and API use, memory, multimodal inputs and approval points."
        },
        {
          phase: "Phase 3",
          title: "Production evaluation",
          description:
            "Add traces, automated and human evaluation, guardrails, monitoring, cost controls and deployment governance."
        }
      ]
    },
    cadProject: {
      slug: "engineering-cad",
      title: "Engineering CAD",
      menuDescription:
        "3D mechanical design, assemblies, drawings and design-for-manufacture using Autodesk Inventor and SolidWorks.",
      category: "Mechanical Engineering & CAD",
      status: "Active engineering design capability",
      statusDescription:
        "CAD capability supports robotic-hand, mechanism and prototype development, with models refined as engineering requirements and manufacturing constraints are validated.",
      summary:
        "Parametric 3D CAD for mechanical parts and assemblies, from concept geometry to manufacturing drawings and iterative prototype development.",
      overview: [
        "Engineering CAD converts functional requirements into controlled 3D parts, assemblies and drawings that can be reviewed, manufactured and revised.",
        "The workflow can cover robotic mechanisms, linkages, housings, brackets, fixtures and other engineered components using Autodesk Inventor and SolidWorks.",
        "Design reviews consider fit, motion, tolerances, interfaces, materials, fasteners, serviceability and manufacturability before physical prototyping."
      ],
      technology: [
        "Autodesk Inventor",
        "SolidWorks",
        "Parametric part and assembly modelling",
        "Exploded views and assembly documentation",
        "2D manufacturing drawings and tolerancing",
        "Motion, interference and fit checks",
        "STEP, STL and DXF export for fabrication and 3D printing",
        "Design-for-manufacture and prototype iteration"
      ],
      value: [
        "Faster iteration before fabrication",
        "Clearer communication between engineering and manufacturing",
        "Reduced fit and interference errors",
        "Reusable design history and controlled revisions",
        "A stronger path from concept to physical prototype"
      ],
      roadmap: [
        {
          phase: "Phase 1",
          title: "Requirements and concept",
          description:
            "Define interfaces, motion, loads, dimensions, materials and an initial parametric concept."
        },
        {
          phase: "Phase 2",
          title: "Detailed assembly",
          description:
            "Develop parts and assemblies, run fit and interference checks, and prepare manufacturing documentation."
        },
        {
          phase: "Phase 3",
          title: "Prototype and validation",
          description:
            "Fabricate or print selected parts, test the mechanism, capture issues and feed measured results back into the CAD model."
        }
      ]
    }
  },

  fa: {
    service: {
      slug: "agentic-generative-ai-systems",
      title: "Ù‡ÙˆØ´ Ø¹Ø§Ù…Ù„â€ŒÙ…Ø­ÙˆØ±ØŒ Ù‡ÙˆØ´ Ù…ÙˆÙ„Ø¯ØŒ RAG Ùˆ Ø³Ø§Ù…Ø§Ù†Ù‡â€ŒÙ‡Ø§ÛŒ LLM",
      menuDescription:
        "Ú¯Ø±Ø¯Ø´â€ŒÚ©Ø§Ø±Ù‡Ø§ÛŒ Ø¹Ø§Ù…Ù„â€ŒÙ…Ø­ÙˆØ±ØŒ RAG Ù…Ø¨ØªÙ†ÛŒ Ø¨Ø± Ù…Ù†Ø¨Ø¹ØŒ LLMØŒ Ù¾Ø±Ø³Ø´â€ŒÙˆÙ¾Ø§Ø³Ø® Ú†Ù†Ø¯Ø±Ø³Ø§Ù†Ù‡â€ŒØ§ÛŒ Ùˆ Ø§ØªÙˆÙ…Ø§Ø³ÛŒÙˆÙ† Ù‡ÙˆØ´Ù…Ù†Ø¯.",
      summary:
        "Ø³Ø§Ù…Ø§Ù†Ù‡â€ŒÙ‡Ø§ÛŒ Ù‡ÙˆØ´ Ù…ØµÙ†ÙˆØ¹ÛŒ Ø¨Ø±Ø§ÛŒ Ú©Ø§Ø±Ø¨Ø±Ø¯ ÙˆØ§Ù‚Ø¹ÛŒ Ú©Ù‡ Ù…Ø¯Ù„â€ŒÙ‡Ø§ÛŒ Ø²Ø¨Ø§Ù†ÛŒØŒ Ø¨Ø§Ø²ÛŒØ§Ø¨ÛŒØŒ Ø§Ø¨Ø²Ø§Ø±Ù‡Ø§ØŒ Ø­Ø§ÙØ¸Ù‡ Ùˆ Ú¯Ø±Ø¯Ø´â€ŒÚ©Ø§Ø±Ù‡Ø§ÛŒ Ú©Ù†ØªØ±Ù„â€ŒØ´Ø¯Ù‡ Ø¹Ø§Ù…Ù„â€ŒÙ…Ø­ÙˆØ± Ø±Ø§ ØªØ±Ú©ÛŒØ¨ Ù…ÛŒâ€ŒÚ©Ù†Ù†Ø¯.",
      overview: [
        "Ù†Ø³Ù„ Ø¬Ø¯ÛŒØ¯ Ø³Ø§Ù…Ø§Ù†Ù‡â€ŒÙ‡Ø§ÛŒ Ù‡ÙˆØ´ Ù…ÙˆÙ„Ø¯ Ø§Ø² Ú†Øª ØªÚ©â€ŒÙ…Ø±Ø­Ù„Ù‡â€ŒØ§ÛŒ ÙØ±Ø§ØªØ± Ø±ÙØªÙ‡ Ùˆ Ø¨Ù‡ Ø¹Ø§Ù…Ù„â€ŒÙ‡Ø§ÛŒÛŒ Ù…ÛŒâ€ŒØ±Ø³Ø¯ Ú©Ù‡ Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ù†Ø¯ Ø¨Ø±Ù†Ø§Ù…Ù‡â€ŒØ±ÛŒØ²ÛŒ Ú©Ù†Ù†Ø¯ØŒ Ø§Ø² Ø§Ø¨Ø²Ø§Ø±Ù‡Ø§ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†Ù†Ø¯ØŒ Ø´ÙˆØ§Ù‡Ø¯ Ø±Ø§ Ø¨Ø§Ø²ÛŒØ§Ø¨ÛŒ Ú©Ù†Ù†Ø¯ Ùˆ Ú©Ø§Ø± Ú†Ù†Ø¯Ù…Ø±Ø­Ù„Ù‡â€ŒØ§ÛŒ Ø±Ø§ Ù¾ÛŒØ´ Ø¨Ø¨Ø±Ù†Ø¯.",
        "Ù…Ø¹Ù…Ø§Ø±ÛŒ Ø±Ø§ Ø¨Ø± Ø¨Ø§Ø²ÛŒØ§Ø¨ÛŒ Ù‚Ø§Ø¨Ù„ Ø§Ø³ØªÙ†Ø§Ø¯ Ùˆ Ø§Ù‚Ø¯Ø§Ù…Ø§Øª Ú©Ù†ØªØ±Ù„â€ŒØ´Ø¯Ù‡ Ø¨Ù†Ø§ Ù…ÛŒâ€ŒÚ©Ù†ÛŒÙ…: Ø¬Ø³Øªâ€ŒÙˆØ¬ÙˆÛŒ ØªØ±Ú©ÛŒØ¨ÛŒØŒ rerankingØŒ Ø§Ø³ØªÙ†Ø§Ø¯ØŒ Ø®Ø±ÙˆØ¬ÛŒ Ø³Ø§Ø®Øªâ€ŒÛŒØ§ÙØªÙ‡ØŒ Ø§ØªØµØ§Ù„ API Ùˆ Ø§Ø¨Ø²Ø§Ø±ØŒ Ø­Ø§ÙØ¸Ù‡ØŒ ÙˆØ±ÙˆØ¯ÛŒ Ú†Ù†Ø¯Ø±Ø³Ø§Ù†Ù‡â€ŒØ§ÛŒØŒ ØªØ£ÛŒÛŒØ¯ Ø§Ù†Ø³Ø§Ù†ÛŒ Ùˆ Ú©Ù†ØªØ±Ù„ Ø¯Ø³ØªØ±Ø³ÛŒ.",
        "Ø¯Ø± ØµÙˆØ±Øª Ù†ÛŒØ§Ø² Ù…ÛŒâ€ŒØªÙˆØ§Ù† Ø§Ø² Ø§Ù„Ú¯ÙˆÙ‡Ø§ÛŒ Ø¨Ø§Ø² Ù…Ø§Ù†Ù†Ø¯ MCP Ø¨Ø±Ø§ÛŒ Ø§ØªØµØ§Ù„ Ø§Ø¨Ø²Ø§Ø± Ùˆ Ø²Ù…ÛŒÙ†Ù‡ Ùˆ Ø§Ù„Ú¯ÙˆÙ‡Ø§ÛŒ A2A Ø¨Ø±Ø§ÛŒ Ù‡Ù…Ú©Ø§Ø±ÛŒ Ø¹Ø§Ù…Ù„â€ŒÙ‡Ø§ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ø±Ø¯ Ùˆ Ù‚Ø§Ø¨Ù„ÛŒØª Ø§Ø·Ù…ÛŒÙ†Ø§Ù† Ø±Ø§ Ø¨Ø§ tracing Ùˆ Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒ Ø³Ù†Ø¬ÛŒØ¯."
      ],
      capabilities: [
        "ÛŒÚ©Ù¾Ø§Ø±Ú†Ù‡â€ŒØ³Ø§Ø²ÛŒ LLM Ùˆ Ù…Ø¯Ù„â€ŒÙ‡Ø§ÛŒ Ú†Ù†Ø¯Ø±Ø³Ø§Ù†Ù‡â€ŒØ§ÛŒ",
        "Ø§Ø±Ú©Ø³ØªØ±Ø§Ø³ÛŒÙˆÙ† Ø¹Ø§Ù…Ù„â€ŒÙ‡Ø§ Ùˆ Ù‡Ù…Ú©Ø§Ø±ÛŒ Ú†Ù†Ø¯Ø¹Ø§Ù…Ù„ÛŒ",
        "RAG Ø¨Ø§ Ø¨Ø§Ø²ÛŒØ§Ø¨ÛŒ ØªØ±Ú©ÛŒØ¨ÛŒØŒ reranking Ùˆ Ø§Ø³ØªÙ†Ø§Ø¯",
        "ÙØ±Ø§Ø®ÙˆØ§Ù†ÛŒ Ø§Ø¨Ø²Ø§Ø± Ùˆ ØªØ§Ø¨Ø¹ØŒ API Ùˆ Ø§ØªØµØ§Ù„ MCP",
        "Ø­Ø§ÙØ¸Ù‡ Ùˆ Ú¯Ø±Ø¯Ø´â€ŒÚ©Ø§Ø±Ù‡Ø§ÛŒ stateful",
        "Ø³Ø§Ù…Ø§Ù†Ù‡â€ŒÙ‡Ø§ÛŒ QA Ùˆ Ø®Ø±ÙˆØ¬ÛŒ Ø³Ø§Ø®Øªâ€ŒÛŒØ§ÙØªÙ‡",
        "Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒØŒ tracingØŒ guardrail Ùˆ ØªØ£ÛŒÛŒØ¯ Ø§Ù†Ø³Ø§Ù†ÛŒ",
        "Ù…Ø³ÛŒØ±ÛŒØ§Ø¨ÛŒ Ù…Ø¯Ù„ Ùˆ Ø¨Ù‡ÛŒÙ†Ù‡â€ŒØ³Ø§Ø²ÛŒ Ù‡Ø²ÛŒÙ†Ù‡ Ùˆ ØªØ£Ø®ÛŒØ±"
      ],
      deliverables: [
        "Ù…Ø¹Ù…Ø§Ø±ÛŒ Ù‡ÙˆØ´ Ù…ØµÙ†ÙˆØ¹ÛŒ Ùˆ Ø¹Ø§Ù…Ù„â€ŒÙ‡Ø§",
        "Ø®Ø· Ù„ÙˆÙ„Ù‡ Ø¯Ø§Ù†Ø´ØŒ ingestion Ùˆ retrieval",
        "Ú¯Ø±Ø¯Ø´â€ŒÚ©Ø§Ø± Ø¹Ø§Ù…Ù„ Ùˆ Ø§Ø¨Ø²Ø§Ø±",
        "Ø±Ø§Ø¨Ø· QA ÛŒØ§ Ø¯Ø³ØªÛŒØ§Ø± Ú†Ù†Ø¯Ø±Ø³Ø§Ù†Ù‡â€ŒØ§ÛŒ",
        "Ø¯Ø§Ø´Ø¨ÙˆØ±Ø¯ Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒ Ùˆ Ù…Ø´Ø§Ù‡Ø¯Ù‡â€ŒÙ¾Ø°ÛŒØ±ÛŒ",
        "Ø·Ø±Ø­ Ø§Ù…Ù†ÛŒØª Ùˆ Ú©Ù†ØªØ±Ù„ Ø¯Ø³ØªØ±Ø³ÛŒ"
      ],
      fit: [
        "Ø¯Ø§Ù†Ø´ Ø³Ø§Ø²Ù…Ø§Ù†ÛŒ Ùˆ Ù¾Ø´ØªÛŒØ¨Ø§Ù†ÛŒ ÙÙ†ÛŒ",
        "Ø¯Ø³ØªÛŒØ§Ø±Ù‡Ø§ÛŒ Ù…Ù‡Ù†Ø¯Ø³ÛŒ Ùˆ Ù¾Ú˜ÙˆÙ‡Ø´ÛŒ",
        "Ø§ØªÙˆÙ…Ø§Ø³ÛŒÙˆÙ† Ú¯Ø±Ø¯Ø´â€ŒÚ©Ø§Ø± Ùˆ Ø¹Ù…Ù„ÛŒØ§Øª",
        "Ø®Ø¯Ù…Ø§Øª Ù…Ø´ØªØ±ÛŒ Ùˆ Ú©Ø§Ø±Ú©Ù†Ø§Ù†",
        "QA Ùˆ Ø§Ù†Ø·Ø¨Ø§Ù‚ Ù…Ø¨ØªÙ†ÛŒ Ø¨Ø± Ø§Ø³Ù†Ø§Ø¯"
      ]
    },
    aiProject: {
      slug: "industrial-agentic-ai-platform",
      title: "Ù¾Ù„ØªÙØ±Ù… ØµÙ†Ø¹ØªÛŒ Ù‡ÙˆØ´ Ø¹Ø§Ù…Ù„â€ŒÙ…Ø­ÙˆØ±",
      menuDescription:
        "Ù¾Ù„ØªÙØ±Ù…ÛŒ Ú©Ù†ØªØ±Ù„â€ŒØ´Ø¯Ù‡ Ø¨Ø±Ø§ÛŒ Ø¹Ø§Ù…Ù„â€ŒÙ‡Ø§ØŒ GenAIØŒ RAGØŒ LLMØŒ Ø§Ø¨Ø²Ø§Ø±Ù‡Ø§ Ùˆ Ù¾Ø±Ø³Ø´â€ŒÙˆÙ¾Ø§Ø³Ø® Ù…Ø¨ØªÙ†ÛŒ Ø¨Ø± Ù…Ù†Ø¨Ø¹.",
      category: "Ù‡ÙˆØ´ Ø¹Ø§Ù…Ù„â€ŒÙ…Ø­ÙˆØ± Ùˆ Ù…ÙˆÙ„Ø¯",
      status: "Ù…ÙÙ‡ÙˆÙ… Ù…Ø¹Ù…Ø§Ø±ÛŒ Ùˆ Ù†Ù…ÙˆÙ†Ù‡ Ø§ÙˆÙ„ÛŒÙ‡ Ù¾ÙˆØ±ØªÙÙˆÙ„ÛŒÙˆ",
      statusDescription:
        "Ø§ÛŒÙ† Ù¾Ø±ÙˆÚ˜Ù‡ Ø¯Ø± Ø­Ø§Ù„ Ø­Ø§Ø¶Ø± Ø¨Ù‡â€ŒØ¹Ù†ÙˆØ§Ù† Ù…ÙÙ‡ÙˆÙ… Ù¾ÙˆØ±ØªÙÙˆÙ„ÛŒÙˆ Ùˆ Ø®Ø¯Ù…Øª Ø¢ÛŒÙ†Ø¯Ù‡ Ø§Ø±Ø§Ø¦Ù‡ Ù…ÛŒâ€ŒØ´ÙˆØ¯ Ùˆ Ø§Ø¯Ø¹Ø§ÛŒ Ø§Ø³ØªÙ‚Ø±Ø§Ø± Ú©Ø§Ù…Ù„ Ù…Ø´ØªØ±ÛŒ Ù†Ø¯Ø§Ø±Ø¯.",
      summary:
        "Ù¾Ù„ØªÙØ±Ù… Ú†Ù†Ø¯Ø²Ø¨Ø§Ù†Ù‡ ØµÙ†Ø¹ØªÛŒ Ú©Ù‡ Ø¨Ø§Ø²ÛŒØ§Ø¨ÛŒ Ø¯Ø§Ù†Ø´ Ù…Ø¨ØªÙ†ÛŒ Ø¨Ø± Ù…Ù†Ø¨Ø¹ Ø±Ø§ Ø¨Ø§ Ú¯Ø±Ø¯Ø´â€ŒÚ©Ø§Ø±Ù‡Ø§ÛŒ Ø¹Ø§Ù…Ù„â€ŒÙ…Ø­ÙˆØ±ØŒ Ø§Ø¨Ø²Ø§Ø±Ù‡Ø§ØŒ ØªØ¹Ø§Ù…Ù„ Ú†Ù†Ø¯Ø±Ø³Ø§Ù†Ù‡â€ŒØ§ÛŒ Ùˆ Ù¾Ø§Ø³Ø®â€ŒÙ‡Ø§ÛŒ Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒâ€ŒØ´Ø¯Ù‡ LLM ØªØ±Ú©ÛŒØ¨ Ù…ÛŒâ€ŒÚ©Ù†Ø¯.",
      overview: [
        "Ø¯Ø§Ù†Ø´ Ù…Ù‡Ù… Ø³Ø§Ø²Ù…Ø§Ù†ÛŒ Ù…Ø¹Ù…ÙˆÙ„Ø§Ù‹ Ù…ÛŒØ§Ù† Ø±Ø§Ù‡Ù†Ù…Ø§Ù‡Ø§ØŒ Ø³ÛŒØ§Ø³Øªâ€ŒÙ‡Ø§ØŒ Ú¯Ø²Ø§Ø±Ø´â€ŒÙ‡Ø§ØŒ Ù…Ø´Ø®ØµØ§Øª ÙÙ†ÛŒØŒ Ù¾Ø§ÛŒÚ¯Ø§Ù‡â€ŒÙ‡Ø§ÛŒ Ø¯Ø§Ø¯Ù‡ Ùˆ Ø³Ø§Ù…Ø§Ù†Ù‡â€ŒÙ‡Ø§ÛŒ Ù¾Ø±ÙˆÚ˜Ù‡ Ù¾Ø±Ø§Ú©Ù†Ø¯Ù‡ Ø§Ø³Øª.",
        "Ø§ÛŒÙ† Ù¾Ù„ØªÙØ±Ù… RAG Ù…Ø¯Ø±Ù† Ø±Ø§ Ø¨Ø§ Ø¨Ø§Ø²ÛŒØ§Ø¨ÛŒ ØªØ±Ú©ÛŒØ¨ÛŒØŒ reranking Ùˆ Ø§Ø³ØªÙ†Ø§Ø¯ ØªØ±Ú©ÛŒØ¨ Ù…ÛŒâ€ŒÚ©Ù†Ø¯ Ùˆ Ø³Ù¾Ø³ Ø§Ø±Ú©Ø³ØªØ±Ø§Ø³ÛŒÙˆÙ† Ø¹Ø§Ù…Ù„â€ŒÙ‡Ø§ Ø±Ø§ Ø¨Ø±Ø§ÛŒ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø§Ø² Ø§Ø¨Ø²Ø§Ø±Ù‡Ø§ØŒ APIÙ‡Ø§ Ùˆ Ø§Ø¬Ø±Ø§ÛŒ ÙˆØ¸Ø§ÛŒÙ Ú†Ù†Ø¯Ù…Ø±Ø­Ù„Ù‡â€ŒØ§ÛŒ Ø§Ø¶Ø§ÙÙ‡ Ù…ÛŒâ€ŒÚ©Ù†Ø¯.",
        "Ù…Ø¹Ù…Ø§Ø±ÛŒ Ø¨Ø±Ø§ÛŒ Ø§Ø³ØªÙ‚Ø±Ø§Ø± Ù…Ø³Ø¦ÙˆÙ„Ø§Ù†Ù‡ Ø·Ø±Ø§Ø­ÛŒ Ø´Ø¯Ù‡ Ø§Ø³Øª Ùˆ Ø´Ø§Ù…Ù„ Ú©Ù†ØªØ±Ù„ Ø¯Ø³ØªØ±Ø³ÛŒØŒ Ø®Ø±ÙˆØ¬ÛŒ Ø³Ø§Ø®Øªâ€ŒÛŒØ§ÙØªÙ‡ØŒ ØªØ£ÛŒÛŒØ¯ Ø§Ù†Ø³Ø§Ù†ÛŒ Ø¯Ø± Ù†Ù‚Ø§Ø· Ø­Ø³Ø§Ø³ØŒ tracingØŒ Ø¨Ø§Ø²Ø®ÙˆØ±Ø¯ Ùˆ Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒ Ø§Ø³Øª."
      ],
      technology: [
        "Next.js Ùˆ TypeScript",
        "FastAPI ÛŒØ§ Node.js Ø¨Ø±Ø§ÛŒ Ø³Ø±ÙˆÛŒØ³â€ŒÙ‡Ø§ÛŒ AI Ùˆ Ø§Ø¨Ø²Ø§Ø±",
        "PostgreSQL Ùˆ pgvector ÛŒØ§ Ø°Ø®ÛŒØ±Ù‡â€ŒØ³Ø§Ø² Ø¨Ø±Ø¯Ø§Ø±ÛŒ Ù…Ø´Ø§Ø¨Ù‡",
        "Ø¨Ø§Ø²ÛŒØ§Ø¨ÛŒ ØªØ±Ú©ÛŒØ¨ÛŒØŒ ÙÛŒÙ„ØªØ± Ù…ØªØ§Ø¯ÛŒØªØ§ Ùˆ reranking",
        "Ù…Ø³ÛŒØ±ÛŒØ§Ø¨ÛŒ LLM Ùˆ Ù…Ø¯Ù„â€ŒÙ‡Ø§ÛŒ Ú†Ù†Ø¯Ø±Ø³Ø§Ù†Ù‡â€ŒØ§ÛŒ",
        "Ø§Ø±Ú©Ø³ØªØ±Ø§Ø³ÛŒÙˆÙ† Ø¹Ø§Ù…Ù„ØŒ tool calling Ùˆ Ø§ØªØµØ§Ù„ Ø¢Ù…Ø§Ø¯Ù‡ MCP",
        "Ø§Ù„Ú¯ÙˆÙ‡Ø§ÛŒ Ø¢Ù…Ø§Ø¯Ù‡ A2A Ø¨Ø±Ø§ÛŒ Ù‡Ù…Ú©Ø§Ø±ÛŒ Ø¹Ø§Ù…Ù„â€ŒÙ‡Ø§ÛŒ ØªØ®ØµØµÛŒ",
        "tracingØŒ Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒØŒ guardrail Ùˆ Ø§Ø³ØªÙ†Ø§Ø¯ Ø¨Ù‡ Ù…Ù†Ø¨Ø¹"
      ],
      value: [
        "Ø¯Ø³ØªØ±Ø³ÛŒ Ø³Ø±ÛŒØ¹â€ŒØªØ± Ø¨Ù‡ Ø¯Ø§Ù†Ø´ ÙÙ†ÛŒ ØªØ£ÛŒÛŒØ¯Ø´Ø¯Ù‡",
        "Ø§ØªÙˆÙ…Ø§Ø³ÛŒÙˆÙ† Ú¯Ø±Ø¯Ø´â€ŒÚ©Ø§Ø±Ù‡Ø§ÛŒ Ú†Ù†Ø¯Ù…Ø±Ø­Ù„Ù‡â€ŒØ§ÛŒ Ø¯Ø§Ù†Ø´ÛŒ",
        "Ù¾Ø§Ø³Ø®â€ŒÙ‡Ø§ÛŒ Ø´ÙØ§Ùâ€ŒØªØ± Ø¨Ø§ Ø§Ø³ØªÙ†Ø§Ø¯ Ùˆ Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒ",
        "Ù¾Ù„ØªÙØ±Ù… Ù‚Ø§Ø¨Ù„ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ù…Ø¬Ø¯Ø¯ Ø¨Ø±Ø§ÛŒ AI Ø¯Ø§Ø®Ù„ÛŒ Ùˆ Ù…Ø´ØªØ±ÛŒâ€ŒÙ…Ø­ÙˆØ±",
        "Ù…Ø³ÛŒØ± Ú©Ù†ØªØ±Ù„â€ŒØ´Ø¯Ù‡ Ø§Ø² Ø¯Ø³ØªÛŒØ§Ø± Ø§ÙˆÙ„ÛŒÙ‡ ØªØ§ Ø¹Ø§Ù…Ù„ ØªÙˆÙ„ÛŒØ¯ÛŒ"
      ],
      roadmap: [
        {
          phase: "ÙØ§Ø² Û±",
          title: "Ù¾Ø§ÛŒÙ‡ Ø¯Ø§Ù†Ø´",
          description: "ingestionØŒ Ù…ØªØ§Ø¯ÛŒØªØ§ØŒ Ø¨Ø§Ø²ÛŒØ§Ø¨ÛŒ ØªØ±Ú©ÛŒØ¨ÛŒØŒ rerankingØŒ Ù…Ø¬ÙˆØ²Ù‡Ø§ Ùˆ QA Ù…Ø¨ØªÙ†ÛŒ Ø¨Ø± Ù…Ù†Ø¨Ø¹ Ø±Ø§ Ø¨Ø³Ø§Ø²ÛŒØ¯."
        },
        {
          phase: "ÙØ§Ø² Û²",
          title: "Ú¯Ø±Ø¯Ø´â€ŒÚ©Ø§Ø±Ù‡Ø§ÛŒ Ø¹Ø§Ù…Ù„â€ŒÙ…Ø­ÙˆØ±",
          description: "Ø¹Ø§Ù…Ù„â€ŒÙ‡Ø§ÛŒ ØªØ®ØµØµÛŒØŒ Ø§Ø¨Ø²Ø§Ø± Ùˆ APIØŒ Ø­Ø§ÙØ¸Ù‡ØŒ ÙˆØ±ÙˆØ¯ÛŒ Ú†Ù†Ø¯Ø±Ø³Ø§Ù†Ù‡â€ŒØ§ÛŒ Ùˆ Ù†Ù‚Ø§Ø· ØªØ£ÛŒÛŒØ¯ Ø±Ø§ Ø§Ø¶Ø§ÙÙ‡ Ú©Ù†ÛŒØ¯."
        },
        {
          phase: "ÙØ§Ø² Û³",
          title: "Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒ ØªÙˆÙ„ÛŒØ¯ÛŒ",
          description: "tracingØŒ Ø§Ø±Ø²ÛŒØ§Ø¨ÛŒ Ø®ÙˆØ¯Ú©Ø§Ø± Ùˆ Ø§Ù†Ø³Ø§Ù†ÛŒØŒ guardrailØŒ Ù…Ø§Ù†ÛŒØªÙˆØ±ÛŒÙ†Ú¯ØŒ Ú©Ù†ØªØ±Ù„ Ù‡Ø²ÛŒÙ†Ù‡ Ùˆ Ø­Ø§Ú©Ù…ÛŒØª Ø§Ø³ØªÙ‚Ø±Ø§Ø± Ø±Ø§ Ø§Ø¶Ø§ÙÙ‡ Ú©Ù†ÛŒØ¯."
        }
      ]
    },
    cadProject: {
      slug: "engineering-cad",
      title: "CAD Ù…Ù‡Ù†Ø¯Ø³ÛŒ",
      menuDescription:
        "Ø·Ø±Ø§Ø­ÛŒ Ù…Ú©Ø§Ù†ÛŒÚ©ÛŒ Ø³Ù‡â€ŒØ¨Ø¹Ø¯ÛŒØŒ Ø§Ø³Ù…Ø¨Ù„ÛŒØŒ Ù†Ù‚Ø´Ù‡â€ŒÚ©Ø´ÛŒ Ùˆ Ø·Ø±Ø§Ø­ÛŒ Ø¨Ø±Ø§ÛŒ Ø³Ø§Ø®Øª Ø¨Ø§ Autodesk Inventor Ùˆ SolidWorks.",
      category: "Ù…Ù‡Ù†Ø¯Ø³ÛŒ Ù…Ú©Ø§Ù†ÛŒÚ© Ùˆ CAD",
      status: "ØªÙˆØ§Ù†Ù…Ù†Ø¯ÛŒ ÙØ¹Ø§Ù„ Ø·Ø±Ø§Ø­ÛŒ Ù…Ù‡Ù†Ø¯Ø³ÛŒ",
      statusDescription:
        "ØªÙˆØ§Ù†Ù…Ù†Ø¯ÛŒ CAD Ø§Ø² ØªÙˆØ³Ø¹Ù‡ Ø¯Ø³Øª Ø±Ø¨Ø§ØªÛŒÚ©ØŒ Ù…Ú©Ø§Ù†ÛŒØ²Ù…â€ŒÙ‡Ø§ Ùˆ Ù†Ù…ÙˆÙ†Ù‡â€ŒÙ‡Ø§ÛŒ Ø§ÙˆÙ„ÛŒÙ‡ Ù¾Ø´ØªÛŒØ¨Ø§Ù†ÛŒ Ù…ÛŒâ€ŒÚ©Ù†Ø¯ Ùˆ Ù…Ø¯Ù„â€ŒÙ‡Ø§ Ø¨Ø§ Ø§Ø¹ØªØ¨Ø§Ø±Ø³Ù†Ø¬ÛŒ Ø§Ù„Ø²Ø§Ù…Ø§Øª Ù…Ù‡Ù†Ø¯Ø³ÛŒ Ùˆ Ù…Ø­Ø¯ÙˆØ¯ÛŒØªâ€ŒÙ‡Ø§ÛŒ Ø³Ø§Ø®Øª Ø§ØµÙ„Ø§Ø­ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯.",
      summary:
        "CAD Ù¾Ø§Ø±Ø§Ù…ØªØ±ÛŒÚ© Ø³Ù‡â€ŒØ¨Ø¹Ø¯ÛŒ Ø¨Ø±Ø§ÛŒ Ù‚Ø·Ø¹Ø§Øª Ùˆ Ø§Ø³Ù…Ø¨Ù„ÛŒâ€ŒÙ‡Ø§ÛŒ Ù…Ú©Ø§Ù†ÛŒÚ©ÛŒØŒ Ø§Ø² Ù‡Ù†Ø¯Ø³Ù‡ Ù…ÙÙ‡ÙˆÙ…ÛŒ ØªØ§ Ù†Ù‚Ø´Ù‡â€ŒÙ‡Ø§ÛŒ Ø³Ø§Ø®Øª Ùˆ ØªÚ©Ø±Ø§Ø± Ù†Ù…ÙˆÙ†Ù‡ Ø§ÙˆÙ„ÛŒÙ‡.",
      overview: [
        "CAD Ù…Ù‡Ù†Ø¯Ø³ÛŒ Ù†ÛŒØ§Ø²Ù…Ù†Ø¯ÛŒâ€ŒÙ‡Ø§ÛŒ Ø¹Ù…Ù„Ú©Ø±Ø¯ÛŒ Ø±Ø§ Ø¨Ù‡ Ù‚Ø·Ø¹Ø§ØªØŒ Ø§Ø³Ù…Ø¨Ù„ÛŒâ€ŒÙ‡Ø§ Ùˆ Ù†Ù‚Ø´Ù‡â€ŒÙ‡Ø§ÛŒ Ø³Ù‡â€ŒØ¨Ø¹Ø¯ÛŒ Ú©Ù†ØªØ±Ù„â€ŒØ´Ø¯Ù‡ ØªØ¨Ø¯ÛŒÙ„ Ù…ÛŒâ€ŒÚ©Ù†Ø¯ Ú©Ù‡ Ù‚Ø§Ø¨Ù„ Ø¨Ø§Ø²Ø¨ÛŒÙ†ÛŒØŒ Ø³Ø§Ø®Øª Ùˆ Ø§ØµÙ„Ø§Ø­ Ù‡Ø³ØªÙ†Ø¯.",
        "Ø§ÛŒÙ† Ú¯Ø±Ø¯Ø´â€ŒÚ©Ø§Ø± Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ø¯ Ù…Ú©Ø§Ù†ÛŒØ²Ù…â€ŒÙ‡Ø§ÛŒ Ø±Ø¨Ø§ØªÛŒÚ©ØŒ Ù„ÛŒÙ†Ú©â€ŒÙ‡Ø§ØŒ Ù¾ÙˆØ³ØªÙ‡â€ŒÙ‡Ø§ØŒ Ø¨Ø±Ø§Ú©Øªâ€ŒÙ‡Ø§ØŒ ÙÛŒÚ©Ø³Ú†Ø±Ù‡Ø§ Ùˆ Ù‚Ø·Ø¹Ø§Øª Ù…Ù‡Ù†Ø¯Ø³ÛŒ Ø±Ø§ Ø¨Ø§ Autodesk Inventor Ùˆ SolidWorks Ù¾ÙˆØ´Ø´ Ø¯Ù‡Ø¯.",
        "Ø¨Ø§Ø²Ø¨ÛŒÙ†ÛŒ Ø·Ø±Ø§Ø­ÛŒ Ø´Ø§Ù…Ù„ fitØŒ Ø­Ø±Ú©ØªØŒ ØªÙ„Ø±Ø§Ù†Ø³â€ŒÙ‡Ø§ØŒ Ø±Ø§Ø¨Ø·â€ŒÙ‡Ø§ØŒ Ù…ÙˆØ§Ø¯ØŒ Ø§ØªØµØ§Ù„Ø§ØªØŒ Ù‚Ø§Ø¨Ù„ÛŒØª Ø³Ø±ÙˆÛŒØ³ Ùˆ Ù‚Ø§Ø¨Ù„ÛŒØª Ø³Ø§Ø®Øª Ù¾ÛŒØ´ Ø§Ø² Ù†Ù…ÙˆÙ†Ù‡â€ŒØ³Ø§Ø²ÛŒ ÙÛŒØ²ÛŒÚ©ÛŒ Ø§Ø³Øª."
      ],
      technology: [
        "Autodesk Inventor",
        "SolidWorks",
        "Ù…Ø¯Ù„â€ŒØ³Ø§Ø²ÛŒ Ù¾Ø§Ø±Ø§Ù…ØªØ±ÛŒÚ© Ù‚Ø·Ø¹Ù‡ Ùˆ Ø§Ø³Ù…Ø¨Ù„ÛŒ",
        "Exploded view Ùˆ Ù…Ø³ØªÙ†Ø¯Ø§Øª Ù…ÙˆÙ†ØªØ§Ú˜",
        "Ù†Ù‚Ø´Ù‡â€ŒÙ‡Ø§ÛŒ Ø¯ÙˆØ¨Ø¹Ø¯ÛŒ Ø³Ø§Ø®Øª Ùˆ ØªÙ„Ø±Ø§Ù†Ø³â€ŒÚ¯Ø°Ø§Ø±ÛŒ",
        "Ø¨Ø±Ø±Ø³ÛŒ Ø­Ø±Ú©ØªØŒ ØªØ¯Ø§Ø®Ù„ Ùˆ fit",
        "Ø®Ø±ÙˆØ¬ÛŒ STEPØŒ STL Ùˆ DXF Ø¨Ø±Ø§ÛŒ Ø³Ø§Ø®Øª Ùˆ Ù¾Ø±ÛŒÙ†Øª Ø³Ù‡â€ŒØ¨Ø¹Ø¯ÛŒ",
        "Design for Manufacture Ùˆ ØªÚ©Ø±Ø§Ø± Ù†Ù…ÙˆÙ†Ù‡ Ø§ÙˆÙ„ÛŒÙ‡"
      ],
      value: [
        "ØªÚ©Ø±Ø§Ø± Ø³Ø±ÛŒØ¹â€ŒØªØ± Ù¾ÛŒØ´ Ø§Ø² Ø³Ø§Ø®Øª",
        "Ø§Ø±ØªØ¨Ø§Ø· Ø±ÙˆØ´Ù†â€ŒØªØ± Ù…ÛŒØ§Ù† Ù…Ù‡Ù†Ø¯Ø³ÛŒ Ùˆ Ø³Ø§Ø®Øª",
        "Ú©Ø§Ù‡Ø´ Ø®Ø·Ø§Ù‡Ø§ÛŒ fit Ùˆ ØªØ¯Ø§Ø®Ù„",
        "ØªØ§Ø±ÛŒØ®Ú†Ù‡ Ø·Ø±Ø§Ø­ÛŒ Ùˆ Ø¨Ø§Ø²Ù†Ú¯Ø±ÛŒâ€ŒÙ‡Ø§ÛŒ Ú©Ù†ØªØ±Ù„â€ŒØ´Ø¯Ù‡",
        "Ù…Ø³ÛŒØ± Ù‚ÙˆÛŒâ€ŒØªØ± Ø§Ø² Ù…ÙÙ‡ÙˆÙ… ØªØ§ Ù†Ù…ÙˆÙ†Ù‡ ÙÛŒØ²ÛŒÚ©ÛŒ"
      ],
      roadmap: [
        {
          phase: "ÙØ§Ø² Û±",
          title: "Ù†ÛŒØ§Ø²Ù…Ù†Ø¯ÛŒâ€ŒÙ‡Ø§ Ùˆ Ù…ÙÙ‡ÙˆÙ…",
          description: "Ø±Ø§Ø¨Ø·â€ŒÙ‡Ø§ØŒ Ø­Ø±Ú©ØªØŒ Ø¨Ø§Ø±Ù‡Ø§ØŒ Ø§Ø¨Ø¹Ø§Ø¯ØŒ Ù…ÙˆØ§Ø¯ Ùˆ Ù…ÙÙ‡ÙˆÙ… Ù¾Ø§Ø±Ø§Ù…ØªØ±ÛŒÚ© Ø§ÙˆÙ„ÛŒÙ‡ Ø±Ø§ ØªØ¹Ø±ÛŒÙ Ú©Ù†ÛŒØ¯."
        },
        {
          phase: "ÙØ§Ø² Û²",
          title: "Ø§Ø³Ù…Ø¨Ù„ÛŒ ØªÙØµÛŒÙ„ÛŒ",
          description: "Ù‚Ø·Ø¹Ø§Øª Ùˆ Ø§Ø³Ù…Ø¨Ù„ÛŒâ€ŒÙ‡Ø§ Ø±Ø§ ØªÙˆØ³Ø¹Ù‡ Ø¯Ù‡ÛŒØ¯ØŒ fit Ùˆ ØªØ¯Ø§Ø®Ù„ Ø±Ø§ Ø¨Ø±Ø±Ø³ÛŒ Ú©Ù†ÛŒØ¯ Ùˆ Ù…Ø³ØªÙ†Ø¯Ø§Øª Ø³Ø§Ø®Øª Ø±Ø§ Ø¢Ù…Ø§Ø¯Ù‡ Ú©Ù†ÛŒØ¯."
        },
        {
          phase: "ÙØ§Ø² Û³",
          title: "Ù†Ù…ÙˆÙ†Ù‡ Ùˆ Ø§Ø¹ØªØ¨Ø§Ø±Ø³Ù†Ø¬ÛŒ",
          description: "Ù‚Ø·Ø¹Ø§Øª Ù…Ù†ØªØ®Ø¨ Ø±Ø§ Ø¨Ø³Ø§Ø²ÛŒØ¯ ÛŒØ§ Ú†Ø§Ù¾ Ú©Ù†ÛŒØ¯ØŒ Ù…Ú©Ø§Ù†ÛŒØ²Ù… Ø±Ø§ Ø¢Ø²Ù…Ø§ÛŒØ´ Ú©Ù†ÛŒØ¯ Ùˆ Ù†ØªØ§ÛŒØ¬ Ø§Ù†Ø¯Ø§Ø²Ù‡â€ŒÚ¯ÛŒØ±ÛŒâ€ŒØ´Ø¯Ù‡ Ø±Ø§ Ø¨Ù‡ Ù…Ø¯Ù„ CAD Ø¨Ø§Ø²Ú¯Ø±Ø¯Ø§Ù†ÛŒØ¯."
        }
      ]
    }
  },

  zh: {
    service: {
      slug: "agentic-generative-ai-systems",
      title: "æ™ºèƒ½ä½“ AIã€ç”Ÿæˆå¼ AIã€RAG ä¸Ž LLM ç³»ç»Ÿ",
      menuDescription:
        "æ™ºèƒ½ä½“å·¥ä½œæµã€å¯æº¯æº RAGã€LLMã€å¤šæ¨¡æ€é—®ç­”ä¸Žæ™ºèƒ½è‡ªåŠ¨åŒ–ã€‚",
      summary:
        "é¢å‘å®žé™…ä¸šåŠ¡ä»»åŠ¡çš„ç”Ÿäº§åž‹ AI ç³»ç»Ÿï¼Œèžåˆ LLMã€æ£€ç´¢ã€å·¥å…·ã€è®°å¿†ä¸Žå—æ²»ç†çš„æ™ºèƒ½ä½“å·¥ä½œæµã€‚",
      overview: [
        "çŽ°ä»£ç”Ÿæˆå¼ AI æ­£ä»Žå•è½®èŠå¤©è½¬å‘èƒ½å¤Ÿè§„åˆ’ã€è°ƒç”¨å·¥å…·ã€æ£€ç´¢è¯æ®ã€åè°ƒä¸“ä¸šæ™ºèƒ½ä½“å¹¶åœ¨å¤šæ­¥éª¤ä»»åŠ¡ä¸­ä¿æŒçŠ¶æ€çš„ç³»ç»Ÿã€‚",
        "æˆ‘ä»¬å›´ç»•å¯æº¯æºæ£€ç´¢å’Œå—æŽ§æ“ä½œè®¾è®¡ç³»ç»Ÿï¼ŒåŒ…æ‹¬æ··åˆæœç´¢ã€é‡æŽ’åºã€å¼•ç”¨ã€ç»“æž„åŒ–è¾“å‡ºã€å·¥å…·ä¸Ž API é›†æˆã€è®°å¿†ã€å¤šæ¨¡æ€è¾“å…¥ã€äººå·¥å®¡æ‰¹å’Œè®¿é—®æŽ§åˆ¶ã€‚",
        "å½“å‰æž¶æž„è¿˜å¯ä»¥é‡‡ç”¨ MCP ç­‰å¼€æ”¾æ¨¡å¼è¿žæŽ¥å·¥å…·å’Œä¸Šä¸‹æ–‡ï¼Œå¹¶ä½¿ç”¨ A2A é£Žæ ¼çš„æ™ºèƒ½ä½“åä½œï¼ŒåŒæ—¶é€šè¿‡è¿½è¸ªå’Œè¯„ä¼°éªŒè¯å¯é æ€§ã€‚"
      ],
      capabilities: [
        "LLM ä¸Žå¤šæ¨¡æ€æ¨¡åž‹é›†æˆ",
        "æ™ºèƒ½ä½“ç¼–æŽ’ä¸Žå¤šæ™ºèƒ½ä½“äº¤æŽ¥",
        "æ··åˆæ£€ç´¢ã€é‡æŽ’åºä¸Žå¼•ç”¨çš„ RAG",
        "å·¥å…·å’Œå‡½æ•°è°ƒç”¨ã€API ä¸Ž MCP è¿žæŽ¥",
        "è®°å¿†ä¸Žæœ‰çŠ¶æ€å·¥ä½œæµ",
        "é—®ç­”ç³»ç»Ÿä¸Žç»“æž„åŒ–è¾“å‡º",
        "è¯„ä¼°ã€è¿½è¸ªã€æŠ¤æ ä¸Žäººå·¥å®¡æ‰¹",
        "æ¨¡åž‹è·¯ç”±ä¸Žæˆæœ¬/å»¶è¿Ÿä¼˜åŒ–"
      ],
      deliverables: [
        "AI ä¸Žæ™ºèƒ½ä½“æž¶æž„",
        "çŸ¥è¯†æ‘„å–ä¸Žæ£€ç´¢ç®¡çº¿",
        "æ™ºèƒ½ä½“ä¸Žå·¥å…·å·¥ä½œæµ",
        "å¤šæ¨¡æ€ QA æˆ–åŠ©æ‰‹ç•Œé¢",
        "è¯„ä¼°ä¸Žå¯è§‚æµ‹æ€§ä»ªè¡¨æ¿",
        "å®‰å…¨ä¸Žè®¿é—®æŽ§åˆ¶æ–¹æ¡ˆ"
      ],
      fit: [
        "ä¼ä¸šçŸ¥è¯†ä¸ŽæŠ€æœ¯æ”¯æŒ",
        "å·¥ç¨‹ä¸Žç ”ç©¶åŠ©æ‰‹",
        "å·¥ä½œæµè‡ªåŠ¨åŒ–ä¸Žè¿è¥",
        "å®¢æˆ·ä¸Žå‘˜å·¥æœåŠ¡",
        "æ–‡æ¡£å¯†é›†åž‹ QA ä¸Žåˆè§„"
      ]
    },
    aiProject: {
      slug: "industrial-agentic-ai-platform",
      title: "å·¥ä¸šæ™ºèƒ½ä½“ AI å¹³å°",
      menuDescription:
        "èžåˆæ™ºèƒ½ä½“ã€GenAIã€RAGã€LLMã€å·¥å…·ä¸Žå¯æº¯æº QA çš„å—æ²»ç†å¹³å°ã€‚",
      category: "æ™ºèƒ½ä½“ä¸Žç”Ÿæˆå¼ AI",
      status: "ä½œå“é›†æž¶æž„ä¸ŽåŽŸåž‹æ¦‚å¿µ",
      statusDescription:
        "è¯¥é¡¹ç›®ç›®å‰ä½œä¸ºä½œå“é›†ä¸Žæœªæ¥æœåŠ¡æ¦‚å¿µå±•ç¤ºï¼Œå¹¶ä¸ä»£è¡¨å·²ç»å®Œæˆå®¢æˆ·ç”Ÿäº§éƒ¨ç½²ã€‚",
      summary:
        "ä¸€ä¸ªå¤šè¯­è¨€å·¥ä¸š AI å¹³å°ï¼Œå°†å¯æº¯æºçŸ¥è¯†æ£€ç´¢ä¸Žæ™ºèƒ½ä½“å·¥ä½œæµã€å·¥å…·ä½¿ç”¨ã€å¤šæ¨¡æ€äº¤äº’å’Œç»è¿‡è¯„ä¼°çš„ LLM å›žç­”ç»“åˆèµ·æ¥ã€‚",
      overview: [
        "å·¥ä¸šç»„ç»‡çš„é‡è¦çŸ¥è¯†å¾€å¾€åˆ†æ•£åœ¨æ‰‹å†Œã€æ”¿ç­–ã€æŠ¥å‘Šã€æŠ€æœ¯è§„èŒƒã€æ•°æ®åº“å’Œé¡¹ç›®ç³»ç»Ÿä¸­ã€‚",
        "è¯¥å¹³å°å°†çŽ°ä»£ RAG ä¸Žæ··åˆæ£€ç´¢ã€é‡æŽ’åºå’Œå¼•ç”¨ç»“åˆï¼Œå†åŠ å…¥æ™ºèƒ½ä½“ç¼–æŽ’ï¼Œä½¿ä¸“ä¸šæ™ºèƒ½ä½“èƒ½å¤Ÿè°ƒç”¨å·¥å…·å’Œ APIã€ååŒä»»åŠ¡å¹¶å¤„ç†å¤šæ­¥éª¤å·¥ä½œã€‚",
        "æž¶æž„å¼ºè°ƒè´Ÿè´£ä»»éƒ¨ç½²ï¼ŒåŒ…æ‹¬è®¿é—®æŽ§åˆ¶ã€ç»“æž„åŒ–è¾“å‡ºã€å¿…è¦æ—¶çš„äººå·¥å®¡æ‰¹ã€è¿½è¸ªã€åé¦ˆä¸Žè¯„ä¼°ï¼Œè€Œä¸æ˜¯æŠŠæµç•…å›žç­”ç­‰åŒäºŽæ­£ç¡®ç­”æ¡ˆã€‚"
      ],
      technology: [
        "Next.js ä¸Ž TypeScript ç”¨æˆ·ä½“éªŒ",
        "FastAPI æˆ– Node.js AI ä¸Žå·¥å…·æœåŠ¡",
        "PostgreSQL ä¸Ž pgvector æˆ–åŒç±»å‘é‡å­˜å‚¨",
        "æ··åˆæ£€ç´¢ã€å…ƒæ•°æ®è¿‡æ»¤ä¸Žé‡æŽ’åº",
        "LLM ä¸Žå¤šæ¨¡æ€æ¨¡åž‹è·¯ç”±",
        "æ™ºèƒ½ä½“ç¼–æŽ’ã€å·¥å…·è°ƒç”¨ä¸Ž MCP å°±ç»ªé›†æˆ",
        "é¢å‘ä¸“ä¸šæ™ºèƒ½ä½“åä½œçš„ A2A å°±ç»ªæ¨¡å¼",
        "è¿½è¸ªã€è¯„ä¼°ã€æŠ¤æ ä¸Žæ¥æºå¼•ç”¨"
      ],
      value: [
        "æ›´å¿«è®¿é—®å·²æ‰¹å‡†çš„æŠ€æœ¯çŸ¥è¯†",
        "è‡ªåŠ¨åŒ–å¤šæ­¥éª¤çŸ¥è¯†å·¥ä½œæµ",
        "é€šè¿‡å¼•ç”¨å’Œè¯„ä¼°æé«˜å›žç­”é€æ˜Žåº¦",
        "å¯å¤ç”¨çš„å†…éƒ¨ä¸Žå®¢æˆ·åž‹ AI å¹³å°",
        "ä»ŽåŠ©æ‰‹åŽŸåž‹åˆ°ç”Ÿäº§æ™ºèƒ½ä½“çš„å—æŽ§æ¼”è¿›è·¯å¾„"
      ],
      roadmap: [
        {
          phase: "é˜¶æ®µ 1",
          title: "çŸ¥è¯†åŸºç¡€",
          description: "æž„å»ºæ‘„å–ã€å…ƒæ•°æ®ã€æ··åˆæ£€ç´¢ã€é‡æŽ’åºã€æƒé™å’Œå¯æº¯æº QAã€‚"
        },
        {
          phase: "é˜¶æ®µ 2",
          title: "æ™ºèƒ½ä½“å·¥ä½œæµ",
          description: "åŠ å…¥ä¸“ä¸šæ™ºèƒ½ä½“ã€å·¥å…·/API ä½¿ç”¨ã€è®°å¿†ã€å¤šæ¨¡æ€è¾“å…¥å’Œå®¡æ‰¹èŠ‚ç‚¹ã€‚"
        },
        {
          phase: "é˜¶æ®µ 3",
          title: "ç”Ÿäº§çº§è¯„ä¼°",
          description: "åŠ å…¥è¿½è¸ªã€è‡ªåŠ¨ä¸Žäººå·¥è¯„ä¼°ã€æŠ¤æ ã€ç›‘æŽ§ã€æˆæœ¬æŽ§åˆ¶å’Œéƒ¨ç½²æ²»ç†ã€‚"
        }
      ]
    },
    cadProject: {
      slug: "engineering-cad",
      title: "å·¥ç¨‹ CAD",
      menuDescription:
        "ä½¿ç”¨ Autodesk Inventor ä¸Ž SolidWorks è¿›è¡Œä¸‰ç»´æœºæ¢°è®¾è®¡ã€è£…é…ã€å·¥ç¨‹å›¾ä¸Žé¢å‘åˆ¶é€ çš„è®¾è®¡ã€‚",
      category: "æœºæ¢°å·¥ç¨‹ä¸Ž CAD",
      status: "æ´»è·ƒçš„å·¥ç¨‹è®¾è®¡èƒ½åŠ›",
      statusDescription:
        "CAD èƒ½åŠ›æ”¯æŒæœºå™¨äººæ‰‹ã€æœºæž„å’ŒåŽŸåž‹å¼€å‘ï¼Œå¹¶éšç€å·¥ç¨‹éœ€æ±‚ä¸Žåˆ¶é€ çº¦æŸçš„éªŒè¯æŒç»­ä¼˜åŒ–æ¨¡åž‹ã€‚",
      summary:
        "é¢å‘æœºæ¢°é›¶ä»¶ä¸Žè£…é…ä½“çš„å‚æ•°åŒ–ä¸‰ç»´ CADï¼Œä»Žæ¦‚å¿µå‡ ä½•åˆ°åˆ¶é€ å›¾çº¸å’Œè¿­ä»£åŽŸåž‹å¼€å‘ã€‚",
      overview: [
        "å·¥ç¨‹ CAD å°†åŠŸèƒ½éœ€æ±‚è½¬åŒ–ä¸ºå¯å®¡æŸ¥ã€å¯åˆ¶é€ ã€å¯ä¿®è®¢çš„å—æŽ§ä¸‰ç»´é›¶ä»¶ã€è£…é…ä½“å’Œå·¥ç¨‹å›¾ã€‚",
        "å·¥ä½œæµå¯è¦†ç›–æœºå™¨äººæœºæž„ã€è¿žæ†ã€å£³ä½“ã€æ”¯æž¶ã€å¤¹å…·å’Œå…¶ä»–å·¥ç¨‹éƒ¨ä»¶ï¼Œå¹¶ä½¿ç”¨ Autodesk Inventor ä¸Ž SolidWorksã€‚",
        "åœ¨ç‰©ç†åŽŸåž‹ä¹‹å‰ï¼Œè®¾è®¡è¯„å®¡ä¼šè€ƒè™‘é…åˆã€è¿åŠ¨ã€å…¬å·®ã€æŽ¥å£ã€ææ–™ã€ç´§å›ºä»¶ã€å¯ç»´æŠ¤æ€§ä¸Žå¯åˆ¶é€ æ€§ã€‚"
      ],
      technology: [
        "Autodesk Inventor",
        "SolidWorks",
        "å‚æ•°åŒ–é›¶ä»¶ä¸Žè£…é…å»ºæ¨¡",
        "çˆ†ç‚¸è§†å›¾ä¸Žè£…é…æ–‡æ¡£",
        "äºŒç»´åˆ¶é€ å›¾ä¸Žå…¬å·®æ ‡æ³¨",
        "è¿åŠ¨ã€å¹²æ¶‰ä¸Žé…åˆæ£€æŸ¥",
        "ç”¨äºŽåˆ¶é€ å’Œ 3D æ‰“å°çš„ STEPã€STL ä¸Ž DXF å¯¼å‡º",
        "é¢å‘åˆ¶é€ çš„è®¾è®¡ä¸ŽåŽŸåž‹è¿­ä»£"
      ],
      value: [
        "åˆ¶é€ å‰æ›´å¿«è¿­ä»£",
        "å·¥ç¨‹ä¸Žåˆ¶é€ ä¹‹é—´æ›´æ¸…æ™°çš„æ²Ÿé€š",
        "å‡å°‘é…åˆä¸Žå¹²æ¶‰é”™è¯¯",
        "å¯å¤ç”¨çš„è®¾è®¡åŽ†å²ä¸Žå—æŽ§ç‰ˆæœ¬",
        "ä»Žæ¦‚å¿µåˆ°å®žä½“åŽŸåž‹çš„æ›´å¼ºè·¯å¾„"
      ],
      roadmap: [
        {
          phase: "é˜¶æ®µ 1",
          title: "éœ€æ±‚ä¸Žæ¦‚å¿µ",
          description: "å®šä¹‰æŽ¥å£ã€è¿åŠ¨ã€è½½è·ã€å°ºå¯¸ã€ææ–™å’Œåˆå§‹å‚æ•°åŒ–æ¦‚å¿µã€‚"
        },
        {
          phase: "é˜¶æ®µ 2",
          title: "è¯¦ç»†è£…é…",
          description: "å¼€å‘é›¶ä»¶ä¸Žè£…é…ä½“ï¼Œè¿›è¡Œé…åˆå’Œå¹²æ¶‰æ£€æŸ¥ï¼Œå¹¶å‡†å¤‡åˆ¶é€ æ–‡æ¡£ã€‚"
        },
        {
          phase: "é˜¶æ®µ 3",
          title: "åŽŸåž‹ä¸ŽéªŒè¯",
          description: "åˆ¶é€ æˆ–æ‰“å°é€‰å®šé›¶ä»¶ï¼Œæµ‹è¯•æœºæž„ï¼Œå¹¶å°†æµ‹é‡ç»“æžœåé¦ˆåˆ° CAD æ¨¡åž‹ã€‚"
        }
      ]
    }
  }
};

export function applyContentUpdates(
  dictionary: Dictionary,
  locale: Locale,
): Dictionary {
  const local = updates[locale] ?? updates.en!;

  return {
    ...dictionary,
    services: {
      ...dictionary.services,
      items: dictionary.services.items.map((item) =>
        item.slug === local.service.slug ? local.service : item,
      ),
    },
    projects: {
      ...dictionary.projects,
      items: dictionary.projects.items.map((item) => {
        if (item.slug === local.aiProject.slug) {
          return local.aiProject;
        }
        if (item.slug === local.cadProject.slug) {
          return local.cadProject;
        }
        return item;
      }),
    },
  };
}


