import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [display, setDisplay] = useState("");
  const [calling, setCalling] = useState(false);

  const value = {
    display,
    setDisplay,
    calling,
    setCalling,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
