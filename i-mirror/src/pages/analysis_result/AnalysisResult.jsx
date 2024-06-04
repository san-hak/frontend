import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as A from "./AnalysisResult.Style";
import { patientList } from "../../constant/patientList";

const Scene = () => {
  const { scene } = useGLTF("/models/MDA_man.glb");
  const modelRef = useRef();
  const { camera, gl } = useThree();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.y = -1;
    }
  }, [scene]);

  // 애니메이션
  useFrame(() => {
    gl.render(scene, camera);
  });

  // 조명 설정
  return (
    <>
      <ambientLight />
      <directionalLight position={[0, 3, -3]} intensity={1} />
      <directionalLight position={[0, 3, 3]} intensity={1} />
      <directionalLight position={[0, -100, 0]} intensity={1} />
      <primitive object={scene} ref={modelRef} />
      <Spheres />
      <OrbitControls maxPolarAngle={1.5} minPolarAngle={1.5} />
    </>
  );
};

// 여러 문제 부위(?) [ 서버에서 받은 데이터를 표준과 비교해서 차이가 심하다면 => 구체 표시 : 차이가 심하지 않다면 구체 표시X  ]
const Spheres = () => {
  const spheresData = [
    { position: [0, 0.6, -0.065], size: 0.05 }, // 목 틀어짐
    { position: [-0.05, 0.53, -0.04], size: 0.075 }, // 왼쪽 어깨 내려감
    { position: [0.05, 0.53, -0.04], size: 0.075 }, // 오른쪽 어깨 내려감
    { position: [-0.15, 0.53, -0.04], size: 0.075 }, // 왼쪽 어깨 말림
    { position: [0.15, 0.53, -0.04], size: 0.075 }, // 오른쪽 어깨 말림
    { position: [-0.15, 0, -0.02], size: 0.075 }, // 왼쪽 다리가 왼쪽보다 짧음
    { position: [0.15, 0, -0.02], size: 0.075 }, // 오른쪽 다리가 왼쪽보다 짧음
  ];

  return spheresData.map((sphere, index) => (
    <mesh key={index} position={sphere.position}>
      <sphereGeometry args={[sphere.size]} />
      <meshBasicMaterial color="rgb(255, 0, 0)" transparent opacity={0.7} />
    </mesh>
  ));
};

const CanvasComponent = () => {
  const canvasRef = useRef();

  return (
    <Canvas
      style={{ width: "50%", height: "50vh", border: "1px solid red" }}
      camera={{ position: [0, 0, 3], fov: 50 }}
    >
      <Scene />
    </Canvas>
  );
};

// 이제 여따가 서버에서 받은 데이터로 차트 처 만들껀데 그래프 하나에 다 때려 처박을까

const AnalysisResult = () => {
  const { koreanName } = useParams();
  const patient = patientList.find(
    (patient) => patient.koreanName === koreanName
  );

  return (
    <A.AnalysisResultLayout>
      <A.AnalysisResultContainer>
        <A.AnalysisResultPaper>
          <>{patient.koreanName}</>
          <CanvasComponent />
        </A.AnalysisResultPaper>
        <A.AnalysisResultPaper>22</A.AnalysisResultPaper>
      </A.AnalysisResultContainer>
    </A.AnalysisResultLayout>
  );
};

export default AnalysisResult;
