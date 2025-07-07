import { promises as fs } from 'fs';
import path from 'path';
import { AboutSection } from '@/sections/About/About';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { TapeSection } from '@/sections/Tape';
import { OurCommitmentSection } from '@/sections/OurCommitment';

export default async function Home() {
  const projectsFilePath = path.join(process.cwd(), 'src', 'data', 'projects.json');
  const projectsData = await fs.readFile(projectsFilePath, 'utf-8');
  const projects = JSON.parse(projectsData);

  return (
    <main>
      <Header />
      <HeroSection />
      <ProjectsSection projects={projects} />
      <TapeSection />
      <OurCommitmentSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
