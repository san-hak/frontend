import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as A from "./AnalysisResult.Style";
import { patientList } from "../../constant/patientList";
import iMirrorLogo from "../../asset/img/i-mirror_logo.svg";

// Scene Component
const Scene = () => {
  const { scene } = useGLTF("/models/MDA_man.glb");
  const modelRef = useRef();
  const { camera, gl } = useThree();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.y = -1;
    }
  }, [scene]);

  useFrame(() => {
    gl.render(scene, camera);
  });

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

// Spheres Component
const Spheres = () => {
  const spheresData = [
    { position: [0, 0.6, -0.065], size: 0.05 }, // 목 틀어짐
    { position: [-0.08, -0.45, 0.04], size: 0.075 }, // 왼쪽 무릎 틀어짐
    { position: [0.08, -0.45, 0.04], size: 0.075 }, // 오른쪽 무릎 틀어짐
    { position: [-0.15, 0.53, -0.04], size: 0.075 }, // 왼쪽 어깨 말림
    { position: [0.15, 0.53, -0.04], size: 0.075 }, // 오른쪽 어깨 말림
    { position: [-0.15, 0, -0.02], size: 0.075 }, // 왼쪽 다리가 오른쪽보다 짧음
    { position: [0.15, 0, -0.02], size: 0.075 }, // 오른쪽 다리가 왼쪽보다 짧음
  ];

  return spheresData.map((sphere, index) => (
    <mesh key={index} position={sphere.position}>
      <sphereGeometry args={[sphere.size]} />
      <meshBasicMaterial color="rgb(255, 0, 0)" transparent opacity={0.7} />
    </mesh>
  ));
};

// CanvasComponent
const CanvasComponent = () => {
  return (
    <A.AvatarLayout>
      <A.AvatarContainer>
        <Canvas camera={{ position: [0, 0, 3], fov: 40 }}>
          <Scene />
        </Canvas>
      </A.AvatarContainer>
    </A.AvatarLayout>
  );
};

// ResultTable Component
const ResultTable = () => {
  const { koreanName } = useParams();
  const patient = patientList.find(
    (patient) => patient.koreanName === koreanName
  );

  if (!patient) {
    return null;
  }

  return (
    <A.ResultTable>
      <A.ResultTr>
        <A.ResultTd>1</A.ResultTd>
        <A.ResultTd>목 틀어짐</A.ResultTd>
        <A.ResultTd>앞으로 기울어짐</A.ResultTd>
        <A.ResultTd>{patient.neck.neckTwisted}</A.ResultTd>
      </A.ResultTr>
      <A.ResultTr>
        <A.ResultTd>2</A.ResultTd>
        <A.ResultTd>어깨 말림</A.ResultTd>
        <A.ResultTd>앞으로 말림</A.ResultTd>
        <A.ResultTd>왼 3.0 오 2.4</A.ResultTd>
      </A.ResultTr>
      <A.ResultTr>
        <A.ResultTd>3</A.ResultTd>
        <A.ResultTd>어깨 틀어짐</A.ResultTd>
        <A.ResultTd>왼쪽 내려감</A.ResultTd>
        <A.ResultTd>-</A.ResultTd>
      </A.ResultTr>
      <A.ResultTr>
        <A.ResultTd>4</A.ResultTd>
        <A.ResultTd>허리 틀어짐</A.ResultTd>
        <A.ResultTd>-</A.ResultTd>
        <A.ResultTd>20</A.ResultTd>
      </A.ResultTr>
      <A.ResultTr>
        <A.ResultTd>5</A.ResultTd>
        <A.ResultTd>골반 틀어짐</A.ResultTd>
        <A.ResultTd>왼쪽다리가 긺</A.ResultTd>
        <A.ResultTd>-</A.ResultTd>
      </A.ResultTr>
      <A.ResultTr>
        <A.ResultTd>6</A.ResultTd>
        <A.ResultTd>엉덩이 틀어짐</A.ResultTd>
        <A.ResultTd>-</A.ResultTd>
        <A.ResultTd>왼 3.0 오 2.4</A.ResultTd>
      </A.ResultTr>
      <A.ResultTr>
        <A.ResultTd>7</A.ResultTd>
        <A.ResultTd>무릎 틀어짐</A.ResultTd>
        <A.ResultTd>-</A.ResultTd>
        <A.ResultTd>왼 3.0 오 2.4</A.ResultTd>
      </A.ResultTr>
      <A.ResultTr>
        <A.ResultTd>8</A.ResultTd>
        <A.ResultTd>발목 틀어짐</A.ResultTd>
        <A.ResultTd>-</A.ResultTd>
        <A.ResultTd>왼 3.0 오 2.4</A.ResultTd>
      </A.ResultTr>
    </A.ResultTable>
  );
};

// AnalysisResult Component
const AnalysisResult = () => {
  const { koreanName } = useParams();
  const patient = patientList.find(
    (patient) => patient.koreanName === koreanName
  );

  if (!patient) {
    return <div>Patient not found</div>;
  }

  return (
    <A.AnalysisResultLayout>
      <A.AnalysisResultContainer>
        <A.AnalysisResultPaper>
          <A.AnalysisResultHeaderContainer>
            <A.HeaderLogo src={iMirrorLogo} alt="logo" />
            <A.HeaderTitle>Analysis Result</A.HeaderTitle>
            <A.PatientInfoDiv>
              <A.NameLabel>NAME: </A.NameLabel>
              <A.PatientName>{patient.koreanName}</A.PatientName>
              <A.BirthDateLabel>BIRTHDATE: </A.BirthDateLabel>
              <A.PatientBirthDate>{patient.birthDate}</A.PatientBirthDate>
              <A.GenderLabel>GENDER: </A.GenderLabel>
              <A.PatientGender>{patient.gender}</A.PatientGender>
              <A.PatientTestDate>{patient.testDate}</A.PatientTestDate>
            </A.PatientInfoDiv>
          </A.AnalysisResultHeaderContainer>
          <A.LineDiv>
            <A.Line />
          </A.LineDiv>
          <CanvasComponent />
          <A.ResultTableContainer>
            <ResultTable />
          </A.ResultTableContainer>
        </A.AnalysisResultPaper>
        <A.AnalysisResultPaper>Additional Information</A.AnalysisResultPaper>
      </A.AnalysisResultContainer>
    </A.AnalysisResultLayout>
  );
};

export default AnalysisResult;
