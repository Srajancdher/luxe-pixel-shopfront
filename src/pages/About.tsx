
const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-luxury-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Watch" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="luxury-container relative z-10 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            The journey of LuxePixel, from inception to becoming a hallmark of luxury and elegance.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="luxury-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At LuxePixel, we believe that true luxury isn't just about price—it's about the perfect blend of craftsmanship, design, and the emotions evoked when you own something truly exceptional.
            </p>
            <p className="text-gray-600 mb-4">
              Our mission is to curate the finest luxury items from around the world, bringing timeless elegance and contemporary design together in a collection that speaks to the discerning tastes of our clients.
            </p>
            <p className="text-gray-600">
              We strive to create not just a shopping experience, but a journey of discovery where each piece tells a story and becomes a cherished part of your personal narrative.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Luxury watch craftsmanship" 
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-luxury-cream py-16">
        <div className="luxury-container">
          <h2 className="text-3xl font-serif text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-luxury-gold text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Quality</h3>
              <p className="text-gray-600">
                We meticulously select each item in our collection, ensuring the highest standards of craftsmanship and materials.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-luxury-gold text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Uniqueness</h3>
              <p className="text-gray-600">
                We search the globe for distinctive pieces that stand out for their design excellence and originality.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-luxury-gold text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Innovation</h3>
              <p className="text-gray-600">
                While respecting tradition, we embrace innovation that enhances function, sustainability, and the luxury experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="luxury-container py-16">
        <h2 className="text-3xl font-serif text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Team Member" 
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-medium">Sophia Chen</h3>
            <p className="text-gray-500">Founder & Creative Director</p>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Team Member" 
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-medium">Marcus Reynolds</h3>
            <p className="text-gray-500">Product Curator</p>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Team Member" 
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-medium">Olivia Patel</h3>
            <p className="text-gray-500">Client Relations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
