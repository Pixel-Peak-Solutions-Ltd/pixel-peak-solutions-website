import { SectionHeader } from '@/components/SectionHeader';
import { ValueCard } from '@/components/ValueCard';
import { CheckCircle, Sparkle, Star } from '@/components/icons';

const values = [
  {
    title: 'Innovation',
    description: 
      'We are committed to pushing the boundaries of technology and delivering innovative solutions that drive progress.',
    icon: <Sparkle className="w-6 h-6 text-gray-950" />,
  },
  {
    title: 'Quality',
    description:
      'We uphold the highest standards of quality in our work, ensuring that our clients receive reliable and robust solutions.',
    icon: <CheckCircle className="w-6 h-6 text-gray-950" />,
  },
  {
    title: 'Collaboration',
    description:
      'We believe in the power of collaboration and work closely with our clients to achieve shared success.',
    icon: <Star className="w-6 h-6 text-gray-950" />,
  },
];

export const OurCoreValues = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container px-4 mx-auto">
        <SectionHeader
          title="Our Core Values"
          description="The principles that guide our work and define our culture."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {values.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};