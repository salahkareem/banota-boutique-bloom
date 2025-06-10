
import Navbar from '@/components/Navbar';
import { Heart, Award, Users, Leaf } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-pink-600" />,
      title: 'Modesty & Elegance',
      description: 'We believe that modest fashion can be both stylish and elegant, allowing women to express their personal style while maintaining their values.'
    },
    {
      icon: <Award className="h-8 w-8 text-pink-600" />,
      title: 'Quality Craftsmanship',
      description: 'Every piece in our collection is carefully crafted with attention to detail, using premium materials that ensure comfort and durability.'
    },
    {
      icon: <Users className="h-8 w-8 text-pink-600" />,
      title: 'Inclusive Community',
      description: 'We celebrate women of all backgrounds and sizes, creating fashion that makes every woman feel confident and beautiful.'
    },
    {
      icon: <Leaf className="h-8 w-8 text-pink-600" />,
      title: 'Sustainable Fashion',
      description: 'We are committed to ethical production practices and sustainable materials, caring for both our customers and our planet.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-pink-600">Banota</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Founded in 2025, Banota was born from a vision to create beautiful, modest fashion 
            that empowers women to express their unique style while honoring their values.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Banota began with a simple yet powerful idea: that modest fashion should never 
                  mean compromising on style, quality, or self-expression. Our founder, inspired 
                  by the women in her life who sought beautiful clothing that aligned with their 
                  values, set out to create a brand that would fill this gap in the fashion industry.
                </p>
                <p>
                  What started as a small collection of carefully designed pieces has grown into 
                  a brand that serves women around the world. We believe that true beauty comes 
                  from confidence, and our mission is to help every woman feel confident, 
                  comfortable, and authentically herself.
                </p>
                <p>
                  Today, Banota continues to innovate in the modest fashion space, working with 
                  talented designers and ethical manufacturers to bring you collections that are 
                  both timeless and contemporary.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop"
                alt="About Banota"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-pink-100 rounded-xl">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-pink-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-pink-100 leading-relaxed">
            To empower women worldwide with beautiful, modest fashion that celebrates individuality, 
            promotes confidence, and respects both personal values and our shared environment. 
            We believe that every woman deserves to feel beautiful, confident, and true to herself.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">
              The passionate people behind Banota
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & Creative Director',
                image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop'
              },
              {
                name: 'Emma Chen',
                role: 'Head of Design',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop'
              },
              {
                name: 'Maya Patel',
                role: 'Sustainability Director',
                image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-pink-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
