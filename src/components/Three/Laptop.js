import React, { useRef, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

function Model(props, ref) {
  const { nodes, materials } = useGLTF("/models/laptop.glb");
  const laptop = useRef();
  return (
    <group castShadow {...props} ref={laptop} dispose={null}>
      <group castShadow scale={[0.4175, 0.0109375, 0.3109375]}>
        <mesh
          castShadow
          geometry={nodes.Cube.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.laptop}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/laptop.glb");
export default forwardRef(Model);
