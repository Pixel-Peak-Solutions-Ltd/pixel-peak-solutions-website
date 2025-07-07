'use client';

import { useState } from 'react';
import Link from 'next/link';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const recipientEmail = 'contact.pixelpeak.solutions@gmail.com';

  const createGmailUrl = () => {
    const to = recipientEmail;
    const subject = encodeURIComponent(`${name} needs a quotation`);
    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name} <${email}>`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
  };

  const calendlyUrl = 'https://calendly.com/pixel-peak-solutions/consultation'; // Placeholder

  return (
    <section id="contact" className="py-16 lg:py-24 relative">
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contact Form */}
          <div className="bg-white/5 rounded-2xl p-8 lg:p-12 border border-white/10">
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Send us a Message
            </h2>
            <p className="text-base text-white/60 mt-3">
              Have a question or a project in mind? Drop us a line.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors text-white"
                />
              </div>
              <div>
                <a
                  href={createGmailUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-8 py-4 font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center"
                >
                  Send Message via Gmail
                </a>
              </div>
            </div>
          </div>

          {/* Consultation Section */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <SparkleIcon className="w-12 h-12 text-yellow-400 mb-4" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              Schedule a Consultation
            </h2>
            <p className="text-lg text-white/60 mt-4 max-w-md mx-auto lg:mx-0">
              Have a bigger project in mind or need expert advice? Schedule a
              free 30-minute consultation with our team to discuss your project
              in detail.
            </p>
            <Link
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center mt-8 px-8 py-4 text-white bg-sky-500 rounded-xl transition-all duration-300 hover:bg-sky-600 hover:shadow-lg transform hover:-translate-y-1"
            >
              <span className="font-semibold text-base">
                Book Your Free Call
              </span>
              <ArrowUpRightIcon className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};