import React from "react";
import { Container } from "./ButtonStyle";
import { Link } from "react-router-dom";

interface ButtonProps {
  onClick: () => void;
  route?: string;
  textButton?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, route, textButton }) => {
  return (
    <Container>
      <Link onClick={onClick} to={route ? route : "/"}>
        {textButton}
      </Link>
    </Container>
  );
};

export default Button;
