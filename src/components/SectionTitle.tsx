import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

const SectionTitle = ({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}: SectionTitleProps) => {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-gold text-sm uppercase tracking-[0.3em] font-medium mb-4"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-background" : "text-foreground"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-6 text-lg leading-relaxed ${
            light ? "text-background/80" : "text-muted-foreground"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
