
const testimonials = [
  {
    id: 1,
    name: "Alexandra Reynolds",
    title: "Fashion Designer",
    quote: "The quality of craftsmanship in every piece I've purchased from LuxePixel has been exceptional. Their attention to detail is unmatched.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
  },
  {
    id: 2,
    name: "Jonathan Chen",
    title: "Executive Director",
    quote: "LuxePixel's collection of watches has impressed even my most discerning colleagues. Their pieces are both sophisticated and conversation starters.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
  },
  {
    id: 3,
    name: "Sophia Williams",
    title: "Art Curator",
    quote: "I appreciate how each accessory from LuxePixel tells a story. These aren't just products; they're wearable art pieces that elevate any outfit.",
    avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
  }
];

const TestimonialSection = () => {
  return (
    <section className="bg-luxury-cream py-16">
      <div className="luxury-container">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-2">Client Experiences</h2>
        <p className="text-center text-gray-500 mb-12">Discover what our customers have to say</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
