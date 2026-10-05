# How I cut AWS spend by about 35%

At va2pt.com, I owned a cost-optimization engagement across an AWS estate of roughly 100 accounts with workloads in multiple regions. The changes reduced cloud spend by about **35%—approximately ₹30 lakh in annualized savings**.

That annual figure is the monthly bill reduction extrapolated to a year, rather than savings measured over a full year. I handled the analysis, implementation, and savings verification. The client is anonymized here.

The work covered networking, compute, databases, storage, logs, and delivery pipelines. Much of the waste came from resources that were still provisioned after their original purpose had changed, or capacity that consistently exceeded demand.

## Start with the account estate and usage history

I started from the AWS Organizations management and billing account to understand the estate, then used CloudWatch metrics to investigate workloads across accounts and regions.

For compute and databases, I reviewed three months of utilization. A quiet afternoon tells you little about required capacity; a longer history helps distinguish sustained underuse from a temporary dip. For networking and storage, the question was different: did the resource still need to exist, and did its configuration match how it was being used?

This gave me concrete changes to investigate instead of treating every line on the bill as an equal opportunity.

## Remove redundant networking

There were unused and overprovisioned Transit Gateways. I removed unnecessary gateways and consolidated selected workloads from multiple accounts into fewer accounts, reducing duplicated networking along the way.

[Transit Gateway charges](https://aws.amazon.com/transit-gateway/pricing/) include attachment-hours and traffic processing. Removing redundant network paths therefore addressed recurring infrastructure charges as well as traffic-related costs.

Account consolidation mattered where it let us simplify the actual topology. Moving workloads into the same account does not automatically eliminate data-transfer fees: the regions, Availability Zones, and services involved still determine those charges. The useful change was removing networking we no longer needed.

## Consolidate load balancers

The estate also had more Application Load Balancers than it needed. I consolidated them into a smaller shared set.

An idle ALB still incurs an hourly charge. [AWS bills ALBs](https://aws.amazon.com/elasticloadbalancing/pricing/) for running time as well as capacity usage, so a load balancer does not become free just because traffic is low.

Sharing reduced that duplicated baseline cost. This is a decision about compatible workloads and routing boundaries; separate load balancers can still be justified where workloads need independent configuration or isolation.

## Rightsize Aurora and EC2

Some Aurora clusters had CPU utilization below 30% across the three-month review period, with memory usage also indicating excess capacity. EC2 instances showed sustained underuse too.

I reduced oversized capacity and checked the workloads before and after the sizing changes. Low CPU was a reason to investigate, not enough evidence on its own to select a smaller size. Memory pressure and the workload's behavior still mattered.

The cost reduction came from bringing provisioned capacity closer to observed demand.

## Put limits on logs and storage

CloudWatch log groups had no retention policies, and S3 buckets had no lifecycle policies. Both allowed stored data to keep accumulating without an explicit end point.

I added log retention and S3 lifecycle policies. CloudWatch logs otherwise [remain stored indefinitely by default](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html). Retention addresses that growing storage footprint; it does not remove the cost of ingesting the same volume of new logs.

For S3, lifecycle rules made data retention and transitions explicit. The appropriate policy depends on access and retention requirements, so there is no universal number of days or storage tier to recommend from this engagement.

## Trim unnecessary pipeline work

CodePipeline workflows contained unnecessary steps, stages, and supporting resources. I refactored those workflows and removed work that no longer served the delivery process.

The savings came from avoiding unnecessary execution and supporting infrastructure. A stage count alone is not a reliable cost measure: pipeline billing and the services invoked by its actions both matter.

## A separate GCP example: scale from a smaller baseline

For another client, I implemented Managed Instance Groups for VM autoscaling on GCP. We moved away from keeping excess VM capacity running around the clock toward fewer or smaller baseline VMs, with capacity expanding as demand increased.

The baseline stayed available; this was not a scale-to-zero setup. It addressed a different source of waste: paying continuously for capacity only needed during busier periods. The AWS savings figures above do not include this engagement.

---

[Back to the engineering writeup index](../../README.md#engineering-writeups)
