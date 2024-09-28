import grainImage from '@/assets/images/grain.jpg';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const Card = ({
  className,
  children,
  ...others
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl z-0 overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:rounded-3xl after:z-10 after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:pointer-events-none",
        className
      )}
      {...others}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};
