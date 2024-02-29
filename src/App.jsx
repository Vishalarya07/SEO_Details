import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import ThreePage from "pages/Three";

function App() {
  return (
    <Router>
      <ThreePage/>
    </Router>
  );
}

export default App;
