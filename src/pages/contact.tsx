import { SEOHead } from "@/components/seo-head";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const faqs = [
    {
      question: "Do I need to book in advance?",
      answer: "We recommend booking in advance, especially for weekend appointments and special services like bridal makeup. You can book easily via WhatsApp."
    },
    {
      question: "What products do you use?",
      answer: "We use only premium, authentic beauty products from trusted brands like L'Oréal, Schwarzkopf, and other professional-grade cosmetics."
    },
    {
      question: "Are your services safe for sensitive skin?",
      answer: "Yes, we offer patch tests for sensitive skin and use hypoallergenic products. Please inform us about any allergies when booking."
    },
    {
      question: "Do you offer home services?",
      answer: "Yes, we provide premium home services for bridal makeup and special occasions. Contact us via WhatsApp for more details and pricing."
    }
  ];

  return (
    <>
      <SEOHead
        title="Contact Us - Elegance Beauty Salon | Book Appointment in Ahmedabad"
        description="Contact Elegance Beauty Salon in Ahmedabad. Book appointments via WhatsApp, get directions, and find our contact details. Located in Navrangpura with convenient hours."
        keywords="contact elegance beauty salon, book appointment Ahmedabad, beauty salon location, WhatsApp booking"
      />

      {/* Contact Hero */}
      <section className="pt-16 pb-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-800 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch to book your appointment or ask any questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pt-4 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-montserrat text-gray-800 mb-8">Get In Touch</h2>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start" data-testid="contact-address">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <MapPin className="text-primary text-xl" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-montserrat mb-2">Visit Our Salon</h3>
                      <p className="text-gray-600">
                        123 Beauty Street, Navrangpura,<br />
                        Ahmedabad, Gujarat 380009
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start" data-testid="contact-phone">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Phone className="text-primary text-xl" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-montserrat mb-2">Call Us</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-gray-600">+91 79 2656 1234</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start" data-testid="contact-whatsapp">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <MessageCircle className="text-primary text-xl" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-montserrat mb-2">WhatsApp</h3>
                      <a
                        href="https://wa.me/919876543210"
                        className="text-primary hover:text-primary/80"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +91 98765 43210
                      </a>
                      <p className="text-gray-600 text-sm">Quick appointments & queries</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start" data-testid="contact-hours">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Clock className="text-primary text-xl" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-montserrat mb-2">Opening Hours</h3>
                      <p className="text-gray-600">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Sunday: 11:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <a
                  href="https://wa.me/919876543210?text=Hi! I would like to book an appointment at Elegance Beauty Salon"
                  data-testid="button-whatsapp-contact"
                  className="block bg-primary text-primary-foreground px-6 py-4 rounded-lg text-center font-semibold hover:bg-primary/90 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="inline w-5 h-5 mr-2" />
                  Book Appointment on WhatsApp
                </a>
                <a
                  href="tel:+919876543210"
                  data-testid="button-call-contact"
                  className="block bg-secondary text-secondary-foreground px-6 py-4 rounded-lg text-center font-semibold hover:bg-secondary/90 transition-colors duration-200"
                >
                  <Phone className="inline w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8939626927944!2d72.5616447!3d23.0324926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Elegance Beauty Salon Location"
                  data-testid="map-location"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold font-montserrat mb-2">Find Us Easily</h3>
                <p className="text-gray-600">
                  Located in the heart of Navrangpura, easily accessible by public transport and with parking available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">Common questions about our services and policies</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
                data-testid={`faq-${index + 1}`}
              >
                <h3 className="text-xl font-semibold font-montserrat mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
