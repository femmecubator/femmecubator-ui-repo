import React, { useEffect } from "react";
import { initialize, pageview } from "react-ga";
import logo from "./logo.svg";
import "./App.css";
import { mockServer } from "./mock/mockServer";
import { useAuth } from "./context/auth";
import { TRACKING_ID } from "./utils/constants";
if (process.env.REACT_APP_MOCK_API_TRUE) {
  console.log("starting mock server...");
  mockServer();
}

function App() {
  useEffect(() => {
    initialize(TRACKING_ID);
    // track page views and language location
    console.log(TRACKING_ID);
    pageview(window.location.pathname + window.location.search);
  }, []);
  const { auth } = useAuth();

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
