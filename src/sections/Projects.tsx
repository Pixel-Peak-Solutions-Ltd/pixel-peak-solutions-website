
'use client';

import { promises as fs } from 'fs';
import path from 'path';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import chutyRoomsImage from '@/assets/images/chuty-rooms.png';
import keeronImage from '@/assets/images/keeron.png';
import vicafeLoyaltyImage from '@/assets/images/vicafe-loyalty.png';
import bakingTalesImage from '@/assets/images/baking-tales.png';
import travelBuddyImage from '@/assets/images/travel-buddy.png';
import comfySlothImage from '@/assets/images/comfy-sloth.png';

const imageMap: any = {
  'edtech-career-platform': keeronImage,
  'coffee-shop-loyalty-app': vicafeLoyaltyImage,
  'boutique-hotel-management-system': chutyRoomsImage,
  'artisanal-bakery-ecommerce-website': bakingTalesImage,
  'social-travel-planning-platform': travelBuddyImage,
  'modern-furniture-ecommerce-store': comfySlothImage,
};

export const ProjectsSection = ({ projects }: { projects: any[] }) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Featured Projects"
          eyebrow="Our Work"
          description="Here are some of the projects that we and our team have completed."
        />
        <div className="mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-4">
              {projects.map((project) => (
                <button
                  key={project.slug}
                  className={`text-left p-4 rounded-lg transition-colors duration-300 ${
                    selectedProject.slug === project.slug
                      ? 'bg-gray-800'
                      : 'hover:bg-gray-800/50'
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={imageMap[selectedProject.slug]}
                  alt={selectedProject.title}
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-semibold text-2xl">{selectedProject.title}</h3>
                <p className="text-white/70 mt-4">{selectedProject.description}</p>
                <Link href={`/projects/${selectedProject.slug}`}>
                  <button className="bg-white text-gray-950 h-12 px-6 rounded-full font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    Read Case Study
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

