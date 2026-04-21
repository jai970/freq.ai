import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, RoundedBox, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function PhoneModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    // Smooth idle rotation
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, hovered ? Math.PI * 0.15 : Math.sin(t * 0.2) * 0.2, 0.1);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, hovered ? -Math.PI * 0.1 : Math.cos(t * 0.2) * 0.1, 0.1);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <RoundedBox
        ref={meshRef}
        args={[3, 5.5, 0.2]} // Phone dimensions
        radius={0.3} // Corner radius
        smoothness={4}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshStandardMaterial color="#0A0A0A" metalness={1} roughness={0.05} />
        
        {/* Screen */}
        <mesh position={[0, 0, 0.11]}>
          <planeGeometry args={[2.7, 5.1]} />
          <meshStandardMaterial 
            color="#000" 
            emissive="#22D3EE" 
            emissiveIntensity={0.4} 
            roughness={0} 
            metalness={1}
          />
        </mesh>
        
        {/* Glowing "Assistant Mode" circle */}
        <mesh position={[0, 0, 0.12]}>
          <circleGeometry args={[0.4, 64]} />
          <MeshDistortMaterial 
            color="#22D3EE" 
            speed={2} 
            distort={0.4} 
            radius={1}
            emissive="#22D3EE"
            emissiveIntensity={1}
          />
        </mesh>

        {/* Small "Speaker" or "Notch" */}
        <mesh position={[0, 2.3, 0.11]}>
          <capsuleGeometry args={[0.05, 0.4, 4, 16]} />
          <meshStandardMaterial color="#222" />
        </mesh>
      </RoundedBox>
    </Float>
  );
}

const motion = {
  mesh: "mesh",
};

export default function ThreePhone() {
  return (
    <div className="w-full h-[400px] md:h-[600px] relative">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} color="#5B21B6" intensity={1} />
        <pointLight position={[5, 5, 5]} color="#22D3EE" intensity={0.5} />
        
        <PhoneModel />
        
        <Environment preset="city" />
        <ContactShadows 
          position={[0, -3.5, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2.5} 
          far={4} 
        />
      </Canvas>
      
      {/* Decorative Label */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:flex flex-col items-end pointer-events-none">
        <div className="h-px w-24 bg-primary/20 mb-2" />
        <span className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">PROTO: freq_v3</span>
        <span className="text-[10px] font-mono text-white/20">BIO-SYNC ENABLED</span>
      </div>
    </div>
  );
}
