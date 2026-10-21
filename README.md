# Century Suruchi — Frontend

The frontend application for the [Century Suruchi website](https://suruchi.centuryrealestate.in/), built with Next.js, React, TypeScript, and Tailwind CSS.

- **Live Website:** https://suruchi.centuryrealestate.in/
- **Repository:** https://github.com/rohitdevc/century-suruchi-frontend

## Overview

Century Suruchi Frontend powers the public website of Suruchi Properties Private Limited, a real estate company associated with the Century Real Estate group.

The application presents corporate information, company objectives, leadership details, and investor-relations documents through a responsive, API-driven interface.

It uses Next.js App Router, reusable React components, interactive sliders, and scroll-triggered animations to deliver the website experience.

## Features

- **Dynamic Homepage:** Displays master sliders, company introduction, vision, mission, values, and other company objectives.
- **Leadership Information:** Presents directors and key managerial personnel.
- **Investor Relations:** Organizes investor disclosures, reports, notices, and other corporate documents into navigable categories.
- **API-Driven Content:** Retrieves homepage content and metadata through application service functions.
- **Interactive Sliders:** Provides carousel navigation, pagination, and autoplay.
- **Scroll Animations:** Uses GSAP and ScrollTrigger for animated section transitions.
- **Responsive Navigation:** Supports navigation between homepage sections, including mobile menu interactions.
- **SEO Metadata:** Generates page titles, descriptions, canonical URLs, Open Graph metadata, and Twitter card metadata from API-provided content.
- **Docker Support:** Includes a multi-stage Dockerfile and Docker Compose configuration.
- **Automated Deployment:** Includes a GitHub Actions workflow for production deployment.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| Next.js 16 | React framework and application routing |
| React 19 | User interface |
| TypeScript | Type-safe development |
| Tailwind CSS 4 | Styling |
| GSAP | Animations and scroll-triggered effects |
| Swiper | Sliders and carousels |
| React Icons | Icon library |
| html-react-parser | Rendering HTML content |
| nl2br | Formatting line breaks |
| ESLint 9 | Code linting |
| npm | Dependency management |
| Docker | Containerized deployment |
| GitHub Actions | Deployment automation |

## Prerequisites

- Node.js 22 or a compatible version supported by the project
- npm
- Access to the backend API and required website content
- Docker and Docker Compose for containerized deployment

The Dockerfile uses Node.js 22 Alpine.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rohitdevc/century-suruchi-frontend.git
cd century-suruchi-frontend
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Configure environment variables

Create a `.env` file in the project root and configure the values required by the application.

The homepage uses API service functions to retrieve sliders, company information, objectives, management details, investor-relations content, and metadata.

The frontend also references `NEXT_PUBLIC_PATH` for public asset paths.

Check the API service modules and deployment configuration to determine the complete set of required environment variables and their expected values.

Do not commit credentials, private tokens, or production secrets to the repository. Review any variable prefixed with `NEXT_PUBLIC_` carefully because Next.js can expose such values to browser code.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:2977](http://localhost:2977) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Next.js development server on port 2977. |
| `npm run build` | Creates an optimized production build. |
| `npm run start` | Starts the production server on port 2977. |
| `npm run lint` | Runs ESLint. |

## Project Structure

```text
century-suruchi-frontend/
├── .github/
│   └── workflows/       # GitHub Actions workflows
├── app/                 # Next.js routes, layouts, and global styles
├── components/          # Homepage, header, footer, and UI components
├── lib/                 # API service functions and utilities
├── public/              # Static assets
├── types/               # TypeScript API and application types
├── Dockerfile           # Multi-stage Docker build
├── docker-compose.yml   # Docker Compose configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies and npm scripts
├── package-lock.json    # Dependency lockfile
├── postcss.config.mjs   # PostCSS configuration
├── eslint.config.mjs    # ESLint configuration
└── tsconfig.json        # TypeScript configuration
```

## Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

The application uses port `2977` for its development and production npm scripts.

## Docker Deployment

The repository includes a multi-stage Dockerfile that builds a standalone Next.js application.

Ensure the required environment variables are configured in `.env` before starting the container.

Build and start the application:

```bash
docker compose up --build -d
```

View container logs:

```bash
docker compose logs -f suruchi
```

Stop the application:

```bash
docker compose down
```

Docker Compose configures the container to listen on port `2977`, maps host port `2977` to container port `2977`, and restarts the container unless it is stopped.

## Deployment Automation

The repository includes a GitHub Actions workflow that triggers on pushes to the `main` branch and uses a self-hosted runner to update the production checkout.

Production deployment depends on the runner's configuration, filesystem permissions, SSH access, and server environment. Keep deployment credentials outside the repository and restrict who can modify production workflow files.

## Code Quality

Run ESLint:

```bash
npm run lint
```

Verify the production build:

```bash
npm run build
```

Before deploying, test the homepage, slider interactions, responsive navigation, company-information sections, and investor-relations document links.

## Contributing

Before submitting changes:

1. Follow the existing project structure and coding conventions.
2. Run ESLint and verify the production build.
3. Test affected pages, animations, navigation, and API integrations.
4. Keep secrets and environment-specific configuration out of version control.

## License

No license information has been verified for this repository. Contact the repository owner for permission before redistributing or reusing project code.

---

Built with Next.js, React, TypeScript, and Tailwind CSS.