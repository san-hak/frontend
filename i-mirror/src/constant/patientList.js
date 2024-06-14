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

    head: {
      //머리
      headTwisted: 30,
    },

    neck: {
      //목
      neckTwisted: 18,
      sagittalNeckUpperAngle: 30,
      sagittalNeckLowerAngle: 40,
      frontalNeckLeftAngle: 20,
      frontalNeckRightAngle: 20,
    },

    shoulder: {
      //어깨
      shoulderTwisted: 26,
      shoulderRolled: 18,
    },

    arm: {
      //팔
      horizontalLeftArmUpperAngle: 25,
      horizontalLeftArmLowerAngle: 25,
      horizontalRightArmUpperAngle: 30,
      horizontalRightArmLowerAngle: 30,
      sagittalLeftArmFrontAngle: 15,
      sagittalLeftArmRearAngle: 15,
      sagittalRightArmFrontAngle: 22,
      sagittalRightArmRearAngle: 22,
      frontalLeftArmOuterAngle: 14,
      frontalLeftArmInnerAngle: 14,
      frontalRightArmOuterAngle: 20,
      frontalRightArmInnerAngle: 20,
    },

    waist: {
      //허리
      sagittalWaistRearAngle: 15,
      sagittalWaistFrontAngle: 15,
      frontalWaistLeftAngle: 16,
      frontalWaistRightAngle: 21,
    },

    pelvis: {
      //골반
      pelvisTwisted: 26,
    },

    knee: {
      //무릎
      leftKneeRearAngle: 21,
      rightKneeRearAngle: 30,
    },
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
  {
    birthDate: "1616.16.16",
    koreanName: "김십육",
    englishName: "KIM",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },

  //20

  {
    birthDate: "1980.12.01",
    koreanName: "홍길동",
    englishName: "HongRoadDong",
    gender: "남성",
    testDate: "2024.05.02 (월)",
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
  {
    birthDate: "1616.16.16",
    koreanName: "김십육",
    englishName: "KIM",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },

  //~40
  //------

  {
    birthDate: "1616.16.16",
    koreanName: "김십육",
    englishName: "KIM",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1616.16.16",
    koreanName: "김십육",
    englishName: "KIM",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1616.16.16",
    koreanName: "김십육",
    englishName: "KIM",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1616.16.16",
    koreanName: "김십육",
    englishName: "KIM",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1616.16.16",
    koreanName: "김십육",
    englishName: "KIM",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1616.16.16",
    koreanName: "김십육",
    englishName: "KIM",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1616.16.16",
    koreanName: "김십육",
    englishName: "KIM",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1616.16.16",
    koreanName: "김십육",
    englishName: "KIM",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1616.16.16",
    koreanName: "김십육",
    englishName: "KIM",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1616.16.16",
    koreanName: "김십육",
    englishName: "KIM",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1616.16.16",
    koreanName: "김십육",
    englishName: "KIM",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
  {
    birthDate: "1616.16.16",
    koreanName: "김십육",
    englishName: "KIM",
    gender: "여성",
    testDate: "2024.05.02 (월)",
  },
];
