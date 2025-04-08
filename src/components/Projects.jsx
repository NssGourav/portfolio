import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth spring animation for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax effect for background elements
  const y = useTransform(smoothProgress, [0, 1], [0, -100]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  // Scroll-based rotation for project cards
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [0, 5, 0]);
  const rotateY = useTransform(smoothProgress, [0, 0.5, 1], [0, -5, 0]);

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

  const projects = [
    {
      title: "Balloon Adventure",
      description: "A simple game built using HTML, CSS, and JavaScript. The project serves as a foundation for learning game mechanics, event handling, and rendering graphics in a web environment.",
      features: [
        "Interactive gameplay",
        "Player controls",
        "Collision detection",
        "Score tracking"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      date: "March 2025"
    },
    {
      title: "Sem1 Project",
      description: "A web development project focusing on core skills in HTML and CSS, demonstrating proficiency in front-end development.",
      features: [
        "Core Skills: Web development fundamentals using HTML and CSS",
        "Outcome: A structured and styled web project",
        "Impact: Strengthened problem-solving abilities and hands-on experience"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      date: "December 2024"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={containerRef}>
      {/* Background with enhanced effects */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ 
          y,
          opacity,
          rotateX,
          rotateY,
          perspective: "1000px",
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)"
        }}
      >
        {/* Floating orbs */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl opacity-20 dark:bg-primary-800/30"
          style={{
            y: useTransform(smoothProgress, [0, 1], [0, -50]),
            x: useTransform(smoothProgress, [0, 1], [0, -30]),
            boxShadow: "0 0 50px rgba(99, 102, 241, 0.2)"
          }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200/30 rounded-full blur-3xl opacity-20 dark:bg-secondary-800/30"
          style={{
            y: useTransform(smoothProgress, [0, 1], [0, 50]),
            x: useTransform(smoothProgress, [0, 1], [0, 30]),
            boxShadow: "0 0 50px rgba(236, 72, 153, 0.2)"
          }}
        ></motion.div>
        
        {/* Spinning gradients */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-primary-400/30 via-secondary-500/30 to-primary-400/30 rounded-full blur-3xl opacity-20"
          style={{
            rotate: useTransform(smoothProgress, [0, 1], [0, 360]),
            boxShadow: "0 0 100px rgba(99, 102, 241, 0.1)"
          }}
        ></motion.div>
        
        {/* Particle effects */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: '-10%',
                opacity: Math.random() * 0.5 + 0.5,
                boxShadow: "0 0 10px rgba(99, 102, 241, 0.3)"
              }}
              animate={{
                y: [0, -1000],
                opacity: [1, 0],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            ></motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container relative z-10"
        style={{ 
          scale,
          rotateX,
          rotateY,
          perspective: "1000px"
        }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 dark:from-primary-400 dark:via-secondary-300 dark:to-primary-400"
          style={{
            backgroundSize: "200% auto",
            animation: "gradient 8s linear infinite",
            textShadow: "0 0 20px rgba(99, 102, 241, 0.3)"
          }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -5, 
                rotate: index % 2 === 0 ? 1 : -1,
                transition: { duration: 0.3 }
              }}
              style={{
                rotateX: useTransform(smoothProgress, [0, 0.5, 1], [0, index % 2 === 0 ? 2 : -2, 0]),
                rotateY: useTransform(smoothProgress, [0, 0.5, 1], [0, index % 2 === 0 ? -2 : 2, 0])
              }}
              className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500 group relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              
              {/* Project content */}
              <h3 className="text-2xl font-semibold mb-4 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.links.github}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-primary-600/50"
                >
                  View Code
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.links.demo}
                  className="px-4 py-2 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors shadow-lg hover:shadow-primary-600/30"
                >
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 