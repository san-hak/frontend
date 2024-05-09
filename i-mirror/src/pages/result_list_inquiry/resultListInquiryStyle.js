import styled from "styled-components";

export const ResultListLayout = styled.div`
  width: 100vw;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100.3125rem;
  height: 3.75rem;
  margin-top: 2.5rem;
  margin-bottom: 6.25rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: grid;
  width: 80.625rem;
  grid-template-columns: repeat(4, 1fr);
`;
