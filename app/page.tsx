'use client'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-[url('/images/survey-bg.jpg')] bg-cover bg-center opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 animate-gradient"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              delay: 0.2 
            }}
            className="text-6xl sm:text-8xl font-bold mb-8 
                     [text-shadow:_0_2px_0_rgb(0_0_0_/_40%),_0_4px_12px_rgb(0_0_0_/_20%)]
                     transform-gpu hover:scale-105 transition-all duration-300
                     bg-clip-text text-transparent bg-gradient-to-r from-white via-green-300 to-white
                     animate-gradient-x"
          >
            MK Land Survey
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-3xl text-gray-300 max-w-2xl mx-auto mb-12
                     [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]
                     animate-pulse-slow"
          >
            Precision Mapping for Your Future
          </motion.p>
        
          <motion.a
            href="tel:+919605257629"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgb(34 197 94 / 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-12 py-4 bg-gradient-to-r from-green-500 to-green-600 
                     text-white text-lg rounded-full font-semibold 
                     hover:from-green-600 hover:to-green-700
                     transition-all duration-300 transform
                     shadow-[0_0_15px_rgb(34_197_94_/_0.3)]
                     border border-green-400/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            Call Now
          </motion.a>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -bottom-1/2 left-0 w-full h-full 
                      bg-gradient-to-t from-gray-900 to-transparent opacity-90"></div>
      </section>

      {/* Services Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 mb-12 sm:mb-24 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white px-2">
              Our Services
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-green-500 mx-auto"></div>
          </div>
          
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03, 
                  backgroundColor: 'rgba(74, 149, 83, 0.2)',
                  transition: { duration: 0.2 }
                }}
                className="bg-gray-800/50 p-4 sm:p-6 lg:p-8 rounded-xl text-white border border-gray-700/50 
                          backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300
                          flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-green-400 line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

const services = [
  {
    title: "Boundary Surveys",
    description: "Accurate determination of property lines and corners."
  },
  {
    title: "Topographic Surveys",
    description: "Detailed mapping of land elevation and features."
  },
  {
    title: "Construction Layout",
    description: "Precise positioning for construction projects."
  },
  {
    title: "Property Partition",
    description: "Professional subdivision and partitioning of land parcels."
  },
  {
    title: "Condominium Surveys",
    description: "Specialized surveys for condominium development and planning."
  },
  {
    title: "Land Title Surveys",
    description: "Comprehensive surveys for legal documentation and title registration."
  }
]
