import { useContext, useState } from "react";
import UserContext from "../../data/contexts/user";

const Login = () => {
  const [keyAuth, setKeyAuth] = useState<string>("");
  const { setState: setGlobalState } = useContext(UserContext);

  function handleSubmit() {
    setGlobalState({ keyAuth });
  }

  return (
    <div>
      Login
      <input type="text" onChange={(e) => setKeyAuth(e.target.value)}></input>
      {keyAuth}
      <button onClick={handleSubmit}> Acessar </button>
    </div>
  );
};

export default Login;
