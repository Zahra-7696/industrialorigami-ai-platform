# IndustrialOrigami.AI Platform

A multilingual company website and technology platform for **IndustrialOrigami.AI**, a New Zealand venture working across artificial intelligence, robotics, software engineering, data science, intelligent automation, research and development, and early-stage robotic-hand innovation.

This repository serves two linked purposes:

1. the public-facing website for IndustrialOrigami.AI; and
2. a professional portfolio project demonstrating multilingual full-stack engineering, AI/ML integration, cloud architecture, DevOps, testing, observability, form handling, file upload workflows, and technical product development.

---

## Current Status

**Current stage:** Multilingual public website, project portfolio, enquiry forms, and career expression-of-interest workflow.

Implemented:

- English, Persian, and Simplified Chinese routes
- right-to-left support for Persian
- responsive desktop and mobile navigation
- dropdown menus for Services and Projects
- Home page with service cards, project cards, and custom project imagery
- About page with company information and team profiles
- team photographs, qualifications, email links, and LinkedIn links
- individual service pages
- individual project pages
- dedicated Intelligent Robotic Hand project page
- Careers page with expression-of-interest pathway
- dedicated career application page
- CV, cover-letter, and additional-file uploads for career expressions of interest
- Collaborate page with enquiry form
- optional attachment upload for collaboration enquiries
- server-side email sending through Next.js API routes and Nodemailer
- frontend prototype pages for Log in and Sign up
- branded assets, metadata, favicon, and social-sharing image
- reusable design components and shared styling
- environment-variable based configuration for email delivery
- safe separation of secrets using `.env.local`

In progress or planned:

- real authentication and user sessions
- PostgreSQL database storage for enquiries and career submissions
- admin dashboard
- saved application status tracking
- RAG-based company knowledge assistant
- analytics dashboards
- automated testing
- Docker, monitoring, and cloud deployment

---

## Core Objectives

The platform is designed to:

- present IndustrialOrigami.AI as a professional New Zealand AI, robotics, data, software, and research company
- explain the company’s technical capabilities and commercial focus
- showcase the Intelligent Robotic Hand programme
- present additional AI, software, RAG, predictive-maintenance, and digital-twin concepts
- support English, Persian, and Simplified Chinese audiences
- provide an accessible and responsive user experience
- support customer, research, funding, partnership, and career enquiries
- provide upload workflows for CVs, cover letters, proposals, and other supporting documents
- evolve into a secure full-stack platform with persistent database storage
- demonstrate CI/CD, testing, containerisation, monitoring, and cloud deployment
- serve as a portfolio project for full-stack, AI/ML, MLOps, data, cloud, and software-engineering roles

---

## Technology Stack

### Current Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next.js App Router
- Next.js Image
- Client and server components
- Responsive layout components
- Multilingual dictionaries
- ESLint
- Git
- GitHub

### Current Server-Side Features

- Next.js API routes
- Server-side form processing
- `FormData` handling
- File upload handling
- Nodemailer
- Gmail SMTP support through app passwords
- Environment-variable based configuration
- Attachment validation
- Basic server-side validation

### Planned Backend and Data

- Node.js
- Python
- FastAPI
- PostgreSQL
- pgvector
- REST APIs
- OpenAPI documentation
- database-backed contact enquiries
- database-backed career applications
- file metadata storage
- admin dashboard for reviewing submissions
- status tracking for applications and enquiries

### Planned AI and Machine Learning

- Large Language Models
- Retrieval-Augmented Generation
- embedding models
- vector search
- local LLM support through Ollama
- Amazon Bedrock in a later cloud phase
- RAG evaluation and feedback tracking
- grounded answers with source citations
- multilingual company knowledge assistant

### Planned DevOps and Infrastructure

- Docker
- Docker Compose
- GitHub Actions
- Jenkins as an optional enterprise CI/CD demonstration
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
- TypeScript strict checks
- Prettier
- GitHub CodeQL
- dependency scanning
- container scanning
- accessibility testing
- form-validation tests
- API route tests
- upload-limit tests

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

Persian pages use RTL layout support.

---

## Current Website Map

```text
src/app/
├── api/
│   ├── contact/
│   │   └── route.ts
│   └── careers/
│       └── route.ts
├── [lang]/
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   ├── robotic-hand/
│   │   │   └── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── careers/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── collaborate/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── signup/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── template.tsx
├── globals.css
├── icon.png
├── opengraph-image.png
├── favicon.ico
├── layout.tsx
├── page.tsx
└── not-found.tsx
```

Main navigation:

```text
Home | About | Services | Projects | Careers | Collaborate | Log in | Sign up | Language
```

---

## Public Routes

### Core Routes

```text
/[lang]
/[lang]/about
/[lang]/services
/[lang]/projects
/[lang]/careers
/[lang]/collaborate
/[lang]/login
/[lang]/signup
```

### Service Routes

```text
/[lang]/services/robotics-and-automation
/[lang]/services/data-science-and-analytics
/[lang]/services/software-development
/[lang]/services/rag-intelligent-assistants
/[lang]/services/research-prototyping-technology-consulting
```

### Project Routes

```text
/[lang]/projects/robotic-hand
/[lang]/projects/industrial-rag-platform
/[lang]/projects/predictive-maintenance
/[lang]/projects/digital-twin
```

### Career Routes

```text
/[lang]/careers
/[lang]/careers/future-opportunities
```

### API Routes

```text
/api/contact
/api/careers
```

---

## Services

### Robotics and Automation

Research and prototype development for robotic systems, sensing, control, intelligent end-effectors, and industrial automation.

### Data Science and Analytics

Predictive modelling, data preparation, statistical analysis, dashboards, visualisation, and operational decision support.

### Software Development

Responsive web platforms, APIs, backend services, relational databases, testing, CI/CD, and cloud-ready architecture.

### RAG and Intelligent Assistants

Knowledge assistants grounded in approved organisational documents, retrieval pipelines, source citations, evaluation, and feedback.

### Research, Prototyping and Technology Consulting

Feasibility studies, architecture, prototype planning, validation metrics, technical writing, funding support, and commercialisation pathways.

---

## Projects

### Intelligent Robotic Hand

The flagship R&D programme explores a modular robotic hand and forearm platform combining:

- mechanical design
- sensing
- force and position feedback
- real-time motor control
- computer vision
- edge AI
- ROS 2
- deterministic industrial communication
- staged prototype validation

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
- force sensors
- current sensors
- pressure sensors
- tactile sensors
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

## Forms and Email Workflows

### Collaboration Form

The Collaborate page includes:

- name
- email
- area of interest
- message
- optional attachment

The form submits to:

```text
/api/contact
```

The API route sends an email to the configured contact inbox and attaches the optional uploaded file.

Allowed attachment types:

```text
PDF, DOC, DOCX, TXT, PNG, JPG, JPEG
```

Maximum file size:

```text
10 MB
```

### Career Expression-of-Interest Form

The Careers detail page includes:

- full name
- email address
- phone number
- address
- type of interest dropdown
- right-to-work-in-New-Zealand dropdown
- short message
- required CV upload
- optional cover letter upload
- optional additional file upload

The form submits to:

```text
/api/careers
```

The API route sends an email to the configured careers inbox with attachments.

Allowed career attachment types:

```text
PDF, DOC, DOCX, TXT, PNG, JPG, JPEG
```

Maximum file size:

```text
10 MB per file
```

Current status:

- email sending is implemented
- database saving is planned

Future database storage will support:

- candidate profile
- submitted file metadata
- selected interest
- right-to-work status
- submission date
- application status
- internal review notes
- follow-up history

---

## Authentication Pages

The project includes frontend prototype routes:

```text
/[lang]/login
/[lang]/signup
```

Current status:

- visual UI only
- no real authentication yet
- no sessions yet
- no database user storage yet

Future implementation will include:

- secure password hashing
- database-backed users
- sessions or JWT
- role-based access control
- email verification
- password reset
- admin-only routes
- rate limiting
- audit logging

---

## Repository Structure

```text
industrialorigami-ai-platform/
├── .git/
├── .next/
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
├── node_modules/
├── public/
│   ├── brand/
│   ├── home/
│   ├── illustrations/
│   ├── projects/
│   │   └── robotic-hand/
│   └── team/
├── src/
│   └── app/
│       ├── api/
│       │   ├── careers/
│       │   └── contact/
│       ├── [lang]/
│       ├── globals.css
│       ├── icon.png
│       ├── opengraph-image.png
│       ├── favicon.ico
│       ├── layout.tsx
│       ├── page.tsx
│       └── not-found.tsx
├── tests/
├── types/
├── .env.local
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

Note: `.next/` and `node_modules/` are generated locally and should not be committed to Git.

---

## Important Content Files

### Team Profiles

Team image paths, qualifications, email addresses, and LinkedIn URLs are configured in:

```text
lib/team.ts
```

Team images are stored in:

```text
public/team/
```

### Routes and Slugs

Service and project route identifiers are defined in:

```text
lib/catalog.ts
```

### Robotic Hand Content

Detailed multilingual robotic-hand content is stored in:

```text
lib/robotic-hand-content.ts
```

Project images are stored in:

```text
public/projects/robotic-hand/
```

### Home Page Visual Assets

Home page imagery can be stored in:

```text
public/home/
public/illustrations/
public/projects/
```

### API Routes

Contact form email handling:

```text
src/app/api/contact/route.ts
```

Career form email handling:

```text
src/app/api/careers/route.ts
```

---

## Local Development

### Prerequisites

Install:

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

If email forms are enabled, install Nodemailer:

```powershell
npm install nodemailer
npm install -D @types/nodemailer
```

### Run

```powershell
npm run dev
```

Open:

```text
http://localhost:3000
```

Useful development routes:

```text
http://localhost:3000/en
http://localhost:3000/en/about
http://localhost:3000/en/services
http://localhost:3000/en/projects
http://localhost:3000/en/projects/robotic-hand
http://localhost:3000/en/careers
http://localhost:3000/en/careers/future-opportunities
http://localhost:3000/en/collaborate
http://localhost:3000/en/login
http://localhost:3000/en/signup
```

### Build and Lint

```powershell
npm run lint
npm run build
npm run start
```

### Clear the Next.js Cache

If stale pages, route problems, or old images appear:

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

Create a local file:

```text
.env.local
```

Required for email sending:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=z.torabi.university@gmail.com
SMTP_APP_PASSWORD=replace-with-google-generated-app-password
CONTACT_TO_EMAIL=z.torabi.university@gmail.com
CAREERS_TO_EMAIL=z.torabi.university@gmail.com
```

Planned future variables:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/industrialorigami
AUTH_SECRET=replace-with-a-secure-random-secret
AI_API_URL=http://localhost:8000
AWS_REGION=ap-southeast-2
AWS_S3_BUCKET=
AWS_BEDROCK_MODEL_ID=
```

Important:

- never commit `.env.local`
- never commit passwords
- never commit API keys
- never commit Gmail app passwords
- never expose secrets inside React components
- server-side routes must handle email sending

### Gmail SMTP Note

For Gmail SMTP, `SMTP_APP_PASSWORD` must be a Google-generated Gmail App Password. It is not the normal Gmail password. It is also not a self-created password. Email authentication, because apparently human civilisation peaked at inventing sixteen-character secret strings for websites to mail PDFs.

---

## Proposed Full-Stack Architecture

```text
Web Browser
    │
    ▼
Next.js Frontend
    │
    ├── Public multilingual pages
    ├── Login and signup UI
    ├── Contact form
    └── Career application form
            │
            ▼
Next.js API Routes
    │
    ├── /api/contact
    ├── /api/careers
    └── future authenticated APIs
            │
            ├── Email service through SMTP
            ├── PostgreSQL database
            ├── File metadata storage
            └── Future object storage
                    │
                    ├── S3 or equivalent
                    └── RAG document storage
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
- build detailed Robotic Hand page
- build Careers page
- build career expression-of-interest route
- build career form with CV, cover letter, and additional file upload
- build Collaborate page
- build collaboration form with optional attachment
- add Nodemailer email workflows
- add Login and Sign up UI prototypes
- add metadata, favicon, and social-sharing image
- add responsive styling

### Next: Database and Persistence

- add PostgreSQL
- define enquiry schema
- define career application schema
- persist contact enquiries
- persist career submissions
- store uploaded file metadata
- optionally store uploaded files in S3 or another object store
- add admin review status
- add submission timestamps
- add basic reporting views

### Later: Authentication and Administration

- implement real authentication
- add role-based access
- build admin dashboard
- manage multilingual content
- manage project and service content
- manage career submissions
- manage collaboration enquiries
- add audit logs
- add protected admin routes

### Later: RAG and LLM Assistant

- add FastAPI AI service
- add document ingestion
- add chunking
- add embeddings
- add pgvector
- add retrieval
- add source citations
- add chatbot interface
- add feedback
- add evaluation
- add local LLM support
- add Amazon Bedrock integration

### Later: Testing, Containers, Monitoring, and Cloud

- unit tests
- component tests
- API route tests
- upload validation tests
- end-to-end tests
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

Recommended commit format:

```text
feat: add career application form
fix: handle missing career opportunities
docs: update README
refactor: simplify homepage project cards
chore: update dependencies
```

---

## Security Principles

- no secrets in Git
- no `.env.local` in Git
- least-privilege access
- server-side validation
- file-size validation
- file-type validation
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
- meaningful labels
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
- CVs, cover letters, or submitted application materials
- uploaded enquiry attachments

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

The project demonstrates multilingual full-stack development, artificial intelligence integration, cloud architecture, DevOps, testing, monitoring, data visualisation, server-side form handling, file upload workflows, and technical product design using technologies including Next.js, React, TypeScript, Node.js, Python, PostgreSQL, Docker, Kubernetes, GitHub Actions, AWS, RAG, and Large Language Models.
