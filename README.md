A collection of DevOps automation scripts, IaC demos, and CI/CD workflows

# 🚀 DevOps Lab

This repository contains hands-on DevOps demos covering Docker, GitHub Actions CI/CD, Infrastructure as Code (Terraform & Pulumi), and basic monitoring setups using Prometheus and Grafana. It's built as a practice lab for learning and showcasing DevOps workflows.

---

## 📁 Folder Structure & Usage

### `docker/flask-app/`
A simple Flask web app containerized using Docker.

#### ▶️ How to Run:
```bash
cd docker/flask-app
docker build -t flask-app .
docker run -p 5000:5000 flask-app

github-actions/
Contains a sample GitHub Actions CI workflow for a Node.js project.

📦 Setup:
Add this file to your .github/workflows/ directory in a Node.js project.

Automatically installs dependencies, builds, and runs tests on every push.

iac/pulumi/
Mock setup using Pulumi (TypeScript) to provision an AWS EC2 instance.

▶️ How to Run:
Install Pulumi CLI and configure AWS credentials

Run:
cd iac/pulumi
npm install
pulumi up
⚠️ This is a mock example. Don't deploy without reviewing resources.

iac/terraform/
Terraform configuration to deploy a basic AWS EC2 instance.

▶️ How to Run:
Install Terraform and configure AWS credentials

Run:

cd iac/terraform
terraform init
terraform apply
monitoring/prometheus-grafana/
Monitoring stack using Docker Compose to spin up Prometheus and Grafana.

▶️ How to Run:
cd monitoring/prometheus-grafana
docker-compose up -d
Prometheus: http://localhost:9090

Grafana: http://localhost:3000 (default: admin/admin)

🛠 Tech Stack
Containers: Docker

CI/CD: GitHub Actions

IaC: Terraform, Pulumi

Cloud: AWS (mock setups)

Monitoring: Prometheus, Grafana