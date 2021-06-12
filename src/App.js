import React, { useState } from "react";

function App() {
  const [state, setState] = useState("CLICK ME");

  return (
    <div className="App">
      <header className="App-header">
        Product list
      </header>
      <button onClick={() => setState("CLICKED")}>{state}</button>
    </div>
  );
}

export default App;
