import React from "react";
import './App.scss';
import AppBar from './AppBar/AppBar'
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";

function App() {
  return (
    <div className="App">
      <AppBar />
      <BoardBar />
      <BoardContent />
      
      
    </div>
  );
}

export default App;
