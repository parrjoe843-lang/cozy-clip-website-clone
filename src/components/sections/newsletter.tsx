'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';

// Using functional components for the SVG shapes for clarity and reusability.
// These shapes create the wavy border effect against the white background of adjacent sections.
const WavyShapeTop = () => (
  <svg className="w-full text-background" viewBox="0 0 1440 112" fill="currentColor" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1440 112V0S1194.5 111.5 738 111.5 0 0 0 0v112h1440Z" />
  </svg>
);

const WavyShapeBottom = () => (
  <svg className="w-full text-background" viewBox="0 0 1440 112" fill="currentColor" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0V112S245.5 .5 702 .5 1440 112 1440 112V0H0Z" />
  </svg>
);

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Successfully subscribed to our newsletter!');
        setEmail(''); // Clear the input
      } else {
        // Handle specific error codes
        if (data.code === 'DUPLICATE_EMAIL') {
          toast.error('This email is already subscribed');
        } else if (data.code === 'INVALID_EMAIL_FORMAT') {
          toast.error('Please enter a valid email address');
        } else {
          toast.error(data.error || 'Failed to subscribe. Please try again.');
        }
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F9F6F4]">
      {/* Top wavy decoration. Uses `text-background` which defaults to white, contrasting with the section's cream color. */}
      <div className="absolute -top-px w-full">
        <WavyShapeTop />
      </div>
      
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-[28px] lg:text-[36px] font-semibold text-brand-text-dark">
            Join the Comfort Movement!
          </h2>
          <p className="font-body text-lg mt-5 mx-auto text-brand-text-dark" style={{ maxWidth: '40ch' }}>
            We're redefining claw clips together. Join our newsletter to be the first to get exclusive updates and offers!
          </p>
          <div className="relative z-10 mt-10 max-w-[600px] mx-auto">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="flex">
                <div className="flex-grow">
                  <label htmlFor="newsletter-email" className="sr-only">Email</label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    className="w-full h-[57px] px-5 bg-white border border-brand-border-light rounded-l-md rounded-r-none placeholder:text-brand-text-medium focus:ring-ring focus:border-ring focus:outline-none text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center justify-center h-[57px] px-8 bg-brand-dusty-rose text-brand-text-dark font-display text-sm font-semibold uppercase tracking-wider rounded-r-md rounded-l-none border border-transparent shadow-[0px_4px_0px_rgba(0,0,0,0.15)] transition-all duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-[0px_6px_0px_rgba(0,0,0,0.15)] active:translate-y-0 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0px_4px_0px_rgba(0,0,0,0.15)]"
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom wavy decoration */}
      <div className="absolute -bottom-px w-full">
        <WavyShapeBottom />
      </div>
    </section>
  );
};

export default NewsletterSection;