import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";
import { Container } from "./SelectLabelStyle";
import Button from "../Button/Button";

import { FaSearch } from "react-icons/fa";

const SelectLabel: React.FC = () => {
  return (
    <Container>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={topFilms}
        sx={{ width: 280 }}
        renderInput={(params) => <TextField {...params} label="PAÍS" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={topFilms}
        sx={{ width: 280 }}
        renderInput={(params) => <TextField {...params} label="LIGA" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={topFilms}
        sx={{ width: 280 }}
        renderInput={(params) => <TextField {...params} label="TIME" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={topFilms}
        sx={{ width: 280 }}
        renderInput={(params) => <TextField {...params} label="TEMPORADA" />}
      />

      <Button
        isSearchButton
        icon={<FaSearch color="#28262E" size={20} />}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></Button>
    </Container>
  );
};
const topFilms = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];
export default SelectLabel;
