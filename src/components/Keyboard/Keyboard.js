import Key from "../Key/Key";

const Keyboard = () => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <li>
          <Key number={1} />
        </li>
        <li>
          <Key number={2} />
        </li>
        <li>
          <Key number={3} />
        </li>
        <li>
          <Key number={4} />
        </li>
        <li>
          <Key number={5} />
        </li>
        <li>
          <Key number={6} />
        </li>
        <li>
          <Key number={7} />
        </li>
        <li>
          <Key number={8} />
        </li>
        <li>
          <Key number={9} />
        </li>
        <li>
          <Key number={0} />
        </li>
        <li>
          <Key className="big" number={"delete"} />
        </li>
      </ol>
    </div>
  );
};

export default Keyboard;
