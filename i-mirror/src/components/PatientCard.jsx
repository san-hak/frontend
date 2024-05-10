import React from "react";
import * as P from "./PatientCardStyle";

function PatientCard({ birthDate, koreanName, englishName, gender, testDate }) {
  return (
    <P.PatientCardLayout>
      <P.CardBackground gender={gender}>
        <P.PatientInfoDiv>
          <P.BirthDateInfo>{birthDate}</P.BirthDateInfo>
          <P.KoreanNameInfo>{koreanName}</P.KoreanNameInfo>
          <P.EnglishNameInfo>{englishName}</P.EnglishNameInfo>
          <P.GenderInfo>{gender}</P.GenderInfo>
        </P.PatientInfoDiv>
      </P.CardBackground>
      <P.TsetDateInfo>{testDate}</P.TsetDateInfo>
    </P.PatientCardLayout>
  );
}

export default PatientCard;
