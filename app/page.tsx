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
        <Canvas 
          className="absolute inset-0"
          shadows
          camera={{ position: [8, 5, 8], fov: 45 }}
          gl={{ antialias: true }}
        >
          <PerspectiveCamera makeDefault position={[8, 5, 8]} />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2.5} 
            minPolarAngle={Math.PI / 4}
          />
          <Scene />
        </Canvas>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-5 z-10 pt-32 text-center text-white"
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

// Enhanced scene component
function Scene() {
  return (
    <group>
      <ambientLight intensity={0.3} />
      <directionalLight 
        position={[5, 8, 3]} 
        intensity={1.5} 
        castShadow
      />
      <TerrainWithGrid />
      <SurveyEquipment position={[2, 0, -1]} />
      <Surveyor position={[-1.5, 0, 1]} />
      <Trees />
      <Buildings />
      <Environment preset="sunset" />
      <fog attach="fog" args={['#1f2937', 5, 25]} />
    </group>
  )
}

function TerrainWithGrid() {
  return (
    <group>
      {/* Main terrain */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -0.5, 0]}
        receiveShadow
      >
        <planeGeometry args={[40, 40, 64, 64]} />
        <meshStandardMaterial 
          color="#4a9553"
          wireframe
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>
      
      {/* Survey grid overlay */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -0.48, 0]}
      >
        <planeGeometry args={[40, 40, 20, 20]} />
        <meshStandardMaterial 
          color="#ffffff"
          wireframe
          opacity={0.1}
          transparent
          metalness={0}
          roughness={1}
        />
      </mesh>
    </group>
  )
}

function Trees() {
  return (
    <group>
      {[...Array(10)].map((_, i) => (
        <group 
          key={i} 
          position={[
            Math.sin(i * Math.PI * 2 / 10) * 8,
            0,
            Math.cos(i * Math.PI * 2 / 10) * 8
          ]}
        >
          {/* Tree trunk */}
          <mesh position={[0, 0.75, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 1.5, 8]} />
            <meshStandardMaterial color="#5c4033" />
          </mesh>
          {/* Tree top */}
          <mesh position={[0, 1.75, 0]}>
            <coneGeometry args={[1, 2, 8]} />
            <meshStandardMaterial color="#2d5a27" />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function Buildings() {
  return (
    <group>
      {[...Array(5)].map((_, i) => (
        <group
          key={i}
          position={[
            Math.sin(i * Math.PI * 2 / 5) * 15,
            0,
            Math.cos(i * Math.PI * 2 / 5) * 15
          ]}
          rotation={[0, Math.random() * Math.PI, 0]}
        >
          {/* Building base */}
          <mesh position={[0, 2 + Math.random() * 3, 0]} castShadow>
            <boxGeometry args={[3, 4 + Math.random() * 4, 3]} />
            <meshStandardMaterial 
              color={`#${Math.floor(Math.random()*16777215).toString(16)}`} 
              metalness={0.2}
              roughness={0.8}
            />
          </mesh>
          {/* Windows */}
          <Windows position={[0, 2, 0]} />
        </group>
      ))}
    </group>
  )
}

function Windows({ position }:{position:any}) {
  return (
    <group position={position}>
      {[...Array(6)].map((_, i) => (
        <mesh 
          key={i} 
          position={[
            1.51, // Offset from building surface
            i * 0.8 - 1.5, // Vertical spacing
            0
          ]}
        >
          <planeGeometry args={[0.5, 0.5]} />
          <meshStandardMaterial 
            color="#88ccff"
            emissive="#88ccff"
            emissiveIntensity={0.2}
            metalness={1}
            roughness={0}
          />
        </mesh>
      ))}
    </group>
  )
}

function SurveyEquipment({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Tripod */}
      <mesh position={[0, 0.75, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.5, 8]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      {/* Total Station body */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#2c2c2c" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Lens */}
      <mesh position={[0.2, 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.2, 16]} />
        <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

function Surveyor({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Body */}
      <mesh position={[0, 1, 0]}>
        <capsuleGeometry args={[0.25, 1, 8]} />
        <meshStandardMaterial color="#2c4a7c" />
      </mesh>
      {/* Head */}
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#ffd3b6" />
      </mesh>
      {/* Safety Vest */}
      <mesh position={[0, 1.1, 0.15]}>
        <boxGeometry args={[0.5, 0.6, 0.1]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>
      {/* Helmet */}
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.2, 0.22, 0.2, 16]} />
        <meshStandardMaterial color="#fbbf24" />
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
