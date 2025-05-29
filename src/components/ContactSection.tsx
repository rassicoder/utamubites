import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-amber-800 text-amber-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Have questions or want to place an order? Reach out to us through any of these channels.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-amber-900/50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-amber-300">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-amber-300 mr-4 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-amber-300 mb-1">Phone</h4>
                  <p>+255 716076494</p>
                </div>
              </div>
<div className="flex items-start">
  <MessageCircle className="text-amber-300 mr-4 mt-1 flex-shrink-0" size={20} />
  <div>
    <h4 className="font-medium text-amber-300 mb-1">WhatsApp</h4>
    <a 
      href="https://wa.me/255716076494" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-amber-100 underline hover:text-amber-300"
    >
      +255 716076494
    </a>
  </div>
</div>

              
              <div className="flex items-start">
                <Mail className="text-amber-300 mr-4 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-amber-300 mb-1">Email</h4>
                  <p>hello@shukabites.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-amber-300 mr-4 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-amber-300 mb-1">Location</h4>
                  <p>Inyala ndani ndani, Kijiwe nongwa</p>
                  <p>Iyunga, Mbeya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-amber-300 mr-4 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-amber-300 mb-1">Hours</h4>
                  <p>Monday - Friday: 7am - 7pm</p>
                  <p>Saturday: 8am - 5pm</p>
                  <p>Sunday: 8am - 3pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-amber-300 mr-4 mt-1 flex-shrink-0">
                  <Instagram size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-amber-300 mb-1">Instagram</h4>
                  <p>@shukabites</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-amber-300 mr-4 mt-1 flex-shrink-0">
                  <Facebook size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-amber-300 mb-1">Facebook</h4>
                  <p>facebook.com/shukabites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;