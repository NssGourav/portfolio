import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background with enhanced effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full blur-3xl opacity-20 dark:bg-primary-800 animate-float-up-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full blur-3xl opacity-20 dark:bg-secondary-800 animate-float-up-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Spinning gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-primary-400 via-secondary-500 to-primary-400 rounded-full blur-3xl opacity-20 animate-spin-slow"></div>
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
          Let's Connect
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border-l-4 border-primary-500"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-phone text-primary-600 dark:text-primary-400 mr-4"></i>
                <a href="tel:+918121262074" className="text-gray-600 dark:text-gray-300">
                  +91 8121262074
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-primary-600 dark:text-primary-400 mr-4"></i>
                <a href="mailto:nss.gourav@adypu.edu.in" className="text-gray-600 dark:text-gray-300">
                  nss.gourav@adypu.edu.in
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-primary-600 dark:text-primary-400 mr-4"></i>
                <span className="text-gray-600 dark:text-gray-300">Pune, Maharashtra</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">Connect with me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/nss-gourav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/NssGourav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://leetcode.com/NssGourav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 