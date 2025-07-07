import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';
import { Sparkle, Star, CheckCircle } from '@/components/icons';

const commitments = [
  {
    icon: Sparkle,
    title: 'Innovative Solutions',
    text: 'We are dedicated to crafting innovative solutions that push the boundaries of technology and design. Our goal is to deliver products that are not only functional but also inspiring.',
  },
  {
    icon: Star,
    title: 'Commitment to Quality',
    text: 'Quality is at the heart of everything we do. From the initial concept to the final product, we maintain the highest standards to ensure that our work is flawless and built to last.',
  },
  {
    icon: CheckCircle,
    title: 'Client-Centric Approach',
    text: 'We believe in building strong partnerships with our clients. Your vision is our guide, and we are committed to working collaboratively to bring your ideas to life.',
  },
];

export const OurCommitmentSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Our Values"
          title="Our Commitment to Excellence"
          description="We are passionate about building exceptional products and fostering strong client relationships."
        />

        <div className="mt-12 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commitments.map((commitment) => (
            <Card
              key={commitment.title}
              className="p-6 md:p-8 hover:-rotate-3 transition duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <commitment.icon className="size-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">{commitment.title}</h3>
              </div>
              <p className="mt-4 md:mt-6 text-sm md:text-base">
                {commitment.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};