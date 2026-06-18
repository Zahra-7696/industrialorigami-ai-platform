# IndustrialOrigami.AI Platform

A multilingual company website and technology platform for **IndustrialOrigami.AI**, a New Zealand venture working across artificial intelligence, robotics, software engineering, data science, and applied research and development.

This repository serves two purposes:

1. the public-facing website for IndustrialOrigami.AI; and
2. a professional portfolio project demonstrating multilingual full-stack engineering, AI/ML integration, cloud architecture, DevOps, testing, observability, and technical product development.

---

## Current Status

**Current stage:** Multilingual public website and project-portfolio implementation

Implemented:

- English, Persian, and Simplified Chinese routes
- right-to-left support for Persian
- responsive desktop and mobile navigation
- dropdown menus for Services and Projects
- About page with company information and team profiles
- individual service pages
- individual project pages
- dedicated Intelligent Robotic Hand project page
- Careers and Collaborate pages
- team photographs, qualifications, email links, and LinkedIn links
- branded assets, metadata, favicon, and social-sharing image
- reusable design components and shared styling

Planned:

- validated enquiry forms
- PostgreSQL database
- API layer
- authentication and administration
- RAG-based knowledge assistant
- analytics dashboards
- automated testing
- containers, monitoring, and cloud deployment

---

## Core Objectives

The platform is designed to:

- present IndustrialOrigami.AI as a professional New Zealand AI and robotics company
- explain the company’s technical services
- showcase the Intelligent Robotic Hand programme
- present additional AI, data, software, and digital-twin concepts
- support English, Persian, and Simplified Chinese
- provide an accessible and responsive user experience
- support future customer, research, funding, and partnership enquiries
- evolve into a secure full-stack platform
- demonstrate CI/CD, testing, containerisation, monitoring, and cloud deployment
- serve as a portfolio project for full-stack, AI/ML, MLOps, data, and cloud-engineering roles

---

## Technology Stack

### Current

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next.js App Router
- Next.js Image
- ESLint
- Git
- GitHub

### Planned Backend and Data

- Node.js
- Next.js Route Handlers
- Python
- FastAPI
- PostgreSQL
- pgvector
- REST APIs
- OpenAPI

### Planned AI and Machine Learning

- Large Language Models
- Retrieval-Augmented Generation
- embedding models
- vector search
- Ollama for local development
- Amazon Bedrock in a later cloud phase
- RAG evaluation and feedback tracking
- grounded answers with source citations

### Planned DevOps and Infrastructure

- Docker
- Docker Compose
- GitHub Actions
- Jenkins as an optional enterprise demonstration
- Kubernetes
- Prometheus
- Grafana
- AWS IAM
- Amazon S3
- AWS Lambda
- Amazon API Gateway
- Amazon Bedrock
- AWS CloudWatch
- AWS Secrets Manager

### Planned Testing and Quality

- Vitest
- React Testing Library
- Playwright
- Pytest
- TypeScript strict mode
- Prettier
- GitHub CodeQL
- dependency scanning
- container scanning
- accessibility testing

---

## Multilingual Support

| Language | Locale | Direction |
|---|---|---|
| English | `en` | Left-to-right |
| Persian | `fa` | Right-to-left |
| Simplified Chinese | `zh` | Left-to-right |

Translations are stored in:

```text
i18n/dictionaries/
├── en.json
├── fa.json
└── zh.json
```

---

## Current Website Map

```text
src/app/[lang]/
├── about/
│   └── page.tsx
├── services/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── projects/
│   ├── page.tsx
│   ├── robotic-hand/
│   │   └── page.tsx
│   └── [slug]/
│       └── page.tsx
├── careers/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── collaborate/
│   └── page.tsx
├── layout.tsx
├── page.tsx
└── template.tsx
```

Main navigation:

```text
Home | About | Services | Projects | Careers | Collaborate | Language
```

---

## Service Routes

```text
/[lang]/services/robotics-and-automation
/[lang]/services/data-science-and-analytics
/[lang]/services/software-development
/[lang]/services/rag-intelligent-assistants
/[lang]/services/research-prototyping-technology-consulting
```

### Services

- Robotics and Automation
- Data Science and Analytics
- Software Development
- RAG and Intelligent Assistants
- Research, Prototyping and Technology Consulting

---

## Project Routes

```text
/[lang]/projects/robotic-hand
/[lang]/projects/industrial-rag-platform
/[lang]/projects/predictive-maintenance
/[lang]/projects/digital-twin
```

### Intelligent Robotic Hand

The flagship R&D programme combines:

- mechanical design
- sensing
- force and position feedback
- real-time motor control
- computer vision
- edge AI
- ROS 2
- deterministic industrial communication
- staged prototype validation

The page includes genuine early-stage sensing and motion-capture images. These images are presented as development evidence, not as photographs of a completed product.

### Industrial RAG Platform

A multilingual knowledge-assistant concept using document ingestion, embeddings, vector retrieval, source citations, evaluation, and a chat interface.

### Predictive Maintenance

A proposed industrial analytics project using time-series data, anomaly detection, forecasting, model monitoring, and maintenance dashboards.

### Digital Twin

A research and architecture concept for modelling, monitoring, simulation, and safe evaluation of physical or networked systems.

---

## Intelligent Robotic Hand Technology

### Planned Hardware

- NVIDIA Jetson edge computer
- ARM real-time controller
- actuators and motor drivers
- position sensors
- force, current, pressure, and tactile sensors
- external analogue-to-digital converters
- industrial communication interface
- watchdogs, limits, and emergency-stop behaviour

### Planned Software

- Linux
- CUDA
- cuDNN
- TensorRT
- Python
- C++
- OpenCV
- PyTorch
- ROS 2
- FreeRTOS or bare-metal firmware
- PID control
- future adaptive or learning-based control

### Planned Evaluation

- grasp success rate
- position-control error
- force-control error
- maximum contact force
- response latency
- complete grasp-cycle time
- communication jitter
- packet-loss behaviour
- repeatability
- actuator temperature
- energy consumption
- payload capability
- fault detection and recovery

---

## Repository Structure

```text
industrialorigami-ai-platform/
├── components/
│   ├── layout/
│   ├── pages/
│   ├── sections/
│   └── ui/
├── i18n/
│   ├── dictionaries/
│   ├── config.ts
│   └── get-dictionary.ts
├── lib/
│   ├── careers.ts
│   ├── catalog.ts
│   ├── robotic-hand-content.ts
│   └── team.ts
├── public/
│   ├── brand/
│   ├── projects/
│   │   └── robotic-hand/
│   └── team/
├── src/
│   └── app/
│       ├── [lang]/
│       ├── globals.css
│       ├── icon.png
│       └── opengraph-image.png
├── tests/
├── types/
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---


### Routes and Slugs

Service and project slugs are defined in:

```text
lib/catalog.ts
```

### Robotic Hand Content

Detailed multilingual content is stored in:

```text
lib/robotic-hand-content.ts
```

Project images are stored in:

```text
public/projects/robotic-hand/
├── hand-sensor.jpeg
└── hand-motion-capture.jpeg
```

---

## Local Development

### Prerequisites

- Node.js 20 or later
- npm
- Git
- Visual Studio Code

Check versions:

```powershell
node --version
npm --version
git --version
```

### Clone

```powershell
git clone https://github.com/YOUR_USERNAME/industrialorigami-ai-platform.git
cd industrialorigami-ai-platform
```

### Install

```powershell
npm install
```

### Run

```powershell
npm run dev
```

Open:

```text
http://localhost:3000
```

Useful routes:

```text
http://localhost:3000/en
http://localhost:3000/en/about
http://localhost:3000/en/services
http://localhost:3000/en/projects
http://localhost:3000/en/projects/robotic-hand
http://localhost:3000/en/careers
http://localhost:3000/en/collaborate
```

### Build and Lint

```powershell
npm run lint
npm run build
npm run start
```

### Clear the Next.js Cache

```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

---

## Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

Planned scripts:

```text
npm run test
npm run test:unit
npm run test:e2e
npm run typecheck
npm run format
npm run analyze
```

---

## Environment Variables

Create `.env.local` only when required.

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/industrialorigami
AUTH_SECRET=replace-with-a-secure-random-secret
AI_API_URL=http://localhost:8000
AWS_REGION=ap-southeast-2
AWS_S3_BUCKET=
AWS_BEDROCK_MODEL_ID=
```

Never commit secrets, passwords, API keys, customer information, or private company documents.

---

## Proposed Full-Stack Architecture

```text
Web Browser
    │
    ▼
Next.js Frontend
    │
    ├── Next.js APIs
    ├── FastAPI AI Service
    └── Authentication
            │
            ├── PostgreSQL + pgvector
            └── S3 or Local Object Storage
```

---

## Development Roadmap

### Completed or In Progress

- initialise Next.js
- implement multilingual routing
- implement Persian RTL
- build responsive navigation
- add Services and Projects dropdown menus
- build Home and About pages
- add team profiles, qualifications, images, emails, and LinkedIn links
- build service index and individual service pages
- build project index and individual project pages
- build the detailed Robotic Hand page
- build Careers and Collaborate pages
- add metadata, favicon, and social-sharing image
- add responsive styling

### Next: Backend and Enquiries

- validate forms
- add Next.js Route Handlers
- add PostgreSQL
- persist enquiries
- add notifications
- add spam protection
- add rate limiting
- add API documentation

### Later: Authentication and Administration

- authentication
- role-based access
- admin dashboard
- multilingual content management
- project and service management
- career and enquiry management
- audit logs

### Later: RAG and LLM Assistant

- FastAPI AI service
- document ingestion
- chunking
- embeddings
- pgvector
- retrieval
- source citations
- chatbot interface
- feedback
- evaluation
- local LLM support
- Amazon Bedrock integration

### Later: Testing, Containers, Monitoring, and Cloud

- unit, component, API, and end-to-end tests
- accessibility testing
- security scanning
- Docker and Docker Compose
- Prometheus and Grafana
- Kubernetes
- AWS IAM, S3, Bedrock, and CloudWatch
- budgets and cost alerts

---

## Git Workflow

Recommended branches:

```text
main
develop
feature/*
fix/*
docs/*
refactor/*
```

Example:

```powershell
git checkout -b docs/update-readme
git add README.md
git commit -m "docs: update project README"
git push -u origin docs/update-readme
```

---

## Security Principles

- no secrets in Git
- least-privilege access
- server-side validation
- safe error messages
- secure authentication
- role-based access control
- encrypted transport
- dependency updates
- security scanning
- rate limiting
- audit logging
- protected administration routes
- privacy-aware analytics
- controlled access to company documents
- no private robotic-hand intellectual property in the public repository

---

## Accessibility and Performance Goals

- keyboard navigation
- semantic HTML
- visible focus states
- sufficient colour contrast
- accessible forms
- language attributes
- correct RTL layout
- reduced-motion support
- meaningful image alternative text
- optimised images
- lazy loading where appropriate
- eager loading for above-the-fold LCP images
- minimal client-side JavaScript
- server components where appropriate
- Lighthouse-based review

---

## Team

### David Ewing

**Founder and Managing Director**  
**Master’s in Computer Science**

Leads company strategy, partnerships, business development, funding, product direction, stakeholder engagement, and company operations.

### Zahra Torabi

**AI, Software Engineering, and R&D Lead**  
**PhD in Computer Science, specialising in Artificial Intelligence**

Leads AI/ML research, reinforcement learning, intelligent optimisation, software engineering, RAG, evaluation, cloud and MLOps direction, and technical implementation.

### Lilian

**Data Science and Analytics Lead**  
**Master of Data Science**

Contributes data preparation, statistical analysis, predictive modelling, visualisation, experimentation, and evaluation.

### Gurwinder

**Mechanical and Project Engineering Lead**  
**Bachelor of Mechanical Engineering**

Brings experience in metal fabrication, CAD design, project engineering, manufacturing planning, prototype assembly, and project delivery.

---

## Intellectual Property

Do not commit:

- confidential company plans
- unpublished robotic-hand CAD files
- proprietary control algorithms
- private datasets
- investor information
- immigration documents
- customer information
- credentials or tokens
- private funding proposals
- personal information not approved for publication

Licensing will be confirmed after the company decides which components are open source and which remain proprietary.

---

## Contact

**Website:** `https://industrialorigami.ai`  
**Email:** Add the confirmed company email  
**Location:** Christchurch, New Zealand

---

## Licence

No public licence has been selected yet.

All rights are reserved unless a licence is added to the repository.

---

## Developed By

This website and technology platform were designed and developed by **Zahra Torabi** for IndustrialOrigami.AI.

The project demonstrates multilingual full-stack development, artificial intelligence integration, cloud architecture, DevOps, testing, monitoring, data visualisation, and technical product design using technologies including Next.js, React, TypeScript, Node.js, Python, PostgreSQL, Docker, Kubernetes, GitHub Actions, AWS, RAG, and Large Language Models.
