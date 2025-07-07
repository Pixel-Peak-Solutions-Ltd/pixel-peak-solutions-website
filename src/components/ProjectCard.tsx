import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  slug: string;
  tags?: string[];
  featured?: boolean;
}

export const ProjectCard = ({
                              image,
                              title,
                              description,
                              slug,
                              tags = [],
                              featured = false
                            }: ProjectCardProps) => {
  return (
      <Link href={`/projects/${slug}`} className="block group">
        <article className="relative h-full">
          {/* Glow Effect */}
          <div className={`
          absolute inset-0 rounded-2xl blur-xl transition-all duration-500
          ${featured
              ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 group-hover:from-purple-600/40 group-hover:to-pink-600/40'
              : 'bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:to-pink-600/20'
          }
        `} />

          {/* Card Content */}
          <div className="relative h-full bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02]">
            {/* Image Container */}
            <div className="aspect-video relative overflow-hidden">
              <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

              {/* Featured Badge */}
              {featured && (
                  <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-purple-600/90 backdrop-blur text-white text-xs font-semibold rounded-full">
                  Featured
                </span>
                  </div>
              )}

              {/* View Project Button - Shows on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors">
                  View Project
                  <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors line-clamp-1">
                {title}
              </h3>

              <p className="text-white/70 text-sm mb-4 line-clamp-2">
                {description}
              </p>

              {/* Tags */}
              {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/60"
                        >
                    {tag}
                  </span>
                    ))}
                  </div>
              )}
            </div>
          </div>
        </article>
      </Link>
  );
};