
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock product data - in a real app this would come from an API
  const product = {
    id: parseInt(id || '1'),
    name: 'Elegant Midi Dress',
    price: 89.99,
    description: 'This beautiful midi dress combines elegance with modesty. Made from high-quality, breathable fabric, it features a flattering silhouette that\'s perfect for both casual and formal occasions. The dress includes a modest neckline and three-quarter sleeves for comfortable coverage.',
    category: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=800&fit=crop'
    ],
    features: [
      'Premium quality fabric',
      'Modest and elegant design',
      'Comfortable fit',
      'Easy care instructions',
      'Ethically made'
    ],
    rating: 4.8,
    reviews: 124
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your preferred size before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
      }
    });

    toast({
      title: "Added to cart!",
      description: `${product.name} in size ${selectedSize} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/shop"
          className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="relative mb-4">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-96 lg:h-[600px] object-cover rounded-2xl shadow-lg"
              />
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`absolute top-4 right-4 p-3 rounded-full transition-all duration-300 ${
                  isFavorite ? 'bg-pink-600 text-white' : 'bg-white text-gray-600 hover:text-pink-600'
                }`}
              >
                <Heart className="h-5 w-5" fill={isFavorite ? 'currentColor' : 'none'} />
              </button>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative rounded-lg overflow-hidden ${
                    currentImageIndex === index ? 'ring-2 ring-pink-600' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-20 h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
                </div>
              </div>
              <p className="text-3xl font-bold text-pink-600 mb-6">
                ${product.price}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Size</h3>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-pink-600 bg-pink-600 text-white'
                        : 'border-gray-200 text-gray-700 hover:border-pink-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Add to Cart
            </Button>

            {/* Care Instructions */}
            <div className="mt-8 p-4 bg-pink-50 rounded-xl">
              <h4 className="font-semibold text-gray-800 mb-2">Care Instructions</h4>
              <p className="text-sm text-gray-600">
                Machine wash cold with like colors. Tumble dry low. Iron on low heat if needed.
                Do not bleach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
