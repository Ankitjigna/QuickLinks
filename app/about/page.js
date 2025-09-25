
import React from 'react';

const About = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          About QuickLinks
        </h1>
        <div className="w-full md:w-4/5 lg:w-3/5 mx-auto">
          <p className="leading-relaxed text-lg mb-6">
            QuickLinks is a fast, simple, and reliable URL shortening service designed to make sharing links easier than ever.
            Our platform transforms long, cumbersome URLs into short, memorable links that you can easily share on social media,
            emails, or messaging apps.
          </p>
          <p className="leading-relaxed text-lg mb-6">
            How it works: Just paste your long URL into QuickLinks, and instantly receive a shorter link that redirects directly to the original URL.
            This not only improves link appearance but also helps track usage and manage your online presence more effectively.
          </p>
          <p className="leading-relaxed text-lg mb-6">
            Founded with a commitment to user-friendly design and cutting-edge technology, QuickLinks empowers individuals and businesses to share smarter and more efficiently.
            Whether for personal use, marketing campaigns, or professional communications, QuickLinks makes your links work better for you.
          </p>
          <p className="leading-relaxed text-lg">
            Thank you for choosing QuickLinks! We’re excited to help you simplify your online sharing experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

