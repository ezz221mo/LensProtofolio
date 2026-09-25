import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import styles from './ThreeBackground.module.css';

interface Shape {
  position: [number, number, number];
  rotationSpeed: number;
  type: 'icosahedron' | 'octahedron' | 'torus';
  gold: boolean;
}

const SHAPES: Shape[] = [
  { position: [-5, 3, -3], rotationSpeed: 0.008, type: 'icosahedron', gold: true },
  { position: [5, -2.5, -4], rotationSpeed: 0.01, type: 'octahedron', gold: false },
  { position: [3, 4, -6], rotationSpeed: 0.006, type: 'torus', gold: false },
  { position: [-4, -4, -5], rotationSpeed: 0.012, type: 'icosahedron', gold: false },
  { position: [6, 1, -7], rotationSpeed: 0.009, type: 'octahedron', gold: true },
  { position: [-7, 0.5, -4], rotationSpeed: 0.007, type: 'torus', gold: true },
  { position: [1, -5, -8], rotationSpeed: 0.011, type: 'octahedron', gold: false },
  { position: [-2, 6, -6], rotationSpeed: 0.008, type: 'torus', gold: true },
];

/** Particle field background */
function Particles({ density }: { density: 'full' | 'sparse' }) {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = density === 'full' ? 700 : 380;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;

      const isGold = Math.random() > 0.7;
      colors[i] = isGold ? 0.83 : 1;
      colors[i + 1] = isGold ? 0.69 : 1;
      colors[i + 2] = isGold ? 0.22 : 1;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.0008;
      ref.current.rotation.x = state.mouse.y * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** Floating wireframe geometry */
function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        child.rotation.x += SHAPES[index].rotationSpeed;
        child.rotation.y += SHAPES[index].rotationSpeed * 1.4;
        child.position.y +=
          Math.sin(clock.elapsedTime + index) * 0.0008;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {SHAPES.map((shape, index) => (
        <mesh key={index} position={shape.position}>
          {shape.type === 'icosahedron' ? (
            <icosahedronGeometry args={[0.5, 0]} />
          ) : shape.type === 'octahedron' ? (
            <octahedronGeometry args={[0.45, 0]} />
          ) : (
            <torusGeometry args={[0.35, 0.1, 16, 100]} />
          )}
          <meshBasicMaterial
            color={shape.gold ? 0xd4af37 : 0xffffff}
            wireframe
            transparent
            opacity={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

interface ThreeBackgroundProps {
  /** 'full' = rich scene (default, hero), 'sparse' = lighter scene for content-heavy pages. */
  density?: 'full' | 'sparse';
}

/** Full-screen interactive 3D scene. Adaptable per page but keeps one visual language. */
export function ThreeBackground({ density = 'full' }: ThreeBackgroundProps) {
  return (
    <div className={styles.canvas} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Particles density={density} />
        {density === 'full' && <FloatingShapes />}
      </Canvas>
    </div>
  );
}
