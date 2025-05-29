import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  popular: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Classic Andazi",
    description: "Our traditional recipe with a hint of cardamom and coconut milk. Light, fluffy and slightly sweet.",
    image: "/images/andazi2.jpg",
    price: "Tsh 200",
    popular: true
  },
  {
    id: 2,
    name: "Spiced Andazi",
    description: "Infused with cinnamon, cloves and nutmeg for a warming, aromatic twist on the classic.",
    image: "/images/andazi3.jpg",
    price: "Tsh 200",
    popular: false
  },
  {
    id: 3,
    name: "Chocolate Andazi",
    description: "A modern take with rich cocoa and chocolate chips folded into our traditional dough.",
    image: "/images/andazi4.jpg",
    price: "Tsh 200",
    popular: true
  },
  {
    id: 4,
    name: "Coconut Andazi",
    description: "Extra coconut flavor with toasted coconut flakes for added texture and tropical taste.",
    image: "/images/andazi5.jpg",
    price: "Tsh 200",
    popular: false
  }
];

const ProductSection: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">
            Explore our variety of handcrafted Andazi bites, made fresh daily with quality ingredients
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-amber-50 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover"
                />
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-amber-600 text-white text-sm font-medium py-1 px-3 rounded-full">
                    Popular
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{product.name}</h3>
                <p className="text-amber-700 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">{product.price}</span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded transition-colors duration-300">
                    NI UTAMU 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;