import { useContext, useState } from "react";
import Context from "../../context/Context";
import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = () => {
  const { display } = useContext(Context);
  const [calling, setCalling] = useState(false);

  const getCallClassName = () => {
    if (display.length >= 9) {
      return "call active";
    }
    return "call";
  };
  const call = () => {
    setCalling(true);
  };
  const hang = () => {
    setCalling(false);
  };
  return (
    <div className="actions">
      <Display />

      {!calling && (
        <Action className={getCallClassName()} text={"Call"} action={call} />
      )}
      {calling && (
        <Action className={"hang active"} text={"Hang"} action={hang} />
      )}
    </div>
  );
};

export default Actions;
