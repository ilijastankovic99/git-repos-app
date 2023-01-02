import React from "react";
import { BrowserRouter } from "react-router-dom";
import routes from "router/routes";
import Routes from "router/components/Routes/Routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes routes={routes} />
    </BrowserRouter>
  );
}

export default App;
