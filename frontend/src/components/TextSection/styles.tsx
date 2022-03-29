import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  text-align: justify;
`;

export const SectionTitle = styled.h1`
  width: 316px;
  height: 118px;
  font-size: 48px;

  @media (max-width: 850px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const SectionText = styled.p`
  width: 316px;
  font-size: 32px;
  height: 118px;
  width: 50%;

  @media (max-width: 850px) {
    font-size: 20px;
  }
`;
