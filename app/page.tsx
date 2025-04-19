'use client'
import { motion } from 'framer-motion'
const services = [
  {
    icon: "M15 7h3a5 5 0 015 5 5 5 0 01-5 5m-5-5h5M4 7h3m8 8h3m-12 4l6-6m0 0l6-6m-6 6L4 7m6 6l6 6",
    title: "Boundary Surveys",
    description: "Expert determination of property boundaries using advanced GPS and total station equipment. We ensure precise marking of property lines and corners."
  },
  {
    icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7m6 10a2 2 0 002 2h2a2 2 0 002-2M9 7h6m-6 0H5a2 2 0 00-2 2v8a2 2 0 002 2h2a2 2 0 002-2m0-10a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V7z",
    title: "Topographic Surveys",
    description: "Comprehensive 3D mapping of land elevation, natural features, and site improvements for precise terrain visualization."
  },
  {
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
    title: "Land Partition",
    description: "Professional subdivision of land parcels with accurate measurements and legal documentation for property division."
  },
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "Condooring",
    description: "Specialized surveys for multi-unit developments and condominiums, including floor plans and common areas."
  },
  {
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    title: "Plot Survey",
    description: "Detailed plot measurements and mapping for residential and commercial properties with boundary markings."
  },
  {
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
    title: "Land Registration",
    description: "Complete assistance with land registration processes, including documentation and legal compliance verification."
  }
]
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/survey-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 animate-gradient"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          {/* Title */}
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
            className="text-6xl sm:text-8xl font-bold mb-6 
                     [text-shadow:_0_2px_0_rgb(0_0_0_/_40%),_0_4px_12px_rgb(0_0_0_/_20%)]
                     transform-gpu hover:scale-105 transition-all duration-300
                     bg-clip-text text-transparent bg-gradient-to-r from-white via-green-300 to-white
                     animate-gradient-x"
          >
            MK Land Survey
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-3xl text-gray-300 max-w-2xl mx-auto mb-8
                     [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]
                     animate-pulse-slow"
          >
            Precision Mapping for Your Future
          </motion.p>

          {/* Details */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            We specialize in providing accurate and reliable land surveying services for residential, commercial, and industrial projects. Trust us for boundary surveys, topographic mapping, and more.
          </motion.p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              Call Now
            </motion.a>

            <motion.a
              href="#services" // Link to the services section using the id
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-12 py-4 bg-gray-700/50 
                         text-white text-lg rounded-full font-semibold 
                         hover:bg-gray-700 hover:text-green-400
                         transition-all duration-300 transform
                         shadow-[0_0_15px_rgb(0_0_0_/_0.3)]
                         border border-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zM8 16l3-3H8V7h8v6h-3l3 3H8z" />
              </svg>
              Learn More
            </motion.a>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-1/2 left-0 w-full h-full bg-gradient-to-t from-gray-900 to-transparent opacity-90"></div>
      </section>

      {/* Services Section */}
      <motion.section 
        id="services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16 sm:mb-24">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent 
                       bg-gradient-to-r from-white via-green-300 to-white
                       [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]"
            >
              Our Services
            </motion.h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full"></div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto font-light"
            >
              Professional land surveying solutions tailored to your specific needs
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: 'rgba(74, 149, 83, 0.1)',
                }}
                className="group relative overflow-hidden bg-gray-800/40 p-8 rounded-2xl
                          border border-gray-700/50 backdrop-blur-sm
                          shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                          hover:shadow-[0_8px_30px_rgb(34,197,94,0.1)]
                          hover:border-green-500/30
                          transition-all duration-300"
              >
                {/* Decorative gradient blob */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl 
                              group-hover:bg-green-500/20 transition-colors duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 
                                  flex items-center justify-center shadow-lg group-hover:shadow-green-500/25">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 
                                 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
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
