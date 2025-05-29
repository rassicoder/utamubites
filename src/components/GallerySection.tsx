import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const initialImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/andazi1.jpg",
    alt: "Freshly baked Andazi on display"
  },
  {
    id: 2,
    src: "/images/andazi2.jpg",
    alt: "Andazi with honey drizzle"
  },
  {
    id: 3,
    src: "/images/andazi3.jpg",
    alt: "Making dough for Andazi"
  },
  {
    id: 4,
    src: "/images/andazi4.jpg",
    alt: "Serving Andazi to customers"
  },
  {
    id: 5,
    src: "/images/andazi3.jpg",
    alt: "Andazi with fruit toppings"
  },
  {
    id: 6,
    src: "/images/andazi5.jpg",
    alt: "Packaging Andazi for delivery"
  }
];

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-amber-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">
            Take a visual journey through our delicious creations
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {initialImages.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer group relative"
              onClick={() => openModal(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-medium">View Larger</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-amber-300 focus:outline-none"
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;