import { motion } from "framer-motion";
import { MapPin, Bed, Square, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: string;
  name: string;
  location: string;
  price: string;
  beds: string;
  area: string;
  image: string;
  featured?: boolean;
}

const PropertyCard = ({
  id,
  name,
  location,
  price,
  beds,
  area,
  image,
  featured = false,
}: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className={`group relative overflow-hidden rounded-lg ${
        featured ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      <Link to={`/properties/${id}`} className="block">
        {/* Image */}
        <div className={`relative overflow-hidden ${featured ? "h-[500px]" : "h-[350px]"}`}>
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8 }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
          
          {/* Badge */}
          {featured && (
            <div className="absolute top-4 left-4 px-4 py-1.5 bg-gradient-gold text-primary-foreground text-xs font-semibold uppercase tracking-wider rounded-sm">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="space-y-3">
            {/* Price */}
            <p className="text-gold font-display text-2xl font-semibold">{price}</p>
            
            {/* Name */}
            <h3 className={`font-display font-bold text-foreground ${
              featured ? "text-2xl" : "text-xl"
            }`}>
              {name}
            </h3>
            
            {/* Location */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin size={14} className="text-gold" />
              <span>{location}</span>
            </div>

            {/* Details */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Bed size={16} className="text-gold" />
                <span>{beds}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Square size={16} className="text-gold" />
                <span>{area}</span>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-gold font-medium text-sm uppercase tracking-wide pt-2 group-hover:gap-4 transition-all"
            >
              <span>View Details</span>
              <ArrowRight size={16} />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;
