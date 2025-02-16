import React from 'react';
import hero from '../../assets/images/hero.jpg';
import pasta from '../../assets/images/pasta.jpg';
import eat from '../../assets/images/eat.jpg';

const Gallery = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Left Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                alt="gallery"
                className="w-full h-48 sm:h-64 md:h-56 lg:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                src={pasta}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                alt="gallery"
                className="w-full h-48 sm:h-64 md:h-56 lg:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                src={eat}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="col-span-1 sm:col-span-2 relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                alt="gallery"
                className="w-full h-48 sm:h-64 md:h-56 lg:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                src={hero}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="col-span-1 sm:col-span-2 relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                alt="gallery"
                className="w-full h-48 sm:h-64 md:h-56 lg:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                src={pasta}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                alt="gallery"
                className="w-full h-48 sm:h-64 md:h-56 lg:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                src={eat}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                alt="gallery"
                className="w-full h-48 sm:h-64 md:h-56 lg:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                src={hero}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;