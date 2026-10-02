# Priyanshu Kumar — DevOps Engineer & SRE

I work on reliable cloud infrastructure, delivery pipelines, observability, and automation across AWS, GCP, and Azure. I care about the next person who has to deploy, debug, or change a system: the decisions should be understandable, failures traceable, and recovery planned.

This repository contains my portfolio website and original engineering writeups. The writeups show how I reason about infrastructure without publishing employer code or private systems.

[Portfolio](https://priyanshu.page) · [CV](public/PK%20DevOps%20CV.pdf) · [LinkedIn](https://www.linkedin.com/in/pkdeva/) · [GitHub](https://github.com/pkdeva) · [Email](mailto:priyanshu.txt@gmail.com)

## Professional background

- **Clinikally (YC S22), June 2025–present:** DevOps work spanning EKS, RBAC, HPA/KEDA, Jenkins/Helm delivery, mobile OTA publishing, and analytics/data pipelines.
- **va2pt.com, February 2024–June 2025:** DevOps/SRE work spanning AWS/GCP infrastructure, migrations, event-driven services, observability, and cloud cost optimization.

These are summaries of the experience described in my CV. The articles below are separate illustrative scenarios; their architectures, incidents, and numbers do not describe either employer.

## Engineering writeups

Each article gives the problem, assumptions, alternatives, chosen approach, failure handling, and proposed validation. No lab deployments or measured results are claimed.

| Writeup | Decisions to inspect |
|---|---|
| [Planning a cloud migration with a way back](docs/engineering/cloud-migration.md) | Data ownership, staged cutover, payment retries, rollback boundaries, and reconciliation |
| [Operating Kubernetes beyond successful deployments](docs/engineering/kubernetes-reliability.md) | Health probes, capacity, scaling, permissions, service signals, and incident recovery |
| [Reducing cloud costs without weakening reliability](docs/engineering/cloud-cost-optimization.md) | Cost attribution, rightsizing, interruption tolerance, commitments, and reliability gates |

## Existing public automation

[New Relic APM Error Automation](https://github.com/pkdeva/NewRelic_APM_Error_Automation) is a separate existing project for collecting error traces following APM alerts and producing an email CSV report.

## Website development

The website uses React, TypeScript, and Vite. Use Node.js 20.19+ in the Node 20 release line, or Node.js 22.12+.

```sh
npm ci
npm run dev
```

Vite prints the local development URL. To check a production build:

```sh
npm run typecheck
npm run lint
npm run build
npm run preview
```

Website hosting uses the existing Docker/Fly.io configuration. Writing or reading the engineering documents does not require deploying infrastructure.

## GitHub profile introduction

The introduction for the small `pkdeva/pkdeva` profile repository is maintained in [docs/github-profile.md](docs/github-profile.md). All substantive writeups stay in this repository.
