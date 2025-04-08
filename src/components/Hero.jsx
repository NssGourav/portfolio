import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full blur-3xl opacity-20 dark:bg-primary-800 animate-float-up-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full blur-3xl opacity-20 dark:bg-secondary-800 animate-float-up-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-primary-300 rounded-full blur-3xl opacity-20 dark:bg-primary-700 animate-float-up-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-secondary-300 rounded-full blur-3xl opacity-20 dark:bg-secondary-700 animate-float-up-slow" style={{ animationDelay: '3s' }}></div>
        
        {/* Spinning gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-primary-400 via-secondary-500 to-primary-400 rounded-full blur-3xl opacity-20 animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-conic from-secondary-400 via-primary-500 to-secondary-400 rounded-full blur-3xl opacity-20 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
        
        {/* Particle effects */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary-400 rounded-full animate-float-up"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: '-10%',
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                opacity: Math.random() * 0.5 + 0.5,
              }}
            ></div>
          ))}
        </div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 relative mx-auto"
        >
          <div className="w-64 h-64 md:w-72 md:h-72 mx-auto relative group">
            {/* Outer glowing border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-secondary-500 to-primary-400 animate-spin-slow opacity-75 blur-sm group-hover:opacity-100 transition-opacity"></div>
            {/* Inner rotating gradient */}
            <div className="absolute inset-[3px] rounded-full bg-gradient-to-r from-primary-500 to-secondary-400 animate-spin-slow"></div>
            {/* Image container */}
            <div className="absolute inset-[4px] rounded-full bg-white dark:bg-gray-900 p-1">
              <img
                src="/anime-profile.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-2 border-primary-200 dark:border-primary-800 group-hover:border-primary-400 dark:group-hover:border-primary-400 transition-colors"
              />
            </div>
            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-primary-400 rounded-full animate-float-up"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: '-10%',
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 2 + 2}s`,
                  opacity: Math.random() * 0.5 + 0.5,
                }}
              ></div>
            ))}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 dark:from-primary-400 dark:via-secondary-300 dark:to-primary-400 animate-gradient"
        >
          Gourav NSS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          B.Tech CSE (AI & ML) Student | Web Developer | Competitive Programmer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -5, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+918121262074"
            className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <i className="fas fa-phone mr-2"></i>
              +91 8121262074
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -5, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:nss.gourav@adypu.edu.in"
            className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <i className="fas fa-envelope mr-2"></i>nss.gourav@adypu.edu.in
            </span>
            <div className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center gap-6 mb-8"
        >
          {['linkedin', 'github', 'code'].map((icon, index) => (
            <motion.a
              key={icon}
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="text-3xl text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors relative group"
            >
              <i className={`fab fa-${icon}`}></i>
              <div className="absolute -inset-2 bg-primary-100 dark:bg-primary-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="absolute -inset-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-20"></div>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          I am a passionate B.Tech CSE (AI & ML) student at ADYPU, actively participating in Codeforces contests, hackathons, and web development projects. 
          I have engaged in ICPC's Go For Gold camp and tech fests. My goal is to excel in software development, 
          leveraging AI and web technologies to build impactful solutions.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero 