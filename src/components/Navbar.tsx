import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-amber-950/95 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-amber-100">SHUKA-BITES</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-amber-100 hover:text-amber-300 transition-colors">Home</a>
            <a href="#about" className="text-amber-100 hover:text-amber-300 transition-colors">About</a>
            <a href="#products" className="text-amber-100 hover:text-amber-300 transition-colors">Products</a>
            <a href="#gallery" className="text-amber-100 hover:text-amber-300 transition-colors">Gallery</a>
            <a href="#contact" className="text-amber-100 hover:text-amber-300 transition-colors">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-amber-100 hover:text-amber-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-3 px-2">
              <a 
                href="#home" 
                className="text-amber-100 hover:text-amber-300 transition-colors px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-amber-100 hover:text-amber-300 transition-colors px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#products" 
                className="text-amber-100 hover:text-amber-300 transition-colors px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                Products
              </a>
              <a 
                href="#gallery" 
                className="text-amber-100 hover:text-amber-300 transition-colors px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                className="text-amber-100 hover:text-amber-300 transition-colors px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;