import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Anneaux orbitaux animés - rappellent les modèles atomiques
 * en lien avec le profil Physique-Chimie
 */
function OrbitalRings() {
  const ring1 = useRef<THREE.Mesh>(null!);
  const ring2 = useRef<THREE.Mesh>(null!);
  const ring3 = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.5;
      ring1.current.rotation.y = t * 0.3;
    }
    if (ring2.current) {
      ring2.current.rotation.x = t * 0.4;
      ring2.current.rotation.z = t * 0.2;
    }
    if (ring3.current) {
      ring3.current.rotation.y = t * 0.6;
      ring3.current.rotation.z = t * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={ring1}>
        <torusGeometry args={[3, 0.05, 16, 100]} />
        <meshStandardMaterial color="#00D9FF" transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[3.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="#5CEFFF" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring3}>
        <torusGeometry args={[4, 0.05, 16, 100]} />
        <meshStandardMaterial color="#00A8C7" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

/**
 * Sphère centrale avec effet wireframe
 */
function CentralSphere() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.2;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={mesh} scale={2}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#00D9FF"
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

/**
 * Particules flottantes
 */
function FloatingParticles() {
  const count = 50;
  const particlesRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particles = [];
  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * 15;
    const y = (Math.random() - 0.5) * 15;
    const z = (Math.random() - 0.5) * 15;
    particles.push(
      <mesh key={i} position={[x, y, z]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#00D9FF" emissive="#00D9FF" emissiveIntensity={0.5} />
      </mesh>
    );
  }

  return <group ref={particlesRef}>{particles}</group>;
}

/**
 * Scène 3D complète pour le Hero
 */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#00D9FF" />

      <CentralSphere />
      <OrbitalRings />
      <FloatingParticles />
    </>
  );
}

/**
 * Composant Canvas 3D pour le Hero.
 * Affiche une composition inspirée du profil Physique-Chimie :
 * sphère wireframe, anneaux orbitaux et particules flottantes.
 */
export default function Hero3D() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
