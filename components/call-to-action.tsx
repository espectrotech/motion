import { motion } from "framer-motion"
import AnimatedButton from "./animated-button"
import { ArrowRight } from "lucide-react"
import { IconBrandDiscordFilled } from "@tabler/icons-react"

export function CallToAction() {
  return (
      <section className="z-10 min-w-[90%] justify-self-center mr-4 ml-4 py-20 lg:my-20 sm:mt-0 sm:mb-20 px-4 md:px-8 px-2 rounded-3xl border-[1px] border-border">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary text-3xl md:text-4xl mb-6">Let’s create something amazing together</h2>
          <p className="text-primary max-w-2xl mx-auto mb-8">
            Looking for custom Roblox animations or want to bring your project to life? Feel free to reach out.
          </p>
          <div className="grid justify-center gap-2">
            <div>
              <AnimatedButton href="https://discord.com/users/1428219713129021603" variant="primary" icon={<ArrowRight size={18} />} externalLink={true}>
                Get in touch
              </AnimatedButton>
            </div>
            <span className="flex items-center justify-center gap-1 text-zinc-400 text-sm">Talk to @espectro.tech on <IconBrandDiscordFilled size={18} className="relative" /></span>
          </div>
        </motion.div>
      </section>
  )
}