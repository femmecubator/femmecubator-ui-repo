import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { mockServer } from "./mock/mockServer";
import { useAuth } from "./context/auth";

if (process.env.REACT_APP_MOCK_API_TRUE) {
  console.log("starting mock server...");
  mockServer();
}

function App() {
  const { auth } = useAuth();

  console.log("isLoggedIn?", auth.isLoggedIn());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Femmecubator - Coming Soon!</div>
      </header>
    </div>
  );
}

export default App;
