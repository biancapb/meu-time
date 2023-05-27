import { useContext, useState } from "react";
import UserContext from "../../data/contexts/user";
import { validateAuthenticationKey } from "../../data/services/validate-authentication-key";
import Button from "../../ui/components/Button/Button";

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
      Login
      <input type="text" onChange={(e) => handleChange(e)}></input>
      <Button
        onClick={() => handleClick()}
        textButton="Entrar"
        route={isValidKey ? "/home" : "/"}
      />
    </div>
  );
};

export default Login;
