import { useContext } from "react";
import Context from "../../context/Context";

const Info = ({ text }) => {
  const { calling } = useContext(Context);

  return <span className={calling ? "message" : "off"}>{text}</span>;
};
export default Info;
