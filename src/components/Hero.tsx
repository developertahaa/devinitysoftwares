"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  { bgImage: "/back1.jpg", title: "We Build Digital" },
  { 
    bgImage: "/back2.jpg", 
    title: (
      <>
        Social Media <span className="text-lg md:text-6xl font-bold">Management</span>
      </>
    )
  },
  { bgImage: "/back3.jpg", title: "Website Development" }
]

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="h-screen w-screen overflow-hidden relative bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1, backgroundColor: "black" }}
          animate={{ opacity: 1, scale: 1, backgroundColor: "black" }}
          exit={{ opacity: 0, scale: 1.1, backgroundColor: "black" }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center text-white"
          style={{
            backgroundImage: `url(${slides[currentSlide].bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(50%)"
          }}
        >
          <div className="max-w-md text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">{slides[currentSlide].title}</h1>
            <p className="text-xl mb-8">Innovative Solutions for the Modern World</p>
            <button 
              className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            >
              Explore
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white w-6" : "bg-gray-400"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
