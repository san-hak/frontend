import React, { useState, useEffect } from "react";
import * as R from "./ResultListInquiry.Style";
import iMirrorLogo from "../../asset/img/i-mirror_logo.svg";
import profileImg from "../../asset/img/profileImg.svg";
import searchIcon from "../../asset/img/searchIcon.svg";
import PatientCard from "../../components/PatientCard";
import useUser from "../../hooks/auth/usePatient";
import { useNavigate, useParams } from "react-router-dom";

function ResultListInquiry() {
  const navigate = useNavigate();
  const { pageParam } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [page, setPage] = useState(pageParam ? parseInt(pageParam) : 1);
  const [size] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [moreCard, setMoreCard] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const { getPatientList } = useUser();

  const loadMain = () => {
    window.location.reload();
  };

  const fetchPatients = async (reset = false) => {
    setIsLoading(true);
    try {
      const data = await getPatientList({ page: reset ? 1 : page, size });
      if (data && data.content) {
        setPatients((prevPatients) =>
          reset ? data.content : [...prevPatients, ...data.content]
        );
        setMoreCard(data.content.length === size);
        if (reset) setPage(1);
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, [page, size]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredPatients(patients);
      setNoResult(false);
      setMoreCard(patients.length >= size);
    } else {
      const result = patients.filter((patient) =>
        patient.koreanName.includes(searchTerm)
      );
      setFilteredPatients(result);
      setNoResult(result.length === 0);
      setMoreCard(false);
    }
  }, [searchTerm, patients]);

  const handleLoadMore = () => {
    if (!isLoading && moreCard) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
    fetchPatients(true);
  };

  const displayPatients = searchTerm ? filteredPatients : patients;

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
        <R.ProfileDiv>
          <R.ProfileName>병원이름</R.ProfileName>
          <R.ProfileImg src={profileImg} alt="사진" />
        </R.ProfileDiv>
      </R.HeaderContainer>
      <R.CardWrapper>
        <R.CardContainer>
          {displayPatients.map((patient, index) => (
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
