import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function OrbitController() {
  const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg;
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(7.5));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(60));
      orbitControlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      enableZoom={false}
      enableDamping={true}
      dampingFactor={0.0015}
      ref={orbitControlsRef}
      minPolarAngle={angleToRadians(60)}
      maxPolarAngle={angleToRadians(65)}
    />
  );
}
