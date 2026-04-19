# Portfolio

A minimal, performant portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Deployed on GitHub Pages with automatic CI/CD.

**Live at:** [shivakumarr.com](https://shivakumarr.com)

## Stack

- **Framework:** Next.js 16.2.4 with App Router
- **Styling:** Tailwind CSS 4.2.2
- **Language:** TypeScript 5
- **UI Components:** React 19.2.4
- **Deployment:** GitHub Pages (static export)
- **CI/CD:** GitHub Actions

## Features

- ⚡ Static site generation for optimal performance
- 🎨 Dark mode support with `prefers-color-scheme`
- 🔗 Smooth scroll navigation with hash-based routing
- 📱 Fully responsive design
- 🖼️ Optimized images with build-time compression (WebP)
- 🎯 CSS variables for maintainable theming
- 🚀 Automatic deployment to GitHub Pages

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

```bash
npm run build
```

This automatically:
1. Optimizes all images in `public/` to WebP format
2. Builds the static site to `build/`
3. Ready to deploy to any static host

## Deployment

Automatically deployed to GitHub Pages on every push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Custom domain is configured via [`.github/CNAME`](.github/CNAME).

## Configuration

### Work in Progress Mode

To show the WIP page instead of the full portfolio:

```bash
# Create .env.local
echo "NEXT_PUBLIC_SHOW_WIP=true" > .env.local
```

Then run `npm run dev` to see the changes locally, or push to deploy with the WIP page.

To show the full site again, remove the variable or set it to `false`:

```bash
echo "NEXT_PUBLIC_SHOW_WIP=false" > .env.local
```

See [`.env.example`](.env.example) for all available configuration options.

## Project Structure

```
app/                  # Next.js App Router
├── layout.tsx        # Root layout with metadata
├── page.tsx          # Home page
└── globals.css       # Global styles with CSS variables

components/           # React components
├── Nav.tsx
├── Hero.tsx
├── About.tsx
├── Projects.tsx
├── Skills.tsx
├── Blog.tsx
├── Contact.tsx
├── Footer.tsx
└── SmoothScrollProvider.tsx

public/               # Static assets
└── image-shiva.jpeg

lib/
└── data.ts          # Content data
```

## Development Notes

- **Smooth Scrolling:** Enabled via `scroll-behavior: smooth` in globals.css and handled by `SmoothScrollProvider`
- **Image Optimization:** Uses `sharp` CLI at build time to convert images to WebP (80% quality)
- **CSS Variables:** All colors and fonts defined in `:root` for easy theming
- **Logical Properties:** Uses `padding-block`, `padding-inline`, etc. for better internationalization support

## License

MIT
