import React from "react";
import { Container, ButtonContainer } from "./ButtonStyle";
import { Link } from "react-router-dom";

interface ButtonProps {
  onClick: () => void;
  route?: string;
  textButton?: string;
  isSearchButton?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  isSearchButton,
  onClick,
  route,
  textButton,
}) => {
  return (
    <Container>
      {isSearchButton ? (
        <ButtonContainer onClick={onClick}>{icon}</ButtonContainer>
      ) : (
        <Link onClick={onClick} to={route ? route : "/"}>
          {textButton}
        </Link>
      )}
    </Container>
  );
};

export default Button;
