import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedButton from "./animated-button";
import FeaturedCollections from "./featured-collections";

export function FeaturedSection() {
  return (
    <section className="lg:mt-32 mb-32 px-4 md:px-8 z-10 mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary text-3xl md:text-4xl mb-4">Featured Collections</h2>
            <p className="text-primary max-w-2xl mx-auto">
              Explore some of our most popular Roblox animation collections, crafted to bring characters and gameplay to life.
            </p>
          </motion.div>
          <FeaturedCollections />
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatedButton href="/showcase" variant="primary" icon={<ArrowRight size={18} />}>
              View All Collections
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
  )
}