import Image from 'next/image';
import { Card } from '@/components/Card';
import { OurCoreValues } from './OurCoreValues';
import { CardHeader } from '@/components/CardHeader';
import { SectionHeader } from '@/components/SectionHeader';
import { ToolboxItems } from '@/components/ToolboxItems';
import AndroidIcon from '@/assets/icons/android.svg';
import CSSIcon from '@/assets/icons/css3.svg';
import DartIcon from '@/assets/icons/dart.svg';
import FlutterIcon from '@/assets/icons/flutter.svg';
import GitHubIcon from '@/assets/icons/github.svg';
import IosIcon from '@/assets/icons/Ios.svg';
import KotlinIcon from '@/assets/icons/kotlin.svg';
import MongoDBIcon from '@/assets/icons/mongodb.svg';
import NextJSIcon from '@/assets/icons/nextjs.svg';
import PostgreSQLIcon from '@/assets/icons/postgresql.svg';
import NodeJSIcon from '@/assets/icons/nodejs.svg';
import ReactIcon from '@/assets/icons/react.svg';
import JavaScriptIcon from '@/assets/icons/square-js.svg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import logoImage from '@/assets/images/logo.png';
import mapImage from '@/assets/images/map.jpg';

const toolboxItems = [
  { title: 'CSS3', iconType: CSSIcon },
  { title: 'JavaScript', iconType: JavaScriptIcon },
  { title: 'React', iconType: ReactIcon },
  { title: 'NextJS', iconType: NextJSIcon },
  { title: 'NodeJS', iconType: NodeJSIcon },
  { title: 'MongoDB', iconType: MongoDBIcon },
  { title: 'PostgreSQL', iconType: PostgreSQLIcon },
  { title: 'GitHub', iconType: GitHubIcon },
  { title: 'Flutter', iconType: FlutterIcon },
  { title: 'Dart', iconType: DartIcon },
  { title: 'Kotlin', iconType: KotlinIcon },
  { title: 'Android', iconType: AndroidIcon },
  { title: 'Ios', iconType: IosIcon },
];

const services = [
  { id: 1, title: 'Web Development' },
  { id: 2, title: 'App Development' },
  { id: 3, title: 'SEO Optimization' },
  { id: 4, title: 'Software Quality Assurance' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Us"
          title="A Glimpse Into Our World"
          description="Learn more about who we are, what we do, and what inspire us"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* 1 */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Our Services"
                description="Our personalized services meet your needs"
              />
              <div className="flex flex-col items-center flex-1">
                <ul className="flex flex-col gap-7 md:gap-2">
                  {services.map((service) => (
                    <li
                      key={service.id}
                      className="flex gap-2 text-base text-white/50"
                    >
                      <CheckCircleIcon className="size-6" />
                      <span>{service.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
            {/* 2 */}
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Our Toolbox"
                description="Explore the technologies and tools we use to craft exceptional
                digital expenses"
              />
              <ToolboxItems
                items={toolboxItems}
                className="md:-m-3"
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-3 md:mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
        </div>
        <OurCoreValues />
      </div>
    </section>
  );
};
