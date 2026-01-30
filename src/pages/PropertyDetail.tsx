import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Bed,
  Square,
  Building2,
  Calendar,
  ArrowLeft,
  Phone,
  Mail,
  Check,
} from "lucide-react";
import { getPropertyById } from "@/data/properties";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = getPropertyById(id || "");

  if (!property) {
    return <Navigate to="/properties" replace />;
  }

  return (
    <div className="pt-28">
      <section className="relative h-[60vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        <div className="absolute top-4 md:top-8 left-4 md:left-8 right-4 md:right-8 flex justify-between items-start">
          <Link
            to="/properties"
            className="flex items-center gap-2 px-3 md:px-4 py-2 glass rounded-lg text-sm md:text-base text-foreground hover:text-gold transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">Back to Properties</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <span
            className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold backdrop-blur-md ${
              property.status === "Ready to Move"
                ? "bg-green-500/20 text-green-400"
                : property.status === "Under Construction"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-blue-500/20 text-blue-400"
            }`}
          >
            {property.status}
          </span>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-gold text-sm uppercase tracking-wider mb-2">
                  {property.tagline}
                </p>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {property.name}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={18} className="text-gold" />
                  <span>{property.location}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {[
                  { icon: Bed, label: "Configuration", value: property.beds },
                  { icon: Square, label: "Area", value: property.area },
                  {
                    icon: Building2,
                    label: "Developer",
                    value: property.developer,
                  },
                  { icon: Calendar, label: "Status", value: property.status },
                ].map((item) => (
                  <div key={item.label} className="p-4 glass rounded-lg">
                    <item.icon size={24} className="text-gold mb-3" />
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      {item.label}
                    </p>
                    <p className="font-semibold text-sm">{item.value}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-display font-bold mb-4">
                  About This Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-2xl font-display font-bold mb-6">
                  Key Highlights
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {property.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-gold" />
                      </div>
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-2xl font-display font-bold mb-6">
                  Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="p-4 glass rounded-lg text-center hover:border-gold/30 transition-colors"
                    >
                      <p className="text-sm text-foreground">{amenity}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="sticky top-32 space-y-6"
              >
                <div className="p-8 glass rounded-lg">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                    Starting Price
                  </p>
                  <p className="text-3xl font-display font-bold text-gold mb-2">
                    {property.price}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    @ {property.pricePerSqft}
                  </p>
                  <div className="gap-2 flex flex-col">
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-gradient-gold text-primary-foreground font-semibold uppercase tracking-wider rounded-lg"
                      >
                        Enquire Now
                      </motion.button>
                    </Link>
                    <a href="tel:+919876543210">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 border-2 border-gold text-gold font-semibold uppercase tracking-wider rounded-lg hover:bg-gold hover:text-primary-foreground transition-all"
                      >
                        Call Now
                      </motion.button>
                    </a>
                  </div>
                </div>

                <div className="p-6 glass rounded-lg">
                  <h4 className="font-semibold mb-4">Contact Our Expert</h4>
                  <div className="space-y-3">
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
                    >
                      <Phone size={18} />
                      <span>+91 987 654 3210</span>
                    </a>
                    <a
                      href="mailto:info@mojorealty.com"
                      className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
                    >
                      <Mail size={18} />
                      <span>info@mojorealty.com</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetail;
