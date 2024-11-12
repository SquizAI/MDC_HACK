import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png' // Adjust the path as necessary

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="MDC Hackathon Logo" className="w-32 h-auto" />
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/schedule" className="text-gray-600 hover:text-blue-600 font-medium">
              Schedule
            </Link>
            <Link to="/register" className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
