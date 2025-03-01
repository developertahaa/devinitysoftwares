"use client";

import React, { ReactElement, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Code, Smartphone, Brush, Cloud, Database, ShoppingCart, Shield, Monitor, Server, Globe, Activity, HardDrive } from "lucide-react";

const services = [
  { title: "Web Development", description: "Crafting responsive and dynamic web applications", icon: <Code size={32}  /> },
  { title: "Mobile Apps", description: "Native and cross-platform mobile solutions", icon: <Smartphone size={32}  /> },
  { title: "UI/UX Design", description: "Creating intuitive and beautiful user interfaces", icon: <Brush size={32}  /> },
  { title: "Cloud Solutions", description: "Scalable and secure cloud infrastructure", icon: <Cloud size={32}  /> },
  { title: "Database Management", description: "Optimized and secure database solutions", icon: <Database size={32}  /> },
  { title: "E-Commerce Solutions", description: "Custom online store development and integrations", icon: <ShoppingCart size={32}  /> },
  { title: "Cybersecurity", description: "Advanced security solutions to protect your business", icon: <Shield size={32}  /> },
  { title: "IT Consulting", description: "Expert guidance for digital transformation", icon: <Monitor size={32}  /> },
  { title: "DevOps Services", description: "Streamlined development and operations", icon: <Server size={32}  /> },
  { title: "SEO Optimization", description: "Enhancing your online visibility", icon: <Globe size={32}  /> },
  { title: "AI & Machine Learning", description: "Intelligent automation and data-driven insights", icon: <Activity size={32}  /> },
  { title: "Data Analytics", description: "Transforming raw data into actionable insights", icon: <HardDrive size={32}  /> },
];

type ServiceCardProps = { title: string; description: string; icon: ReactElement; className?: string };

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, className }) => {
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center border border-gray-200 transition duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-3 md:p-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full text-white">{icon}</div>
      <h3 className="text-xl md:text-2xl font-semibold mt-3 md:mt-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base mt-2">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Increased to 3s for better readability
    return () => clearInterval(interval);
  }, []);

  const prevIndex = (currentIndex - 1 + services.length) % services.length;
  const nextIndex = (currentIndex + 1) % services.length;

  const handlePrevious = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % services.length);

  const cardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.4 } },
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-white text-black">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 md:mb-6"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text px-1 py-1 rounded font-bold">
            Services
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto"
        >
          We offer a wide range of digital solutions to help your business grow and stay ahead in the modern world.
        </motion.p>
        <div className="relative flex items-center justify-center w-full max-w-5xl mx-auto">
          <div className="w-full relative">
            <AnimatePresence initial={false}>
              {/* Mobile: Single Card */}
              <div className="md:hidden">
                <motion.div
                  key={currentIndex}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full max-w-[300px] mx-auto"
                >
                  <ServiceCard
                    title={services[currentIndex].title}
                    description={services[currentIndex].description}
                    icon={services[currentIndex].icon}
                  />
                </motion.div>
              </div>
              {/* Desktop: Three Cards */}
              <div className="hidden md:flex items-center justify-center space-x-4 md:space-x-6 lg:space-x-8">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  animate={{ scale: 0.9, opacity: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="w-1/3"
                >
                  <ServiceCard
                    title={services[prevIndex].title}
                    description={services[prevIndex].description}
                    icon={services[prevIndex].icon}
                  />
                </motion.div>
                <motion.div
                  key={currentIndex}
                  variants={cardVariants}
                  initial="initial"
                  animate={{ scale: 1.1, opacity: 1 }}
                  exit="exit"
                  className="w-1/3 z-10"
                >
                  <ServiceCard
                    title={services[currentIndex].title}
                    description={services[currentIndex].description}
                    icon={services[currentIndex].icon}
                  />
                </motion.div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  animate={{ scale: 0.9, opacity: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="w-1/3"
                >
                  <ServiceCard
                    title={services[nextIndex].title}
                    description={services[nextIndex].description}
                    icon={services[nextIndex].icon}
                  />
                </motion.div>
              </div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              onClick={handlePrevious}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-900 p-2 md:p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <ChevronLeft size={20}  />
            </motion.button>
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-900 p-2 md:p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;