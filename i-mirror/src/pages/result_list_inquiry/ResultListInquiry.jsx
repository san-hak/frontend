import React, { useState, useEffect, useRef, useCallback } from "react";
import * as R from "./ResultListInquiry.Style";
import iMirrorLogo from "../../asset/img/i-mirror_logo.svg";
import profileImg from "../../asset/img/profileImg.svg";
import searchIcon from "../../asset/img/searchIcon.svg";
import PatientCard from "../../components/PatientCard";
import { patientList, searchByName } from "../../constant/patientList";
import useUser from "../../hooks/auth/usePatient";
import { useNavigate } from "react-router-dom";

function ResultListInquiry() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [patients, setPatients] = useState([]);
  const [page, setPage] = useState(0);
  const [size] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [moreCard, setMoreCard] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const { getPatientList } = useUser();

  const loadMain = () => {
    window.location.reload();
  };

  //---------

  useEffect(() => {
    const initialPatients = patientList.slice(0, size);
    setPatients(initialPatients);
    setMoreCard(patientList.length > size);
  }, [size]);

  const loadMorePatient = () => {
    setIsLoading(true);
    const newPage = page + 1;
    const newPatients = patientList.slice(newPage * size, (newPage + 1) * size);
    setPatients((prevPatients) => [...prevPatients, ...newPatients]);
    setPage(newPage);
    setIsLoading(false);
    if ((newPage + 1) * size >= patientList.length) {
      setMoreCard(false);
    }
  };

  const handleLoadMore = () => {
    if (!isLoading && moreCard) {
      loadMorePatient();
    }
  };

  //------------

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const patients = await getPatientList({ page, size });
  //     setSearchResult(patients.content);
  //   };
  //   fetchUser();
  // }, [getPatientList, page, size]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setPage(0);
    setNoResult(false);
    setMoreCard(true);

    if (term === "") {
      setSearchResult([]);
      setNoResult(false);
      setPatients(patientList.slice(0, size));
      setMoreCard(patientList.length > size);
    } else {
      const result = searchByName(term, patientList);
      setSearchResult(result.slice(0, size));
      setPatients(result.slice(0, size));
      if (result.length === 0) {
        setNoResult(true);
        setMoreCard(false);
      } else {
        setNoResult(false);
        setMoreCard(result.length > size);
      }
    }
  };

  const moreSearchResult = () => {
    setIsLoading(true);
    const newPage = page + 1;
    const newResult = searchByName(searchTerm, patientList).slice(
      newPage * size,
      (newPage + 1) * size
    );
    setSearchResult((prevResult) => [...prevResult, ...newResult]);
    setPage(newPage);
    setIsLoading(false);
    if ((newPage + 1) * size >= searchByName(searchTerm, patientList).length) {
      setMoreCard(false);
    }
  };

  const handleLoadMoreSearchResult = () => {
    if (!isLoading && moreCard) {
      moreSearchResult();
    }
  };

  const displayPatients = searchTerm ? searchResult : patients;

  return (
    <R.ResultListLayout>
      <R.HeaderContainer>
        <R.HeaderLogo src={iMirrorLogo} alt="logo" onClick={loadMain} />
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
              birthDate={patient.birthDate}
              koreanName={patient.koreanName}
              englishName={patient.englishName}
              gender={patient.gender}
              testDate={patient.testDate}
            />
          ))}
        </R.CardContainer>
        {/* <R.CardContainer> */}
        {/* {searchResult.map((patient, index) => (
            <PatientCard
              key={index}
              koreanName={patient.memberName}
              gender={patient.memberGender}
              birthDate={patient.memberBirthDate}
            />
          ))} */}
        {/* {patientList.map((patient, index) => (
            <PatientCard
              key={index}
              birthDate={patient.birthDate}
              koreanName={patient.koreanName}
              englishName={patient.englishName}
              gender={patient.gender}
              testDate={patient.testDate}
            />
          ))} */}
        {/*patientList or searchResult*/}
        {/* </R.CardContainer> */}
      </R.CardWrapper>
      <R.CardMoreButtonDiv>
        {noResult && <div>검색 결과가 없습니다.</div>}
        {!noResult && moreCard && (
          <R.CardMoreButton
            onClick={searchTerm ? handleLoadMoreSearchResult : handleLoadMore}
          >
            {isLoading ? "로딩중..." : "더보기"}
          </R.CardMoreButton>
        )}
      </R.CardMoreButtonDiv>
    </R.ResultListLayout>
  );
}

export default ResultListInquiry;
