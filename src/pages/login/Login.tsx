import { useContext, useState } from "react";
import UserContext from "../../data/contexts/user";
import { validateAuthenticationKey } from "../../data/services/validate-authentication-key";
import { Link } from "react-router-dom";

const Login = () => {
  const [keyAuth, setKeyAuth] = useState<string>("");
  const [isValidKey, setIsValidKey] = useState<boolean>(false);
  const { setState: setGlobalState } = useContext(UserContext);

  const validateSubmit = () => {
    validateAuthenticationKey(keyAuth).then((res) => {
      if (res.data.errors.length === 0) {
        setIsValidKey(true);
      } else {
        setIsValidKey(false);
      }
    });
  };

  function handleSubmit(e: any) {
    setGlobalState({ keyAuth });
    setKeyAuth(e.target.value);
    validateSubmit();
  }

  return (
    <div>
      Login
      <input type="text" onChange={(e) => handleSubmit(e)}></input>
      <Link onClick={() => validateSubmit()} to={isValidKey ? "/home" : "/"}>
        Acessar
      </Link>
    </div>
  );
};

export default Login;
