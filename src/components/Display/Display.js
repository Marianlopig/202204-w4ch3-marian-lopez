import { useContext } from "react";
import Context from "../../context/Context";

const Display = () => {
  const { display } = useContext(Context);

  return <span className="number">{display}</span>;
};

export default Display;
