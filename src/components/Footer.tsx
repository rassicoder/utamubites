import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-amber-950 text-amber-200 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-amber-100">SHUKA-BITES</h2>
            <p className="mt-2">Delicious Andazi Bites Since 2020</p>
          </div>
        </div>
        
        <hr className="border-amber-800 my-8" />
        
        <div className="text-center">
          <p>&copy; {currentYear} SHUKA-BITES. All rights reserved.</p>
          <p className="mt-2">Done by cape-valentine</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-amber-300 hover:text-amber-100 transition-colors">Privacy Policy</a>
            <a href="#" className="text-amber-300 hover:text-amber-100 transition-colors">Terms of Service</a>
            <a href="#" className="text-amber-300 hover:text-amber-100 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;