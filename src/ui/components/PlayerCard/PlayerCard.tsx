import { Avatar } from "@mui/material";
import {
  ContainerCard,
  PlayerAge,
  PlayerName,
  PlayerNationality,
} from "./PlayerCardStyle";

const PlayerCard: React.FC = () => {
  return (
    <ContainerCard>
      <Avatar />
      <PlayerName>Juninho</PlayerName>
      <PlayerNationality>Brasileiro</PlayerNationality>
      <PlayerAge>26 anos</PlayerAge>
    </ContainerCard>
  );
};
export default PlayerCard;
