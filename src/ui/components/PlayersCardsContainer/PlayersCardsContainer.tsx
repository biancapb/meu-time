import React from "react";

import PlayerCard from "../PlayerCard/PlayerCard";
import { Container } from "./PlayersCardsContainerStyle";
type Props = {};

const ContainerCard = (props: Props) => {
  return (
    <Container>
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
    </Container>
  );
};

export default ContainerCard;
