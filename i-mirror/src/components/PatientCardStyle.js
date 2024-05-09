import styled from "styled-components";
import manCardBackground from "../asset/img/manCardBackground.svg";
import womanCardBackground from "../asset/img/womanCardBackground.svg";

export const PatientCardLayout = styled.div`
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
  height: 8.125rem;
  background-image: ${({ gender }) =>
    gender === "남성"
      ? `url(${manCardBackground})`
      : `url(${womanCardBackground})`};
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
