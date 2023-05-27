import TextField from "@mui/material/TextField";
import UserContext from "../../../data/contexts/user";
import { validateAuthenticationKey } from "../../../data/services/validate-authentication-key";
import ImageLayout from "../ImageLogin/ImageLogin";
import { useContext, useState } from "react";
import Button from "../Button/Button";
import {
  Container,
  FormContainer,
  LoginContainer,
  LogoContainer,
  LogoIcon,
  Title,
} from "./LayoutLoginStyle";

const LayoutLogin: React.FC = () => {
  const [keyAuth, setKeyAuth] = useState<string>("");
  const [isValidKey, setIsValidKey] = useState<boolean>(false);
  const { setState: setGlobalState } = useContext(UserContext);
  const [error, setError] = useState<string>("");

  const validateSubmit = () => {
    validateAuthenticationKey(keyAuth).then((res) => {
      if (res.status === 200 && res.data.errors.length === 0) {
        setIsValidKey(true);
        setError("");
      } else {
        setIsValidKey(false);
        setError("Chave de autenticação inválida.");
      }
    });
    setGlobalState({ keyAuth });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyAuth(value);
  };

  const handleClick = () => {
    validateSubmit();
  };

  return (
    <Container>
      <ImageLayout />
      <LoginContainer>
        <LogoContainer>
          <LogoIcon src="/assets/icons/meu-time-logo.svg" />
          <Title>Meu Time</Title>
        </LogoContainer>
        <FormContainer>
          <TextField
            required
            id="outlined-required"
            label="API Key"
            placeholder="Insira sua API Key"
            value={keyAuth}
            onChange={handleChange}
            inputProps={{
              style: {
                backgroundColor: "#D1E7FD",
                display: "flex",
                width: "310px",
                borderRadius: "10px",
              },
            }}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button
            onClick={handleClick}
            textButton="Entrar"
            route={isValidKey ? "/home" : "/"}
          />
        </FormContainer>
      </LoginContainer>
    </Container>
  );
};

export default LayoutLogin;
