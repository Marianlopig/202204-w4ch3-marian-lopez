import React from "react";
import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";
import Provider from "./context/Provider";

function App() {
  return (
    <Provider>
      <div className="container">
        {/* El siguiente elemento se oculta añadiéndole la clase "off" */}
        <Info text={"Calling..."} />
        <main className="phone">
          <Keyboard />
          <Actions />
        </main>
      </div>
    </Provider>
  );
}

export default App;
