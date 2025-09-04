import { SEOHead } from "@/components/seo-head";
import { Scissors, Waves, HandHeart, Palette, Crown, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: "Haircut & Styling",
      description: "Professional haircuts, blow-dry, hair straightening, curling, and creative styling for all occasions.",
      price: "₹800 - ₹2,500",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Hair styling and cutting services",
      whatsappText: "Hi! I want to book a haircut appointment"
    },
    {
      icon: Waves,
      title: "Hair Spa",
      description: "Deep conditioning treatments, hair masks, and therapeutic spa services to restore hair health and shine.",
      price: "₹1,500 - ₹3,000",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Hair spa and treatment services",
      whatsappText: "Hi! I want to book a hair spa appointment"
    },
    {
      icon: Sparkles,
      title: "Facial Treatments",
      description: "Customized facials including deep cleansing, anti-aging, brightening, and acne treatment facials.",
      price: "₹1,200 - ₹4,000",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Facial treatment and skincare services",
      whatsappText: "Hi! I want to book a facial appointment"
    },
    {
      icon: HandHeart,
      title: "Manicure",
      description: "Complete hand care including nail shaping, cuticle care, hand massage, and long-lasting nail polish.",
      price: "₹600 - ₹1,500",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Professional manicure and nail care",
      whatsappText: "Hi! I want to book a manicure appointment"
    },
    {
      icon: HandHeart,
      title: "Pedicure",
      description: "Relaxing foot care including nail trimming, callus removal, foot massage, and beautiful nail art.",
      price: "₹800 - ₹2,000",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Professional pedicure and foot care",
      whatsappText: "Hi! I want to book a pedicure appointment"
    },
    {
      icon: Palette,
      title: "Makeup & Bridal",
      description: "Professional makeup for parties, events, and bridal occasions using premium cosmetics and techniques.",
      price: "₹2,000 - ₹8,000",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Professional makeup and bridal services",
      whatsappText: "Hi! I want to book a makeup appointment"
    }
  ];

  const packages = [
    {
      icon: Crown,
      title: "Bridal Package",
      description: "Complete bridal makeover including hair, makeup, manicure, pedicure, and facial",
      price: "₹12,000",
      originalPrice: "₹15,000",
      whatsappText: "Hi! I want to book the Bridal Package",
      featured: true
    },
    {
      icon: Sparkles,
      title: "Party Ready",
      description: "Hair styling, party makeup, and manicure for your special night out",
      price: "₹4,500",
      originalPrice: "₹5,500",
      whatsappText: "Hi! I want to book the Party Ready Package"
    },
    {
      icon: Waves,
      title: "Relaxation Spa",
      description: "Hair spa, facial, manicure, and pedicure for complete relaxation",
      price: "₹6,000",
      originalPrice: "₹7,500",
      whatsappText: "Hi! I want to book the Relaxation WavesLadder Package"
    }
  ];

  return (
    <>
      <SEOHead
        title="Beauty Services - Elegance Beauty Salon | Hair, Facial, Manicure & More"
        description="Explore our comprehensive beauty services including haircuts, facials, manicures, pedicures, and bridal makeup. Professional treatments with premium products in Ahmedabad."
        keywords="beauty services Ahmedabad, haircut, facial treatment, manicure, pedicure, bridal makeup, hair spa"
      />

      {/* Services Hero */}
      <section className="pt-16 pb-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-800 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive beauty treatments designed to enhance your natural elegance
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pt-4 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <service.icon className="text-primary text-2xl mr-3" size={24} />
                    <h3 className="text-xl font-semibold font-montserrat">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold text-lg">{service.price}</span>
                    <a
                      href={`https://wa.me/919876543210?text=${encodeURIComponent(service.whatsappText)}`}
                      className="text-primary hover:text-primary/80"
                      data-testid={`link-book-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-16 bg-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800 mb-4">
              Special Packages
            </h2>
            <p className="text-lg text-gray-600">Save more with our specially curated service combinations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-8 text-center ${
                  pkg.featured ? 'border-2 border-primary/20' : ''
                }`}
                data-testid={`card-package-${pkg.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <pkg.icon className="text-primary text-4xl mb-4 mx-auto" size={48} />
                <h3 className="text-2xl font-bold font-montserrat mb-4">{pkg.title}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <div className="text-3xl font-bold text-primary mb-4">{pkg.price}</div>
                <div className="text-gray-500 line-through mb-6">{pkg.originalPrice}</div>
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(pkg.whatsappText)}`}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
                  data-testid={`button-book-package-${pkg.title.toLowerCase().replace(/\s+/g, '-')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
