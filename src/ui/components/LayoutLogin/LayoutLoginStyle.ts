import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  height: 100vh;
`;

export const ContainerForm = styled.div`
  display: flex;
  height: 100%;
  width: 50vw;

  gap: 40px;

  flex-direction: column;

  place-items: center;
  place-content: center;

  @media (max-width: 900px) {
    width: 100vw;
    justify-content: center;
  }
`;

export const LoginImageContainer = styled.img`
  height: 100%;
`;
