import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  height: 100%;
  width: 50vw;
  gap: 120px;

  @media (max-width: 900px) {
    width: 100vw;
    justify-content: center;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

export const LogoIcon = styled.img`
  height: 100px;
  width: 100px;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const LoginImageContainer = styled.img``;
