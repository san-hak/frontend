import React, { useState, useEffect } from "react";
import * as R from "./ResultListInquiry.Style";
import iMirrorLogo from "../../asset/img/i-mirror_logo.svg";
import profileImg from "../../asset/img/profileImg.svg";
import searchIcon from "../../asset/img/searchIcon.svg";
import PatientCard from "../../components/PatientCard";
import useUser from "../../hooks/auth/usePatient";
import { useNavigate, useParams } from "react-router-dom";
import logoutImg from "../../asset/img/logout.svg";
import logout from "../../hooks/auth/logout";
import Logout from "../../hooks/auth/logout";

function ResultListInquiry() {
  const navigate = useNavigate();
  const { pageParam } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [allPatients, setAllPatients] = useState([]); // 모든 유저 데이터
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [page, setPage] = useState(pageParam ? parseInt(pageParam) : 1);
  const [size] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [moreCard, setMoreCard] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [resultCount, setResultCount] = useState(0); // 검색 결과 개수

  const [isOpen, setIsOpen] = useState(false); //모달을 열어요

  const { getPatientList } = useUser();

  const loadMain = () => {
    window.location.reload();
  };

  const fetchAllPatients = async () => {
    setIsLoading(true);
    try {
      const data = await getPatientList({ page: 1, size: 10000 }); // 모든 유저 데이터 요청
      if (data && data.content) {
        setAllPatients(data.content);
        setFilteredPatients(data.content.slice(0, size));
        setMoreCard(data.content.length > size);
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPatients();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredPatients(allPatients.slice(0, page * size));
      setNoResult(false);
      setMoreCard(allPatients.length > page * size);
    } else {
      const result = allPatients.filter(
        (patient) =>
          patient.memberName && patient.memberName.includes(searchTerm)
      );
      setFilteredPatients(result.slice(0, page * size));
      setNoResult(result.length === 0);
      setResultCount(result.length); // 검색 결과 개수 업데이트
      setMoreCard(result.length > page * size);
    }
  }, [searchTerm, allPatients, page, size]);

  const handleLoadMore = () => {
    if (!isLoading && moreCard) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <R.ResultListLayout>
      <R.HeaderContainer>
        <R.HeaderLogo src={iMirrorLogo} alt="" onClick={loadMain} />
        <R.SearchDiv>
          <R.SearchMent
            type="text"
            placeholder="검색어를 입력해주세요"
            value={searchTerm}
            onChange={handleSearch}
          />
          <R.SearchIcon src={searchIcon} alt="검색" />
        </R.SearchDiv>
        <R.ProfileDiv onClick={() => setIsOpen(!isOpen)}>
          <R.ProfileName>병원이름</R.ProfileName>
          <R.ProfileImg src={profileImg} alt="사진" />
          {isOpen && (
            <R.LogoutLayout onClick={handleLogout}>
              <R.LogoutImg src={logoutImg} />
              로그아웃
            </R.LogoutLayout>
          )}
        </R.ProfileDiv>
      </R.HeaderContainer>
      <R.CardWrapper>
        {searchTerm && resultCount > 0 && (
          <R.ResultCountMent>총 {resultCount}건의 검색결과</R.ResultCountMent>
        )}
        <R.CardContainer>
          {filteredPatients.map((patient, index) => (
            <PatientCard
              key={index}
              birthDate={patient.memberBirthDate}
              koreanName={patient.memberName}
              gender={patient.isMale ? "남자" : "여자"}
              testDate={patient.recentTestDate}
            />
          ))}
        </R.CardContainer>
      </R.CardWrapper>
      <R.CardMoreButtonDiv>
        {noResult && <div>검색 결과가 없습니다.</div>}
        {!noResult && moreCard && (
          <R.CardMoreButton onClick={handleLoadMore}>
            {isLoading ? "로딩중..." : "더보기"}
          </R.CardMoreButton>
        )}
      </R.CardMoreButtonDiv>
    </R.ResultListLayout>
  );
}

export default ResultListInquiry;
