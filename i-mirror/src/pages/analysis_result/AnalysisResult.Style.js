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
  /*그림자를 넣도록래.*/
`;

//아바타
export const AvatarLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarContainer = styled.div`
  width: 30rem;
  height: 30rem;
  background-color: #fff;
`;
