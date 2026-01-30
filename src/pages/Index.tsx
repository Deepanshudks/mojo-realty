import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Users,
  Award,
  HandshakeIcon,
  ChevronRight,
  TrendingUp,
  Scale,
} from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";
import luxuryInterior from "@/assets/luxury-interior.jpg";
import PropertyCard from "@/components/PropertyCard";
import SectionTitle from "@/components/SectionTitle";
import { properties } from "@/data/properties";

const stats = [
  { icon: Building2, value: "150+", label: "Properties Sold" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: HandshakeIcon, value: "₹500Cr+", label: "Transactions" },
];

const services = [
  {
    icon: Building2,
    title: "Property Sales",
    description:
      "Exclusive access to premium luxury properties in prime locations across Hyderabad.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description:
      "Expert guidance on real estate investments with high ROI potential.",
  },
  {
    icon: Users,
    title: "Property Consultation",
    description:
      "Personalized consultation to find your dream home that matches your lifestyle.",
  },
  {
    icon: Scale,
    title: "Legal Assistance",
    description:
      "Complete legal support for seamless property transactions and documentation.",
  },
];

const Index = () => {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);

  const featuredProperties = properties.filter((p) => p.featured);
  const regularProperties = properties.filter((p) => !p.featured).slice(0, 3);

  return (
    <div className="overflow-hidden">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40   to-background" />
        </motion.div>

        <div className="relative z-10 top-20 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gold text-sm uppercase tracking-[0.4em] mb-6">
              Welcome to Luxury Living
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Your Trusted Partner in
            <br />
            <span className="text-gradient-gold">Luxury Real Estate</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Specializing in premium apartments and residences in Hyderabad.
            Smart Investments • Transparent Deals
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/properties">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold uppercase tracking-wider shadow-gold hover:shadow-lg transition-all"
              >
                Explore Properties
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gold text-gold font-semibold uppercase tracking-wider hover:bg-gold hover:text-primary-foreground transition-all"
              >
                Schedule Tour
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-gold rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20  border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <p className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Exclusive Listings"
            title="Featured Properties"
            description="Discover our handpicked selection of the finest luxury residences in Hyderabad's most prestigious locations."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property, index) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                name={property.name}
                location={property.location}
                price={property.price}
                beds={property.beds}
                area={property.area}
                image={property.image}
                featured={index === 0}
              />
            ))}
            {regularProperties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                name={property.name}
                location={property.location}
                price={property.price}
                beds={property.beds}
                area={property.area}
                image={property.image}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link to="/properties">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold text-gold font-semibold uppercase tracking-wider hover:bg-gold hover:text-primary-foreground transition-all"
              >
                View All Properties
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={luxuryInterior}
                  alt="Luxury Interior"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 glass-gold p-6 rounded-lg max-w-[250px]"
              >
                <p className="text-gold text-4xl font-display font-bold">10+</p>
                <p className="text-foreground/80 text-sm mt-1">
                  Years of Excellence in Luxury Real Estate
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                subtitle="About Us"
                title="Redefining Luxury Living in Hyderabad"
                align="left"
              />
              <div className="mt-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  At MOJO REALTY, we specialize in connecting discerning buyers
                  with the most prestigious properties in Hyderabad. With over a
                  decade of experience, we've built a reputation for excellence,
                  transparency, and unparalleled client service.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our portfolio includes exclusive partnerships with renowned
                  developers like Brigade, Godrej, and MSN Realty, ensuring our
                  clients access to the finest residential offerings in the
                  market.
                </p>
              </div>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 inline-flex items-center gap-2 text-gold font-semibold uppercase tracking-wider hover:gap-4 transition-all"
                >
                  Learn More About Us
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="What We Offer"
            title="Our Premium Services"
            description="Comprehensive real estate solutions tailored to meet your luxury living aspirations."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 glass rounded-lg group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold uppercase tracking-wider shadow-gold hover:shadow-lg transition-all"
              >
                Explore All Services
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_transparent_0%,_black_100%)]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-foreground/80 text-sm uppercase tracking-[0.3em] mb-4"
            >
              Get Started Today
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6"
            >
              Ready to Find Your Dream Home?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-primary-foreground/80 text-lg mb-10"
            >
              Let our experts guide you to the perfect luxury property. Schedule
              a consultation today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-background text-foreground font-semibold uppercase tracking-wider hover:bg-foreground hover:text-background transition-all"
                >
                  Contact Us Now
                </motion.button>
              </Link>
              <a href="tel:+919876543210">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold uppercase tracking-wider hover:bg-primary-foreground hover:text-gold transition-all"
                >
                  Call: +91 987 654 3210
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
