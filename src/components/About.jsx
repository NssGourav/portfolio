import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate Frontend Developer with a strong focus on creating
              beautiful, responsive, and user-friendly web applications. With a
              background in computer science and a keen eye for design, I strive to
              create digital experiences that are both functional and visually
              appealing.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My journey in web development started with a curiosity about how
              websites work, and it has evolved into a deep passion for creating
              modern web applications using the latest technologies and best
              practices.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or working on personal
              projects that challenge me to grow as a developer.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Education
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bachelor's in Computer Science
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                2+ Years in Web Development
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Location
              </h3>
              <p className="text-gray-600 dark:text-gray-300">India</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Availability
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Open to Work</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About 