import React, { useRef, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import page from "../../images/Screen2.png";
import * as THREE from "three";
import { TextureLoader } from "three";

function Model(props, ref) {
  const texture = useLoader(TextureLoader, page);
  texture.flipY = false;
  texture.generateMipmaps = false;
  const { nodes, materials } = useGLTF("/models/laptop.glb");
  const laptop = useRef();
  return (
    <group castShadow {...props} ref={laptop} dispose={null}>
      <group
        // onClick={() => {
        //   window.open("https://cam-petrie.vercel.app/", "_blank");
        // }}
        //opening twice for some reason
        castShadow
        scale={[0.4175, 0.0109375, 0.3109375]}
      >
        <mesh
          castShadow
          geometry={nodes.Cube.geometry}

          // material={materials.Material}
        >
          <meshBasicMaterial side={THREE.DoubleSide} map={texture} />
        </mesh>
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
