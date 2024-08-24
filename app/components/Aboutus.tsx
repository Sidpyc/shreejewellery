import React from 'react';

function Aboutus() {
  const message = `
    At Shree Ji Jewellery, every piece we make is tailored exactly to your customized needs. 
    Our fully in-house team ensures top quality and timeless charm in each creation.
    \nFor 25 years, our craftsmanship has built a legacy of trust, turning stories into eye-catching jewels.
    \nWe have had the opportunity to work with numerous clients, helping them grow through our creations.
    \nThank you for being a part of our journey.`;

  return (
    <section id='about' className='py-12 md:py-16 bg-[#F8F4EF]'>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="row flex flex-col md:flex-row items-center -mx-4">
          {/* Left Section - Text */}
          <div className='md:w-1/2 text-center md:text-left px-4'>
            <blockquote className="text-4xl md:text-5xl text-[#8B734D] font-serif leading-relaxed mb-8">
              "Our ability to embrace change, innovation, and tradition"
            </blockquote>
            <p className="text-lg lg:text-xl text-[#454545] leading-relaxed whitespace-pre-line mb-6">
              {message}
            </p>
            <a href="#carouselthree" className="inline-block bg-[#3F4020] text-white px-5 py-3 rounded-lg font-semibold text-lg transition hover:bg-[#8B734D]">
              View Jewels
            </a>
          </div>
          
          {/* Right Section - Image */}
          <div className='md:w-1/2 mt-8 md:mt-0 px-4'>
            <div className="text-center p-6 w-full rounded-lg">
              <img src="./images/director.png" className='w-full max-w-[320px] mx-auto rounded-lg shadow-lg' alt="Vinay Agarwal" />
              <h3 className="mt-5 text-[#454545] text-lg font-bold uppercase">Vinay Agarwal</h3>
              <p className="text-[#8B734D] italic">Director</p>
              <div className="w-[50px] h-[3px] bg-[#8B734D] mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
