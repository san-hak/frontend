export const searchByName = (searchTerm, list) => {
  const searchLower = searchTerm.toLowerCase();
  const filteredList = list.filter(
    (patient) =>
      patient.koreanName.toLowerCase().includes(searchLower) ||
      patient.englishName.toLowerCase().includes(searchLower)
  );
  return filteredList;
};

export const patientList = [
  {
    birthDate: "1980.12.01",
    koreanName: "홍길동",
    englishName: "HongRoadDong",
    gender: "남성",
    testDate: "2024.05.02 (월)",
    // rom: {
    //   sagittalNeckUpperAngle: 0,
    //   sagittalNeckLowerAngle: 0,
    //   frontalNeckLeftAngle: 0,
    //   frontalNeckRightAngle: 0,
    //   horizontalLeftArmUpperAngle: 0,
    //   horizontalLeftArmLowerAngle: 0,
    //   horizontalRightArmUpperAngle: 0,
    //   horizontalRightArmLowerAngle: 0,
    //   sagittalLeftArmFrontAngle: 0,
    //   sagittalLeftArmRearAngle: 0,
    //   sagittalRightArmFrontAngle: 0,
    //   sagittalRightArmRearAngle: 0,
    //   frontalLeftArmOuterAngle: 0,
    //   frontalLeftArmInnerAngle: 0,
    //   frontalRightArmOuterAngle: 0,
    //   frontalRightArmInnerAngle: 0,
    //   sagittalWaistRearAngle: 0,
    //   sagittalWaistFrontAngle: 0,
    //   frontalWaistLeftAngle: 0,
    //   frontalWaistRightAngle: 0,
    //   leftKneeRearAngle: 0,
    //   rightKneeRearAngle: 0,
    // },
    // balance: {
    //   headTwisted: "normal",
    //   shoulderTwisted: "normal",
    //   pelvisTwisted: "normal",
    //   neckTwisted: "normal",
    //   shoulderRolled: "normal",
    //   leftShoulderAngle: 0,
    //   rightShoulderAngle: 0,
    //   leftHipAngle: 0,
    //   rightHipAngle: 0,
    //   leftKneeAngle: 0,
    //   rightKneeAngle: 0,
    //   leftAnkleAngle: 0,
    //   rightAnkleAngle: 0,
    //   neckAngle: 0,
    //   waistAngle: 0,
    // },
  },
  {
    birthDate: "1999.06.18",
    koreanName: "김인수",
    englishName: "Len8818",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1234.05.07",
    koreanName: "육각형",
    englishName: "Six666666",
    gender: "남성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "2001.12.18",
    koreanName: "김세모",
    englishName: "KimTriangle",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "2006.09.02",
    koreanName: "김온수",
    englishName: "KimOnSu",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1980.12.01",
    koreanName: "길동순",
    englishName: "KillSoon",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "2000.01.01",
    koreanName: "홍홍홍",
    englishName: "Hong3Hong3",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1980.12.01",
    koreanName: "김대육",
    englishName: "6Tae54321",
    gender: "남성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1545.04.28",
    koreanName: "이순신",
    englishName: "12Lee1",
    gender: "남성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1980.12.01",
    koreanName: "제갈동",
    englishName: "DongGalll",
    gender: "남성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1980.12.01",
    koreanName: "이제길",
    englishName: "RoadLee",
    gender: "남성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1982.09.02",
    koreanName: "이다은",
    englishName: "DaKim123",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "2006.00.00",
    koreanName: "성의근",
    englishName: "regeno",
    gender: "남성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "2006.11.03",
    koreanName: "최현호",
    englishName: "QaQa1103",
    gender: "남성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "2006.11.23",
    koreanName: "양원준",
    englishName: "LAON2",
    gender: "남성",
    testDate: "2024.05.02 (월)",
  },
];
