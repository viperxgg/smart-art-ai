# Elins val

Production Next.js site for [smartartai.se](https://www.smartartai.se), including editorial product pages, comparisons, guides, Fråga Elin, reviews, and the collaboration form.

## Environment

Copy `.env.example` to `.env.local` for local development. Never commit real secret values.

Security-critical production variables:

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` protect Fråga Elin and public forms.
- `ELIN_QUOTA_SECRET` signs the 24-hour Elin usage cookie.
- `IP_HASH_SALT` and `REVIEW_IP_HASH_SALT` pseudonymize IP addresses without reusing another service key.
- `OPENAI_API_KEY` enables Fråga Elin through the OpenAI Responses API.
- `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` enable reviews, subscriptions, and Elin insights.
- SMTP variables enable `/api/inquiry` from the collaboration form.

Production API routes fail closed when their required security variables are missing.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run typecheck
npm run lint
npm run build
npm audit
```

## Deployment

The project is connected to Vercel. Production deployment and environment changes require explicit approval from the project owner.
