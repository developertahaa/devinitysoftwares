"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const categories: Record<string, { name: string; logo: string }[]> = {
  Frontend: [
    { name: "React", logo: "/logos/react.jpeg" },
    { name: "Vue.js", logo: "/logos/vue.jpeg" },
    { name: "Angular", logo: "/logos/angular.jpeg" },
  ],
  Backend: [
    { name: "Node.js", logo: "/logos/node.jpeg" },
    { name: "Django", logo: "/logos/django.jpeg" },
    { name: "Spring Boot", logo: "/logos/spring.jpeg" },
  ],
  "Mobile App": [
    { name: "Flutter", logo: "/logos/flutter.jpeg" },
    { name: "React Native", logo: "/logos/react.jpeg" },
    { name: "Swift", logo: "/logos/swift.jpeg" },
  ],
  Cloud: [
    { name: "AWS", logo: "/logos/aws.jpeg" },
    { name: "Google Cloud", logo: "/logos/google.jpeg" },
    { name: "Azure", logo: "/logos/azure.jpeg" },
  ],
};

const Tech: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof categories>("Frontend");

  const buttonVariants = {
    inactive: { scale: 1, backgroundColor: "#E5E7EB" }, // gray-200
    active: { scale: 1.05, backgroundColor: "#9333EA" }, // purple-600
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const logoVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.1 },
  };

  return (
    <section className="bg-white py-12 md:py-20 text-black relative overflow-hidden">
      {/* Decorative Top Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500" />

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="hidden md:block absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-purple-200/20 rounded-full transform translate-x-1/2 translate-y-1/2"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="hidden md:block absolute top-1/2 left-0 w-20 h-20 md:w-24 md:h-24 bg-blue-200/20 rounded-full transform -translate-x-1/2"
      />

      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 text-center text-gray-900"
        >
          Technologies{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            We Use
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-10 text-center"
        >
          Explore the cutting-edge tools and platforms driving our innovative solutions.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-10">
          {Object.keys(categories).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category as keyof typeof categories)}
              variants={buttonVariants}
              initial="inactive"
              animate={activeCategory === category ? "active" : "inactive"}
              whileHover="hover"
              whileTap="tap"
              className={`px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-lg font-semibold text-black transition-all transform ${
                activeCategory === category ? "text-white shadow-md" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto">
          {categories[activeCategory].map((tech) => (
            <motion.div
              key={tech.name}
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="flex flex-col items-center justify-center"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="tech w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain transition-all"
              />
              <p className="mt-2 text-sm md:text-base text-gray-700">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;