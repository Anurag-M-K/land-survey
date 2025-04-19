'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useGLTF, Environment } from '@react-three/drei'
import { motion } from 'framer-motion'

useGLTF.preload('/models/total-station.glb')
useGLTF.preload('/models/surveyor.glb')

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section with 3D Terrain */}
      <section className="h-screen relative">
        <Canvas className="absolute inset-0">
          <PerspectiveCamera makeDefault position={[0, 5, 10]} />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2} 
          />
          <Scene />
        </Canvas>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 pt-32 text-center text-white"
        >
          <h1 className="text-6xl font-bold mb-4 my-6">MK Land Survey</h1>
          <p className="text-xl text-gray-300">Precision Mapping for Your Future</p>
        </motion.div>
      </section>

      {/* Services Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16">
            Our Services
          </h2>
          
          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                className="bg-gray-800/50 p-6 sm:p-8 rounded-xl text-white border border-gray-700/50 
                          backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300
                          flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-400">{service.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

// Enhanced scene component
function Scene() {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Terrain />
      <SurveyEquipment position={[2, 0, 0]} />
      <Surveyor position={[-2, 0, 1]} />
      <Environment preset="sunset" />
    </group>
  )
}

function Terrain() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[30, 30, 64, 64]} />
      <meshStandardMaterial 
        color="#4a9553"
        wireframe
        metalness={0.1}
        roughness={0.8}
      />
    </mesh>
  )
}

function SurveyEquipment({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <cylinderGeometry args={[0.3, 0.3, 1.5, 8]} />
      <meshStandardMaterial color="#666666" />
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
    </mesh>
  )
}

function Surveyor({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 1, 0]}>
        <capsuleGeometry args={[0.3, 1, 8]} />
        <meshStandardMaterial color="#2c4a7c" />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#ffd3b6" />
      </mesh>
    </group>
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
