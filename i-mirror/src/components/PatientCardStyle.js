import styled from "styled-components";
import manCardBackground from "../asset/img/manCardBackground.svg";
import womanCardBackground from "../asset/img/womanCardBackground.svg";

export const PatientCardLayout = styled.div`
  position: relative;
  width: 18.75rem;
  height: 12.5rem;
  border-radius: 1rem;
  box-shadow: 0.0625rem 0.25rem 0.625rem rgb(0, 0, 0, 0.3);
  margin-right: 1.875rem;
  margin-bottom: 2.5rem;
  &:nth-child(4n) {
    margin-right: 0;
  }
`;

export const CardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 8.125rem;
  background-size: cover;
  background-image: ${({ gender }) =>
    gender === "남성"
      ? `url(${manCardBackground})`
      : `url(${womanCardBackground})`};
`;

export const PatientInfoDiv = styled.div`
  margin-top: 1.25rem;
  margin-left: 1.875rem;
`;

//-------------------

export const BirthDateInfo = styled.div`
  font-size: 1rem;
  color: #484848;
`;

export const KoreanNameInfo = styled.div`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  margin-top: 0.1875rem;
  margin-right: 0.1875rem;
  margin-bottom: 0.1875rem;
`;

export const EnglishNameInfo = styled.div`
  display: inline-block;
  font-size: 1rem;
  color: #6c6c6c;
`;

export const GenderInfo = styled.div`
  font-size: 1.125rem;
  color: #000;
`;

export const TsetDateInfo = styled.div`
  position: absolute;
  font-size: 1.25rem;
  color: #000;
  margin-left: 1.875rem;
  bottom: 1.5rem;
`;
