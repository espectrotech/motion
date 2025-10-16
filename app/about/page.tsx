"use client"

import Image from "next/image"
import { ArrowRight, Camera, Globe, Award, Users, Calendar, Code } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedButton from "@/components/animated-button"
import { CallToAction } from "@/components/call-to-action"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/animations/first-person/first-person-2.gif?height=800&width=1920"
          alt="About X100"
          fill
          priority
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl text-white mb-4">About Us</h1>
          <p className="text-white/90 text-lg max-w-2xl">The story behind the motion</p>
        </motion.div>
      </section>
      <div className="header-height"></div>

      {/* Bio Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-[600px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/animations/combat/combat-1.gif?height=1200&width=800"
              alt="Motion portrait"
              fill
              className="object-cover object-left"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-justify"
          >
            <h2 className="text-3xl md:text-4xl mb-6">The Journey</h2>
            <p className="text-primary mb-4">
              We are a professional Roblox development team with 3 years of combined experience in animation and game mechanics. Our team brings together coding expertise and animation mastery to create immersive and dynamic experiences on Roblox.
            </p>
            <p className="text-primary mb-4">
              We met at our federal university, where our shared passion for game development and storytelling brought us together. Our work focuses on crafting animations that bring characters to life, enhance gameplay, and elevate player engagement.
            </p>
            <p className="text-primary mb-6">
              Every project we create is built with precision, creativity, and a deep understanding of both programming and visual storytelling. From fluid combat sequences to expressive emotes, we aim to transform Roblox experiences with polished, professional animations.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Users size={20} className="text-primary" />
                <span className="text-primary">Collaborative, Story-Driven Approach</span>
              </div>
              <div className="flex items-center gap-2">
                <Code size={20} className="text-primary" />
                <span className="text-primary">Expertise in Roblox Studio & Lua Scripting</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-primary" />
                <span className="text-primary">Focused on High-Quality, Player-Centered Animations</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-primary" />
                <span className="text-primary">3 Years of Team Experience in Animation & Development</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Philosophy
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Payments",
                description:
                  "Payments are only available via PayPal or Roblox (Robux).",
              },
              {
                title: "Policies",
                description:
                  "If the customer wants to add something that was not described in job, an additional fee will be asked.",
              },
              {
                title: "Terms",
                description:
                  "You must provide all needed models, and have payment ready.",
              },
              {
                title: "Respect",
                description:
                  "If the client shares or distributes the work during development without permission, our team reserves the right to take appropriate action.",
              },
              {
                title: "Copyright",
                description: "All animations become the property of the client upon delivery and full payment. Until then, the rights remain with our team."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-primary dark:text-primary-secondary bg-primary-secondary dark:bg-primary p-8 rounded-2xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-primary-secondary dark:text-primary-foreground text-xl mb-4">{item.title}</h3>
                <p className="text-primary-secondary dark:text-primary-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Journey
        </motion.h2>
        <div className="space-y-12">
          {[
            {
              year: "2013",
              title: "First Exhibition",
              description:
                "Hosted my first photography exhibition in New York, featuring landscapes from across North America.",
            },
            {
              year: "2015",
              title: "National Geographic Feature",
              description:
                "My series on indigenous communities was featured in National Geographic, marking a significant milestone in my career.",
            },
            {
              year: "2018",
              title: "Photography Book",
              description:
                'Published my first photography book, "Perspectives," showcasing a decade of travel photography.',
            },
            {
              year: "2020",
              title: "Photography Workshops",
              description:
                "Began offering photography workshops and mentoring programs to share knowledge and techniques with aspiring photographers.",
            },
            {
              year: "Present",
              title: "Ongoing Projects",
              description:
                "Currently working on long-term documentary projects focused on environmental conservation and cultural preservation.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.year}
              className="flex flex-col md:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/4">
                <h3 className="text-xl">{item.year}</h3>
              </div>
              <div className="md:w-3/4">
                <h4 className="font-medium text-2xl mb-2">{item.title}</h4>
                <p className="text-primary">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}

      <CallToAction />
    </div>
  )
}
