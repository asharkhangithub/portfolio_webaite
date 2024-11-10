import React from 'react';
import Navbar from './navbar';

const Hero = () => {
  return (
    <div
    data-aos="flip-up"
    id='hero'
      className="min-h-screen bg-no-repeat bg-left lg:bg-[15%] "
      style={{ backgroundImage: "url('/potforlioimage.png')",backgroundSize:"35%" }} // Note the leading slash
    >
      <Navbar />
      <div className="container mx-auto grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[50px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[100px] font-bold leading-tight flex justify-center items-center text-center">
          <p data-aos="flip-up" className="leading-tight">I AM ASHAR KHAN</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
