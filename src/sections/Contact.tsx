'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
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

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-4 font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-200 disabled:bg-gray-400 transition-all duration-300 flex items-center justify-center"
                >
                  {status === 'loading' && (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            {status === 'success' && (
              <div className="mt-4 text-green-500 flex items-center">
                <CheckCircleIcon className="w-5 h-5 mr-2" />
                <p>Message sent successfully! We&apos;ll be in touch soon.</p>
              </div>
            )}
            {status === 'error' && (
              <div className="mt-4 text-red-500">
                <p>
                  Something went wrong. Please try again or email us directly.
                </p>
              </div>
            )}
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