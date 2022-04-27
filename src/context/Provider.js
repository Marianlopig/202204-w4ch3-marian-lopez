import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [display, setDisplay] = useState("");

  const value = {
    display,
    setDisplay,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
