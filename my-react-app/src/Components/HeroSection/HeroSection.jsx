import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import hero from '../../assets/images/hero.jpg';
import pasta from '../../assets/images/pasta.jpg';
import eat from '../../assets/images/eat.jpg';
import 'animate.css';

const HeroSection = () => {
  const slides = [
    {
      image: hero,
      title: 'Enjoy the Best Dishes',
      subtitle: 'Choose your favorite meal now',
    },
    {
      image: pasta,
      title: 'Fresh Ingredients',
      subtitle: 'Prepared with love and care',
    },
    {
      image: eat,
      title: 'Delicious Desserts',
      subtitle: 'Sweeten your day with our desserts',
    },
  ];

  return (
    <div className="relative w-full h-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen flex items-center justify-center">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>

              {/* Background Image */}
              <img
                src={slide.image}
                alt="Delicious food"
                className="w-full h-full object-cover object-center"
              />

              {/* Content */}
              <div className="absolute text-center text-white max-w-2xl px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white animate__animated animate__fadeInDown animate__delay-1s drop-shadow-2xl">
                  {slide.title}
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-5 font-medium text-gray-100 animate__animated animate__fadeInUp animate__delay-2s drop-shadow-2xl">
                  {slide.subtitle}
                </p>
                <button className="mt-8 px-8 sm:px-10 py-3 sm:py-4 bg-blue-600 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold rounded-lg hover:bg-blue-500 transition-all duration-300 animate__animated animate__fadeIn animate__delay-3s shadow-lg hover:shadow-xl">
                  Explore Menu
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;