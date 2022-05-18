import React from "react";
import "./App.css";
import Home from "./components/Home";
import GlobalStyles from "./GlobalStyles";
import "./firebase";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
