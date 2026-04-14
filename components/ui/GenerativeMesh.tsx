"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// High-Energy Pixel Nexus System
function PixelNexus() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const count = 400; // Grid density
  const gridSize = 20;
  
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (i % gridSize) - gridSize / 2;
      const y = Math.floor(i / gridSize) - gridSize / 2;
      temp.push({
        x: x * 2.2,
        y: y * 2.2,
        z: 0,
        r: Math.random() * Math.PI,
        s: 0.1 + Math.random() * 0.5,
      });
    }
    return temp;
  }, [count, gridSize]);

  useFrame((state) => {
    particles.forEach((p, i) => {
      const { x, y, r, s } = p;
      
      // Calculate distance to mouse in 3D space
      const dx = mouse.x * 20 - x;
      const dy = mouse.y * 12 - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Reactive excitement logic
      const activeFactor = Math.max(0, 1 - dist / 8);
      const scale = s + activeFactor * 1.5;
      const rotation = r + state.clock.elapsedTime * (0.5 + activeFactor * 2);
      const z = Math.sin(state.clock.elapsedTime + i) * 0.5 + activeFactor * 5;

      dummy.position.set(x, y, z);
      dummy.rotation.set(0, 0, rotation);
      dummy.scale.set(scale, scale, 1);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      
      // Color intensity based on activity
      const color = new THREE.Color();
      color.setHSL(0.5 + activeFactor * 0.2, 0.8, 0.4 + activeFactor * 0.4);
      meshRef.current.setColorAt(i, color);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null as any, null as any, count]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial transparent opacity={0.6} blending={THREE.AdditiveBlending} depthWrite={false} />
    </instancedMesh>
  );
}

// Overlapping Glitch Pixels
function GlitchOverlay() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const count = 40;
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const data = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 50,
      y: (Math.random() - 0.5) * 30,
      z: (Math.random() - 0.5) * 10,
      sX: Math.random() * 10,
      sY: Math.random() * 0.2,
      v: Math.random() * 0.5,
    }));
  }, [count]);

  useFrame((state) => {
    data.forEach((p, i) => {
      const time = state.clock.elapsedTime * p.v;
      const x = p.x + Math.sin(time) * 5;
      const y = p.y + Math.cos(time) * 2;
      
      dummy.position.set(x, y, p.z);
      dummy.scale.set(p.sX * (0.5 + Math.sin(state.clock.getElapsedTime() * 10 + i) * 0.5), p.sY, 1);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null as any, null as any, count]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color="#7000FF" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
    </instancedMesh>
  );
}

export default function GenerativeMeshCanvas() {
  return (
    <div className="absolute inset-0 z-0 bg-[#020305]">
      <Canvas camera={{ position: [0, 0, 25], fov: 45 }}>
        <fog attach="fog" args={["#020305", 20, 60]} />
        <PixelNexus />
        <GlitchOverlay />
        
        {/* Backdrop pulse */}
        <mesh position={[0, 0, -10]}>
           <planeGeometry args={[100, 100]} />
           <meshBasicMaterial color="#00E5FF" transparent opacity={0.01} />
        </mesh>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] pointer-events-none" />
    </div>
  );
}
