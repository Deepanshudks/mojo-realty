import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Users, Building, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import aboutImage from "@/assets/about-team.jpg";
import luxuryInterior from "@/assets/luxury-interior.jpg";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every transaction, ensuring our clients receive nothing but the best.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication and honest dealings form the foundation of our business relationships.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your dreams and aspirations drive our mission. We put your needs above everything else.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our dealings and recommendations.",
  },
];

const milestones = [
  { year: "2014", title: "Founded", description: "MOJO REALTY established in Hyderabad" },
  { year: "2016", title: "100+ Properties", description: "Milestone of 100 successful transactions" },
  { year: "2019", title: "Premium Partnerships", description: "Exclusive tie-ups with top developers" },
  { year: "2022", title: "₹500 Cr+", description: "Cumulative transaction value crossed" },
  { year: "2024", title: "Leading Agency", description: "Recognized as top luxury real estate firm" },
];

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                About MOJO REALTY
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Trusted Partner in
                <span className="text-gradient-gold"> Luxury Living</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Founded with a vision to transform the luxury real estate landscape in 
                Hyderabad, MOJO REALTY has emerged as the city's most trusted name in 
                premium property consultancy. We specialize in connecting discerning 
                buyers with exceptional homes that match their aspirations.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-4xl font-display font-bold text-gold">10+</p>
                  <p className="text-muted-foreground text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-display font-bold text-gold">500+</p>
                  <p className="text-muted-foreground text-sm">Happy Clients</p>
                </div>
                <div>
                  <p className="text-4xl font-display font-bold text-gold">₹500Cr+</p>
                  <p className="text-muted-foreground text-sm">Transactions</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={aboutImage}
                  alt="Luxury Living"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 glass rounded-lg"
            >
              <div className="w-14 h-14 bg-gradient-gold rounded-lg flex items-center justify-center mb-6">
                <Target className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional real estate services that exceed client expectations, 
                making the journey of finding a dream home seamless, transparent, and rewarding. 
                We are committed to building lasting relationships based on trust and integrity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 glass rounded-lg"
            >
              <div className="w-14 h-14 bg-gradient-gold rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and respected luxury real estate consultancy in 
                Hyderabad, setting industry benchmarks for client service, market expertise, 
                and ethical business practices. We envision a future where every family 
                finds their perfect home through us.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="What Drives Us"
            title="Our Core Values"
            description="The principles that guide every decision we make and every relationship we build."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Our Journey"
            title="Milestones That Define Us"
          />

          <div className="mt-16 relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`inline-block ${index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}`}>
                      <p className="text-gold text-3xl font-display font-bold mb-2">
                        {milestone.year}
                      </p>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-gold rounded-full border-4 border-background hidden lg:block z-10" />
                  <div className="lg:w-1/2" />
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
              className="relative"
            >
              <img
                src={luxuryInterior}
                alt="Why Choose Us"
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                subtitle="Why MOJO REALTY"
                title="What Sets Us Apart"
                align="left"
              />
              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: Building,
                    title: "Exclusive Portfolio",
                    desc: "Access to premium properties from top developers like Brigade, Godrej, and MSN Realty.",
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    desc: "Experienced professionals with deep market knowledge and client-first approach.",
                  },
                  {
                    icon: Award,
                    title: "Proven Track Record",
                    desc: "Over 500+ satisfied clients and ₹500Cr+ in successful transactions.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }}
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
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold uppercase tracking-wider shadow-gold"
                >
                  Get in Touch
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
