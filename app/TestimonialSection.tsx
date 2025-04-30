'use client'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Mohanan K",
    role: "BUsiness Owner",
    feedback: "MK Land Survey provided exceptional service. Their team was professional, accurate, and delivered on time. Highly recommended!",
    image: "/user.jpg",
  },
  {
    name: "Rmaesh Kumar",
    role: "Architect",
    feedback: "The topographic surveys from MK Land Survey were incredibly detailed and precise. They made my project planning seamless.",
    image: "/user.jpg",
  },
  {
    name: "Suresh Babu",
    role: "Construction Manager",
    feedback: "Their boundary surveys were spot on. The team was knowledgeable and ensured everything was compliant with regulations.",
    image: "/user.jpg",
  },
]

export default function TestimonialSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-gray-900"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-white mb-8"
        >
          What Our Clients Say
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-12"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
              />
              <div className="ml-4">
                <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">{testimonial.feedback}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}