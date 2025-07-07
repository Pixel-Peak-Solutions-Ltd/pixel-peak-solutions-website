
import { SectionHeader } from '@/components/SectionHeader';
import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const projectsFilePath = path.join(process.cwd(), 'src', 'data', 'projects.json');
  const projectsData = await fs.readFile(projectsFilePath, 'utf-8');
  const projects = JSON.parse(projectsData);
  
  const project = projects.find((p: any) => p.slug === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container py-16 lg:py-24">
      <div className="flex justify-start">
        <Link href="/">
          <button className="bg-white text-gray-950 h-12 px-6 rounded-full font-semibold inline-flex items-center justify-center gap-2 mt-8">
            &larr; Back to Home
          </button>
        </Link>
      </div>
      <div className="mt-12">
        <SectionHeader
          eyebrow={project.company}
          title={project.title}
          description={project.description}
        />
      </div>
      <div className="mt-12 lg:mt-20">
        <article className="prose prose-invert mx-auto">
          <p>{project.article}</p>
        </article>
      </div>
    </div>
  );
}
