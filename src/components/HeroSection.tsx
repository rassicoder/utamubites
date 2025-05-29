import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1435894/pexels-photo-1435894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <div className="absolute inset-0 bg-amber-950/60"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-100 mb-6 leading-tight">
            <span className="block">Delicious</span>
            <span className="block mt-2 text-amber-300">ANDAZI BITES</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8">
            Handcrafted with love, every bite tells a story of tradition and taste.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#products" 
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 text-lg"
            >
              Explore Our Products
            </a>
            <a 
              href="#contact" 
              className="bg-transparent hover:bg-amber-100/10 text-amber-100 font-medium py-3 px-6 rounded-full border-2 border-amber-100 transition-colors duration-300 text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-amber-100 flex justify-center">
          <div className="w-1 h-3 bg-amber-100 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;