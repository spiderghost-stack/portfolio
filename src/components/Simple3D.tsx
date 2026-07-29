import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type * as THREE from "three";

/**
 * Cube simple qui tourne - version minimaliste pour tester
 */
function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00D9FF" wireframe />
    </mesh>
  );
}

/**
 * Torus (anneau) qui tourne
 */
function RotatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusGeometry args={[3, 0.1, 16, 100]} />
      <meshStandardMaterial color="#5CEFFF" transparent opacity={0.5} />
    </mesh>
  );
}

/**
 * Scène 3D simple
 */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingCube />
      <RotatingTorus />
    </>
  );
}

/**
 * Canvas 3D ultra-simple et garanti fonctionnel
 */
export default function Simple3D() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
