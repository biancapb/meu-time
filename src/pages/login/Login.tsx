import { useContext, useState } from "react";
import UserContext from "../../data/contexts/user";
import { validateAuthenticationKey } from "../../data/services/validate-authentication-key";
import Button from "../../ui/components/Button/Button";
import TextField from "@mui/material/TextField";

const Login = () => {
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
    <div>
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
            width: "340px",
            borderRadius: "10px",
          },
        }}
      />
      <Button
        onClick={() => handleClick()}
        textButton="Entrar"
        route={isValidKey ? "/home" : "/"}
      />
    </div>
  );
};

export default Login;
