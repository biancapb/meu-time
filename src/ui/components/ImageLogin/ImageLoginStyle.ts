import styled from "styled-components";

export const ContainerImage = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 900px) {
    display: none;
  }
`;
export const Image = styled.img`
  height: 100%;
  width: 50vw;
`;
