# IndustrialOrigami.AI Platform

A multilingual, production-oriented company website and technology platform for **IndustrialOrigami.AI**.

The platform is being developed as both:

1. the official public-facing website for IndustrialOrigami.AI, and
2. a professional portfolio project demonstrating full-stack engineering, AI/ML integration, cloud architecture, DevOps, observability, testing, and multilingual application design.

The long-term platform will support company information, intelligent robotics projects, AI/ML services, RAG-based document assistance, dashboards, analytics, customer enquiries, project content, and internal administration.

\---

## Project Status

**Current phase:** Phase 1 — multilingual public website foundation

The project is under active development. Features, architecture, deployment targets, and infrastructure will evolve in stages.

\---

## Core Objectives

The platform is designed to:

* present IndustrialOrigami.AI as a professional New Zealand AI and robotics company
* showcase the Intelligent Robotic Hand programme
* explain the company’s AI, machine learning, data science, software, and engineering capabilities
* support English, Persian, and Simplified Chinese
* provide a responsive and accessible user experience
* include a secure contact and partnership enquiry workflow
* evolve into a full-stack application with PostgreSQL, APIs, authentication, and dashboards
* include a RAG-based company knowledge assistant
* demonstrate CI/CD, testing, containerisation, monitoring, and cloud deployment
* serve as a strong portfolio project for full-stack, AI/ML, MLOps, and cloud engineering roles

\---

## Technology Stack

### Current Stack

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **ESLint**
* **App Router**
* **Git**
* **GitHub**

### Planned Backend and Data Stack

* **Node.js**
* **Next.js Route Handlers**
* **Python**
* **FastAPI**
* **PostgreSQL**
* **pgvector**
* **REST APIs**
* **OpenAPI documentation**

### Planned AI and Machine Learning Stack

* **Large Language Models**
* **Retrieval-Augmented Generation**
* **Embedding models**
* **Vector search**
* **Ollama for local development**
* **Amazon Bedrock in a later cloud phase**
* **Model evaluation and feedback tracking**
* **RAG source citation and grounded response generation**

### Planned DevOps and Infrastructure Stack

* **Docker**
* **Docker Compose**
* **GitHub Actions**
* **Jenkins as an optional enterprise CI/CD demonstration**
* **Kubernetes**
* **Prometheus**
* **Grafana**
* **AWS IAM**
* **Amazon S3**
* **AWS Lambda**
* **Amazon API Gateway**
* **Amazon Bedrock**
* **AWS CloudWatch**
* **AWS Secrets Manager**

### Planned Testing and Quality Stack

* **Vitest**
* **React Testing Library**
* **Playwright**
* **Pytest**
* **ESLint**
* **TypeScript strict mode**
* **Prettier**
* **GitHub CodeQL**
* **Dependency scanning**
* **Container image scanning**
* **Accessibility testing**

\---

## Multilingual Support

The website will support:

|Language|Locale|Direction|
|-|-|-|
|English|`en`|Left-to-right|
|Persian|`fa`|Right-to-left|
|Simplified Chinese|`zh`|Left-to-right|

Planned routes:

```text
/en
/fa
/zh

/en/about
/fa/about
/zh/about

/en/robotic-hand
/fa/robotic-hand
/zh/robotic-hand
```

Persian pages will automatically use `dir="rtl"`.

\---

## Planned Public Pages

The initial public website will include:

1. Home
2. About
3. Team
4. Solutions
5. Intelligent Robotic Hand
6. AI and Machine Learning Services
7. Research and Development
8. Projects and Case Studies
9. Insights or Blog
10. Careers
11. Contact
12. AI Knowledge Assistant
13. Privacy Policy
14. Terms of Use
15. Accessibility Statement
16. Custom 404 Page

\---

## Planned Platform Capabilities

### Public Website

* responsive navigation
* multilingual content
* language selector
* RTL support for Persian
* company overview
* team profiles
* solutions and service pages
* robotic-hand project page
* case studies
* news and insights
* partnership and funding enquiries
* contact form
* downloadable public documents
* SEO metadata
* social sharing metadata
* accessible navigation
* responsive design

### Admin Dashboard

* content management
* multilingual content management
* team profile management
* project and case study management
* contact enquiry management
* careers and vacancy management
* RAG document management
* analytics and reporting
* role-based access
* audit logs
* system health overview

### AI Knowledge Assistant

* company-document ingestion
* text chunking
* embeddings
* vector search
* source-aware answers
* citation display
* response feedback
* unsupported-answer refusal
* multilingual questions
* model evaluation dashboard
* retrieval-quality monitoring

### Data Visualisation

Planned charts and dashboards include:

* website traffic by language
* page visits by month
* contact enquiries by category
* most-viewed services and projects
* chatbot questions by topic
* RAG retrieval quality
* model response time
* API response latency
* error rate
* CI/CD pipeline success rate
* robotic-hand grasp success rate
* robotic-hand sensor and actuator test metrics

\---

## Proposed Architecture

```text
                        ┌──────────────────────────────┐
                        │        Web Browser           │
                        │ English / Persian / Chinese  │
                        └──────────────┬───────────────┘
                                       │
                                       ▼
                        ┌──────────────────────────────┐
                        │       Next.js Frontend       │
                        │ React + TypeScript + CSS     │
                        └──────────────┬───────────────┘
                                       │
                 ┌─────────────────────┼─────────────────────┐
                 │                     │                     │
                 ▼                     ▼                     ▼
        ┌────────────────┐   ┌──────────────────┐   ┌──────────────────┐
        │ Next.js APIs   │   │ FastAPI AI API   │   │ Authentication   │
        │ Node.js        │   │ RAG / ML / LLM   │   │ Roles / Sessions │
        └────────┬───────┘   └─────────┬────────┘   └────────┬─────────┘
                 │                     │                     │
                 └──────────────┬──────┴──────────────┬──────┘
                                │                     │
                                ▼                     ▼
                    ┌──────────────────────┐  ┌─────────────────────┐
                    │ PostgreSQL           │  │ Object Storage      │
                    │ Business Data        │  │ S3 or Local Storage │
                    │ pgvector Embeddings  │  │ Documents / Media   │
                    └──────────────────────┘  └─────────────────────┘
```

\---

## Repository Structure

The project currently uses the standard Next.js structure and will gradually evolve into a monorepository.

### Current Structure

```text
industrialorigami-ai-platform/
├── app/
├── public/
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

### Planned Structure

```text
industrialorigami-ai-platform/
├── apps/
│   └── web/
├── services/
│   └── ai-api/
├── packages/
│   ├── ui/
│   ├── config/
│   └── types/
├── database/
│   ├── migrations/
│   └── seed/
├── infrastructure/
│   ├── docker/
│   ├── kubernetes/
│   ├── monitoring/
│   └── aws/
├── documents/
│   ├── architecture/
│   ├── requirements/
│   └── api/
├── .github/
│   ├── workflows/
│   └── ISSUE\_TEMPLATE/
├── docker-compose.yml
├── README.md
└── CONTRIBUTING.md
```

The repository will be restructured only when the application requires it. Empty folders are not architecture. They are merely optimism with indentation.

\---

## Development Roadmap

### Phase 0 — Requirements and Planning

* define business objectives
* define target audiences
* define brand identity
* create site map
* define page requirements
* define multilingual strategy
* document security expectations
* define success criteria
* create initial architecture decision records

### Phase 1 — Multilingual Public Website

* initialise Next.js project
* create English, Persian, and Chinese routing
* implement RTL support
* build responsive navigation
* build footer
* create Home page
* create About page
* create Team page
* create Solutions page
* create Robotic Hand page
* create Contact page
* add SEO metadata
* add GitHub Actions build workflow
* deploy static version

### Phase 2 — Portfolio and Content

* add Projects and Case Studies
* add Research and Development
* add Blog or Insights
* add Careers
* add technical diagrams
* add dashboards and charts
* add downloadable public documents
* add local search

### Phase 3 — Backend and Database

* add PostgreSQL
* define database schema
* add contact form persistence
* add newsletter registration
* add authentication
* add role-based access
* create admin dashboard
* add REST APIs
* add API documentation

### Phase 4 — RAG and LLM Assistant

* add FastAPI AI service
* add document ingestion
* add chunking
* add embeddings
* add pgvector
* add retrieval
* add source citations
* add chatbot interface
* add feedback
* add evaluation
* add local LLM support
* add Bedrock integration later

### Phase 5 — Analytics and Dashboards

* website analytics
* contact-enquiry reporting
* RAG evaluation dashboard
* robotic-hand metrics
* charts and filters
* CSV export
* audit logs

### Phase 6 — Testing, Security, and Quality

* unit testing
* component testing
* API testing
* end-to-end testing
* accessibility testing
* TypeScript strict checks
* dependency scanning
* CodeQL analysis
* secret scanning
* container scanning
* secure headers
* input validation
* rate limiting

### Phase 7 — Docker and Monitoring

* Dockerise Next.js
* Dockerise FastAPI
* add PostgreSQL and pgvector
* add Docker Compose
* add Prometheus
* add Grafana
* add application metrics
* add alerting
* add health checks

### Phase 8 — Kubernetes and Cloud

* deploy locally with kind, k3d, or Minikube
* add Kubernetes manifests
* add ConfigMaps and Secrets
* add ingress
* add autoscaling demonstration
* create AWS architecture
* configure IAM
* use S3
* use Lambda and API Gateway where suitable
* integrate Bedrock
* configure CloudWatch
* configure budgets and cost alerts

\---

## Local Development

### Prerequisites

Install:

* Node.js 20 or later
* npm
* Git
* Visual Studio Code
* Docker Desktop, required in later phases

Check your versions:

```powershell
node --version
npm --version
git --version
```

### Clone the Repository

```powershell
git clone https://github.com/YOUR\_USERNAME/industrialorigami-ai-platform.git
cd industrialorigami-ai-platform
```

### Install Dependencies

```powershell
npm install
```

### Start the Development Server

```powershell
npm run dev
```

Open:

```text
http://localhost:3000
```

### Production Build

```powershell
npm run build
```

### Start the Production Server Locally

```powershell
npm run start
```

### Run Linting

```powershell
npm run lint
```

\---

## Available Scripts

|Command|Purpose|
|-|-|
|`npm run dev`|Start development server|
|`npm run build`|Create production build|
|`npm run start`|Start production server|
|`npm run lint`|Run ESLint|

Additional scripts will be added for:

```text
npm run test
npm run test:unit
npm run test:e2e
npm run typecheck
npm run format
npm run analyze
```

\---

## Environment Variables

Create a local `.env.local` file when environment variables are introduced.

Example:

```env
NEXT\_PUBLIC\_SITE\_URL=http://localhost:3000

DATABASE\_URL=postgresql://postgres:postgres@localhost:5432/industrialorigami

AUTH\_SECRET=replace-with-a-secure-random-secret

AI\_API\_URL=http://localhost:8000

AWS\_REGION=ap-southeast-2
AWS\_S3\_BUCKET=
AWS\_BEDROCK\_MODEL\_ID=
```

Never commit `.env.local`, credentials, API keys, database passwords, private keys, or cloud secrets.

\---

## Git Workflow

Recommended branches:

```text
main
develop
feature/\*
fix/\*
docs/\*
refactor/\*
```

Example:

```powershell
git checkout -b feature/multilingual-routing
git add .
git commit -m "feat: add multilingual locale routing"
git push -u origin feature/multilingual-routing
```

Recommended commit format:

```text
feat: add multilingual navigation
fix: correct Persian RTL layout
docs: update local setup guide
test: add navigation component tests
refactor: simplify locale configuration
chore: update dependencies
```

\---

## CI/CD Plan

GitHub Actions will be the primary CI/CD platform.

Planned workflow:

```text
Pull Request
   ↓
Install Dependencies
   ↓
Lint
   ↓
Type Check
   ↓
Unit Tests
   ↓
Build
   ↓
Security Scans
   ↓
End-to-End Tests
   ↓
Deploy
```

Jenkins may be added later as a separate enterprise CI/CD demonstration. It will not replace GitHub Actions during the early phases.

\---

## Monitoring and Observability

The platform will later include:

* application health endpoints
* API latency
* request count
* error rate
* database connection monitoring
* RAG retrieval latency
* LLM response latency
* token and model usage
* chatbot feedback
* build and deployment metrics
* robotic-hand experiment metrics

Prometheus will collect metrics and Grafana will provide dashboards.

\---

## Free and Low-Cost Development Strategy

The early phases are designed to avoid unnecessary cloud costs.

|Requirement|Initial Approach|
|-|-|
|Git hosting|GitHub|
|CI/CD|GitHub Actions|
|Website hosting|GitHub Pages or another free static host|
|Database|Local PostgreSQL in Docker|
|Vector database|Local pgvector|
|LLM|Local Ollama|
|Monitoring|Local Prometheus and Grafana|
|Containers|Docker Compose|
|Kubernetes|Local kind, k3d, or Minikube|
|Cloud|Added only after the application is stable|

AWS services are not assumed to be permanently free. Cloud budgets and billing alerts must be configured before deployment.

\---

## Security Principles

The project will follow these principles:

* no secrets in Git
* least-privilege IAM
* server-side validation
* safe error messages
* secure authentication
* role-based access control
* encrypted transport
* dependency updates
* security scanning
* rate limiting
* audit logging
* protected admin routes
* backup and recovery planning
* privacy-aware analytics
* controlled access to company documents
* no private robotic-hand intellectual property in the public repository

\---

## Accessibility Goals

The website will aim to support:

* keyboard navigation
* semantic HTML
* visible focus states
* sufficient colour contrast
* accessible form labels
* screen-reader-friendly content
* language attributes
* correct RTL layout
* reduced-motion preferences
* accessible error messages
* responsive text sizing

\---

## Performance Goals

The project will aim for:

* responsive rendering
* optimised images
* lazy loading
* minimal client-side JavaScript
* server components where appropriate
* caching where appropriate
* compressed assets
* efficient database queries
* measured API performance
* Lighthouse-based performance review

\---

## Documentation

Planned documentation includes:

```text
documents/
├── architecture/
│   ├── system-architecture.md
│   ├── security-architecture.md
│   └── deployment-architecture.md
├── requirements/
│   ├── functional-requirements.md
│   ├── non-functional-requirements.md
│   └── multilingual-requirements.md
├── api/
│   └── api-contracts.md
└── decisions/
    └── architecture-decision-records/
```

\---

## Contribution Guidelines

The project will later include a dedicated `CONTRIBUTING.md`.

Until then:

1. create a branch
2. make focused changes
3. run linting and build checks
4. write or update tests
5. use clear commit messages
6. open a pull request
7. request review
8. do not merge failing pipelines

\---

## Intellectual Property

This repository may contain public website code and selected open technical demonstrations.

Do not commit:

* confidential company plans
* unpublished robotic-hand CAD files
* proprietary control algorithms
* private datasets
* investor information
* immigration documents
* customer information
* passwords or tokens
* private funding proposals
* personal information

Licensing for public code will be confirmed after the company decides which components are open source and which remain proprietary.

\---

## Team

### David Ewing

**Founder and Managing Director**

Responsible for company strategy, partnerships, business development, funding, product direction, and stakeholder engagement.

### Zahra Torabi

**AI, Software Engineering, and Research Development Lead**

Responsible for AI/ML research, reinforcement learning, software development, intelligent optimisation, data-driven systems, RAG, model evaluation, cloud and MLOps direction, and technical implementation.

### Lilian

**Data Science and Analytics Lead**

Responsible for data preparation, statistical analysis, predictive modelling, analytics, visualisation, and evaluation.

### Gurwinder

**Mechanical and Project Engineering Lead**

Gurwinder holds a Bachelor of Mechanical Engineering and brings hands-on experience in metal fabrication, CAD design, and project engineering. He contributes to mechanical design, manufacturing processes, fabrication planning, prototype assembly, and project delivery. He is currently undertaking a refrigeration-industry apprenticeship, further developing thermal and mechanical-services expertise.

\---

## Company Focus

IndustrialOrigami.AI works across:

* artificial intelligence
* machine learning
* reinforcement learning
* robotics
* intelligent automation
* mechanical engineering
* data science
* software engineering
* computer vision
* RAG and LLM systems
* predictive analytics
* cloud systems
* research commercialisation

\---

## Contact

Website: `https://industrialorigami.ai`  
Email: add confirmed company email  
Location: Christchurch, New Zealand

\---

## Licence

No licence has been selected yet.

All rights are reserved unless a licence is added to the repository.

\---

## Developed By

This website and technology platform were designed and developed by **Zahra Torabi** for IndustrialOrigami.AI.

The project demonstrates full-stack software development, multilingual web design, artificial intelligence integration, cloud architecture, DevOps, testing, monitoring, and data visualisation using technologies including Next.js, React, TypeScript, Node.js, PostgreSQL, Docker, Kubernetes, GitHub Actions, AWS, RAG, and Large Language Models.

