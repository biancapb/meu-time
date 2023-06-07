import Autocomplete from "@mui/material/Autocomplete";
import styled from "styled-components";

export const CustomInput = styled(Autocomplete)`
  background-color: #d1e7fd;
`;

export const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  gap: 10px;

  @media (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 20px;
`;
