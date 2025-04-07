import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 relative mx-auto"
        >
          <div className="w-64 h-64 md:w-72 md:h-72 mx-auto relative">
            {/* Outer glowing border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 animate-spin-slow opacity-75 blur-sm"></div>
            {/* Inner rotating gradient */}
            <div className="absolute inset-[3px] rounded-full bg-gradient-to-r from-amber-500 to-orange-400 animate-spin-slow"></div>
            {/* Image container */}
            <div className="absolute inset-[4px] rounded-full bg-white dark:bg-gray-900 p-1">
              <img
                src="/anime-profile.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-2 border-amber-200 dark:border-amber-800"
              />
            </div>
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Hi, I'm{' '}
          <span className="text-amber-500 dark:text-amber-400">Gourav</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Frontend Developer & UI/UX Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-amber-500 text-amber-600 dark:text-amber-400 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 