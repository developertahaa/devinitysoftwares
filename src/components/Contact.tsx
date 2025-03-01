"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity, but most web and app projects take 4-12 weeks from start to finish.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer tailored pricing based on project scope. Contact us for a free quote!",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer maintenance and support packages to keep your solutions running smoothly.",
  },
  {
    question: "Can you work with existing systems?",
    answer: "Absolutely! We specialize in integrating with and enhancing existing platforms.",
  },
];

const Contact: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const textVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const formVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const faqVariants = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-white text-gray-900 overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-cyan-400 to-green-400 rounded-lg rotate-45 opacity-20"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-16 relative z-10">
        <motion.h2
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          className="text-center text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-12 md:mb-16"
        >
          Get in{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        {/* Contact Form */}
        <motion.div
          variants={formVariants}
          initial="initial"
          whileInView="animate"
          className="max-w-2xl mx-auto bg-white shadow-2xl p-6 md:p-8 rounded-3xl border border-gray-100"
        >
          <form className="space-y-6">
            <div className="relative">
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder-gray-400 text-sm md:text-base"
              />
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                initial={{ scaleX: 0 }}
                whileFocus={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder-gray-400 text-sm md:text-base"
              />
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                initial={{ scaleX: 0 }}
                whileFocus={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder-gray-400 text-sm md:text-base"
              />
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                initial={{ scaleX: 0 }}
                whileFocus={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg text-sm md:text-base font-semibold transition-all shadow-lg hover:shadow-xl relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Send Message
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </form>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mt-12 md:mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-900">FAQs</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white shadow-md rounded-2xl p-4 md:p-6 border border-gray-100">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between text-left text-base md:text-lg font-semibold text-gray-900"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${expandedFAQ === index ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      variants={faqVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="mt-3 text-gray-600 text-sm md:text-base overflow-hidden"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;