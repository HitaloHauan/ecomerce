import React from "react";
import Highlights from "./app/main/components/highlights/Highlights";
import Header from "./app/main/header/Header";

function App() {
  return (
    <div className="App flex flex-col">
      <Header/>
      <Highlights/>
    </div>
  );
}

export default App;
