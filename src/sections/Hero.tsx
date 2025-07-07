import Link from 'next/link';
import Image from 'next/image';
import { HeroOrbit } from '@/components/HeroOrbit';
import teamWork from '@/assets/images/team-work.gif';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';

export const HeroSection = () => {
  return (
      <section className="min-h-screen py-20 md:py-32 lg:py-40 relative z-0 overflow-x-clip flex items-center">
        {/* Background Elements - Keep Consistent */}
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
          <div
              className="absolute inset-0 -z-30 opacity-5"
              style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>

          {/* Enhanced Orbital Elements */}
          <HeroOrbit
              size={430}
              rotation={-14}
              shouldOrbit
              orbitDuration="30s"
              shouldSpin
              spinDuration="3s"
          >
            <SparkleIcon className="size-8 text-emerald-300/30" />
          </HeroOrbit>

          <HeroOrbit
              size={440}
              rotation={79}
              shouldOrbit
              orbitDuration="32s"
              shouldSpin
              spinDuration="3s"
          >
            <SparkleIcon className="size-5 text-emerald-300/30" />
          </HeroOrbit>

          <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
            <div className="size-2 rounded-full bg-emerald-300/30 shadow-lg shadow-emerald-300/50" />
          </HeroOrbit>

          <HeroOrbit
              size={530}
              rotation={178}
              shouldOrbit
              orbitDuration="36s"
              shouldSpin
              spinDuration="3s"
          >
            <SparkleIcon className="size-5 text-emerald-300/30" />
          </HeroOrbit>

          <HeroOrbit
              size={550}
              rotation={20}
              shouldOrbit
              orbitDuration="38s"
              shouldSpin
              spinDuration="6s"
          >
            <StarIcon className="size-12 text-emerald-300 drop-shadow-lg" />
          </HeroOrbit>

          <HeroOrbit
              size={590}
              rotation={98}
              shouldOrbit
              orbitDuration="40s"
              shouldSpin
              spinDuration="6s"
          >
            <StarIcon className="size-8 text-emerald-300 drop-shadow-lg" />
          </HeroOrbit>

          <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
            <div className="size-2 rounded-full bg-emerald-300/30 shadow-lg shadow-emerald-300/50" />
          </HeroOrbit>

          <HeroOrbit
              size={710}
              rotation={144}
              shouldOrbit
              orbitDuration="44s"
              shouldSpin
              spinDuration="3s"
          >
            <SparkleIcon className="size-14 text-emerald-300/30" />
          </HeroOrbit>

          <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
            <div className="size-3 rounded-full bg-emerald-300/30 shadow-lg shadow-emerald-300/50" />
          </HeroOrbit>

          <HeroOrbit
              size={800}
              rotation={-72}
              shouldOrbit
              orbitDuration="48s"
              shouldSpin
              spinDuration="6s"
          >
            <StarIcon className="size-28 text-emerald-300 drop-shadow-xl" />
          </HeroOrbit>

          {/* Additional Modern Elements */}
          <HeroOrbit size={900} rotation={30} shouldOrbit orbitDuration="50s">
            <div className="size-1 rounded-full bg-blue-400/40 shadow-lg shadow-blue-400/50" />
          </HeroOrbit>

          <HeroOrbit size={950} rotation={-120} shouldOrbit orbitDuration="52s">
            <div className="size-4 rounded-full bg-gradient-to-r from-emerald-300/20 to-blue-400/20 shadow-lg" />
          </HeroOrbit>
        </div>

        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"></div>

        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

            {/* Modern Avatar with Glassmorphism */}
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-full p-6 shadow-2xl">
                <Image
                    src={teamWork}
                    width={80}
                    height={80}
                    priority
                    className="object-cover rounded-full"
                    alt="Pixel Peak Solutions Team"
                />
              </div>
            </div>

            {/* Enhanced Status Badge */}
            <div className="mb-8 group cursor-pointer">
              <div className="backdrop-blur-md bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-emerald-400/30 px-6 py-3 inline-flex items-center gap-4 rounded-2xl shadow-xl hover:shadow-emerald-400/20 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <div className="bg-emerald-400 size-3 rounded-full shadow-lg shadow-emerald-400/50"></div>
                  <div className="bg-emerald-400/30 absolute inset-0 rounded-full animate-ping"></div>
                </div>
                <div className="text-sm font-medium text-white/90 tracking-wide">
                  🚀 Available for New Projects
                </div>
              </div>
            </div>

            {/* Modern Typography */}
            <div className="space-y-6 mb-12">
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-center tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-emerald-300 bg-clip-text text-transparent">
                Transform Ideas Into
              </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-300 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                Digital Reality
              </span>
              </h1>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                We craft powerful, high-performing applications that elevate your business.
                <span className="text-emerald-300 font-medium"> From concept to code</span>,
                your vision becomes our mission.
              </p>
            </div>

            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                  href="#projects"
                  className="group relative inline-flex items-center gap-3 backdrop-blur-sm bg-white/5 border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10 min-w-[200px]"
              >
                <span className="font-semibold text-white tracking-wide">Explore Our Work</span>
                <ArrowDown className="size-5 group-hover:translate-y-1 transition-transform duration-300" />
              </Link>

              <Link
                  href="#contact"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-400 to-blue-500 hover:from-emerald-500 hover:to-blue-600 text-black px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/30 min-w-[200px] font-semibold tracking-wide"
              >
                <span className="text-2xl">🤝</span>
                <span>Let's Build Together</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/40 text-sm">
              <div className="flex items-center gap-2">
                <StarIcon className="size-4 text-emerald-400" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1 rounded-full bg-white/40"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1 rounded-full bg-white/40"></div>
                <span>On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-1 rounded-full bg-white/40"></div>
                <span>100+ Projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements for Visual Interest */}
        <div className="absolute bottom-10 left-10 opacity-30">
          <div className="w-px h-20 bg-gradient-to-b from-emerald-400 to-transparent"></div>
        </div>
        <div className="absolute bottom-10 right-10 opacity-30">
          <div className="w-px h-20 bg-gradient-to-b from-blue-400 to-transparent"></div>
        </div>
      </section>
  );
};