import React from "react";
import * as U from "./UserCardStyle";
import { useNavigate } from "react-router-dom";

function UserCard({ birthDate, koreanName, gender, testDate }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/analysis-result/${testDate}`);
  };

  return (
    <U.UserCardLayout onClick={handleClick}>
      <U.CardBackground gender={gender}>
        <U.UserInfoDiv>
          <U.BirthDateInfo>{birthDate}</U.BirthDateInfo>
          <U.KoreanNameInfo>{koreanName}</U.KoreanNameInfo>
          <U.GenderInfo>{gender}</U.GenderInfo>
        </U.UserInfoDiv>
      </U.CardBackground>
      <U.TsetDateInfo>{testDate}</U.TsetDateInfo>
    </U.UserCardLayout>
  );
}

export default UserCard;
