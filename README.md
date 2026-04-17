# GroundWorks Construction Website (React + Vite)

Single-page React website rebuilt from existing GHL content/theme for deployment on Railway.

## Stack

- React 18
- Vite 5
- Railway (Nixpacks)

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Railway via GitHub

1. Create a new GitHub repo and push this folder (`groundworks-website`) as the repository root.
2. In Railway, choose **New Project → Deploy from GitHub Repo**.
3. Select the repo and let Railway detect config from `railway.json`.
4. Railway build command: `npm install && npm run build`
5. Railway start command: `npx serve -s dist -l $PORT`

## Domain cutover (Cloudflare)

After deployment:

1. Copy Railway provided public domain.
2. In Cloudflare, point `groundworksconstructionllc.com` to Railway target (CNAME/record as required by Railway docs).
3. Keep GHL forms running: this site still embeds the same existing GHL/TxAI iframes.

## External legal links

- Privacy: `https://go.groundworksconstructionllc.com/privacy-policy`
- Terms: `https://go.groundworksconstructionllc.com/terms-of-service`

