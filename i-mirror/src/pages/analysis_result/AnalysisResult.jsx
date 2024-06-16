import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as A from "./AnalysisResult.Style";
import iMirrorLogo from "../../asset/img/i-mirror_logo.svg";
<<<<<<< HEAD
import useCheckup from "../../hooks/auth/useCheckup";

const AnalysisResult = () => {
  const { koreanName, birthDate } = useParams();
  const [patient, setPatient] = useState(null);
  const { getCheckup } = useCheckup();

  useEffect(() => {
    const fetchCheckup = async () => {
      try {
        const data = await getCheckup(koreanName, birthDate);
        setPatient(data);
      } catch (error) {
        console.error("Error fetching checkup:", error);
      }
    };

    fetchCheckup();
  }, [koreanName, birthDate, getCheckup]);

  if (!patient) {
    return <div>Loading...</div>;
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
              <A.PatientName>{patient.memberName}</A.PatientName>
              <A.BirthDateLabel>BIRTHDATE: </A.BirthDateLabel>
              <A.PatientBirthDate>{patient.memberBirthDate}</A.PatientBirthDate>
              <A.GenderLabel>GENDER: </A.GenderLabel>
              <A.PatientGender>
                {patient.isMale ? "남자" : "여자"}
              </A.PatientGender>
              <A.PatientTestDate>{patient.recentTestDate}</A.PatientTestDate>
            </A.PatientInfoDiv>
          </A.AnalysisResultHeaderContainer>
          <A.LineDiv>
            <A.Line />
          </A.LineDiv>
          <CanvasComponent />
          <A.ResultTableContainer>
            <ResultTable patientData={patient} />
          </A.ResultTableContainer>
        </A.AnalysisResultPaper>
        <A.AnalysisResultPaper>22</A.AnalysisResultPaper>
      </A.AnalysisResultContainer>
    </A.AnalysisResultLayout>
  );
};

export default AnalysisResult;

const ResultTable = ({ patientData }) => {
  return (
    <A.ResultTable>
      <A.ResultTr>
        <A.ResultTd>1</A.ResultTd>
        <A.ResultTd>NeckTwisted</A.ResultTd>
        <A.ResultTd>
          {patientData.neckTwisted === 0.0 ? "목틀어짐" : "정상"}
        </A.ResultTd>
        <A.ResultTd>
          {patientData && patientData.neckTwisted !== undefined
            ? patientData.neckTwisted.toString()
            : "-"}
        </A.ResultTd>
      </A.ResultTr>
      <A.ResultTr>
        <A.ResultTd>2</A.ResultTd>
        <A.ResultTd>ShoulderRolled</A.ResultTd>
        <A.ResultTd>
          {patientData.shoulderRolled === 0.0 ? "어깨 말림" : "정상"}
        </A.ResultTd>
        <A.ResultTd>
          {patientData && patientData.shoulderRolled !== undefined
            ? patientData.shoulderRolled.toString()
            : "-"}
        </A.ResultTd>
      </A.ResultTr>
      <A.ResultTr>
        <A.ResultTd>3</A.ResultTd>
        <A.ResultTd>ShoulderTwisted</A.ResultTd>
        <A.ResultTd>
          {patientData.shoulderTwisted === 0.0 ? "어깨틀어짐" : "정상"}
        </A.ResultTd>
        <A.ResultTd>
          {patientData && patientData.shoulderTwisted !== undefined
            ? patientData.shoulderTwisted.toString()
            : "-"}
        </A.ResultTd>
      </A.ResultTr>
      <A.ResultTr>
        <A.ResultTd>4</A.ResultTd>
        <A.ResultTd>허리 틀어짐</A.ResultTd>
        <A.ResultTd>-</A.ResultTd>
        {/* <A.ResultTd>{patientData.pelvisTwisted}</A.ResultTd> */}
      </A.ResultTr>
      <A.ResultTr>
        <A.ResultTd>5</A.ResultTd>
        <A.ResultTd>PelvisTwisted</A.ResultTd>
        <A.ResultTd>
          {patientData.pelvisTwisted === 0.0 ? "골반틀어짐" : "정상"}
        </A.ResultTd>
        <A.ResultTd>
          {patientData && patientData.pelvisTwisted !== undefined
            ? patientData.pelvisTwisted.toString()
            : "-"}
        </A.ResultTd>
      </A.ResultTr>
      <A.ResultTr>
        <A.ResultTd>6</A.ResultTd>
        <A.ResultTd>엉덩이 틀어짐</A.ResultTd>
        <A.ResultTd>-</A.ResultTd>
        <A.ResultTd>
          {patientData.leftKneeRearAngle} / {patientData.rightKneeRearAngle}
        </A.ResultTd>
      </A.ResultTr>
      <A.ResultTr>
        <A.ResultTd>7</A.ResultTd>
        <A.ResultTd>무릎 틀어짐</A.ResultTd>
        <A.ResultTd>-</A.ResultTd>
        <A.ResultTd>
          왼: {patientData.leftKneeRearAngle === 0.0 ? "비정상" : "정상"} / 오:{" "}
          {patientData.rightKneeRearAngle === 0.0 ? "비정상" : "정상"}
        </A.ResultTd>
      </A.ResultTr>
      <A.ResultTr>
        <A.ResultTd>8</A.ResultTd>
        <A.ResultTd>발목 틀어짐</A.ResultTd>
        <A.ResultTd>-</A.ResultTd>
        <A.ResultTd>
          {patientData.leftKneeRearAngle} / {patientData.rightKneeRearAngle}
        </A.ResultTd>
      </A.ResultTr>
    </A.ResultTable>
  );
};
=======
import Chart from "../../components/Chart";
>>>>>>> aee6777d5d8b9a48336e15690e56f30b065dadf5

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
    { position: [-0.08, -0.45, 0.04], size: 0.075 }, // 왼쪽 무릎 틀어짐
    { position: [0.08, -0.45, 0.04], size: 0.075 }, // 오른쪽 무릎 틀어짐
    { position: [-0.15, 0.53, -0.04], size: 0.075 }, // 왼쪽 어깨 말림
    { position: [0.15, 0.53, -0.04], size: 0.075 }, // 오른쪽 어깨 말림
    { position: [-0.15, 0, -0.02], size: 0.075 }, // 왼쪽 다리가 왼쪽보다 짧음
    { position: [0.15, 0, -0.02], size: 0.075 }, // 오른쪽 다리가 왼쪽보다 짧음
    // { position: [-0.08, -0.85, -0.005], size: 0.065 }, // 왼쪽 발목 틀어짐
    // { position: [0.08, -0.85, -0.005], size: 0.065 }, // 오른쪽 발목 틀어짐
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
    <A.AvatarLayout>
      <A.AvatarContainer>
        <Canvas camera={{ position: [0, 0, 3], fov: 40 }}>
          <Scene />
        </Canvas>
      </A.AvatarContainer>
    </A.AvatarLayout>
  );
};

<<<<<<< HEAD
// 이제 여따가 서버에서 받은 데이터로 차트 처 만들껀데 그래프 하나에 다 때려 처박을까
=======
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
        <A.ResultTd>{patient.neckTwisted}</A.ResultTd>
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
          <Chart name={patient.koreanName} birth={patient.birthDate} />
        </A.AnalysisResultPaper>
      </A.AnalysisResultContainer>
    </A.AnalysisResultLayout>
  );
};

export default AnalysisResult;
>>>>>>> aee6777d5d8b9a48336e15690e56f30b065dadf5
