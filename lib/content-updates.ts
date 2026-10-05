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

const updates: Record<Locale, LocalisedUpdates> = {
  en: {
    service: {
      slug: "rag-intelligent-assistants",
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
      slug: "industrial-rag-platform",
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
      slug: "digital-twin",
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
      slug: "rag-intelligent-assistants",
      title: "هوش عامل‌محور، هوش مولد، RAG و سامانه‌های LLM",
      menuDescription:
        "گردش‌کارهای عامل‌محور، RAG مبتنی بر منبع، LLM، پرسش‌وپاسخ چندرسانه‌ای و اتوماسیون هوشمند.",
      summary:
        "سامانه‌های هوش مصنوعی برای کاربرد واقعی که مدل‌های زبانی، بازیابی، ابزارها، حافظه و گردش‌کارهای کنترل‌شده عامل‌محور را ترکیب می‌کنند.",
      overview: [
        "نسل جدید سامانه‌های هوش مولد از چت تک‌مرحله‌ای فراتر رفته و به عامل‌هایی می‌رسد که می‌توانند برنامه‌ریزی کنند، از ابزارها استفاده کنند، شواهد را بازیابی کنند و کار چندمرحله‌ای را پیش ببرند.",
        "معماری را بر بازیابی قابل استناد و اقدامات کنترل‌شده بنا می‌کنیم: جست‌وجوی ترکیبی، reranking، استناد، خروجی ساخت‌یافته، اتصال API و ابزار، حافظه، ورودی چندرسانه‌ای، تأیید انسانی و کنترل دسترسی.",
        "در صورت نیاز می‌توان از الگوهای باز مانند MCP برای اتصال ابزار و زمینه و الگوهای A2A برای همکاری عامل‌ها استفاده کرد و قابلیت اطمینان را با tracing و ارزیابی سنجید."
      ],
      capabilities: [
        "یکپارچه‌سازی LLM و مدل‌های چندرسانه‌ای",
        "ارکستراسیون عامل‌ها و همکاری چندعاملی",
        "RAG با بازیابی ترکیبی، reranking و استناد",
        "فراخوانی ابزار و تابع، API و اتصال MCP",
        "حافظه و گردش‌کارهای stateful",
        "سامانه‌های QA و خروجی ساخت‌یافته",
        "ارزیابی، tracing، guardrail و تأیید انسانی",
        "مسیریابی مدل و بهینه‌سازی هزینه و تأخیر"
      ],
      deliverables: [
        "معماری هوش مصنوعی و عامل‌ها",
        "خط لوله دانش، ingestion و retrieval",
        "گردش‌کار عامل و ابزار",
        "رابط QA یا دستیار چندرسانه‌ای",
        "داشبورد ارزیابی و مشاهده‌پذیری",
        "طرح امنیت و کنترل دسترسی"
      ],
      fit: [
        "دانش سازمانی و پشتیبانی فنی",
        "دستیارهای مهندسی و پژوهشی",
        "اتوماسیون گردش‌کار و عملیات",
        "خدمات مشتری و کارکنان",
        "QA و انطباق مبتنی بر اسناد"
      ]
    },
    aiProject: {
      slug: "industrial-rag-platform",
      title: "پلتفرم صنعتی هوش عامل‌محور",
      menuDescription:
        "پلتفرمی کنترل‌شده برای عامل‌ها، GenAI، RAG، LLM، ابزارها و پرسش‌وپاسخ مبتنی بر منبع.",
      category: "هوش عامل‌محور و مولد",
      status: "مفهوم معماری و نمونه اولیه پورتفولیو",
      statusDescription:
        "این پروژه در حال حاضر به‌عنوان مفهوم پورتفولیو و خدمت آینده ارائه می‌شود و ادعای استقرار کامل مشتری ندارد.",
      summary:
        "پلتفرم چندزبانه صنعتی که بازیابی دانش مبتنی بر منبع را با گردش‌کارهای عامل‌محور، ابزارها، تعامل چندرسانه‌ای و پاسخ‌های ارزیابی‌شده LLM ترکیب می‌کند.",
      overview: [
        "دانش مهم سازمانی معمولاً میان راهنماها، سیاست‌ها، گزارش‌ها، مشخصات فنی، پایگاه‌های داده و سامانه‌های پروژه پراکنده است.",
        "این پلتفرم RAG مدرن را با بازیابی ترکیبی، reranking و استناد ترکیب می‌کند و سپس ارکستراسیون عامل‌ها را برای استفاده از ابزارها، APIها و اجرای وظایف چندمرحله‌ای اضافه می‌کند.",
        "معماری برای استقرار مسئولانه طراحی شده است و شامل کنترل دسترسی، خروجی ساخت‌یافته، تأیید انسانی در نقاط حساس، tracing، بازخورد و ارزیابی است."
      ],
      technology: [
        "Next.js و TypeScript",
        "FastAPI یا Node.js برای سرویس‌های AI و ابزار",
        "PostgreSQL و pgvector یا ذخیره‌ساز برداری مشابه",
        "بازیابی ترکیبی، فیلتر متادیتا و reranking",
        "مسیریابی LLM و مدل‌های چندرسانه‌ای",
        "ارکستراسیون عامل، tool calling و اتصال آماده MCP",
        "الگوهای آماده A2A برای همکاری عامل‌های تخصصی",
        "tracing، ارزیابی، guardrail و استناد به منبع"
      ],
      value: [
        "دسترسی سریع‌تر به دانش فنی تأییدشده",
        "اتوماسیون گردش‌کارهای چندمرحله‌ای دانشی",
        "پاسخ‌های شفاف‌تر با استناد و ارزیابی",
        "پلتفرم قابل استفاده مجدد برای AI داخلی و مشتری‌محور",
        "مسیر کنترل‌شده از دستیار اولیه تا عامل تولیدی"
      ],
      roadmap: [
        {
          phase: "فاز ۱",
          title: "پایه دانش",
          description: "ingestion، متادیتا، بازیابی ترکیبی، reranking، مجوزها و QA مبتنی بر منبع را بسازید."
        },
        {
          phase: "فاز ۲",
          title: "گردش‌کارهای عامل‌محور",
          description: "عامل‌های تخصصی، ابزار و API، حافظه، ورودی چندرسانه‌ای و نقاط تأیید را اضافه کنید."
        },
        {
          phase: "فاز ۳",
          title: "ارزیابی تولیدی",
          description: "tracing، ارزیابی خودکار و انسانی، guardrail، مانیتورینگ، کنترل هزینه و حاکمیت استقرار را اضافه کنید."
        }
      ]
    },
    cadProject: {
      slug: "digital-twin",
      title: "CAD مهندسی",
      menuDescription:
        "طراحی مکانیکی سه‌بعدی، اسمبلی، نقشه‌کشی و طراحی برای ساخت با Autodesk Inventor و SolidWorks.",
      category: "مهندسی مکانیک و CAD",
      status: "توانمندی فعال طراحی مهندسی",
      statusDescription:
        "توانمندی CAD از توسعه دست رباتیک، مکانیزم‌ها و نمونه‌های اولیه پشتیبانی می‌کند و مدل‌ها با اعتبارسنجی الزامات مهندسی و محدودیت‌های ساخت اصلاح می‌شوند.",
      summary:
        "CAD پارامتریک سه‌بعدی برای قطعات و اسمبلی‌های مکانیکی، از هندسه مفهومی تا نقشه‌های ساخت و تکرار نمونه اولیه.",
      overview: [
        "CAD مهندسی نیازمندی‌های عملکردی را به قطعات، اسمبلی‌ها و نقشه‌های سه‌بعدی کنترل‌شده تبدیل می‌کند که قابل بازبینی، ساخت و اصلاح هستند.",
        "این گردش‌کار می‌تواند مکانیزم‌های رباتیک، لینک‌ها، پوسته‌ها، براکت‌ها، فیکسچرها و قطعات مهندسی را با Autodesk Inventor و SolidWorks پوشش دهد.",
        "بازبینی طراحی شامل fit، حرکت، تلرانس‌ها، رابط‌ها، مواد، اتصالات، قابلیت سرویس و قابلیت ساخت پیش از نمونه‌سازی فیزیکی است."
      ],
      technology: [
        "Autodesk Inventor",
        "SolidWorks",
        "مدل‌سازی پارامتریک قطعه و اسمبلی",
        "Exploded view و مستندات مونتاژ",
        "نقشه‌های دوبعدی ساخت و تلرانس‌گذاری",
        "بررسی حرکت، تداخل و fit",
        "خروجی STEP، STL و DXF برای ساخت و پرینت سه‌بعدی",
        "Design for Manufacture و تکرار نمونه اولیه"
      ],
      value: [
        "تکرار سریع‌تر پیش از ساخت",
        "ارتباط روشن‌تر میان مهندسی و ساخت",
        "کاهش خطاهای fit و تداخل",
        "تاریخچه طراحی و بازنگری‌های کنترل‌شده",
        "مسیر قوی‌تر از مفهوم تا نمونه فیزیکی"
      ],
      roadmap: [
        {
          phase: "فاز ۱",
          title: "نیازمندی‌ها و مفهوم",
          description: "رابط‌ها، حرکت، بارها، ابعاد، مواد و مفهوم پارامتریک اولیه را تعریف کنید."
        },
        {
          phase: "فاز ۲",
          title: "اسمبلی تفصیلی",
          description: "قطعات و اسمبلی‌ها را توسعه دهید، fit و تداخل را بررسی کنید و مستندات ساخت را آماده کنید."
        },
        {
          phase: "فاز ۳",
          title: "نمونه و اعتبارسنجی",
          description: "قطعات منتخب را بسازید یا چاپ کنید، مکانیزم را آزمایش کنید و نتایج اندازه‌گیری‌شده را به مدل CAD بازگردانید."
        }
      ]
    }
  },

  zh: {
    service: {
      slug: "rag-intelligent-assistants",
      title: "智能体 AI、生成式 AI、RAG 与 LLM 系统",
      menuDescription:
        "智能体工作流、可溯源 RAG、LLM、多模态问答与智能自动化。",
      summary:
        "面向实际业务任务的生产型 AI 系统，融合 LLM、检索、工具、记忆与受治理的智能体工作流。",
      overview: [
        "现代生成式 AI 正从单轮聊天转向能够规划、调用工具、检索证据、协调专业智能体并在多步骤任务中保持状态的系统。",
        "我们围绕可溯源检索和受控操作设计系统，包括混合搜索、重排序、引用、结构化输出、工具与 API 集成、记忆、多模态输入、人工审批和访问控制。",
        "当前架构还可以采用 MCP 等开放模式连接工具和上下文，并使用 A2A 风格的智能体协作，同时通过追踪和评估验证可靠性。"
      ],
      capabilities: [
        "LLM 与多模态模型集成",
        "智能体编排与多智能体交接",
        "混合检索、重排序与引用的 RAG",
        "工具和函数调用、API 与 MCP 连接",
        "记忆与有状态工作流",
        "问答系统与结构化输出",
        "评估、追踪、护栏与人工审批",
        "模型路由与成本/延迟优化"
      ],
      deliverables: [
        "AI 与智能体架构",
        "知识摄取与检索管线",
        "智能体与工具工作流",
        "多模态 QA 或助手界面",
        "评估与可观测性仪表板",
        "安全与访问控制方案"
      ],
      fit: [
        "企业知识与技术支持",
        "工程与研究助手",
        "工作流自动化与运营",
        "客户与员工服务",
        "文档密集型 QA 与合规"
      ]
    },
    aiProject: {
      slug: "industrial-rag-platform",
      title: "工业智能体 AI 平台",
      menuDescription:
        "融合智能体、GenAI、RAG、LLM、工具与可溯源 QA 的受治理平台。",
      category: "智能体与生成式 AI",
      status: "作品集架构与原型概念",
      statusDescription:
        "该项目目前作为作品集与未来服务概念展示，并不代表已经完成客户生产部署。",
      summary:
        "一个多语言工业 AI 平台，将可溯源知识检索与智能体工作流、工具使用、多模态交互和经过评估的 LLM 回答结合起来。",
      overview: [
        "工业组织的重要知识往往分散在手册、政策、报告、技术规范、数据库和项目系统中。",
        "该平台将现代 RAG 与混合检索、重排序和引用结合，再加入智能体编排，使专业智能体能够调用工具和 API、协同任务并处理多步骤工作。",
        "架构强调负责任部署，包括访问控制、结构化输出、必要时的人工审批、追踪、反馈与评估，而不是把流畅回答等同于正确答案。"
      ],
      technology: [
        "Next.js 与 TypeScript 用户体验",
        "FastAPI 或 Node.js AI 与工具服务",
        "PostgreSQL 与 pgvector 或同类向量存储",
        "混合检索、元数据过滤与重排序",
        "LLM 与多模态模型路由",
        "智能体编排、工具调用与 MCP 就绪集成",
        "面向专业智能体协作的 A2A 就绪模式",
        "追踪、评估、护栏与来源引用"
      ],
      value: [
        "更快访问已批准的技术知识",
        "自动化多步骤知识工作流",
        "通过引用和评估提高回答透明度",
        "可复用的内部与客户型 AI 平台",
        "从助手原型到生产智能体的受控演进路径"
      ],
      roadmap: [
        {
          phase: "阶段 1",
          title: "知识基础",
          description: "构建摄取、元数据、混合检索、重排序、权限和可溯源 QA。"
        },
        {
          phase: "阶段 2",
          title: "智能体工作流",
          description: "加入专业智能体、工具/API 使用、记忆、多模态输入和审批节点。"
        },
        {
          phase: "阶段 3",
          title: "生产级评估",
          description: "加入追踪、自动与人工评估、护栏、监控、成本控制和部署治理。"
        }
      ]
    },
    cadProject: {
      slug: "digital-twin",
      title: "工程 CAD",
      menuDescription:
        "使用 Autodesk Inventor 与 SolidWorks 进行三维机械设计、装配、工程图与面向制造的设计。",
      category: "机械工程与 CAD",
      status: "活跃的工程设计能力",
      statusDescription:
        "CAD 能力支持机器人手、机构和原型开发，并随着工程需求与制造约束的验证持续优化模型。",
      summary:
        "面向机械零件与装配体的参数化三维 CAD，从概念几何到制造图纸和迭代原型开发。",
      overview: [
        "工程 CAD 将功能需求转化为可审查、可制造、可修订的受控三维零件、装配体和工程图。",
        "工作流可覆盖机器人机构、连杆、壳体、支架、夹具和其他工程部件，并使用 Autodesk Inventor 与 SolidWorks。",
        "在物理原型之前，设计评审会考虑配合、运动、公差、接口、材料、紧固件、可维护性与可制造性。"
      ],
      technology: [
        "Autodesk Inventor",
        "SolidWorks",
        "参数化零件与装配建模",
        "爆炸视图与装配文档",
        "二维制造图与公差标注",
        "运动、干涉与配合检查",
        "用于制造和 3D 打印的 STEP、STL 与 DXF 导出",
        "面向制造的设计与原型迭代"
      ],
      value: [
        "制造前更快迭代",
        "工程与制造之间更清晰的沟通",
        "减少配合与干涉错误",
        "可复用的设计历史与受控版本",
        "从概念到实体原型的更强路径"
      ],
      roadmap: [
        {
          phase: "阶段 1",
          title: "需求与概念",
          description: "定义接口、运动、载荷、尺寸、材料和初始参数化概念。"
        },
        {
          phase: "阶段 2",
          title: "详细装配",
          description: "开发零件与装配体，进行配合和干涉检查，并准备制造文档。"
        },
        {
          phase: "阶段 3",
          title: "原型与验证",
          description: "制造或打印选定零件，测试机构，并将测量结果反馈到 CAD 模型。"
        }
      ]
    }
  }
};

export function applyContentUpdates(
  dictionary: Dictionary,
  locale: Locale,
): Dictionary {
  const local = updates[locale];

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
