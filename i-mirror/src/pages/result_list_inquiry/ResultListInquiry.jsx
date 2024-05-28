import React, { useState, useEffect, useRef, useCallback } from "react";
import * as R from "./ResultListInquiry.Style";
import iMirrorLogo from "../../asset/img/i-mirror_logo.svg";
import profileImg from "../../asset/img/profileImg.svg";
import searchIcon from "../../asset/img/searchIcon.svg";
import PatientCard from "../../components/PatientCard";
import { patientList, searchByName } from "../../constant/patientList";
import useUser from "../../hooks/auth/usePatient";

function ResultListInquiry() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);
  const [size] = useState(20);
  const [isLoading, setIsLoading] = useState(false);

  const { getPatientList } = useUser();

  useEffect(() => {
    const fetchUser = async () => {
      const patients = await getPatientList({ page, size });
      setSearchResult(patients.content);
    };
    fetchUser();
  }, [getPatientList, page, size]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const result = searchByName(term, patientList);
    setSearchResult(result);
  };

  return (
    <R.ResultListLayout>
      <R.HeaderContainer>
        <R.HeaderLogo src={iMirrorLogo} alt="logo" />
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
          {searchResult.map((patient, index) => (
            <PatientCard
              key={index}
              koreanName={patient.memberName}
              gender={patient.memberGender}
              birthDate={patient.memberBirthDate}
            />
          ))}
          {/*patientList or searchResult*/}
        </R.CardContainer>
      </R.CardWrapper>
    </R.ResultListLayout>
  );
}

export default ResultListInquiry;
