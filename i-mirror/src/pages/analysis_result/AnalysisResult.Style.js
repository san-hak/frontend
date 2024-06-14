import styled from "styled-components";

export const AnalysisResultLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #393939;
`;

export const AnalysisResultContainer = styled.div``;

//헤더
export const AnalysisResultHeaderContainer = styled.div`
  margin-left: 4%;
  margin-right: 4%;
`;

export const HeaderLogo = styled.img`
  width: 10rem;
  /* height: 3.75rem; */
  margin-bottom: -1.5rem;
  margin-top: 3%;
`;

export const HeaderTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #000;
`;

export const PatientInfoDiv = styled.div`
  display: flex;
`;

export const NameLabel = styled.label`
  font-size: 1rem;
  margin-right: 0.25rem;
  color: #484848;
`;
export const PatientName = styled.div`
  font-size: 1rem;
  margin-right: 0.75rem;
  color: #484848;
`;

export const BirthDateLabel = styled.label`
  font-size: 1rem;
  margin-right: 0.25rem;
  color: #484848;
`;
export const PatientBirthDate = styled.div`
  font-size: 1rem;
  margin-right: 0.75rem;
  color: #484848;
`;

export const GenderLabel = styled.label`
  font-size: 1rem;
  margin-right: 0.25rem;
  color: #484848;
`;
export const PatientGender = styled.div`
  font-size: 1rem;
  margin-right: 0.75rem;
  color: #484848;
`;

export const PatientTestDate = styled.div`
  font-size: 1.25rem;
  margin-top: -0.25rem;
  color: #484848;
  margin-left: auto;
`;

export const LineDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
`;

export const Line = styled.div`
  width: 48rem;
  height: 0.25rem;
  background-color: #3c45a8;
`;

export const AnalysisResultPaper = styled.div`
  width: 50rem;
  height: 70rem;
  background-color: #fff;
  box-shadow: 0.0625rem 0.25rem 1rem rgb(0, 0, 0, 0.3);
`;

//아바타
export const AvatarLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarContainer = styled.div`
  width: 28rem;
  height: 28rem;
  background-color: #fff;
  cursor: pointer;
`;

//결과 테이블
export const ResultTableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4%;
`;

export const ResultTable = styled.table`
  width: 43.75rem;
  height: 400px;
  border: 0.0625rem solid #000;
  border-collapse: collapse;
`;

export const ResultTr = styled.tr`
  background-color: ${(props) =>
    props.index % 2 === 0 ? "#f2f2f2" : "#ffffff"};
`;

export const ResultTd = styled.td`
  border: 0.0625rem solid #3c45a8;
  text-align: center;
`;
