import React from "react";
import * as P from "./PatientCardStyle";
import { useNavigate } from "react-router-dom";

function PatientCard({ birthDate, koreanName, gender, testDate }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/analysis-result/${encodeURIComponent(koreanName)}`);
  };

  return (
    <P.PatientCardLayout onClick={handleClick}>
      <P.CardBackground gender={gender}>
        <P.PatientInfoDiv>
          <P.BirthDateInfo>{birthDate}</P.BirthDateInfo>
          <P.KoreanNameInfo>{koreanName}</P.KoreanNameInfo>
          {/* <P.EnglishNameInfo>{englishName}</P.EnglishNameInfo> */}
          <P.GenderInfo>{gender}</P.GenderInfo>
        </P.PatientInfoDiv>
      </P.CardBackground>
      <P.TsetDateInfo>{testDate}</P.TsetDateInfo>
    </P.PatientCardLayout>
  );
}

export default PatientCard;
