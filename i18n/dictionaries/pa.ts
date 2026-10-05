import en from "./en.json";

// Start from the English dictionary so this Punjabi dictionary keeps exactly
// the same data shape as the installed project. Punjabi translations then
// override the public-facing copy. This also makes the locale resilient to
// small content-schema differences between project revisions.
const dictionary: any = JSON.parse(JSON.stringify(en));

Object.assign(dictionary.metadata, {
  title: "IndustrialOrigami.AI | AI, ਰੋਬੋਟਿਕਸ ਅਤੇ ਇੰਟੈਲੀਜੈਂਟ ਇੰਜੀਨੀਅਰਿੰਗ",
  description:
    "IndustrialOrigami.AI ਨਿਊਜ਼ੀਲੈਂਡ ਵਿੱਚ ਪ੍ਰਯੋਗਿਕ AI, ਰੋਬੋਟਿਕਸ, ਸਾਫਟਵੇਅਰ, ਡਾਟਾ, CAD ਅਤੇ ਇੰਟੈਲੀਜੈਂਟ ਇੰਜੀਨੀਅਰਿੰਗ ਹੱਲ ਵਿਕਸਿਤ ਕਰਦਾ ਹੈ।",
});

Object.assign(dictionary.brand, {
  tagline: "ਬੁੱਧੀਮਤਾ ਨੂੰ ਆਕਾਰ ਦਿਓ",
});

Object.assign(dictionary.navigation, {
  home: "ਮੁੱਖ ਪੰਨਾ",
  about: "ਸਾਡੇ ਬਾਰੇ",
  services: "ਸੇਵਾਵਾਂ",
  projects: "ਪ੍ਰੋਜੈਕਟ",
  careers: "ਕਰੀਅਰ",
  collaborate: "ਸਹਿਯੋਗ",
});

Object.assign(dictionary.home, {
  eyebrow: "AI · ਰੋਬੋਟਿਕਸ · ਇੰਟੈਲੀਜੈਂਟ ਇੰਜੀਨੀਅਰਿੰਗ",
  title: "ਬੁੱਧੀਮਤਾ ਨੂੰ ਆਕਾਰ ਦਿਓ। ਪ੍ਰਯੋਗਿਕ ਤਕਨਾਲੋਜੀ ਬਣਾਓ।",
  description:
    "IndustrialOrigami.AI ਅਸਲ ਉਦਯੋਗਿਕ ਸਮੱਸਿਆਵਾਂ ਹੱਲ ਕਰਨ ਲਈ ਕ੍ਰਿਤ੍ਰਿਮ ਬੁੱਧੀ, ਸਾਫਟਵੇਅਰ, ਡਾਟਾ ਅਤੇ ਇੰਜੀਨੀਅਰਿੰਗ ਨੂੰ ਜੋੜਦਾ ਹੈ।",
  servicesCta: "ਸੇਵਾਵਾਂ ਵੇਖੋ",
  projectCta: "ਰੋਬੋਟਿਕ ਹੱਥ ਵੇਖੋ",
  servicesEyebrow: "ਸੇਵਾਵਾਂ",
  servicesTitle: "ਪੰਜ ਕੇਂਦ੍ਰਿਤ ਸਮਰੱਥਾਵਾਂ, ਇੱਕ ਇਕੀਕ੍ਰਿਤ ਟੀਮ।",
  servicesDescription:
    "ਇੰਜੀਨੀਅਰਿੰਗ, ਸਾਫਟਵੇਅਰ, ਡਾਟਾ ਅਤੇ ਆਧੁਨਿਕ AI ਸਿਸਟਮਾਂ ਵਿੱਚ ਸਾਡੀਆਂ ਮੁੱਖ ਸਮਰੱਥਾਵਾਂ ਵੇਖੋ।",
  viewAllServices: "ਸਾਰੀਆਂ ਸੇਵਾਵਾਂ ਵੇਖੋ",
  projectsEyebrow: "ਪ੍ਰੋਜੈਕਟ",
  projectsTitle: "ਅਸਲ ਇੰਜੀਨੀਅਰਿੰਗ ਸਮਰੱਥਾ ਦਿਖਾਉਣ ਲਈ ਤਿਆਰ ਕੀਤਾ ਪੋਰਟਫੋਲਿਓ।",
  projectsDescription:
    "ਸਾਡਾ ਕੰਮ ਰੋਬੋਟਿਕ ਸਿਸਟਮਾਂ, ਏਜੈਂਟਿਕ AI, ਭਵਿੱਖਬਾਣੀ ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਮਕੈਨਿਕਲ CAD ਤੱਕ ਫੈਲਿਆ ਹੋਇਆ ਹੈ।",
  viewProject: "ਪ੍ਰੋਜੈਕਟ ਵੇਖੋ",
  collaborateEyebrow: "ਸਹਿਯੋਗ",
  collaborateTitle: "ਸਾਡੇ ਕੋਲ ਹੱਲ ਕਰਨ ਯੋਗ ਸਮੱਸਿਆ ਲਿਆਓ।",
  collaborateDescription:
    "ਅਸੀਂ ਉਦਯੋਗਿਕ ਪਾਇਲਟਾਂ, ਖੋਜ ਭਾਗੀਦਾਰੀਆਂ, ਫੰਡਿੰਗ, ਨਿਵੇਸ਼ ਅਤੇ ਤਕਨੀਕੀ ਸਹਿਯੋਗ ਦਾ ਸਵਾਗਤ ਕਰਦੇ ਹਾਂ।",
});

Object.assign(dictionary.about, {
  eyebrow: "IndustrialOrigami.AI ਬਾਰੇ",
  title: "ਪ੍ਰਯੋਗਿਕ ਡੀਪ ਟੈਕ ਲਈ ਇੱਕ ਨਿਊਜ਼ੀਲੈਂਡ ਕੰਪਨੀ।",
  intro:
    "ਅਸੀਂ AI, ਡਾਟਾ, ਸਾਫਟਵੇਅਰ ਅਤੇ ਇੰਜੀਨੀਅਰਿੰਗ ਨੂੰ ਜੋੜ ਕੇ ਮਾਪਯੋਗ ਅਸਲ-ਦੁਨੀਆ ਮੁੱਲ ਵਾਲੀ ਜ਼ਿੰਮੇਵਾਰ ਤਕਨਾਲੋਜੀ ਬਣਾਉਂਦੇ ਹਾਂ।",
  storyTitle: "ਜਟਿਲ ਵਿਚਾਰਾਂ ਤੋਂ ਲਾਭਦਾਇਕ ਸਿਸਟਮਾਂ ਤੱਕ।",
  teamEyebrow: "ਟੀਮ",
  teamTitle: "ਬਹੁ-ਵਿਭਾਗੀ ਸਮਰੱਥਾ।",
  teamDescription:
    "ਟੀਮ ਰਣਨੀਤੀ, AI, ਸਾਫਟਵੇਅਰ, ਡਾਟਾ ਸਾਇੰਸ, ਮਕੈਨਿਕਲ ਡਿਜ਼ਾਈਨ, CAD, ਫੈਬਰਿਕੇਸ਼ਨ ਅਤੇ ਪ੍ਰੋਜੈਕਟ ਇੰਜੀਨੀਅਰਿੰਗ ਨੂੰ ਜੋੜਦੀ ਹੈ।",
});

if (Array.isArray(dictionary.about.storyParagraphs)) {
  dictionary.about.storyParagraphs = [
    "IndustrialOrigami.AI ਉੱਚ ਪੱਧਰੀ ਖੋਜ ਅਤੇ ਪ੍ਰਯੋਗਿਕ ਵਪਾਰਕ ਤਕਨਾਲੋਜੀ ਵਿਚਕਾਰ ਪੁਲ ਬਣਾਉਣ ਲਈ ਸਥਾਪਿਤ ਕੀਤਾ ਗਿਆ ਸੀ।",
    "ਕੰਪਨੀ ਇੱਕ ਇੰਟੈਲੀਜੈਂਟ ਰੋਬੋਟਿਕ ਹੱਥ ਵਿਕਸਿਤ ਕਰ ਰਹੀ ਹੈ ਅਤੇ ਨਾਲ ਹੀ AI, ਡਾਟਾ ਸਾਇੰਸ, ਸਾਫਟਵੇਅਰ ਇੰਜੀਨੀਅਰਿੰਗ, CAD ਅਤੇ ਇੰਟੈਲੀਜੈਂਟ ਆਟੋਮੇਸ਼ਨ ਵਿੱਚ ਸਮਰੱਥਾ ਬਣਾਉਂਦੀ ਹੈ।",
    "ਸਾਡਾ ਤਰੀਕਾ ਸਬੂਤ-ਆਧਾਰਿਤ ਹੈ: ਸਮੱਸਿਆ ਨੂੰ ਸਮਝੋ, ਕੇਂਦ੍ਰਿਤ ਪ੍ਰੋਟੋਟਾਈਪ ਬਣਾਓ, ਪ੍ਰਦਰਸ਼ਨ ਮਾਪੋ, ਉਪਭੋਗਤਾਵਾਂ ਤੋਂ ਸਿੱਖੋ ਅਤੇ ਤਕਨੀਕੀ ਤੇ ਵਪਾਰਕ ਮਾਮਲਾ ਭਰੋਸੇਯੋਗ ਹੋਣ 'ਤੇ ਹੀ ਸਕੇਲ ਕਰੋ।",
  ];
}

if (Array.isArray(dictionary.about.companyFacts)) {
  const factTranslations = [
    ["ਸਥਾਨ", "ਕ੍ਰਾਈਸਟਚਰਚ, ਨਿਊਜ਼ੀਲੈਂਡ"],
    ["ਕੇਂਦਰ", "AI, ਰੋਬੋਟਿਕਸ, ਡਾਟਾ, ਸਾਫਟਵੇਅਰ, CAD ਅਤੇ ਇੰਟੈਲੀਜੈਂਟ ਇੰਜੀਨੀਅਰਿੰਗ"],
    ["ਵਪਾਰਕ ਮਾਡਲ", "ਪ੍ਰੋਫੈਸ਼ਨਲ ਸੇਵਾਵਾਂ, ਸਹਿਯੋਗੀ R&D ਅਤੇ ਮਲਕੀਅਤ ਵਾਲਾ ਉਤਪਾਦ ਵਿਕਾਸ"],
    ["ਦ੍ਰਿਸ਼ਟੀਕੋਣ", "ਮਾਪਯੋਗ ਪ੍ਰਮਾਣਿਕਤਾ ਨਾਲ ਸਬੂਤ-ਆਧਾਰਿਤ ਤਕਨੀਕੀ ਵਿਕਾਸ"],
  ];
  dictionary.about.companyFacts = dictionary.about.companyFacts.map(
    (fact: any, index: number) => ({
      ...fact,
      label: factTranslations[index]?.[0] ?? fact.label,
      value: factTranslations[index]?.[1] ?? fact.value,
    }),
  );
}

const teamTranslations: Record<string, { role: string; description: string }> = {
  "David Ewing": {
    role: "ਸੰਸਥਾਪਕ ਅਤੇ ਮੈਨੇਜਿੰਗ ਡਾਇਰੈਕਟਰ",
    description: "ਰਣਨੀਤੀ, ਭਾਗੀਦਾਰੀਆਂ, ਫੰਡਿੰਗ, ਉਤਪਾਦ ਦਿਸ਼ਾ ਅਤੇ ਕੰਪਨੀ ਵਿਕਾਸ।",
  },
  "Zahra Torabi": {
    role: "AI, ਸਾਫਟਵੇਅਰ ਇੰਜੀਨੀਅਰਿੰਗ ਅਤੇ R&D ਲੀਡ",
    description: "AI/ML ਖੋਜ, ਰੀਇਨਫੋਰਸਮੈਂਟ ਲਰਨਿੰਗ, ਏਜੈਂਟਿਕ ਅਤੇ ਜਨਰੇਟਿਵ AI, ਸਾਫਟਵੇਅਰ ਇੰਜੀਨੀਅਰਿੰਗ, ਮੁਲਾਂਕਣ ਅਤੇ ਤਕਨੀਕੀ ਕਾਰਜਾਨਵੈਣ।",
  },
  Lilian: {
    role: "ਡਾਟਾ ਸਾਇੰਸ ਅਤੇ ਐਨਾਲਿਟਿਕਸ ਲੀਡ",
    description: "ਡਾਟਾ ਤਿਆਰੀ, ਅੰਕੜਾ ਮਾਡਲਿੰਗ, ਭਵਿੱਖਬਾਣੀ ਵਿਸ਼ਲੇਸ਼ਣ, ਵਿਜ਼ੁਅਲਾਈਜ਼ੇਸ਼ਨ ਅਤੇ ਪ੍ਰਮਾਣਿਕਤਾ।",
  },
  Gurwinder: {
    role: "ਮਕੈਨਿਕਲ ਅਤੇ ਪ੍ਰੋਜੈਕਟ ਇੰਜੀਨੀਅਰਿੰਗ ਲੀਡ",
    description: "ਮਕੈਨਿਕਲ ਇੰਜੀਨੀਅਰਿੰਗ, CAD ਡਿਜ਼ਾਈਨ, ਫੈਬਰਿਕੇਸ਼ਨ ਅਤੇ ਪ੍ਰੋਟੋਟਾਈਪ ਵਿਕਾਸ।",
  },
};

if (Array.isArray(dictionary.about.team)) {
  dictionary.about.team = dictionary.about.team.map((member: any) => ({
    ...member,
    ...(teamTranslations[member.name] ?? {}),
  }));
} else if (dictionary.about.team && typeof dictionary.about.team === "object") {
  for (const member of Object.values(dictionary.about.team) as any[]) {
    if (member?.name && teamTranslations[member.name]) {
      Object.assign(member, teamTranslations[member.name]);
    }
  }
}

Object.assign(dictionary.services, {
  eyebrow: "ਸੇਵਾਵਾਂ",
  title: "ਵਪਾਰਕ ਨਤੀਜਿਆਂ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਡਿਜ਼ਾਈਨ ਕੀਤੀਆਂ ਤਕਨਾਲੋਜੀ ਸੇਵਾਵਾਂ।",
  intro:
    "ਅਸੀਂ ਖੋਜ ਅਤੇ ਇੰਜੀਨੀਅਰਿੰਗ ਸਮਰੱਥਾ ਨੂੰ ਜੋੜ ਕੇ ਸੰਸਥਾਵਾਂ ਨੂੰ ਇੰਟੈਲੀਜੈਂਟ ਉਤਪਾਦਾਂ ਅਤੇ ਸਿਸਟਮਾਂ ਦੀ ਜਾਂਚ, ਨਿਰਮਾਣ ਅਤੇ ਪ੍ਰਮਾਣਿਕਤਾ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਾਂ।",
  viewService: "ਸੇਵਾ ਵੇਖੋ",
  overviewTitle: "ਸੇਵਾ ਦਾ ਸੰਖੇਪ",
  capabilitiesTitle: "ਮੁੱਖ ਸਮਰੱਥਾਵਾਂ",
  deliverablesTitle: "ਸੰਭਾਵੀ ਡਿਲਿਵਰੇਬਲ",
  fitTitle: "ਉਚਿਤ ਸਹਿਯੋਗ",
});

const serviceCopy: Record<string, any> = {
  "robotics-and-automation": {
    title: "ਰੋਬੋਟਿਕਸ ਅਤੇ ਆਟੋਮੇਸ਼ਨ",
    menuDescription: "ਅਨੁਕੂਲ ਮੈਨਿਪੂਲੇਸ਼ਨ, ਸੈਂਸਿੰਗ, ਕੰਟਰੋਲ ਅਤੇ ਆਟੋਮੇਸ਼ਨ ਪ੍ਰੋਟੋਟਾਈਪ।",
    summary: "ਰੋਬੋਟਿਕ ਸਿਸਟਮਾਂ, ਇੰਟੈਲੀਜੈਂਟ ਐਂਡ-ਇਫੈਕਟਰਾਂ ਅਤੇ ਉਦਯੋਗਿਕ ਆਟੋਮੇਸ਼ਨ ਲਈ ਖੋਜ ਅਤੇ ਪ੍ਰੋਟੋਟਾਈਪ ਵਿਕਾਸ।",
  },
  "data-science-and-analytics": {
    title: "ਡਾਟਾ ਸਾਇੰਸ ਅਤੇ ਐਨਾਲਿਟਿਕਸ",
    menuDescription: "ਭਵਿੱਖਬਾਣੀ ਮਾਡਲਿੰਗ, ਵਿਸ਼ਲੇਸ਼ਣ, ਡੈਸ਼ਬੋਰਡ ਅਤੇ ਫੈਸਲਾ ਸਹਾਇਤਾ।",
    summary: "ਡਾਟਾ ਉਤਪਾਦ ਜੋ ਸੰਸਥਾਵਾਂ ਨੂੰ ਓਪਰੇਸ਼ਨ ਸਮਝਣ, ਪੈਟਰਨ ਪਛਾਣਣ ਅਤੇ ਫੈਸਲੇ ਸਹਾਇਤ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ।",
  },
  "software-development": {
    title: "ਸਾਫਟਵੇਅਰ ਡਿਵੈਲਪਮੈਂਟ",
    menuDescription: "ਫੁੱਲ-ਸਟੈਕ ਪਲੇਟਫਾਰਮ, API, ਡਾਟਾਬੇਸ, ਟੈਸਟਿੰਗ ਅਤੇ ਕਲਾਉਡ-ਰੇਡੀ ਸਿਸਟਮ।",
    summary: "ਆਧੁਨਿਕ ਇੰਜੀਨੀਅਰਿੰਗ ਅਭਿਆਸਾਂ ਨਾਲ ਬਣੇ ਸੰਭਾਲਯੋਗ ਵੈੱਬ ਪਲੇਟਫਾਰਮ, ਬੈਕਐਂਡ ਸੇਵਾਵਾਂ ਅਤੇ ਡਿਜ਼ਿਟਲ ਉਤਪਾਦ।",
  },
  "agentic-generative-ai-systems": {
    title: "Agentic AI, GenAI, RAG ਅਤੇ LLM ਸਿਸਟਮ",
    menuDescription: "ਏਜੈਂਟਿਕ ਵਰਕਫ਼ਲੋ, ਗ੍ਰਾਊਂਡਡ RAG, LLM, ਮਲਟੀਮੋਡਲ QA ਅਤੇ ਇੰਟੈਲੀਜੈਂਟ ਆਟੋਮੇਸ਼ਨ।",
    summary: "ਅਸਲ ਵਪਾਰਕ ਕੰਮਾਂ ਲਈ LLM, ਰੀਟਰੀਵਲ, ਟੂਲ, ਮੈਮਰੀ ਅਤੇ ਨਿਯੰਤਰਿਤ ਏਜੈਂਟ ਵਰਕਫ਼ਲੋ ਨੂੰ ਜੋੜਦੇ ਪ੍ਰੋਡਕਸ਼ਨ-ਕੇਂਦ੍ਰਿਤ AI ਸਿਸਟਮ।",
  },
  "research-prototyping-technology-consulting": {
    title: "ਖੋਜ, ਪ੍ਰੋਟੋਟਾਈਪਿੰਗ ਅਤੇ ਤਕਨਾਲੋਜੀ ਕਨਸਲਟਿੰਗ",
    menuDescription: "ਸੰਭਾਵਤਾ, ਪ੍ਰੋਟੋਟਾਈਪ, ਪ੍ਰਮਾਣਿਕਤਾ, ਫੰਡਿੰਗ ਅਤੇ ਕਮਰਸ਼ੀਅਲਾਈਜ਼ੇਸ਼ਨ ਸਹਾਇਤਾ।",
    summary: "ਤਕਨੀਕੀ ਅਨਿਸ਼ਚਿਤਤਾ, ਸ਼ੁਰੂਆਤੀ ਉਤਪਾਦ ਸੰਕਲਪਾਂ ਅਤੇ ਖੋਜ-ਤੋਂ-ਬਾਜ਼ਾਰ ਵਿਕਾਸ ਲਈ ਸੰਰਚਿਤ ਸਹਾਇਤਾ।",
  },
};

if (Array.isArray(dictionary.services.items)) {
  dictionary.services.items = dictionary.services.items.map((item: any) => ({
    ...item,
    ...(serviceCopy[item.slug] ?? {}),
  }));
}

Object.assign(dictionary.projects, {
  eyebrow: "ਪ੍ਰੋਜੈਕਟ",
  title: "ਮਾਪਯੋਗ ਤਕਨੀਕੀ ਲਕਸ਼ਾਂ ਵਾਲੇ ਕੇਂਦ੍ਰਿਤ ਪ੍ਰੋਗਰਾਮ।",
  intro: "ਸਾਡਾ ਪੋਰਟਫੋਲਿਓ ਸਰਗਰਮ R&D ਨੂੰ ਸਪਸ਼ਟ ਤੌਰ 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਤਕਨਾਲੋਜੀ ਅਤੇ ਇੰਜੀਨੀਅਰਿੰਗ ਸਮਰੱਥਾਵਾਂ ਨਾਲ ਜੋੜਦਾ ਹੈ।",
  viewProject: "ਪ੍ਰੋਜੈਕਟ ਵੇਖੋ",
  statusTitle: "ਪ੍ਰੋਜੈਕਟ ਸਥਿਤੀ",
  overviewTitle: "ਪ੍ਰੋਜੈਕਟ ਸੰਖੇਪ",
  technologyTitle: "ਤਕਨਾਲੋਜੀ ਅਤੇ ਆਰਕੀਟੈਕਚਰ",
  valueTitle: "ਸੰਭਾਵੀ ਮੁੱਲ",
  roadmapEyebrow: "ਰੋਡਮੈਪ",
  roadmapTitle: "ਸਬੂਤ ਵੱਲ ਇੱਕ ਪੜਾਅਵਾਰ ਰਸਤਾ।",
});

const projectCopy: Record<string, any> = {
  "robotic-hand": {
    title: "ਇੰਟੈਲੀਜੈਂਟ ਰੋਬੋਟਿਕ ਹੱਥ",
    menuDescription: "ਅਨੁਕੂਲ ਮੈਨਿਪੂਲੇਸ਼ਨ ਲਈ ਸੈਂਸਿੰਗ, ਐਜ AI ਅਤੇ ਡਿਟਰਮਿਨਿਸਟਿਕ ਕੰਟਰੋਲ।",
    category: "ਰੋਬੋਟਿਕਸ ਅਤੇ AI",
    summary: "ਮਕੈਨਿਕਲ ਇੰਜੀਨੀਅਰਿੰਗ, ਸੈਂਸਿੰਗ, ਰੀਅਲ-ਟਾਈਮ ਕੰਟਰੋਲ, ਕੰਪਿਊਟਰ ਵਿਜ਼ਨ ਅਤੇ ਐਜ AI ਨੂੰ ਜੋੜਦਾ ਇੱਕ ਮੋਡਿਊਲਰ ਰੋਬੋਟਿਕ ਹੱਥ ਅਤੇ ਫੋਰਆਰਮ ਪਲੇਟਫਾਰਮ।",
  },
  "industrial-agentic-ai-platform": {
    title: "ਉਦਯੋਗਿਕ ਏਜੈਂਟਿਕ AI ਪਲੇਟਫਾਰਮ",
    menuDescription: "ਏਜੈਂਟ, RAG, ਟੂਲ, ਮਲਟੀਮੋਡਲ QA ਅਤੇ ਨਿਯੰਤਰਿਤ ਆਟੋਮੇਸ਼ਨ ਲਈ ਇਕੀਕ੍ਰਿਤ AI ਪਲੇਟਫਾਰਮ।",
    category: "Agentic ਅਤੇ Generative AI",
    summary: "LLM, ਰੀਟਰੀਵਲ, ਟੂਲ, ਮੈਮਰੀ, ਹਵਾਲੇ ਅਤੇ ਨਿਯੰਤਰਿਤ ਏਜੈਂਟ ਵਰਕਫ਼ਲੋ ਨੂੰ ਜੋੜਦਾ ਬਹੁਭਾਸ਼ੀ ਉਦਯੋਗਿਕ AI ਪਲੇਟਫਾਰਮ।",
  },
  "predictive-maintenance": {
    title: "ਪ੍ਰਿਡਿਕਟਿਵ ਮੇਂਟੇਨੈਂਸ",
    menuDescription: "ਉਪਕਰਣ ਜੋਖਮ ਅਤੇ ਮੇਂਟੇਨੈਂਸ ਯੋਜਨਾ ਲਈ ਮਸ਼ੀਨ-ਲਰਨਿੰਗ ਸੰਕੇਤ।",
    category: "ਮਸ਼ੀਨ ਲਰਨਿੰਗ",
    summary: "ਅਸਧਾਰਣ ਉਪਕਰਣ ਵਿਹਾਰ ਦੀ ਪਛਾਣ ਅਤੇ ਮੇਂਟੇਨੈਂਸ ਫੈਸਲਿਆਂ ਲਈ ਡਾਟਾ ਅਤੇ ਮਸ਼ੀਨ-ਲਰਨਿੰਗ ਸਿਸਟਮ।",
  },
  "engineering-cad": {
    title: "ਇੰਜੀਨੀਅਰਿੰਗ CAD",
    menuDescription: "Autodesk Inventor ਅਤੇ SolidWorks ਨਾਲ ਪੈਰਾਮੈਟ੍ਰਿਕ ਮਕੈਨਿਕਲ ਡਿਜ਼ਾਈਨ ਅਤੇ ਪ੍ਰੋਟੋਟਾਈਪਿੰਗ।",
    category: "ਮਕੈਨਿਕਲ ਇੰਜੀਨੀਅਰਿੰਗ ਅਤੇ CAD",
    summary: "Autodesk Inventor ਅਤੇ SolidWorks ਦੀ ਵਰਤੋਂ ਨਾਲ ਮਕੈਨਿਕਲ ਭਾਗਾਂ, ਅਸੈਂਬਲੀਆਂ ਅਤੇ ਮੈਨੂਫੈਕਚਰਿੰਗ ਡ੍ਰਾਇੰਗਾਂ ਲਈ ਪੈਰਾਮੈਟ੍ਰਿਕ CAD ਵਰਕਫ਼ਲੋ।",
  },
};

if (Array.isArray(dictionary.projects.items)) {
  dictionary.projects.items = dictionary.projects.items.map((item: any) => ({
    ...item,
    ...(projectCopy[item.slug] ?? {}),
  }));
}


// Full Punjabi copy for the expanded industrial AI service and the two updated projects.
const agenticService = dictionary.services.items.find(
  (item: any) => item.slug === "agentic-generative-ai-systems",
);
if (agenticService) {
  Object.assign(agenticService, {
    title: "Agentic AI, GenAI, RAG ਅਤੇ LLM ਸਿਸਟਮ",
    menuDescription:
      "ਏਜੈਂਟਿਕ ਵਰਕਫ਼ਲੋ, ਗ੍ਰਾਊਂਡਡ RAG, LLM, MCP, ਮਲਟੀ-ਏਜੈਂਟ ਸਿਸਟਮ, ਮਲਟੀਮੋਡਲ QA ਅਤੇ ਇੰਟੈਲੀਜੈਂਟ ਆਟੋਮੇਸ਼ਨ।",
    summary:
      "ਉਦਯੋਗਿਕ ਕੰਮਾਂ ਲਈ ਪ੍ਰੋਡਕਸ਼ਨ-ਕੇਂਦ੍ਰਿਤ AI ਸਿਸਟਮ ਜੋ LLM, GenAI, RAG, ਟੂਲ, MCP, ਮੈਮਰੀ ਅਤੇ ਨਿਯੰਤਰਿਤ ਏਜੈਂਟ ਵਰਕਫ਼ਲੋ ਨੂੰ ਜੋੜਦੇ ਹਨ।",
    overview: [
      "ਆਧੁਨਿਕ AI ਸਿਰਫ਼ ਚੈਟ ਤੱਕ ਸੀਮਿਤ ਨਹੀਂ ਰਹਿੰਦਾ। ਏਜੈਂਟ ਯੋਜਨਾ ਬਣਾ ਸਕਦੇ ਹਨ, ਟੂਲ ਅਤੇ API ਵਰਤ ਸਕਦੇ ਹਨ, ਭਰੋਸੇਯੋਗ ਸਰੋਤਾਂ ਤੋਂ ਜਾਣਕਾਰੀ ਲੱਭ ਸਕਦੇ ਹਨ ਅਤੇ ਕਈ ਕਦਮਾਂ ਵਾਲੇ ਉਦਯੋਗਿਕ ਕੰਮ ਚਲਾ ਸਕਦੇ ਹਨ।",
      "ਅਸੀਂ hybrid retrieval, reranking, citations, structured outputs, tool/function calling, MCP-ready integrations, memory, multimodal inputs ਅਤੇ ਮਨੁੱਖੀ ਮਨਜ਼ੂਰੀ ਨੂੰ ਜੋੜ ਕੇ ਨਿਯੰਤਰਿਤ AI ਵਰਕਫ਼ਲੋ ਤਿਆਰ ਕਰਦੇ ਹਾਂ।",
      "ਮਲਟੀ-ਏਜੈਂਟ ਆਰਕੀਟੈਕਚਰ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਖਾਸ ਏਜੈਂਟ ਖੋਜ, ਵਿਸ਼ਲੇਸ਼ਣ, QA, ਡਾਟਾ ਪ੍ਰੋਸੈਸਿੰਗ ਅਤੇ ਕਾਰਵਾਈ ਨੂੰ ਸਾਂਝੇ ਤੌਰ 'ਤੇ ਸੰਭਾਲ ਸਕਦੇ ਹਨ, ਜਦਕਿ tracing, evaluation ਅਤੇ guardrails ਗੁਣਵੱਤਾ ਅਤੇ ਸੁਰੱਖਿਆ ਦੀ ਨਿਗਰਾਨੀ ਕਰਦੇ ਹਨ।",
    ],
    capabilities: [
      "LLM ਅਤੇ multimodal model integration",
      "Generative AI applications and copilots",
      "Agentic orchestration ਅਤੇ multi-agent workflows",
      "RAG, hybrid retrieval, reranking ਅਤੇ source citations",
      "MCP-ready tool and context integrations",
      "Tool/function calling ਅਤੇ enterprise APIs",
      "Memory, stateful workflows ਅਤੇ structured outputs",
      "QA systems, evaluation, tracing ਅਤੇ observability",
      "Guardrails, permissions ਅਤੇ human approval",
      "Model routing, latency ਅਤੇ cost optimisation",
    ],
    deliverables: [
      "AI ਅਤੇ agent architecture",
      "Knowledge ingestion, vector/hybrid retrieval pipeline",
      "Agent, MCP ਅਤੇ tool workflows",
      "Multimodal QA, assistant ਜਾਂ copilot interface",
      "Evaluation, tracing ਅਤੇ observability dashboard",
      "Security, permissions ਅਤੇ governance plan",
    ],
    fit: [
      "Industrial knowledge and technical support",
      "Engineering and maintenance copilots",
      "Research and document intelligence",
      "Operations and workflow automation",
      "Customer and employee support",
      "Document-heavy QA, compliance and reporting",
    ],
  });
}

const agenticProject = dictionary.projects.items.find(
  (item: any) => item.slug === "industrial-agentic-ai-platform",
);
if (agenticProject) {
  Object.assign(agenticProject, {
    title: "ਉਦਯੋਗਿਕ Agentic AI ਪਲੇਟਫਾਰਮ",
    menuDescription:
      "GenAI, RAG, LLM, MCP, ਮਲਟੀ-ਏਜੈਂਟ ਵਰਕਫ਼ਲੋ, ਟੂਲ ਅਤੇ source-grounded QA ਲਈ ਇਕੀਕ੍ਰਿਤ ਪਲੇਟਫਾਰਮ।",
    category: "Agentic ਅਤੇ Generative AI",
    status: "ਪੋਰਟਫੋਲਿਓ ਆਰਕੀਟੈਕਚਰ ਅਤੇ ਪ੍ਰੋਟੋਟਾਈਪ ਸੰਕਲਪ",
    statusDescription:
      "ਇਹ ਪਲੇਟਫਾਰਮ ਇੱਕ ਸੰਰਚਿਤ ਪ੍ਰੋਟੋਟਾਈਪ ਅਤੇ ਭਵਿੱਖੀ ਉਦਯੋਗਿਕ ਸੇਵਾ ਸੰਕਲਪ ਵਜੋਂ ਪੇਸ਼ ਕੀਤਾ ਗਿਆ ਹੈ।",
    summary:
      "ਇੱਕ ਬਹੁਭਾਸ਼ੀ ਉਦਯੋਗਿਕ AI ਪਲੇਟਫਾਰਮ ਜੋ source-grounded knowledge retrieval ਨੂੰ agentic workflows, MCP/tool integration, multimodal interaction ਅਤੇ evaluated LLM responses ਨਾਲ ਜੋੜਦਾ ਹੈ।",
    overview: [
      "ਉਦਯੋਗਿਕ ਸੰਸਥਾਵਾਂ ਦਾ ਮਹੱਤਵਪੂਰਨ ਗਿਆਨ manuals, policies, specifications, reports, databases ਅਤੇ project systems ਵਿੱਚ ਵਿਖਰਿਆ ਹੋ ਸਕਦਾ ਹੈ।",
      "ਪਲੇਟਫਾਰਮ RAG, hybrid retrieval, reranking ਅਤੇ citations ਨਾਲ ਜਾਣਕਾਰੀ ਲੱਭਦਾ ਹੈ ਅਤੇ agent orchestration ਰਾਹੀਂ ਖਾਸ ਏਜੈਂਟਾਂ ਨੂੰ tools ਅਤੇ APIs ਵਰਤਣ, multi-step ਕੰਮ ਚਲਾਉਣ ਅਤੇ ਲੋੜੀਂਦਾ state ਸੰਭਾਲਣ ਦੀ ਸਮਰੱਥਾ ਦਿੰਦਾ ਹੈ।",
      "Responsible deployment ਲਈ access control, structured outputs, human approval, tracing, feedback, evaluation ਅਤੇ guardrails ਸ਼ਾਮਲ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।",
    ],
    technology: [
      "Next.js ਅਤੇ TypeScript user experience",
      "FastAPI ਜਾਂ Node.js AI/tool services",
      "PostgreSQL ਅਤੇ pgvector ਜਾਂ ਸਮਾਨ vector storage",
      "Hybrid retrieval, metadata filtering ਅਤੇ reranking",
      "LLM ਅਤੇ multimodal model routing",
      "Agent orchestration ਅਤੇ multi-agent collaboration",
      "Tool/function calling, enterprise APIs ਅਤੇ MCP-ready integrations",
      "Memory ਅਤੇ stateful workflows",
      "Tracing, evaluation, guardrails ਅਤੇ source citations",
    ],
    value: [
      "ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਤਕਨੀਕੀ ਗਿਆਨ ਤੱਕ ਤੇਜ਼ ਪਹੁੰਚ",
      "ਕਈ ਕਦਮਾਂ ਵਾਲੇ knowledge workflows ਦੀ ਆਟੋਮੇਸ਼ਨ",
      "Citations ਅਤੇ evaluation ਨਾਲ ਹੋਰ ਪਾਰਦਰਸ਼ੀ ਜਵਾਬ",
      "ਅੰਦਰੂਨੀ ਅਤੇ customer-facing AI ਲਈ reusable platform",
      "Assistant ਤੋਂ production agent ਤੱਕ ਨਿਯੰਤਰਿਤ ਵਿਕਾਸ",
    ],
    roadmap: [
      {
        phase: "ਪੜਾਅ 1",
        title: "Knowledge foundation",
        description:
          "Ingestion, metadata, hybrid retrieval, reranking, permissions ਅਤੇ source-aware QA ਤਿਆਰ ਕਰੋ।",
      },
      {
        phase: "ਪੜਾਅ 2",
        title: "Agentic workflows",
        description:
          "Specialised agents, tools/APIs, MCP integrations, memory, multimodal inputs ਅਤੇ approval points ਜੋੜੋ।",
      },
      {
        phase: "ਪੜਾਅ 3",
        title: "Production evaluation",
        description:
          "Tracing, automated/human evaluation, guardrails, monitoring, cost controls ਅਤੇ deployment governance ਜੋੜੋ।",
      },
    ],
  });
}

const cadProject = dictionary.projects.items.find(
  (item: any) => item.slug === "engineering-cad",
);
if (cadProject) {
  Object.assign(cadProject, {
    title: "ਇੰਜੀਨੀਅਰਿੰਗ CAD",
    menuDescription:
      "Autodesk Inventor ਅਤੇ SolidWorks ਨਾਲ 3D ਮਕੈਨਿਕਲ ਡਿਜ਼ਾਈਨ, assemblies, drawings ਅਤੇ design-for-manufacture।",
    category: "ਮਕੈਨਿਕਲ ਇੰਜੀਨੀਅਰਿੰਗ ਅਤੇ CAD",
    status: "ਸਰਗਰਮ ਇੰਜੀਨੀਅਰਿੰਗ ਡਿਜ਼ਾਈਨ ਸਮਰੱਥਾ",
    statusDescription:
      "CAD ਸਮਰੱਥਾ ਰੋਬੋਟਿਕ mechanisms ਅਤੇ prototypes ਦੇ ਵਿਕਾਸ ਨੂੰ ਸਹਾਇਤਾ ਦਿੰਦੀ ਹੈ ਅਤੇ engineering requirements ਤੇ manufacturing constraints ਦੇ ਅਨੁਸਾਰ ਮਾਡਲ ਸੁਧਾਰੇ ਜਾਂਦੇ ਹਨ।",
    summary:
      "ਮਕੈਨਿਕਲ parts ਅਤੇ assemblies ਲਈ parametric 3D CAD, concept geometry ਤੋਂ manufacturing drawings ਅਤੇ iterative prototyping ਤੱਕ।",
    overview: [
      "Engineering CAD functional requirements ਨੂੰ controlled 3D parts, assemblies ਅਤੇ drawings ਵਿੱਚ ਬਦਲਦਾ ਹੈ ਜੋ review, manufacture ਅਤੇ revision ਲਈ ਵਰਤੇ ਜਾ ਸਕਦੇ ਹਨ।",
      "Autodesk Inventor ਅਤੇ SolidWorks ਨਾਲ robotic mechanisms, linkages, housings, brackets, fixtures ਅਤੇ ਹੋਰ engineered components ਵਿਕਸਿਤ ਕੀਤੇ ਜਾ ਸਕਦੇ ਹਨ।",
      "Physical prototyping ਤੋਂ ਪਹਿਲਾਂ fit, motion, tolerances, interfaces, materials, fasteners, serviceability ਅਤੇ manufacturability ਦੀ ਜਾਂਚ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।",
    ],
    technology: [
      "Autodesk Inventor",
      "SolidWorks",
      "Parametric part and assembly modelling",
      "Exploded views ਅਤੇ assembly documentation",
      "2D manufacturing drawings ਅਤੇ tolerancing",
      "Motion, interference ਅਤੇ fit checks",
      "STEP, STL ਅਤੇ DXF export",
      "Design-for-manufacture ਅਤੇ prototype iteration",
    ],
    value: [
      "Fabrication ਤੋਂ ਪਹਿਲਾਂ ਤੇਜ਼ iteration",
      "Engineering ਅਤੇ manufacturing ਵਿਚਕਾਰ ਸਪਸ਼ਟ communication",
      "Fit ਅਤੇ interference errors ਵਿੱਚ ਕਮੀ",
      "Reusable design history ਅਤੇ controlled revisions",
      "Concept ਤੋਂ physical prototype ਤੱਕ ਮਜ਼ਬੂਤ workflow",
    ],
    roadmap: [
      {
        phase: "ਪੜਾਅ 1",
        title: "Requirements and concept",
        description:
          "Interfaces, motion, loads, dimensions, materials ਅਤੇ initial parametric concept ਨਿਰਧਾਰਤ ਕਰੋ।",
      },
      {
        phase: "ਪੜਾਅ 2",
        title: "Detailed assembly",
        description:
          "Parts ਅਤੇ assemblies ਵਿਕਸਿਤ ਕਰੋ, fit/interference checks ਕਰੋ ਅਤੇ manufacturing documentation ਤਿਆਰ ਕਰੋ।",
      },
      {
        phase: "ਪੜਾਅ 3",
        title: "Prototype and validation",
        description:
          "ਚੁਣੇ parts fabricate ਜਾਂ print ਕਰੋ, mechanism test ਕਰੋ ਅਤੇ measured results ਨੂੰ CAD model ਵਿੱਚ ਵਾਪਸ ਲਿਆਓ।",
      },
    ],
  });
}

if (dictionary.careers) {
  Object.assign(dictionary.careers, {
    eyebrow: "ਕਰੀਅਰ",
    title: "ਨਿਊਜ਼ੀਲੈਂਡ ਵਿੱਚ ਪ੍ਰਯੋਗਿਕ AI ਅਤੇ ਰੋਬੋਟਿਕਸ ਬਣਾਉਣ ਵਿੱਚ ਸਾਡੇ ਨਾਲ ਜੁੜੋ।",
    intro: "IndustrialOrigami.AI ਭਵਿੱਖ ਦੀਆਂ ਤਕਨੀਕੀ, ਖੋਜ ਅਤੇ ਵਪਾਰਕ ਮੌਕਿਆਂ ਵਿੱਚ ਦਿਲਚਸਪੀ ਰੱਖਣ ਵਾਲੇ ਲੋਕਾਂ ਨਾਲ ਸੰਪਰਕ ਬਣਾਉਂਦਾ ਹੈ।",
    opportunitiesTitle: "ਮੌਜੂਦਾ ਮੌਕੇ",
    opportunitiesDescription: "ਇਸ ਵੇਲੇ ਕੋਈ ਰਸਮੀ ਅਸਾਮੀ ਇਸ਼ਤਿਹਾਰਿਤ ਨਹੀਂ ਹੈ। ਦਿਲਚਸਪੀ ਦਰਜ ਕਰਨ ਦਾ ਰਸਤਾ ਸਾਨੂੰ ਭਵਿੱਖ ਦੇ ਸੰਭਾਵੀ ਸਹਿਯੋਗੀਆਂ ਅਤੇ ਟੀਮ ਮੈਂਬਰਾਂ ਨਾਲ ਜੁੜਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
    whatWeSeekTitle: "ਅਸੀਂ ਕੀ ਲੱਭ ਰਹੇ ਹਾਂ",
    typeLabel: "ਕਿਸਮ",
    types: { expressionOfInterest: "ਦਿਲਚਸਪੀ ਦਾ ਪ੍ਰਗਟਾਵਾ" },
    viewOpportunity: "ਵੇਰਵੇ ਵੇਖੋ",
    roles: {
      "future-opportunities": {
        title: "ਭਵਿੱਖ ਦੇ ਮੌਕੇ ਅਤੇ ਟੈਲੈਂਟ ਨੈੱਟਵਰਕ",
        summary: "ਜੇ ਤੁਹਾਡਾ ਤਜਰਬਾ AI, ਸਾਫਟਵੇਅਰ, ਰੋਬੋਟਿਕਸ, ਐਂਬੈਡਿਡ ਸਿਸਟਮ, ਇਲੈਕਟ੍ਰਾਨਿਕਸ, ਮੈਨੂਫੈਕਚਰਿੰਗ, ਉਤਪਾਦ ਜਾਂ ਵਪਾਰਕ ਕੰਮ ਵਿੱਚ ਸਾਡੀਆਂ ਭਵਿੱਖ ਦੀਆਂ ਲੋੜਾਂ ਲਈ ਲਾਭਦਾਇਕ ਹੋ ਸਕਦਾ ਹੈ, ਤਾਂ ਸਾਡੇ ਨਾਲ ਜੁੜੋ।",
      },
    },
  });
}

if (dictionary.collaborate) {
  Object.assign(dictionary.collaborate, {
    eyebrow: "ਸਹਿਯੋਗ",
    title: "IndustrialOrigami.AI ਨਾਲ ਕੰਮ ਕਰੋ।",
    intro: "ਅਸੀਂ ਉਦਯੋਗਿਕ ਸਮੱਸਿਆਵਾਂ, ਖੋਜ, ਪਾਇਲਟ, ਫੰਡਿੰਗ, ਨਿਵੇਸ਼ ਅਤੇ ਤਕਨੀਕੀ ਭਾਗੀਦਾਰੀਆਂ ਬਾਰੇ ਗੰਭੀਰ ਗੱਲਬਾਤ ਦਾ ਸਵਾਗਤ ਕਰਦੇ ਹਾਂ।",
    pathwaysTitle: "ਸਹਿਯੋਗ ਦੇ ਤਰੀਕੇ",
    pathwaysDescription: "ਉਹ ਮਾਰਗ ਚੁਣੋ ਜੋ ਤੁਹਾਡੀ ਸੰਸਥਾ ਜਾਂ ਵਿਚਾਰ ਨਾਲ ਸਭ ਤੋਂ ਵਧੀਆ ਮੇਲ ਖਾਂਦਾ ਹੈ।",
    detailsTitle: "ਸੰਪਰਕ ਵੇਰਵੇ",
  });

  if (dictionary.collaborate.form) {
    Object.assign(dictionary.collaborate.form, {
      name: "ਨਾਮ",
      email: "ਈਮੇਲ",
      interest: "ਦਿਲਚਸਪੀ ਦਾ ਖੇਤਰ",
      message: "ਸੁਨੇਹਾ",
      submit: "ਪੁੱਛਗਿੱਛ ਭੇਜੋ",
    });
  }
}

if (dictionary.auth) {
  Object.assign(dictionary.auth, {
    loginTitle: "ਕੰਪਨੀ ਪੋਰਟਲ",
    signupTitle: "ਦਿਲਚਸਪੀ ਦਰਜ ਕਰੋ",
    description: "ਸੁਰੱਖਿਅਤ ਗਾਹਕ ਅਤੇ ਭਾਗੀਦਾਰ ਪੋਰਟਲ ਭਵਿੱਖ ਦੀ ਪਲੇਟਫਾਰਮ ਕਾਰਗੁਜ਼ਾਰੀ ਲਈ ਰਾਖਵਾਂ ਹੈ।",
    email: "ਈਮੇਲ",
    password: "ਪਾਸਵਰਡ",
    name: "ਨਾਮ",
    login: "ਲਾਗ ਇਨ",
    signup: "ਰਜਿਸਟਰ",
  });
}

Object.assign(dictionary.footer, {
  summary: "ਕ੍ਰਾਈਸਟਚਰਚ, ਨਿਊਜ਼ੀਲੈਂਡ ਤੋਂ AI, ਰੋਬੋਟਿਕਸ, ਸਾਫਟਵੇਅਰ, ਡਾਟਾ, CAD ਅਤੇ ਇੰਟੈਲੀਜੈਂਟ ਇੰਜੀਨੀਅਰਿੰਗ।",
  explore: "ਵੇਖੋ",
  locationTitle: "ਸਥਾਨ",
  location: "ਕ੍ਰਾਈਸਟਚਰਚ, ਨਿਊਜ਼ੀਲੈਂਡ",
  rights: "ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ ਹਨ।",
});

export default dictionary as typeof en;
