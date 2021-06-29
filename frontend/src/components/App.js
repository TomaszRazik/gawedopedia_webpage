import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CampainView from "./CampainView";
import NpcView from "./NpcView";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Route path="/campain" component={CampainView} />
        <Route path="/npc" component={NpcView} />
        <Route exact path="/" component={HomePage} />
      </Router>
    </div>
  );
}
export default App;
