"use client"

import AnimatedButton from "@/components/animated-button"
import { CallToAction } from "@/components/call-to-action"
import { FeaturedSection } from "@/components/featured-section"
import { HeroGalleryScroll } from "@/components/hero-gallery-scroll"
import { LayoutGridDemo } from "@/components/layout-image-grid"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Spacer for header */}
      <div className="header-height"></div>

      {/* Hero Section with Slider */}
      <HeroGalleryScroll />

      {/* Hero Section with Slider 
      <HeroSlider />*/}

      {/* Introduction */}
      <section id="introduction" className="mt-32 mb-20 sm:py-0 py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">Bringing Roblox Worlds to Life</h2>
            <p className="text-primary-secondary mb-6">
              Every movement tells a story, shapes a character, and breathes life into a virtual world. At Espectro Tech, our work focuses on crafting immersive and dynamic animations that elevate the player experience.
            </p>
            <p className="text-primary-secondary mb-8">
              From fluid combat sequences to subtle, expressive emotes, we specialize in a wide range of animation styles. Explore our portfolio to see how we can transform your project with polished, professional animations.
            </p>
            <AnimatedButton href="/about" variant="outline" icon={<ArrowRight size={16} />}>
              Learn More About The Journey
            </AnimatedButton>
          </motion.div>
          <motion.div
            className="relative h-[500px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/animations/combat/combat-4.gif?height=1000&width=800"
              alt="Photographer at work"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Dynamic Frame Section 
      <DynamicFrame />*/}

      {/* Layout Grid Section */}
      <LayoutGridDemo />

      {/* Call to Action Section */}
      <CallToAction />

      {/* Featured Collections */}
      <FeaturedSection />
    </div>
  )
}
