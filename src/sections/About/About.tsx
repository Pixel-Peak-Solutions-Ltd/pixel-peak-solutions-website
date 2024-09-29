import AndroidIcon from '@/assets/icons/android.svg';
import CSSIcon from '@/assets/icons/css3.svg';
import DartIcon from '@/assets/icons/dart.svg';
import FlutterIcon from '@/assets/icons/flutter.svg';
import GitHubIcon from '@/assets/icons/github.svg';
import IosIcon from '@/assets/icons/ios.svg';
import KotlinIcon from '@/assets/icons/kotlin.svg';
import MongoDBIcon from '@/assets/icons/mongodb.svg';
import NextJSIcon from '@/assets/icons/nextjs.svg';
import NodeJSIcon from '@/assets/icons/nodejs.svg';
import ReactIcon from '@/assets/icons/react.svg';
import JavaScriptIcon from '@/assets/icons/square-js.svg';
import bookImage from '@/assets/images/book-cover.png';
import logoImage from '@/assets/images/logo.png';
import mapImage from '@/assets/images/map.jpg';
import { Card } from '@/components/Card';
import { CardHeader } from '@/components/CardHeader';
import { SectionHeader } from '@/components/SectionHeader';
import { ToolboxItems } from '@/components/ToolboxItems';
import Image from 'next/image';
import BeyondTheCode from './BeyondTheCode';

const toolboxItems = [
  { title: 'CSS3', iconType: CSSIcon },
  { title: 'JavaScript', iconType: JavaScriptIcon },
  { title: 'React', iconType: ReactIcon },
  { title: 'NextJS', iconType: NextJSIcon },
  { title: 'NodeJS', iconType: NodeJSIcon },
  { title: 'MongoDB', iconType: MongoDBIcon },
  { title: 'GitHub', iconType: GitHubIcon },
  { title: 'Flutter', iconType: FlutterIcon },
  { title: 'Dart', iconType: DartIcon },
  { title: 'Kotlin', iconType: KotlinIcon },
  { title: 'Android', iconType: AndroidIcon },
  { title: 'Ios', iconType: IosIcon },
];

export const AboutSection = () => {
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Us"
          title="A Glimpse Into Our World"
          description="Learn more about who we are, what we do, and what inspire us"
        />
        {/* Cards */}
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* 1 */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Our Reads"
                description="Explore the books shaping our perspective"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
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

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            {/* Card 3 */}
            <BeyondTheCode />
            {/* Card 4 */}
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={logoImage}
                  alt="smiling emoji"
                  className="size-15"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
