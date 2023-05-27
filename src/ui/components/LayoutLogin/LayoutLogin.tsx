import TextField from "@mui/material/TextField";
import UserContext from "../../../data/contexts/user";
import { validateAuthenticationKey } from "../../../data/services/validate-authentication-key";
import ImageLayout from "../ImageLogin/ImageLogin";
import { useContext, useState } from "react";
import Button from "../Button/Button";
import { Container, ContainerForm } from "./LayoutLoginStyle";

const LayoutLogin: React.FC = () => {
  const [keyAuth, setKeyAuth] = useState<string>("");
  const [isValidKey, setIsValidKey] = useState<boolean>(false);
  const { setState: setGlobalState } = useContext(UserContext);

  const validateSubmit = () => {
    validateAuthenticationKey(keyAuth).then((res) => {
      if (res.data.errors.length === 0 && res.status === 200) {
        setIsValidKey(true);
      } else {
        setIsValidKey(false);
      }
    });
    setGlobalState({ keyAuth });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyAuth(e.target.value);
    validateSubmit();
  };

  const handleClick = () => {
    validateSubmit();
  };

  return (
    <Container>
      <ImageLayout />
      <ContainerForm>
        <TextField
          required
          id="outlined-required"
          label="API Key"
          placeholder="Insira sua API Key"
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
        <Button
          onClick={() => handleClick()}
          textButton="Entrar"
          route={isValidKey ? "/home" : "/"}
        />
      </ContainerForm>
    </Container>
  );
};
export default LayoutLogin;
