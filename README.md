# Rajoan Tamjid Antor — Portfolio

This repository contains the source code for Rajoan Tamjid Antor's professional portfolio site.

**Live site (production):** (will be deployed to Netlify) — update this URL after your Netlify deploy.

Development
-----------

To run the project locally:

```sh
git clone git@github.com:21-rajoan/Rajoan-portfolio.git
cd Rajoan-portfolio
npm install
npm run dev
```

Build for production:

```sh
npm run build
npm run preview
```

Deployment
----------

This project can be deployed to Netlify. To deploy manually from this repository:

- Connect your GitHub repo to Netlify and select the `main` branch.
- If you prefer a webhook-based redeploy, create a **Build hook** in Netlify (Site → Site settings → Build & deploy → Build hooks → Add build hook) and use that URL to trigger redeploys.
- To force a fresh build that clears cached assets, use **Deploys → Trigger deploy → Clear cache and deploy site** in the Netlify dashboard.

Notes
-----

- The repo was previously edited using a third-party tool; that integration has been removed and assets replaced.
- If you still see an old favicon or icon in the browser, do a hard refresh or clear cache. Netlify may serve cached assets until a fresh deploy completes.

Need help deploying or confirming the live site? Paste a Netlify Build Hook URL here and I can POST to it to trigger a redeploy, or I can walk you through the Netlify dashboard steps.
