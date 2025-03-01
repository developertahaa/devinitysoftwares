"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const statsData = [
  { label: "Projects Completed", value: 80 },
  { label: "Brands Worked With", value: 10 },
  { label: "Happy Clients", value: 40 },
  { label: "Years of Experience", value: 3 },
];

const Stats: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
      textContent: Array.from({ length: custom + 1 }, (_, i) => i),
    }),
  };

  const shapeVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 10, -10, 0],
      transition: { duration: 3, ease: "easeInOut", repeat: Infinity },
    },
  };

  return (
    <section
      id="stats"
      className="py-16 md:py-24 bg-white text-gray-900 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 blur-md"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-green-400 rounded-lg rotate-45 opacity-20 blur-md"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-10 blur-xl"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column (7/12) */}
          <motion.div
            className="md:col-span-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 text-center md:text-left text-gray-900"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Milestones
              </span>
            </motion.h2>
            <motion.h3
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-4 md:mb-6 text-center md:text-left"
            >
              A Legacy of Innovation and Excellence
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto md:mx-0 text-center md:text-left leading-relaxed"
            >
              We pride ourselves on delivering transformative digital solutions that empower businesses worldwide. From cutting-edge websites to innovative apps, our journey reflects a commitment to quality, creativity, and client success.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              ref={ref}
            >
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100"
                >
                  <motion.p
                    variants={numberVariants}
                    initial="hidden"
                    animate={controls}
                    custom={stat.value}
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-2"
                  >
                    {stat.value}
                    <span className="text-purple-600">+</span>
                  </motion.p>
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column (5/12) */}
          <motion.div
            className="md:col-span-5 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/OIP.jpg" // Placeholder; replace with your image
              alt="Stats Illustration"
              className="w-full max-w-md md:max-w-lg lg:max-w-2xl h-auto object-cover rounded-3xl shadow-2xl border border-gray-200"
            />
            {/* Decorative Objects */}
            <motion.div
              variants={shapeVariants}
              animate="animate"
              className="absolute top-0 left-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-30 blur-md"
            />
            <motion.div
              variants={shapeVariants}
              animate="animate"
              className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg rotate-45 opacity-30 blur-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;