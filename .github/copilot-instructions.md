# Portfolio Website - Copilot Instructions

## Project Overview
Modern portfolio website built with Next.js featuring:
- Video support for project showcases
- GitHub API integration for repository stats
- Docker-based project demo environment
- Responsive, animated UI

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **GitHub API**: Octokit
- **Containerization**: Docker
- **Language**: TypeScript

## Development Guidelines
- Use TypeScript for all components
- Follow React Server Components patterns where applicable
- Use Tailwind CSS for styling
- Implement responsive design (mobile-first)
- Add proper loading states and error handling

## Project Structure
```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── portfolio/        # Portfolio-specific components
│   └── docker/           # Docker demo components
├── lib/                   # Utility functions
│   ├── github.ts         # GitHub API utilities
│   └── docker.ts         # Docker API utilities
├── types/                 # TypeScript types
├── public/               # Static assets
├── docker/               # Docker configurations
└── styles/               # Global styles
```

## Key Features
1. **Video Showcase**: Support for video previews in project cards
2. **GitHub Integration**: Display repo stats, last updated, stars, forks
3. **Docker Demo**: Allow visitors to spin up project demos in containers
