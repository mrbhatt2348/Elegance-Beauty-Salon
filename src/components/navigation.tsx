import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold font-montserrat text-primary cursor-pointer">
                Elegance Beauty Salon
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    data-testid={`nav-link-${item.name.toLowerCase()}`}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-primary font-semibold"
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
              <a
                href="https://wa.me/919876543210?text=Hi! I would like to book an appointment at Elegance Beauty Salon"
                data-testid="button-book-header"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              className="text-gray-700 hover:text-primary"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  data-testid={`nav-link-mobile-${item.name.toLowerCase()}`}
                  className={`block px-3 py-2 text-base font-medium ${
                    isActive(item.path)
                      ? "text-primary font-semibold"
                      : "text-gray-700 hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <a
              href="https://wa.me/919876543210?text=Hi! I would like to book an appointment at Elegance Beauty Salon"
              data-testid="button-book-mobile"
              className="block bg-primary text-primary-foreground px-3 py-2 text-base font-medium rounded-lg mx-3 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
