import Link from 'next/link';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  { title: 'Facebook', href: '#' },
  { title: 'Instagram', href: 'https://www.instagram.com/pixelpeak_it/' },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/company/pixel-peak-solutions-ltd/',
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-12 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Pixel Peak Solutions */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white font-extrabold text-lg mb-4">
                Pixel Peak Solutions
              </h3>
              <p className="text-white/40 text-center md:text-left">
                Innovative digital solutions for your business needs.
              </p>
            </div>
            {/* Quick Links */}
            <nav className="flex flex-col items-center md:items-center">
              <h3 className="text-white font-extrabold text-lg mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-white/40 hover:text-white transition-colors"
                    >
                      <span className="font-semibold">{link.title}</span>
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Contact Us */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white font-extrabold text-lg mb-4">
                Contact Us
              </h3>
              <div className="text-white/40">
                <p>Contact Us Now: [+88] 01761264426</p>
              </div>
            </div>
          </div>
          <div className="text-center text-white/40 pt-8 border-t border-white/15">
            &copy; {new Date().getFullYear()} All rights reserved by{' '}
            <span className="font-extrabold">Pixel Peak Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
