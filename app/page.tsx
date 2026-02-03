import Hero from '@/components/portfolio/Hero';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import GitHubSection from '@/components/portfolio/GitHubSection';
import DemoSection from '@/components/portfolio/DemoSection';
import AboutSection from '@/components/portfolio/AboutSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <GitHubSection />
      <DemoSection />
    </>
  );
}
