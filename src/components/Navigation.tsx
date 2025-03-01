"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, Mail, Menu, X, ChevronRight, FolderGit2 } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Services", href: "#services", icon: Briefcase },
  { name: "Projects", href: "#project", icon: FolderGit2 }, 
  { name: "Contact", href: "#contact", icon: Mail },
]

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Home")

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      <motion.nav
        className={`fixed z-50 ${
          isScrolled ? "right-4 top-4 w-auto" : "left-0 top-0 w-full"
        } transition-all duration-300 ease-in-out`}
        initial={false}
        animate={isScrolled ? "scrolled" : "top"}
        variants={{
          top: { background: "rgba(0, 0, 0, 0.8)", padding: "1rem 2rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
          scrolled: { background: "rgba(13, 17, 23, 0.8)", backdropFilter: "blur(10px)", borderRadius: "16px", padding: "0.5rem" },
        }}
      >
        <div className={`flex ${isScrolled ? "flex-col items-end" : "items-center justify-between"}`}>
          {!isScrolled && (
            <motion.a href="#home" className="flex items-center space-x-3" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <img src="/whitelogo.png" alt="Logo" className="h-10 w-10" />
            </motion.a>
          )}
          <button className="text-white focus:outline-none md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <motion.ul className={`${isScrolled ? "flex-col space-y-2" : "hidden md:flex md:space-x-4"}`} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {navItems.map((item) => (
              <motion.li key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeItem === item.name ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white" : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => setActiveItem(item.name)}
                >
                  <item.icon size={20} />
                  {(!isScrolled || isOpen) && <span>{item.name}</span>}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="absolute right-0 top-0 h-full w-64 bg-gradient-to-b from-gray-900 to-gray-800 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <motion.li key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href={item.href}
                      className={`flex items-center justify-between space-x-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeItem === item.name ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white" : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                      onClick={() => {
                        setActiveItem(item.name)
                        setIsOpen(false)
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <item.icon size={20} />
                        <span>{item.name}</span>
                      </div>
                      <ChevronRight size={16} />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}

export default Navigation
