import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
