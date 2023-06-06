import Table from "@mui/material/Table";
import styled from "styled-components";

export const CustomTable = styled(Table)`
  max-height: 350px;
  max-width: 360px;
  border-radius: 10px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  th {
    background-color: #eff7ff;
    color: #666360;
    border-color: #d1e7fd;

    font-family: "Roboto Slab";
  }

  tbody tr {
    background-color: #eff7ff;
    color: #1e2a3a;
  }

  tbody td {
    color: #28262e;

    border-color: #d1e7fd;

    font-family: "Roboto Slab";
    font-weight: 600;
  }
`;
