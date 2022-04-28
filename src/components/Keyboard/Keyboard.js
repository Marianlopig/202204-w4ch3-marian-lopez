import { useContext } from "react";
import Context from "../../context/Context";
import Key from "../Key/Key";

const Keyboard = () => {
  const { setDisplay, display, calling } = useContext(Context);

  const clickKey = (number) => {
    if (display.length < 9) {
      const telephoneNumber = display + number;
      setDisplay(telephoneNumber);
    }
  };

  const clickDelete = () => {
    setDisplay("");
  };

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <li>
          <Key
            number={1}
            action={() => clickKey(1)}
            disabled={calling ? true : false}
          />
        </li>
        <li>
          <Key
            number={2}
            action={() => clickKey(2)}
            disabled={calling ? true : false}
          />
        </li>
        <li>
          <Key
            number={3}
            action={() => clickKey(3)}
            disabled={calling ? true : false}
          />
        </li>
        <li>
          <Key
            number={4}
            action={() => clickKey(4)}
            disabled={calling ? true : false}
          />
        </li>
        <li>
          <Key
            number={5}
            action={() => clickKey(5)}
            disabled={calling ? true : false}
          />
        </li>
        <li>
          <Key
            number={6}
            action={() => clickKey(6)}
            disabled={calling ? true : false}
          />
        </li>
        <li>
          <Key
            number={7}
            action={() => clickKey(7)}
            disabled={calling ? true : false}
          />
        </li>
        <li>
          <Key
            number={8}
            action={() => clickKey(8)}
            disabled={calling ? true : false}
          />
        </li>
        <li>
          <Key
            number={9}
            action={() => clickKey(9)}
            disabled={calling ? true : false}
          />
        </li>
        <li>
          <Key
            number={0}
            action={() => clickKey(0)}
            disabled={calling ? true : false}
          />
        </li>
        <li>
          <Key
            className="big"
            number={"delete"}
            action={clickDelete}
            disabled={calling ? true : false}
          />
        </li>
      </ol>
    </div>
  );
};

export default Keyboard;
