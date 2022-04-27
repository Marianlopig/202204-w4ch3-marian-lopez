import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = () => {
  return (
    <div className="actions">
      <Display number={627955776} />
      {/* <!-- El botón de llamar debe tener la clase "active" cuando -->
          <!-- el número de teléfono tiene 9 cifras --> */}
      <Action className={"call"} text={"Call"} />
      {/* <!-- Sólo se tiene que ver un botón u otro --> */}
      <Action className={"hang active"} text={"Hang"} />
    </div>
  );
};

export default Actions;
