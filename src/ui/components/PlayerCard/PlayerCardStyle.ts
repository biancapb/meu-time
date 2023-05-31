import styled from "styled-components";

export const Container = styled.div``;

export const ContainerCard = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  width: 170px;
  margin: auto;
  text-align: center;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const PlayerName = styled.h3`
  width: 100%;
  word-wrap: break-word;
`;

export const PlayerNationality = styled.p`
  font-size: 16px;
  width: 100%;
  word-wrap: break-word;
`;

export const PlayerAge = styled.p`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;

  word-wrap: break-word;
`;
