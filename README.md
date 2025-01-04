# Simple Portfolio

A minimalist developer portfolio website built with Next.js, inspired by [this Figma design](https://www.figma.com/community/file/1116246660507537002/developer-portfolio-design). This project serves as a practice implementation of the design while showcasing modern web development technologies.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Theme Switching:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Code Formatting:** [Biome](https://biomejs.dev/)

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd simple-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm lint` - Run linting checks

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
    ├── hero.tsx
    ├── projects.tsx
    ├── navbar.tsx
    └── ...
```

## Features

- 🌓 Dark/Light mode support
- 📱 Responsive design
- ⚡ Fast page loads with Next.js
- 🎨 Styled with Tailwind CSS
- 📝 TypeScript for type safety

## Design

This portfolio is based on the [Developer Portfolio Design](https://www.figma.com/community/file/1116246660507537002/developer-portfolio-design) from Figma Community. The implementation aims to stay true to the original design while adding modern web development practices.

## License

This project is open source and available under the [MIT License](LICENSE).
