
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your server
    console.log("Form submitted:", formState);
    setFormSubmitted(true);
    // Reset form after submission
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-luxury-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Office" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="luxury-container relative z-10 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            We're here to assist you with any inquiries about our luxury collections.
          </p>
        </div>
      </div>

      {/* Contact Information & Form */}
      <div className="luxury-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif mb-8">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-luxury-cream rounded-full flex items-center justify-center mr-4">
                  <MapPin size={20} className="text-luxury-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    123 Luxury Lane, Prestige Heights<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-luxury-cream rounded-full flex items-center justify-center mr-4">
                  <Mail size={20} className="text-luxury-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email Us</h3>
                  <p className="text-gray-600">
                    info@luxepixel.com<br />
                    support@luxepixel.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-luxury-cream rounded-full flex items-center justify-center mr-4">
                  <Phone size={20} className="text-luxury-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Call Us</h3>
                  <p className="text-gray-600">
                    +1 (555) 123-4567<br />
                    Mon-Fri, 9am-6pm EST
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-lg font-medium mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif mb-8">Send Us a Message</h2>
            
            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded">
                <h3 className="text-lg font-medium mb-2">Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-luxury-gold"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-luxury-gold text-white py-3 font-medium hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="h-[400px] w-full bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500 text-lg">
            Interactive map would be displayed here in a production environment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
