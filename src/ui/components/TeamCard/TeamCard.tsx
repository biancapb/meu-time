import Avatar from "@mui/material/Avatar";
import React from "react";
import {
  Container,
  TeamFormation,
  TeamInfoContainer,
  TeamName,
} from "./TeamCardStyle";

interface TeamCardProps {
  logo?: string;
  name?: string;
  id?: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ logo, name, id }) => {
  return (
    <Container>
      <Avatar
        alt="Remy Sharp"
        draggable={false}
        src={logo}
        sx={{ width: 80, height: 80 }}
      />
      <TeamInfoContainer>
        <TeamName>Manchester City</TeamName>
        <TeamFormation>Formação mais usada da temporada: 4-2-3-1</TeamFormation>
      </TeamInfoContainer>
    </Container>
  );
};

export default TeamCard;
