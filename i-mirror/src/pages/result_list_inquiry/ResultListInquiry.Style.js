import styled from "styled-components";

export const ResultListLayout = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: #fff;
`;

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 99;
  align-items: center;
  width: 100.3125rem;
  height: 8.75rem;
  margin-left: 10rem;
  padding-bottom: 4.25rem;
  /* background-color: #fff; */
  background: linear-gradient(
    rgb(255, 255, 255) 60%,
    rgb(255, 255, 255, 0.6),
    rgb(255, 255, 255, 0.1)
  );
`;

export const HeaderLogo = styled.img`
  width: 9.375rem;
  height: 3.75rem;
`;

export const SearchDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 62.5rem;
  height: 3.75rem;
  margin-left: 9.375rem;
  background-color: #f0f0f3;
  border-radius: 2.5rem;
`;

export const SearchMent = styled.input`
  width: 43.75rem;
  height: 3.75rem;
  margin-left: 3.125rem;
  font-size: 1.25rem;
  color: #000;
  outline: none;
  border: none;
  background-color: #f0f0f3;

  &::placeholder {
    color: #929292;
  }
`;

export const SearchIcon = styled.img`
  width: 1.5625rem;
  height: 1.5625rem;
  margin-right: 3.125rem;
  cursor: pointer;
`;

export const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 9.375rem;
`;

export const ProfileName = styled.div`
  font-size: 1.25rem;
`;

export const ProfileImg = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 1.5rem;
  margin-left: 1rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12.5rem;
`;

export const CardContainer = styled.div`
  display: grid;
  width: 80.625rem;
  grid-template-columns: repeat(4, 1fr);
  cursor: pointer;
`;

export const CardMoreButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardMoreButton = styled.div`
  width: 12.5rem;
  height: 3.75rem;
  margin-top: 0.625rem;
  margin-bottom: 3.125rem;
  background-color: #f0f0f3;
  font-size: 1.25rem;
  color: #000;
  text-align: center;
  line-height: 3.75rem;
  border: none;
  border-radius: 3.125rem;
  cursor: pointer;
`;
