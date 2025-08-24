import Link from "next/link";
import Image from "next/image";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import logoImage from "@/assets/images/logo.png";

const footerLinks = [
  { title: "Facebook", href: "#" },
  { title: "Instagram", href: "https://www.instagram.com/pixelpeak_it/" },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/pixel-peak-solutions-ltd/",
  },
];

export const Footer = () => {
  return (
    <footer className='relative overflow-hidden bg-gray-900/50 text-white py-12 lg:py-16'>
      <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent -z-10'></div>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left'>
          <div className='max-w-lg'>
            <h2 className='font-serif text-3xl lg:text-4xl font-bold text-white'>
              Let&apos;s build something great together.
            </h2>
            <p className='mt-4 text-white/60'>
              Have a project in mind? We&apos;d love to hear about it.
            </p>
          </div>
          <Link
            href='/#contact'
            className='group inline-flex items-center justify-center px-8 py-4 text-gray-900 bg-white rounded-full transition-all duration-300 hover:bg-sky-100 hover:shadow-lg transform hover:-translate-y-1'>
            <span className='font-semibold text-base'>Start a Project</span>
            <ArrowUpRight className='w-5 h-5 ml-3 text-gray-900' />
          </Link>
        </div>

        <div className='mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='flex items-center gap-4'>
            <Image
              src='/logo.png'
              alt='Pixel Peak Solutions Logo'
              width={32}
              height={32}
            />
            <p className='text-sm text-white/40'>
              &copy; {new Date().getFullYear()} Pixel Peak Solutions
            </p>
          </div>
          <div className='flex items-center gap-6'>
            {footerLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                target='_blank'
                className='text-sm text-white/40 hover:text-white transition-colors'>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
