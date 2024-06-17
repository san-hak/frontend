import React, { useState, useEffect } from "react";
import * as UR from "./UserResultListInquiry.Style";
import iMirrorLogo from "../../asset/img/i-mirror_logo.svg";
import profileImg from "../../asset/img/profileImg.svg";
import searchIcon from "../../asset/img/searchIcon.svg";
import UserCard from "../../components/UserCard";
import logoutImg from "../../asset/img/logout.svg";
import useUserInfo from "../../hooks/auth/useUserInfo";

function UserResultListInquiry() {
  const [size] = useState(20);
  const [filteredTestDate, setFilteredTestDate] = useState([]);

  const { getUserList } = useUserInfo();

  const fetchAllTestDate = async () => {
    try {
      const data = await getUserList({ page: 1, size: 10000 });
      console.log(data);
      if (data && data.content) {
        setFilteredTestDate(data.content.slice(0, size));
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  useEffect(() => {
    fetchAllTestDate();
  }, []);

  return (
    <UR.UserResultListLayout>
      <UR.HeaderContainer>
        <UR.HeaderLogo src={iMirrorLogo} alt="" />
        <UR.SearchDiv>
          <UR.SearchMent type="text" placeholder="검색어를 입력해주세요" />
          <UR.SearchIcon src={searchIcon} alt="검색" />
        </UR.SearchDiv>
        <UR.ProfileDiv>
          <UR.ProfileName>병원이름</UR.ProfileName>
          <UR.ProfileImg src={profileImg} alt="사진" />
          <UR.LogoutLayout>
            <UR.LogoutImg src={logoutImg} />
            로그아웃
          </UR.LogoutLayout>
        </UR.ProfileDiv>
      </UR.HeaderContainer>
      <UR.CardWrapper>
        <UR.CardContainer>
          {filteredTestDate.map((user, index) => (
            <UserCard
              key={index}
              birthDate={user.memberBirthDate}
              koreanName={user.memberName}
              gender={user.isMale ? "남자" : "여자"}
              testDate={user.recentTestDate}
            />
          ))}
        </UR.CardContainer>
      </UR.CardWrapper>
      <UR.CardMoreButtonDiv>
        <UR.CardMoreButton>더보기</UR.CardMoreButton>
      </UR.CardMoreButtonDiv>
    </UR.UserResultListLayout>
  );
}

export default UserResultListInquiry;
