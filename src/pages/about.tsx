import { SEOHead } from "@/components/seo-head";
import { Award, Shield, Star, Heart } from "lucide-react";

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us - Elegance Beauty Salon | Premier Women's Salon in Ahmedabad"
        description="Learn about Elegance Beauty Salon's story, our expert team, and why we're Ahmedabad's most trusted women's beauty salon. 8+ years of excellence in beauty services."
        keywords="about elegance beauty salon, women's salon Ahmedabad, beauty salon story, professional beauticians Ahmedabad"
      />

      {/* About Hero */}
      <section className="pt-16 pb-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-800 mb-6">
              About Elegance Beauty Salon
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the story behind Ahmedabad's premier women's beauty destination
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="pt-4 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-montserrat text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2015 by renowned beauty expert Priya Sharma, Elegance Beauty Salon has been serving the women of Ahmedabad with exceptional beauty services for over 8 years. What started as a dream to create a sanctuary where women could feel pampered and beautiful has grown into the city's most trusted beauty destination.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our philosophy is simple: every woman deserves to feel confident and beautiful. We combine traditional beauty wisdom with modern techniques, using only the finest products and latest equipment to deliver results that exceed expectations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a team of certified professionals and over 5,000 satisfied clients, we've built our reputation on trust, quality, and personalized service. At Elegance, you're not just a client – you're part of our beauty family.
              </p>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Salon owner Priya Sharma"
                className="rounded-2xl shadow-lg w-full"
                data-testid="img-salon-owner"
              />
              <img
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Salon interior"
                className="rounded-2xl shadow-lg w-full"
                data-testid="img-salon-interior"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800 mb-4">
              Why Women Trust Elegance
            </h2>
            <p className="text-lg text-gray-600">What makes us Ahmedabad's preferred beauty salon</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
              <Award className="text-primary text-4xl mb-4 mx-auto" size={48} />
              <h3 className="text-xl font-semibold font-montserrat mb-3">Certified Experts</h3>
              <p className="text-gray-600">All our beauticians are certified professionals with years of experience</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
              <Shield className="text-primary text-4xl mb-4 mx-auto" size={48} />
              <h3 className="text-xl font-semibold font-montserrat mb-3">100% Hygienic</h3>
              <p className="text-gray-600">We maintain the highest standards of cleanliness and sterilization</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
              <Star className="text-primary text-4xl mb-4 mx-auto" size={48} />
              <h3 className="text-xl font-semibold font-montserrat mb-3">Premium Products</h3>
              <p className="text-gray-600">We use only authentic, high-quality beauty products and equipment</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
              <Heart className="text-primary text-4xl mb-4 mx-auto" size={48} />
              <h3 className="text-xl font-semibold font-montserrat mb-3">Women-Focused</h3>
              <p className="text-gray-600">A comfortable, safe space designed exclusively for women's beauty needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2" data-testid="stat-years">8+</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2" data-testid="stat-clients">5000+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2" data-testid="stat-beauticians">15+</div>
              <div className="text-gray-600 font-medium">Expert Beauticians</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2" data-testid="stat-services">20+</div>
              <div className="text-gray-600 font-medium">Beauty Services</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
