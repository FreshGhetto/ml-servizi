# ML Servizi – website scaffold (Next.js + Tailwind + next-intl)

## Start
```bash
npm install
npm run dev
```

Open: http://localhost:3000/it

## Languages
- /it
- /en

Add a third language by:
1) adding messages/de.json
2) updating src/i18n/routing.ts locales
3) (optional) adding DE label

## Where to edit content
- Services: src/content/services.ts
- Insights: src/content/insights.ts
- Portfolio: src/content/portfolio.ts

## Contact form
Currently demo-only (no sending). Add:
- API route + email provider (Resend, Postmark, etc.)
or
- Form backend (Formspark, Basin, etc.)


### Windows clean
```bat
rmdir /s /q node_modules
rmdir /s /q .next
npm install
npm run dev
```


## Auto locale
The root route `/` redirects to `/it` or `/en` based on the browser `Accept-Language` header (fallback: `it`).
