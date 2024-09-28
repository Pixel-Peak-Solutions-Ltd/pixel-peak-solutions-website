'use client';
import { Card } from '@/components/Card';
import { CardHeader } from '@/components/CardHeader';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Music',
    emoji: '🎸',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♂️',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '45%',
    top: '70%',
  },
];

const BeyondTheCode = () => {
  const constrainRef = useRef(null);

  return (
    <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
      <CardHeader
        title="Beyond The Code"
        description="Explore our interests and hobbies beyond digital realm"
        className="px-6 py-6"
      />
      <div className="relative flex-1" ref={constrainRef}>
        {hobbies.map((hobby) => (
          <motion.div
            key={hobby.title}
            className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
            style={{
              left: hobby.left,
              top: hobby.top,
            }}
            drag
            dragConstraints={constrainRef}
          >
            <span className="font-medium text-gray-950">{hobby.title}</span>
            <span>{hobby.emoji}</span>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export default BeyondTheCode;
