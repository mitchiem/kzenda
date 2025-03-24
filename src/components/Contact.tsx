
import React, { useEffect, useRef } from 'react';
import { Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      formRef.current.classList.add('smooth-reveal');
      observer.observe(formRef.current);
    }

    if (infoRef.current) {
      infoRef.current.classList.add('smooth-reveal');
      observer.observe(infoRef.current);
    }

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
      if (infoRef.current) observer.unobserve(infoRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be connected to a form handling service in a real application
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <section id="contact" className="section-spacing bg-earth-100/50" ref={contactRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4 inline-block px-3 py-1 bg-savanna-500/10 rounded-full">
            <span className="text-xs font-medium uppercase tracking-wider text-savanna-800">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">Contact the Artist</h2>
          <p className="text-earth-700 max-w-2xl mx-auto">
            Interested in commissions, exhibitions, or have questions about the artwork? Reach out directly to Keith Zenda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form 
            ref={formRef} 
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-6 shadow-sm"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-earth-800 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 rounded-md border border-earth-200 focus:ring-2 focus:ring-terracotta-500/30 focus:border-terracotta-500 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-earth-800 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 rounded-md border border-earth-200 focus:ring-2 focus:ring-terracotta-500/30 focus:border-terracotta-500 outline-none transition-all"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-earth-800 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 rounded-md border border-earth-200 focus:ring-2 focus:ring-terracotta-500/30 focus:border-terracotta-500 outline-none transition-all"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-earth-800 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full px-4 py-2 rounded-md border border-earth-200 focus:ring-2 focus:ring-terracotta-500/30 focus:border-terracotta-500 outline-none transition-all"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-terracotta-600 text-white font-medium rounded-md 
                transition-all hover:bg-terracotta-700 inline-flex items-center justify-center"
            >
              Send Message
            </button>
          </form>

          <div 
            ref={infoRef}
            className="bg-white rounded-lg p-6 shadow-sm h-fit"
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-xl font-medium font-serif text-earth-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-terracotta-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-earth-900 mb-1">Studio Location</h4>
                  <p className="text-earth-700">23 Mbare Arts Center, Harare, Zimbabwe</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-terracotta-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-earth-900 mb-1">Email</h4>
                  <p className="text-earth-700">inquiries@kzenda.art</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-earth-100">
                <h4 className="font-medium text-earth-900 mb-4">Follow on Social Media</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 rounded-full bg-earth-100 text-terracotta-600 hover:bg-terracotta-600 hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-3 rounded-full bg-earth-100 text-terracotta-600 hover:bg-terracotta-600 hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
