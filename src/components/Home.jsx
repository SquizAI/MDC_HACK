import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png' // Adjust the path as necessary

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 z-10" />
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.pixabay.com/vimeo/328714108/AI%20-%2018316.mp4?width=1280&hash=0c6c5805ea3856bffd21a89e3c8404c0c1dde4d4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto"
          >
            <img src={logo} alt="MDC Hackathon Logo" className="mx-auto mb-6 w-40 h-auto" />
            <h1 className="text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
              MDC AI Hackathon
            </h1>
            <p className="text-2xl text-blue-100 mb-8">
              Transform Your Ideas into Reality with AI
            </p>
            <p className="text-lg text-blue-100 mb-8">
              Whether you're a beginner or an expert, everyone is welcome to compete and innovate!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register Now
                <svg
                  className="w-5 h-5 ml-2 -mr-1 transition-all duration-200 ease-out transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                to="/schedule"
                className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 border-2 border-white rounded-full hover:bg-white hover:text-purple-600 focus:outline-none"
              >
                View Schedule
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="bg-gradient-to-b from-purple-900 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Feature Cards */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative p-8 bg-gray-900 rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="text-5xl font-bold text-white mb-4">$5K</div>
                <h3 className="text-xl font-bold text-white mb-2">In Prizes</h3>
                <p className="text-gray-300">Compete for substantial cash prizes and recognition</p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative p-8 bg-gray-900 rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="text-5xl font-bold text-white mb-4">20+</div>
                <h3 className="text-xl font-bold text-white mb-2">Mentors</h3>
                <p className="text-gray-300">Get guidance from industry experts</p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative p-8 bg-gray-900 rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="text-5xl font-bold text-white mb-4">72h</div>
                <h3 className="text-xl font-bold text-white mb-2">Of Innovation</h3>
                <p className="text-gray-300">Three days of intensive learning and building</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Highlight Cards */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800"
                alt="AI Workshop"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">AI Workshops</h3>
                  <p className="text-gray-300">Learn from industry experts</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800"
                alt="Networking"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Networking</h3>
                  <p className="text-gray-300">Connect with fellow innovators</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800"
                alt="Project Showcase"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Project Showcase</h3>
                  <p className="text-gray-300">Present your innovations</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="bg-gradient-to-b from-blue-900 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Awards & Recognition</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Award Cards */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Best Overall</h3>
              <p className="text-gray-700">Awarded to the team with the most outstanding project overall.</p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Most Innovative</h3>
              <p className="text-gray-700">Recognizing the team with the most creative and groundbreaking idea.</p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Best Technical Solution</h3>
              <p className="text-gray-700">For the team that demonstrates exceptional technical skills and execution.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Our Sponsors</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img
              src="https://via.placeholder.com/150x50?text=Sponsor+1"
              alt="Sponsor 1"
              className="h-12"
            />
            <img
              src="https://via.placeholder.com/150x50?text=Sponsor+2"
              alt="Sponsor 2"
              className="h-12"
            />
            <img
              src="https://via.placeholder.com/150x50?text=Sponsor+3"
              alt="Sponsor 3"
              className="h-12"
            />
            <img
              src="https://via.placeholder.com/150x50?text=Sponsor+4"
              alt="Sponsor 4"
              className="h-12"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-purple-900/95"></div>
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3"
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Ideas?</h2>
            <p className="text-xl text-blue-200 mb-8">Join us for an unforgettable journey of innovation</p>
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-purple-900 transition-all duration-200 bg-white rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register Now
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
