import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const skills = {
    technical: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'React', icon: 'fab fa-react' },
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'GitHub', icon: 'fab fa-github' },
    ],
    soft: [
      'Problem Solving',
      'Team Collaboration',
      'Communication',
      'Time Management',
      'Adaptability',
      'Leadership',
    ],
    certifications: [
      'Web Development Bootcamp',
      'React Advanced Concepts',
      'Python for Data Science',
      'Git & GitHub Mastery',
    ],
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 dark:from-primary-400 dark:via-secondary-300 dark:to-primary-400 animate-gradient"
        >
          Skills & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            <h3 className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.technical.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 p-2 rounded-lg bg-primary-50 dark:bg-primary-900/20 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors"
                >
                  <i className={`${skill.icon} text-primary-600 dark:text-primary-400 text-xl`}></i>
                  <span className="text-gray-600 dark:text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-secondary-500 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary-600 to-primary-600 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            <h3 className="text-2xl font-semibold mb-6 text-secondary-600 dark:text-secondary-400">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.soft.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="p-2 rounded-lg bg-secondary-50 dark:bg-secondary-900/20 group-hover:bg-secondary-100 dark:group-hover:bg-secondary-900/30 transition-colors"
                >
                  <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            <h3 className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400">Certifications</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-primary-400">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary-900 text-secondary-300 rounded-full text-sm">Clearing DSA Mock Interview</span>
                  <span className="px-3 py-1 bg-secondary-900 text-secondary-300 rounded-full text-sm">AI for Everyone</span>
                  <span className="px-3 py-1 bg-secondary-900 text-secondary-300 rounded-full text-sm">Generative AI</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills; 