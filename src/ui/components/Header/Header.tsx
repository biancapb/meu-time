import React from "react";
import { Container, LogoIcon, LogoutIcon } from "./HeaderStyle";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoIcon src="/assets/icons/meu-time-logo.svg" />
      <LogoutIcon src="/assets/icons/logout.svg" />
    </Container>
  );
};
export default Header;
