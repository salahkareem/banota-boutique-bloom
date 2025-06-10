
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const Index = () => {
  const collections = [
    {
      id: 1,
      name: 'Dresses',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=500&fit=crop',
      description: 'Elegant and modest dresses for every occasion'
    },
    {
      id: 2,
      name: 'Tops',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=500&fit=crop',
      description: 'Stylish tops that blend comfort with elegance'
    },
    {
      id: 3,
      name: 'Skirts',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=500&fit=crop',
      description: 'Beautiful skirts for a feminine touch'
    },
    {
      id: 4,
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=500&fit=crop',
      description: 'Perfect accessories to complete your look'
    }
  ];

  const inspirationImages = [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-100 to-pink-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-pink-600">Banota</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover stylish and modest clothing that celebrates femininity with elegance and grace
          </p>
          <Link to="/shop">
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                to="/shop"
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-w-4 aspect-h-5">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{collection.name}</h3>
                  <p className="text-gray-600 text-sm">{collection.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram-style Inspiration Grid */}
      <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Style Inspiration
            </h2>
            <p className="text-gray-600 text-lg">
              Get inspired by our latest looks and styling ideas
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {inspirationImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Inspiration ${index + 1}`}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Heart className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay in Style
          </h2>
          <p className="text-pink-100 text-lg mb-8">
            Subscribe to our newsletter for the latest fashion updates and exclusive offers
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border-0 text-gray-800"
            />
            <Button className="bg-white text-pink-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="/lovable-uploads/d0e17f20-eeb7-44eb-af48-a9712f22f730.png" 
              alt="Banota" 
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400">
              Stylish and modest clothing for the modern woman.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Collections</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/shop" className="hover:text-white transition-colors">Dresses</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Tops</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Skirts</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Pinterest</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 Banota. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
