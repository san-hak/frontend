import React from "react";
import * as R from "./ResultListInquiryStyle";
import iMirrorLogo from "../../asset/img/i-mirror_logo.svg";
import PatientCard from "../../components/PatientCard";
import { patientList } from "../../constant/patientList";

function ResultListInquiry() {
  return (
    <R.ResultListLayout>
      <R.HeaderContainer>
        <img src={iMirrorLogo} alt="logo" />
        <div>
          <div>검색어를 입력해주세요</div>
          <img src="" alt="검색" />
        </div>
        <div>
          <div>병원이름</div>
          <img src="" alt="사진" />
        </div>
      </R.HeaderContainer>
      <R.CardWrapper>
        <R.CardContainer>
          {patientList.map((patient, index) => (
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
    </R.ResultListLayout>
  );
}

export default ResultListInquiry;
