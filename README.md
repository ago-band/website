# ago-band.info Website

Static website for ago band, built with React, TypeScript, and Vite, deployed to GitHub Pages.

## Development

### Prerequisites

- [Bun](https://bun.sh/) - JavaScript runtime and package manager

### Setup

1. Install dependencies:
```bash
bun install
```

2. Start development server:
```bash
bun run dev
```

3. Build for production:
```bash
bun run build
```

4. Preview production build:
```bash
bun run preview
```

## Project Structure

```
github-pages-website/
├── public/              # Static assets
│   ├── 404.html        # GitHub Pages routing fallback
│   └── assets/         # Images and other assets
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── data/           # YAML data files
│   ├── utils/          # Utility functions
│   └── styles/         # CSS styles
└── .github/
    └── workflows/       # GitHub Actions workflows
```

## Adding Shows

Edit `src/data/shows.yaml` to add new shows. The format is:

```yaml
shows:
  - date: "YYYY-MM-DD"
    venue: "Venue Name, City"
    description: "Show description"
    supportingActs:
      - "Act 1"
      - "Act 2"
    links:
      facebook: "https://..."
      tickets: "https://..."
    status: "upcoming" # or "past" or "cancelled"
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

## Routes

Routes are defined in `src/data/routes.yaml`. To add a new route:

1. Add the route path to `routes.yaml`
2. Create a new page component in `src/pages/`
3. Add the route to `src/App.tsx`
