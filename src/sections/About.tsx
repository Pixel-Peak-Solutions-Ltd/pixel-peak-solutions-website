import Image from 'next/image';
import { Card } from '@/components/Card';
import StarIcon from '@/assets/icons/star.svg';
import { SectionHeader } from '@/components/SectionHeader';
import bookImage from '@/assets/images/book-cover.png';
import mapImage from '@/assets/images/map.png';
import smileEmoji from '@/assets/images/memoji-smile.png';
import JavaScriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CSSIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GitHubIcon from '@/assets/icons/github.svg';
import { TechIcon } from '@/components/TechIcon';
import { title } from 'process';

const toolboxItems = [
  { title: 'JavaScript', iconType: JavaScriptIcon },
  { title: 'HTML5', iconType: HTMLIcon },
  { title: 'CSS3', iconType: CSSIcon },
  { title: 'React', iconType: ReactIcon },
  { title: 'Chrome', iconType: ChromeIcon },
  { title: 'GitHub', iconType: GitHubIcon },
];

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
  },
  {
    title: 'Photography',
    emoji: '📸',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
  },
  {
    title: 'Music',
    emoji: '🎸',
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♂️',
  },
  {
    title: 'Reading',
    emoji: '📚',
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Us"
          title="A Glimpse Into Our World"
          description="Learn more about who we are, what we do, and what inspire us"
        />
        {/* Cards */}
        <div className="mt-20">
          {/* 1 */}
          <Card>
            <div>
              <StarIcon />
              <h3>Our Reads</h3>
              <p>Explore the books shaping our perspective</p>
            </div>
            <Image src={bookImage} alt="Book Cover" />
          </Card>
          {/* 2 */}
          <Card>
            <div>
              <StarIcon />
              <h3>Our Toolbox</h3>
              <p>
                Explore the technologies and tools we use to craft exceptional
                digital expenses
              </p>
            </div>
            <div>
              {toolboxItems.map((item) => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          {/* Card 3 */}
          <Card>
            <div>
              <StarIcon />
              <h3>Beyond The Code</h3>
              <p>Explore our interests and hobbies beyond digital realm</p>
            </div>
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          {/* Card 4 */}
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileEmoji} alt="smiling emoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
