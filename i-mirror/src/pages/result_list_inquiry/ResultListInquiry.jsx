import React, { useState, useEffect } from "react";
import * as R from "./ResultListInquiry.Style";
import iMirrorLogo from "../../asset/img/i-mirror_logo.svg";
import profileImg from "../../asset/img/profileImg.svg";
import searchIcon from "../../asset/img/searchIcon.svg";
import PatientCard from "../../components/PatientCard";
// import { patientList, searchByName } from "../../constant/patientList";
import useUser from "../../hooks/auth/usePatient";

function ResultListInquiry() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(20);
  const { getPatientList } = useUser();

  const fetchUser = async ({ page, size }) => {
    const patients = await getPatientList({ page, size });
    setSearchResult(Array.isArray(patients) ? patients : []);
  };

  useEffect(() => {
    fetchUser({ page, size });
  }, [page, size]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  // const handleSearch = (e) => {
  //   const term = e.target.value;
  //   setSearchTerm(term);
  //   const result = searchByName(term, patientList);
  //   setSearchResult(result);
  // };

  return (
    <R.ResultListLayout>
      <R.HeaderContainer>
        <R.HeaderLogo src={iMirrorLogo} alt="logo" />
        <R.SearchDiv>
          <R.SearchMent
            type="text"
            placeholder="검색어를 입력해주세요"
            value={searchTerm}
            // onChange={handleSearch}
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
          {searchResult.map((patient, index) => (
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
      </R.CardWrapper>
      <div>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </R.ResultListLayout>
  );
}

export default ResultListInquiry;
