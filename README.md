# DevOps CI/CD Pipeline Automation

## 1. Live Application Link
**URL:** https://devops-pipeline-six.vercel.app/

## 2. Project Overview
This repository demonstrates a fully automated DevOps workflow. It includes a Node.js application with automated testing, a Continuous Integration (CI) pipeline via GitHub Actions, and Continuous Deployment (CD) via Vercel.

## 3. Pipeline Description
The pipeline acts as a **Quality Gate**:
1. **Trigger**: Every `push` to the `main` branch.
2. **CI Stage (GitHub Actions)**: 
   - Environment is set up (Ubuntu).
   - Dependencies are installed (`npm install`).
   - Automated tests are run (`npm test`).
3. **Quality Gate**: If tests fail, the pipeline terminates. Vercel is configured to only update the production build if these status checks pass.
4. **CD Stage (Vercel)**: Upon successful CI, Vercel automatically pulls the latest code and deploys it to the live environment.

## 4. Deployment Strategy: Blue-Green Deployment
For this project, I implemented a **Blue-Green Deployment** strategy (managed via Vercel's Atomic Deployments).

- **How it works**: Vercel creates a new, separate environment (the "Blue" version) for every deployment. The current live site (the "Green" version) remains untouched until the new version is fully built and ready. 
- **Safety**: Once the Blue version is ready and passes all checks, Vercel "flips the switch," routing traffic from the old version to the new one instantly. This results in zero downtime.

## 5. Rollback Protocol
If a bug is discovered in production, the following rollback procedure is defined:
1. Open the **Vercel Dashboard** and go to the **Deployments** tab.
2. Identify the last stable deployment (the one prior to the current buggy version).
3. Click the **vertical ellipsis (⋮)** and select **"Promote to Production"**.
4. Vercel immediately redirects traffic back to the stable version's hash, effectively rolling back the change in seconds without requiring a new code push.

## 6. Proof of Pipeline
### Successful CI/CD Run
Screenshot is in "images" folder

### Hosted Application
Screenshot is in "images" folder