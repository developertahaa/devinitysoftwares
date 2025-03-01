"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  img: string;
  desc: string;
  category: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Iqbal & Sons",
    img: "/1.png",
    desc: "A fully responsive e-commerce platform for electronics, featuring a seamless shopping experience, payment integration, and advanced search filters.",
    category: "E-Commerce",
    link: "https://iqbalandsons.pk",
  },
  {
    title: "E-BOOK Management System",
    img: "/3.png",
    desc: "A robust system for organizing and distributing digital books, with user-friendly navigation and secure access.",
    category: "Web Applications",
    link: "#",
  },
  {
    title: "Food Donation App",
    img: "/2.png",
    desc: "An app connecting donors with charities to reduce food waste, featuring real-time tracking and notifications.",
    category: "Mobile Apps",
    link: "foodshare-ten.vercel.app",
  },
  {
    title: "Mediatyze",
    img: "/4.png",
    desc: "A stylish portfolio site showcasing services, case studies, and success stories of Mediatyze Marketing Agency.",
    category: "Web Development",
    link: "mediatyze.com",
  },
  {
    title: "Crypto Coin Website",
    img: "/9.png",
    desc: "An informative and sleek website presenting a new cryptocurrency, with interactive charts and investor information.",
    category: "Finance Tech",
    link: "#",
  },
  {
    title: "Content Writing for Tech Blog",
    img: "/back2.jpg",
    desc: "Engaging, SEO-optimized content crafted for a tech blog, covering the latest trends and innovations.",
    category: "Content Writing",
    link: "#",
  },
  {
    title: "Blockchain White Paper",
    img: "/11.png",
    desc: "A comprehensive white paper draft detailing technical aspects, market positioning, and use cases of a new blockchain coin.",
    category: "Research & Writing",
    link: "#",
  },
  {
    title: "Indigo Shopify Store",
    img: "/10.png",
    desc: "A modern, clean UI design for a Shopify store aimed at enhancing user engagement and product discovery.",
    category: "UI/UX Design",
    link: "indigoshopify.com",
  },
  {
    title: "ChadGPT with Gemini",
    img: "/6.png",
    desc: "An AI-powered social media platform emphasizing user privacy, with advanced language processing and predictive text.",
    category: "AI Solutions",
    link: "#",
  },
];

const ProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const cardVariants = {
    hidden: (offset: number) => ({
      x: offset * 120 + "%",
      opacity: 0,
      scale: 0.85,
    }),
    visible: (offset: number) => ({
      x: offset * 120 + "%",
      opacity: offset === 0 ? 1 : 0.7,
      scale: offset === 0 ? 1 : 0.9,
      zIndex: offset === 0 ? 10 : 5 - Math.abs(offset),
      transition: { duration: 0.6, ease: "easeOut" },
    }),
    exit: (offset: number) => ({
      x: offset * 120 + "%",
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.6, ease: "easeOut" },
    }),
  };

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)" },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-12 md:py-16 text-white relative overflow-hidden"
    >
      {/* Decorative Top Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500" />

      <div className="max-w-7xl mx-auto text-center px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight mb-6"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl md:max-w-3xl mx-auto mb-8 md:mb-12"
        >
          Discover how we transform ideas into digital masterpieces with innovation and precision.
        </motion.p>
      </div>

      <div className="relative">
        <div className="flex justify-center items-center h-[400px] md:h-[600px] relative px-4">
          <AnimatePresence initial={false} custom={currentIndex}>
            {[-1, 0, 1].map((offset) => {
              const projectIndex = (currentIndex + offset + projects.length) % projects.length;
              const project = projects[projectIndex];
              return (
                <motion.div
                  key={projectIndex}
                  custom={offset}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute w-full max-w-[300px] md:max-w-sm lg:max-w-md"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-2xl hover:scale-105 relative group border border-gray-700/50">
                    <div className="relative h-40 md:h-56 overflow-hidden">
                      <motion.img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        initial={{ y: 0 }}
                        animate={{ y: offset === 0 ? -20 : 0 }}
                        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <span className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs md:text-sm font-semibold px-2 py-1 rounded-full shadow-md">
                        {project.category}
                      </span>
                    </div>
                    <div className="p-4 md:p-6 relative space-y-3">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight">{project.title}</h3>
                      <p className="text-gray-300 text-xs md:text-sm lg:text-base line-clamp-2">{project.desc}</p>
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm md:text-base font-semibold px-4 py-2 rounded-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          Visit Project
                        </motion.a>
                      )}
                      <motion.div
                        className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <motion.button
          onClick={prevProject}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-80 hover:bg-opacity-100 text-white p-3 md:p-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          onClick={nextProject}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-80 hover:bg-opacity-100 text-white p-3 md:p-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      <div className="flex justify-center mt-6 md:mt-8">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full mx-1 md:mx-2 transition-all duration-300 ${
              index === currentIndex
                ? "bg-gradient-to-r from-purple-500 to-blue-500 w-4 md:w-6"
                : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;