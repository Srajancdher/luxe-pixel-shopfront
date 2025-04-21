
const NewsletterSection = () => {
  return (
    <section className="bg-luxury-black text-white py-16">
      <div className="luxury-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Join Our Exclusive Circle</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to receive updates on new collections, limited editions, and special offers reserved for our members.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 bg-luxury-charcoal focus:outline-none sm:rounded-l"
            />
            <button className="bg-luxury-gold text-luxury-black font-medium px-6 py-3 mt-2 sm:mt-0 transition-colors hover:bg-opacity-90 sm:rounded-r">
              Subscribe
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
