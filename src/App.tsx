import React from "react";
import BrowserRoutes from "./data/routes/routes";
import GlobalContext from "./data/contexts";

export default function App() {
  return (
    <GlobalContext>
      <BrowserRoutes />
    </GlobalContext>
  );
}
