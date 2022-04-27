import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <div className="container">
      {/* El siguiente elemento se oculta añadiéndole la clase "off" */}
      <Info text={"Calling..."} />
      <main className="phone">
        <Keyboard />
        <Actions />
      </main>
    </div>
  );
}

export default App;
