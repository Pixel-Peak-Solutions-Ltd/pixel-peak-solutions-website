import Link from 'next/link';
import EmailIcon from '@/assets/icons/email.svg';
import grainImage from '@/assets/images/grain.jpg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

export const ContactSection = () => {
  const email = 'contact.pixelpeak.solutions@gmail.com';
  const subject = 'Inquiry from Website';
  const body = 'Hello, I would like to discuss a project...';

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <section id="contact" className="py-12 lg:py-24">
      <div className="container px-4 mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 p-6 sm:p-10 lg:p-16 text-gray-900 z-0">
          <div
            className="absolute inset-0 opacity-5 bg-cover bg-center"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />

          <div className="relative z-10 flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left mb-8 lg:mb-0 lg:max-w-xl">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how we can help you achieve your goals.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              <Link
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-full lg:w-auto px-6 py-3 text-white bg-gray-900 rounded-xl transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
              >
                <EmailIcon className="w-5 h-5 mr-2" />
                <span className="font-semibold text-sm sm:text-base">
                  Contact Us
                </span>
                <ArrowUpRightIcon className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <p className="mt-4 font-bold text-center text-gray-800 text-xs sm:text-sm">
                contact.pixelpeak.solutions@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
