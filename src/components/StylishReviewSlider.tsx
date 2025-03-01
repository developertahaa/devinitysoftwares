"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Amina Khan",
    role: "Founder, Eco Ventures",
    quote: "Their website design transformed our online presence into something truly remarkable.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Carter",
    role: "Marketing Lead, Creative Hub",
    quote: "The social media strategy they crafted boosted our engagement beyond expectations.",
    rating: 4,
  },
  {
    id: 3,
    name: "Fatima Yusuf",
    role: "CEO, Tech Pioneers",
    quote: "A stunning website that perfectly captures our brand’s vision and values.",
    rating: 5,
  },
  {
    id: 4,
    name: "Oliver Brown",
    role: "Director, Innovate Solutions",
    quote: "Their social media management turned our followers into a thriving community.",
    rating: 4,
  },
  {
    id: 5,
    name: "Sara Ahmed",
    role: "CMO, Green Enterprises",
    quote: "Exceptional website development—sleek, fast, and user-friendly.",
    rating: 5,
  },
];

export default function StylishReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Show 1 review on mobile, 3 on larger screens
  const visibleReviews = window.innerWidth < 768 
    ? [reviews[currentIndex]]
    : [
        reviews[(currentIndex - 1 + reviews.length) % reviews.length],
        reviews[currentIndex],
        reviews[(currentIndex + 1) % reviews.length],
      ];

  const cardVariants = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, scale: 0.95, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const shapeVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 6, ease: "easeInOut", repeat: Infinity },
    },
  };

  return (
    <section
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-12 md:py-20 text-white relative overflow-hidden"
    >
      {/* Decorative Top Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500" />

      {/* Floating Decorative Elements */}
      <motion.div
        variants={shapeVariants}
        animate="animate"
        className="hidden md:block absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-purple-500/10 rounded-full transform translate-x-1/2 translate-y-1/2"
      />
      <motion.div
        variants={shapeVariants}
        animate="animate"
        className="hidden md:block absolute top-1/2 left-0 w-20 h-20 md:w-24 md:h-24 bg-blue-500/10 rounded-full transform -translate-x-1/2"
      />

      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mb-10 md:mb-16 text-white tracking-tight"
        >
          What Our{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Clients Say
          </span>
        </motion.h2>
        <div className="relative">
          <AnimatePresence initial={false}>
            <div className="flex justify-center items-stretch space-x-0 md:space-x-6 lg:space-x-8">
              {visibleReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full max-w-[300px] md:max-w-md bg-gray-800 rounded-lg p-6 md:p-8 shadow-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Subtle Accent Line */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  />
                  <div className="flex flex-col h-full justify-between z-10">
                    <div>
                      <div className="flex justify-end mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={`${i < review.rating ? "text-yellow-400" : "text-gray-600"} ml-1`}
                            fill={i < review.rating ? "#FBBF24" : "none"}
                          />
                        ))}
                      </div>
                      <p className="text-base md:text-xl lg:text-2xl text-white mb-4 md:mb-6 leading-relaxed italic relative">
                        <span className="absolute -top-4 md:-top-6 -left-3 md:-left-4 text-4xl md:text-5xl text-gray-600 opacity-20">“</span>
                        {review.quote}
                        <span className="absolute bottom-0 right-0 text-4xl md:text-5xl text-gray-600 opacity-20">”</span>
                      </p>
                    </div>
                    <div className="mt-4">
                      <p className="font-semibold text-base md:text-lg text-white">{review.name}</p>
                      <p className="text-xs md:text-sm text-gray-400">{review.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8 md:mt-12 space-x-4 md:space-x-6">
          <motion.button
            onClick={handlePrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 md:p-3 rounded-full bg-gray-800 bg-opacity-80 hover:bg-opacity-100 text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Previous review"
          >
            <ChevronLeft size={20}  />
          </motion.button>
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 md:p-3 rounded-full bg-gray-800 bg-opacity-80 hover:bg-opacity-100 text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}