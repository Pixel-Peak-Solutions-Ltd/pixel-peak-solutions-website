'use client';

import { useState, useRef, useEffect } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const scrollToProject = (index: number) => {
    if (scrollContainerRef.current && !isDesktop) {
      const container = scrollContainerRef.current;
      const card = container.children[index] as HTMLElement;
      if (card) {
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const containerWidth = container.offsetWidth;
        const scrollPosition = cardLeft - (containerWidth - cardWidth) / 2;

        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current && !isDesktop) {
      const container = scrollContainerRef.current;
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.85; // 85% width on mobile
      const gap = 16; // gap between cards
      const newIndex = Math.round(scrollPosition / (cardWidth + gap));
      setActiveIndex(Math.max(0, Math.min(newIndex, projects.length - 1)));
    }
  };

  return (
      <section id="projects" className="py-16 lg:py-24 overflow-hidden">
        <div className="container px-4 lg:px-8">
          <SectionHeader
              title="Featured Projects"
              eyebrow="Our Work"
              description="Explore our latest creations and success stories."
          />

          {/* Mobile Carousel */}
          <div className="lg:hidden mt-12">
            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mb-6">
              {projects.map((_, index) => (
                  <button
                      key={index}
                      onClick={() => scrollToProject(index)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                          index === activeIndex
                              ? 'w-8 bg-white'
                              : 'w-2 bg-white/30'
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                  />
              ))}
            </div>

            {/* Scrollable Cards Container */}
            <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {projects.map((project, index) => (
                  <div
                      key={project.slug}
                      className="flex-none w-[85%] snap-center"
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                        <div className="aspect-video relative overflow-hidden">
                          <Image
                              src={imageMap[project.slug]}
                              alt={project.title}
                              fill
                              className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-white/70 text-sm mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          <Link href={`/projects/${project.slug}`}>
                            <button className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors">
                              View Case Study →
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 mt-16">
            {projects.map((project, index) => (
                <div
                    key={project.slug}
                    className="group relative"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02]">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                          src={imageMap[project.slug]}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Link href={`/projects/${project.slug}`}>
                          <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors transform -translate-y-4 group-hover:translate-y-0 duration-500">
                            View Project
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};