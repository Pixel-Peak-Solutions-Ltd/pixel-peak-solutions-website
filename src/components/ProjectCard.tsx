
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/Card';

interface ProjectCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  slug: string;
}

export const ProjectCard = ({ image, title, description, slug }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${slug}`}>
      <Card className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
        <div className="flex-shrink-0">
          <Image
            src={image}
            alt={title}
            width={400}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div className="mt-4">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-white/70 mt-2">{description}</p>
        </div>
      </Card>
    </Link>
  );
};
