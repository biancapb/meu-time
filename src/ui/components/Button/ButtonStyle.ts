import styled from "styled-components";
export const Container = styled.div`
  a {
    height: 56px;
    width: 340px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #6fb7fe;
    border-radius: 10px;
    color: black;
    text-decoration: none;
  }

  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition-duration: 0.5s;
  }
`;

export const ButtonContainer = styled.button`
  display: flex;
  height: 55px;
  width: 80px;
  justify-content: center;
  align-items: center;
  background-color: #0d87ff;
  border-radius: 10px;

  cursor: pointer;
`;
