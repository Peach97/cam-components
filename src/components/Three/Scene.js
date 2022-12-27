import * as React from "react";
import { Canvas, Shawo } from "@react-three/fiber";
import OrbitController from "./OrbitController";
import { PerspectiveCamera } from "@react-three/drei";
import Model from "./Laptop";

export default function Scene() {
  const canvasStyles = {
    background: "transparent",
    height: "100vh",
    width: "60%",
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 99,
  };

  return (
    <Canvas style={canvasStyles}>
      <PerspectiveCamera position={[0, 0.25, 1.1]} makeDefault />
      <directionalLight
        position={[1, 1, 3]}
        intensity={3}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />
      <Model castShadow rotation={[-0.2, 0, 0]} position={[0, -0.25, 0]} />
      <ambientLight intensity={2} />
      <OrbitController />
    </Canvas>
  );
}
