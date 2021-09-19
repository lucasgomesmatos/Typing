import React from "react";

const App = () => {
  return (
    <div className="container">
      <div className="valid-keys">
        <span className="matched">Luc</span>
        <span className="remainder">as</span>
      </div>
      <div className="typed-keys">lucadasd</div>
      <div className="completed-words">
        <ol>
          <li>cidade</li>
          <li>carro</li>
          <li>profisional</li>
        </ol>
      </div>
    </div>
  );
};

export default App;
