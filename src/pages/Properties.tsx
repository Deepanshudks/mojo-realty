import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import SectionTitle from "@/components/SectionTitle";
import { properties, Property } from "@/data/properties";

const statusFilters = ["All", "Ready to Move", "Under Construction", "Pre-Launch"];
const bhkFilters = ["All", "3 BHK", "4 BHK", "5 BHK"];

const Properties = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedBhk, setSelectedBhk] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.developer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatus === "All" || property.status === selectedStatus;

    const matchesBhk =
      selectedBhk === "All" || property.beds.includes(selectedBhk.replace(" BHK", ""));

    return matchesSearch && matchesStatus && matchesBhk;
  });

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Our Portfolio"
            title="Luxury Properties"
            description="Explore our exclusive collection of premium residences in Hyderabad's most prestigious locations."
          />
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search by name, location, developer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Status Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Status:</span>
                <div className="flex gap-2">
                  {statusFilters.map((status) => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`px-4 py-2 text-sm rounded-lg transition-all ${
                        selectedStatus === status
                          ? "bg-gold text-primary-foreground"
                          : "bg-card border border-border text-muted-foreground hover:border-gold"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* BHK Filter */}
              <div className="flex items-center gap-2 ml-4">
                <span className="text-sm text-muted-foreground">Type:</span>
                <div className="flex gap-2">
                  {bhkFilters.map((bhk) => (
                    <button
                      key={bhk}
                      onClick={() => setSelectedBhk(bhk)}
                      className={`px-4 py-2 text-sm rounded-lg transition-all ${
                        selectedBhk === bhk
                          ? "bg-gold text-primary-foreground"
                          : "bg-card border border-border text-muted-foreground hover:border-gold"
                      }`}
                    >
                      {bhk}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground"
            >
              <SlidersHorizontal size={20} />
              <span>Filters</span>
            </button>
          </div>

          {/* Mobile Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden mt-6 overflow-hidden"
              >
                <div className="p-6 glass rounded-lg space-y-6">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold">Filters</h4>
                    <button onClick={() => setShowFilters(false)}>
                      <X size={20} />
                    </button>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Status</p>
                    <div className="flex flex-wrap gap-2">
                      {statusFilters.map((status) => (
                        <button
                          key={status}
                          onClick={() => setSelectedStatus(status)}
                          className={`px-4 py-2 text-sm rounded-lg transition-all ${
                            selectedStatus === status
                              ? "bg-gold text-primary-foreground"
                              : "bg-card border border-border text-muted-foreground"
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Type</p>
                    <div className="flex flex-wrap gap-2">
                      {bhkFilters.map((bhk) => (
                        <button
                          key={bhk}
                          onClick={() => setSelectedBhk(bhk)}
                          className={`px-4 py-2 text-sm rounded-lg transition-all ${
                            selectedBhk === bhk
                              ? "bg-gold text-primary-foreground"
                              : "bg-card border border-border text-muted-foreground"
                          }`}
                        >
                          {bhk}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground mb-8"
          >
            Showing {filteredProperties.length} of {properties.length} properties
          </motion.p>

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProperties.map((property) => (
                  <motion.div
                    key={property.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PropertyCard
                      id={property.id}
                      name={property.name}
                      location={property.location}
                      price={property.price}
                      beds={property.beds}
                      area={property.area}
                      image={property.image}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl font-display text-muted-foreground mb-4">
                No properties found
              </p>
              <p className="text-muted-foreground">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedStatus("All");
                  setSelectedBhk("All");
                }}
                className="mt-6 px-6 py-3 bg-gold text-primary-foreground rounded-lg font-semibold"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;
