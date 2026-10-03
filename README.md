# Space Tourism

A responsive space tourism website built as a multi-page frontend project. Explore the home, destination, crew, and technology sections through the site navigation, with page-specific imagery and interactive content selectors.

## Features

- Responsive layouts for mobile, tablet, and desktop screens
- Four sections: Home, Destination, Crew, and Technology
- Interactive destination, crew member, and technology selectors
- Animated content transitions powered by Motion
- Responsive backgrounds and imagery optimized with Next.js Image
- Custom typography and styling with Tailwind CSS

## Tech Stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19 and TypeScript
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Motion](https://motion.dev/) for transitions

## Getting Started

### Requirements

- Node.js compatible with the installed Next.js version
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The development server refreshes the page as you edit the source.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Start the production server after building. |
| `npm run lint` | Run ESLint. |

## Project Structure

```text
app/
  _components/     Shared navigation, logo, and sidebar components
  _context/        Sidebar state context
  crew/            Crew page
  destination/     Destination page
  technology/      Technology page
  globals.css      Tailwind theme and global styles
  layout.tsx       Root layout, fonts, and shared navigation
  page.tsx         Home page
public/
  crew/            Crew photos and responsive backgrounds
  destination/     Destination images and responsive backgrounds
  home/            Home page responsive backgrounds
  technology/      Technology images and responsive backgrounds
```

## Pages

- `/` — Introduction to the space travel experience
- `/destination` — Browse destinations and view travel details
- `/crew` — Browse crew members and their biographies
- `/technology` — Explore the technology used for the journey

## Customization

- Page content and selectable items are defined in each route under `app/`.
- Shared navigation and layout are in `app/_components/` and `app/layout.tsx`.
- Theme colors, typography, breakpoints, and global styling are in `app/globals.css`.
- Images and page backgrounds are organized by section under `public/`.

## Production

Build and run the production version locally with:

```bash
npm run build
npm run start
```

The project can be deployed to a Next.js-compatible hosting platform. See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for deployment options.
