
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Dresses', 'Tops', 'Skirts', 'Accessories'];

  const products = [
    {
      id: 1,
      name: 'Elegant Midi Dress',
      price: 89.99,
      category: 'Dresses',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop'
    },
    {
      id: 2,
      name: 'Casual Blouse',
      price: 45.99,
      category: 'Tops',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop'
    },
    {
      id: 3,
      name: 'Flowy Maxi Skirt',
      price: 65.99,
      category: 'Skirts',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=500&fit=crop'
    },
    {
      id: 4,
      name: 'Delicate Scarf',
      price: 25.99,
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=500&fit=crop'
    },
    {
      id: 5,
      name: 'Summer Dress',
      price: 75.99,
      category: 'Dresses',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=500&fit=crop'
    },
    {
      id: 6,
      name: 'Modest Top',
      price: 39.99,
      category: 'Tops',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop'
    },
    {
      id: 7,
      name: 'A-Line Skirt',
      price: 55.99,
      category: 'Skirts',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop'
    },
    {
      id: 8,
      name: 'Statement Necklace',
      price: 35.99,
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=500&fit=crop'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Shop Collection
          </h1>
          <p className="text-gray-600 text-lg">
            Discover our carefully curated selection of modest and stylish clothing
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-pink-600 hover:bg-pink-700 text-white'
                  : 'border-pink-200 text-pink-600 hover:bg-pink-50'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1">
                  <span className="text-pink-600 font-semibold text-sm">{product.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-pink-600">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
