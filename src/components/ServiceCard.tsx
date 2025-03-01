"use client"

import  React from "react"
import { motion } from "framer-motion"
import type { ServiceCardProps } from "./type"

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, className }) => (
  <motion.div
    className={`bg-gray-100 p-6 rounded-lg ${className}`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </motion.div>
)

export default ServiceCard

