# Portfolio Website

A modern portfolio website built with Next.js featuring video showcases, GitHub integration, and Docker-based project demos.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8)

## Features

- **🎬 Video Showcases** - Project cards with video previews that play on hover
- **📊 GitHub Integration** - Real-time repository stats, language distribution, and activity
- **🐳 Docker Demos** - Spin up live project demos in isolated containers
- **✨ Modern UI** - Glassmorphism effects, smooth animations with Framer Motion
- **📱 Responsive Design** - Mobile-first approach with adaptive layouts

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **GitHub API**: Octokit
- **Containerization**: Docker (demo infrastructure)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional, for running demos)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Configure your environment variables in `.env`:
   ```env
   GITHUB_TOKEN=your_github_personal_access_token
   GITHUB_USERNAME=your_github_username
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── docker/        # Docker container management
│   │   └── github/        # GitHub API proxy
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── portfolio/         # Portfolio sections
│   │   ├── AboutSection   # About me section
│   │   ├── DemoSection    # Live demo environment
│   │   ├── GitHubSection  # GitHub activity
│   │   ├── Hero           # Hero section
│   │   ├── ProjectCard    # Project card with video
│   │   └── ProjectsSection
│   └── ui/                # Reusable UI components
│       ├── Button
│       ├── Card
│       ├── Footer
│       └── Navbar
├── lib/                   # Utility functions
│   ├── docker.ts          # Docker API utilities
│   └── github.ts          # GitHub API utilities
├── types/                 # TypeScript types
└── public/                # Static assets
```

## Configuration

### GitHub Integration

1. Create a [GitHub Personal Access Token](https://github.com/settings/tokens)
2. Add it to your `.env` file as `GITHUB_TOKEN`
3. Set your `GITHUB_USERNAME`

### Docker Demos (Optional)

The demo section simulates Docker container management. For production:

1. Set up Docker on your server
2. Configure `DOCKER_HOST` in your environment
3. Build demo images for your projects

## Customization

### Adding Projects

Edit the projects array in `components/portfolio/ProjectsSection.tsx`:

```typescript
const projects: Project[] = [
  {
    id: '1',
    name: 'Your Project',
    description: 'Project description',
    videoUrl: '/videos/your-video.mp4',    // Optional
    thumbnailUrl: '/images/your-thumb.jpg', // Optional
    githubUrl: 'https://github.com/...',
    technologies: ['React', 'Node.js'],
    featured: true,
    dockerConfig: {                         // Optional
      image: 'your-image:latest',
      port: 3000,
    },
  },
];
```

### Updating Personal Info

- Edit `components/portfolio/Hero.tsx` for the hero section
- Edit `components/portfolio/AboutSection.tsx` for the about section
- Update social links in `components/ui/Footer.tsx`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### GitHub Pages (Recommended for this repo)

This site is configured to deploy automatically to GitHub Pages when you push to the `main` branch.

**Setup Instructions:**

1. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. Push your changes to the `main` branch:
   ```bash
   git push origin main
   ```

3. The GitHub Actions workflow will automatically:
   - Install dependencies
   - Build the static site
   - Deploy to GitHub Pages

4. Your site will be available at: `https://yourusername.github.io/`

**Important:** This configuration uses Next.js static export (`output: 'export'`), which means:
- No server-side features (API routes, server components with dynamic data)
- All pages are pre-rendered at build time
- Images are unoptimized (no Next.js Image Optimization)

### Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## License

MIT License - feel free to use this for your own portfolio!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
