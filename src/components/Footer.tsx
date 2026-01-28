import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <h2 className="text-3xl font-display font-bold">
                <span className="text-gold">MOJO</span>
                <span className="text-foreground"> REALTY</span>
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted partner in luxury real estate. Specializing in premium 
              apartments and residences in Hyderabad.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Properties", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-").replace(" us", "")}`}
                    className="text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-gold">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Property Sales",
                "Property Consultation",
                "Investment Advisory",
                "Legal Assistance",
                "Home Loans",
              ].map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground hover:text-gold transition-colors duration-300 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Hitech City, Madhapur<br />
                  Hyderabad, Telangana 500081
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  +91 987 654 3210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:info@mojorealty.com"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  info@mojorealty.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} MOJO REALTY. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <span className="hover:text-gold cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-gold cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
