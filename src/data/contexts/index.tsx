import React from "react";
import { UserContextProvider } from "./user";
import Props from "../@types/Props";

const GlobalContext: React.FC<Props> = ({ children }) => {
  return <UserContextProvider> {children} </UserContextProvider>;
};

export default GlobalContext;
