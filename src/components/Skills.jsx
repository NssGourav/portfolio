import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'Git', level: 85 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'Responsive Design', level: 90 },
]

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Skills & Expertise
        </h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {skill.name}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills 