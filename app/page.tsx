import { HeroStars } from '@/components/sections/hero-stars';
import { ProjectsSection } from '@/components/sections/projects';
import { BlogSection } from '@/components/sections/blog';
import { ContactSection } from '@/components/sections/contact';
import { SectionDivider } from '@/components/sections/section-divider';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroStars />
      <SectionDivider />
      <section className="section-transition">
        <ProjectsSection />
      </section>
      <SectionDivider />
      <section className="section-transition jupiter-gradient">
        <BlogSection />
      </section>
      <SectionDivider />
      <section className="section-transition">
        <ContactSection />
      </section>
    </main>
  );
}