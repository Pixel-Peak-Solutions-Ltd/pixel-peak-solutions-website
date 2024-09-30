import Image from 'next/image';
import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import chutyRoomsImage from '@/assets/images/chuty-rooms.png';
import keeronImage from '@/assets/images/keeron.png';
import vicafeLoyaltyImage from '@/assets/images/vicafe-loyalty.png';
import bakingTalesImage from '@/assets/images/baking-tales.png';
import travelBuddyImage from '@/assets/images/travel-buddy.png';
import comfySlothImage from '@/assets/images/comfy-sloth.png';

const portfolioProjects = [
  {
    company: 'ViCOLLECTIVE AG',
    year: '2022',
    title: 'ViCAFE Loyalty',
    results: [
      { id: 1, title: 'Welcome coffee lover' },
      { id: 2, title: 'Scan the QR code' },
      { id: 3, title: 'Easy to use' },
      { id: 4, title: 'Collected and claim' },
    ],
    link: 'https://apps.apple.com/us/app/vicafe-loyalty/id6474923930',
    image: vicafeLoyaltyImage,
  },
  {
    company: 'Keeron',
    year: '2024',
    title: 'Keeron',
    results: [
      { id: 1, title: 'Accelerate your careers' },
      { id: 2, title: 'Collaborate with industry experts' },
      { id: 3, title: 'Create comprehensive career plans' },
    ],
    link: 'https://play.google.com/store/search?q=keeron&c=apps&hl=en',
    image: keeronImage,
  },
  {
    company: 'Chuty Bangladesh Private Limited',
    year: '2024',
    title: 'ChutyRooms',
    results: [
      { id: 1, title: 'Largest growing hospitality partner' },
      {
        id: 2,
        title: 'Online portal for travel and stays',
      },
      { id: 3, title: 'Founded in 2018 in Chittagong, Bangladesh' },
    ],
    link: 'https://play.google.com/store/apps/details?id=com.chutyrooms.crapp&hl=en',
    image: chutyRoomsImage,
  },
  {
    company: 'Baking Tales',
    year: '2024',
    title: 'Baking Tales',
    results: [
      { id: 1, title: 'Beautiful and scrumptious desserts' },
      {
        id: 2,
        title: 'Variety of baked goods',
      },
      { id: 3, title: 'Finest carefully sourced ingredients' },
    ],
    link: 'https://baking-tales-v2.vercel.app/',
    image: bakingTalesImage,
  },
  {
    company: 'Travel Buddy',
    year: '2024',
    title: 'Travel Buddy',
    results: [
      { id: 1, title: 'Connect like-minded travel companions' },
      {
        id: 2,
        title: 'Share and find trip plans',
      },
      { id: 3, title: 'Enhance travel safety and enjoyment' },
    ],
    link: 'https://travel-buddy-front-end.vercel.app/',
    image: travelBuddyImage,
  },
  {
    company: 'Comfy Sloth',
    year: '2022',
    title: 'Comfy Sloth',
    results: [
      { id: 1, title: 'Comfortable, modern furniture selection' },
      {
        id: 2,
        title: 'Cozy sectionals for gatherings',
      },
      { id: 3, title: 'Inviting beds for relaxation' },
    ],
    link: 'https://comfy-sloth-furnitures1.netlify.app/',
    image: comfySlothImage,
  },
];
//
export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Featured Projects"
          eyebrow="Our Work"
          description="Here are some of the projects that we and our team have completed."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, idx) => (
            // Card
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${idx * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Col 1 */}
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.id}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-full font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                {/* Col 2 */}
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
