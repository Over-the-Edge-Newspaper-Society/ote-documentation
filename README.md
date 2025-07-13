# Over the Edge Documentation

This documentation site is built using [Starlight](https://starlight.astro.build/), a modern documentation framework built on [Astro](https://astro.build/).

## Features

- 📝 **Comprehensive Style Guide** - AP style, voice/tone guidelines, and writing standards
- 🔄 **Editorial Process** - Complete workflow from pitch to publication
- 🛠️ **Resources & Tools** - Templates, contacts, and submission forms
- 🎨 **IONOS-inspired Design** - Modern, accessible, and mobile-responsive
- ⚡ **Fast Performance** - Built with Astro for optimal loading speeds

## Installation

```bash
npm install
```

## Local Development

```bash
npm run dev
```

This command starts a local development server at `http://localhost:4321/ote-documentation/`. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `dist` directory and can be served using any static hosting service.

## Deployment

The site automatically deploys to GitHub Pages when you push to the main branch via GitHub Actions.

### Manual Preview

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── content/
│   │   └── docs/           # Documentation content
│   ├── components/         # Custom Astro components
│   ├── styles/            # SCSS styling system
│   └── assets/            # Images and static assets
├── public/                # Public static files
└── astro.config.mjs       # Astro configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## Style Guide

This project follows the Over the Edge editorial standards. See the [Style Guide](src/content/docs/style-guide/) for detailed guidelines on:

- AP Style conventions
- Voice and tone standards  
- Writing best practices
- Editorial workflow

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
