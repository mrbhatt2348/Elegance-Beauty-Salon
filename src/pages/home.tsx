import { SEOHead } from "@/components/seo-head";
import { Link } from "wouter";
import { Scissors, Waves, HandHeart } from "lucide-react";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Elegance Beauty Salon - Premium Women's Salon in Ahmedabad"
        description="Elegance Beauty Salon offers premium beauty services for women in Ahmedabad. Expert haircuts, facials, manicures, pedicures, and bridal makeup. Book your appointment today!"
        keywords="women's salon Ahmedabad, beauty salon, bridal makeup, haircut, facial, manicure, pedicure, hair spa"
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 leading-tight">
            Look Elegant, <br className="md:hidden" />Feel Beautiful
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Experience premium beauty services designed exclusively for women
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi! I would like to book an appointment at Elegance Beauty Salon"
            data-testid="button-hero-whatsapp"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="inline w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.486"/>
            </svg>
            Book Appointment on WhatsApp
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="pt-8 pb-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800 mb-8">
              Welcome to Elegance Beauty Salon
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Elegance Beauty Salon, we believe every woman deserves to feel beautiful and confident. Our expert team provides personalized beauty treatments in a luxurious, welcoming environment. From professional haircuts to relaxing spa treatments, we're dedicated to enhancing your natural beauty with the highest quality services and products.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="pt-4 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800 mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-gray-600">Discover our most popular beauty treatments</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hair Services */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Hair styling service"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Scissors className="text-primary text-2xl mr-3" size={24} />
                  <h3 className="text-xl font-semibold font-montserrat">Hair Services</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Professional cuts, styling, and hair spa treatments to keep your hair healthy and gorgeous.
                </p>
                <span className="text-primary font-semibold">Starting from ₹800</span>
              </div>
            </div>

            {/* Facial Treatments */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Facial treatment service"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Waves className="text-primary text-2xl mr-3" size={24} />
                  <h3 className="text-xl font-semibold font-montserrat">Facial Treatments</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Rejuvenating facials using premium products to give you glowing, radiant skin.
                </p>
                <span className="text-primary font-semibold">Starting from ₹1,200</span>
              </div>
            </div>

            {/* Nail Services */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Manicure and nail services"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <HandHeart className="text-primary text-2xl mr-3" size={24} />
                  <h3 className="text-xl font-semibold font-montserrat">Nail Services</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Complete manicure and pedicure services with beautiful nail art and long-lasting polish.
                </p>
                <span className="text-primary font-semibold">Starting from ₹600</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your appointment today and experience the Elegance difference
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi! I would like to book an appointment at Elegance Beauty Salon"
            data-testid="button-cta-whatsapp"
            className="inline-block bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="inline w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.486"/>
            </svg>
            Book Now on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
