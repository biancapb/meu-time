import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 120px;
  width: 40vw;

  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: #d1e7fd;
  border-radius: 10px;
  gap: 40px;

  @media (max-width: 1280px) {
    width: 60vw;
  }
`;

export const TeamInfoContainer = styled.div``;
export const TeamName = styled.h3``;
export const TeamFormation = styled.p`
  color: #999591;
  width: auto;
  font-size: 16px;
`;
