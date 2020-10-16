import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { mockServer } from "./mock/mockServer";
import Header from "./Header/Header";

if (process.env.REACT_APP_MOCK_API_TRUE) {
  console.log("starting mock server...");
  mockServer();
}

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
