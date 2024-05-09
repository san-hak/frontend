import React from "react";
import * as P from "./PatientCardStyle";

function PatientCard({ birthDate, koreanName, englishName, gender, testDate }) {
  return (
    <P.PatientCardLayout>
      <P.CardBackground gender={gender}>
        <P.BirthDateInfo>{birthDate}</P.BirthDateInfo>
        <P.KoreanNameInfo>{koreanName}</P.KoreanNameInfo>
        <P.EnglishNameInfo>{englishName}</P.EnglishNameInfo>
        <P.GenderInfo>{gender}</P.GenderInfo>
      </P.CardBackground>
      <div>{testDate}</div>
    </P.PatientCardLayout>
  );
}

export default PatientCard;
