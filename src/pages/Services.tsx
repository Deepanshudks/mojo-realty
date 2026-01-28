import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Home,
  TrendingUp,
  MessageSquare,
  FileCheck,
  Banknote,
  Users,
  Shield,
  Award,
  ArrowRight,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import luxuryInterior from "@/assets/luxury-interior.jpg";

const services = [
  {
    icon: Home,
    title: "Property Sales",
    description:
      "Access our exclusive portfolio of luxury properties from top developers. We connect you with premium residences that match your lifestyle and aspirations.",
    features: ["Exclusive listings", "Virtual tours", "Price negotiations", "Documentation support"],
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description:
      "Expert guidance on real estate investments with high ROI potential. Our market analysts help you make informed decisions for wealth creation.",
    features: ["Market analysis", "ROI projections", "Portfolio diversification", "Exit strategies"],
  },
  {
    icon: MessageSquare,
    title: "Property Consultation",
    description:
      "Personalized consultation to understand your requirements and find the perfect property. Our experts guide you through every step.",
    features: ["Requirement analysis", "Property matching", "Site visits", "Comparison reports"],
  },
  {
    icon: FileCheck,
    title: "Legal Assistance",
    description:
      "Complete legal support for seamless property transactions. We ensure all documentation and compliance requirements are met.",
    features: ["Title verification", "Agreement drafting", "Registration support", "Due diligence"],
  },
  {
    icon: Banknote,
    title: "Home Loan Assistance",
    description:
      "We partner with leading banks to help you secure the best home loan rates. Quick approvals and minimal paperwork.",
    features: ["Best rates", "Multiple bank options", "Quick processing", "EMI calculators"],
  },
  {
    icon: Users,
    title: "After-Sales Support",
    description:
      "Our relationship doesn't end at the sale. We provide continued support for all your post-purchase requirements.",
    features: ["Possession support", "Interior referrals", "Resale assistance", "Rental management"],
  },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description: "Share your requirements and preferences with our expert consultants.",
  },
  {
    step: "02",
    title: "Property Matching",
    description: "We curate a list of properties that perfectly match your criteria.",
  },
  {
    step: "03",
    title: "Site Visits",
    description: "Experience the properties firsthand with personalized site tours.",
  },
  {
    step: "04",
    title: "Documentation",
    description: "Complete legal and financial documentation with our assistance.",
  },
  {
    step: "05",
    title: "Possession",
    description: "Smooth handover and continued support for your new home.",
  },
];

const Services = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={luxuryInterior}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle
            subtitle="What We Offer"
            title="Premium Real Estate Services"
            description="Comprehensive solutions tailored to make your property journey seamless and rewarding. From search to possession, we're with you every step."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 glass rounded-lg group"
              >
                <div className="w-14 h-14 bg-gradient-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="How It Works"
            title="Our Simple Process"
            description="We've streamlined the property buying experience to make it effortless for you."
          />

          <div className="mt-16 relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-border hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-primary-foreground font-bold">{item.step}</span>
                  </div>
                  <h4 className="text-lg font-display font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle="Why Choose Us"
                title="The MOJO Advantage"
                align="left"
              />
              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "100% Verified Properties",
                    desc: "Every property in our portfolio undergoes thorough verification for legal and financial compliance.",
                  },
                  {
                    icon: Award,
                    title: "Best Price Guarantee",
                    desc: "We negotiate the best deals and ensure you get maximum value for your investment.",
                  },
                  {
                    icon: Users,
                    title: "Dedicated Relationship Manager",
                    desc: "A single point of contact who understands your needs and guides you throughout.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={luxuryInterior}
                alt="Why Choose Us"
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg" />
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-gold rounded-lg">
                <p className="text-gold text-3xl font-display font-bold">500+</p>
                <p className="text-foreground/80">Happy families found their dream homes with us</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-gold">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 max-w-xl mx-auto mb-10"
          >
            Let our experts help you find the perfect property. Schedule a free consultation today.
          </motion.p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-semibold uppercase tracking-wider hover:bg-foreground hover:text-background transition-all"
            >
              Contact Us
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
