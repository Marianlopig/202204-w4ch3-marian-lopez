import { useContext } from "react";
import Context from "../../context/Context";
import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = () => {
  const { display } = useContext(Context);

  const getCallClassName = () => {
    if (display.length >= 9) {
      return "call active";
    }
    return "call";
  };
  const calling = false;
  return (
    <div className="actions">
      <Display />

      {!calling && <Action className={getCallClassName()} text={"Call"} />}
      {calling && <Action className={"hang active"} text={"Hang"} />}
    </div>
  );
};

export default Actions;
