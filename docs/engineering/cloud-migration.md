# Building the infrastructure for a move off Shopify

I led the infrastructure work for moving a commerce platform from Shopify to a custom platform built by our engineering team. The scope covered ecommerce, ERP, backend services, and frontend applications, with **over two dozen microservices** to deploy and operate.

My responsibility was the foundation underneath that platform: infrastructure provisioning, Kubernetes, CI/CD, development and staging environments, service communication, AWS access, deployment recovery, logging, observability, APM, and alerting. The team built the applications; I led the infrastructure that supported them. The company is anonymized here.

## Make the infrastructure repeatable

I used Terraform for as much of the infrastructure as practical and Kubernetes to run the services.

With this many services, manually configuring each new dependency would leave too much knowledge outside the repository. Infrastructure as code gave us a way to describe the setup and make changes through code rather than rely on someone remembering what they had created in a console.

I also set up separate development and staging environments. These gave the team places to develop and validate changes before production, with environment-specific configuration part of the infrastructure and delivery work.

## Account for workers and events, too

The platform included web-facing services, non-web services, workers, and event-driven processing through SQS and SNS. It also used gRPC for service communication.

I accounted for request-serving and background workloads in the platform setup, including their messaging dependencies and AWS access.

## Build security into workload access

I took a security-first approach, including IAM roles for service accounts (IRSA) and AWS Secrets Manager in the platform setup.

[IRSA associates an IAM role with a Kubernetes service account](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html). It supports assigning AWS permissions to workloads through their service identity, rather than distributing long-lived AWS credentials to containers. Secrets Manager handled application secrets.

The important boundary was what a service needed to access. I treated deployment configuration, AWS permissions, and secrets as connected parts of setting up a service.

S3 and a CDN were also part of the platform infrastructure. Storage and content delivery had to be accounted for alongside the services and their access requirements.

## Build rollback into delivery

I led CI/CD using Jenkins and Helm. Helm upgrades ran with `--atomic`, so a failed upgrade triggered rollback. The flag also enables waiting for resources to become ready, as described in the [Helm upgrade reference](https://helm.sh/docs/v3/helm/helm_upgrade/).

A parallel Jenkins stage checked rollout status and ran post-actions based on the result. That made the rollout outcome part of the pipeline's handling of the deployment.

This was deployment recovery. Rolling back a release does not undo database changes or business events already processed; those remain separate recovery concerns.

## Include logs, observability, APM, and alerts

I led logging, observability, application performance monitoring (APM), and alerting for the platform. The stack included **Datadog, Grafana, New Relic, OpenTelemetry, and CloudWatch**.

The setup covered both the application services and the infrastructure they ran on.

---

[Back to the engineering writeup index](../../README.md#engineering-writeups)
