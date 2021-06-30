import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CampainView from "./CampainView";
import NpcView from "./NpcView";
import UserLogin from "./UserLogin";
import UserCreate from "./UserCreate";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Route path="/campain" component={CampainView} />
        <Route path="/npc" component={NpcView} />
        <Route path="/auth/login" component={UserLogin} />
        <Route path="/auth/create-user" component={UserCreate} />
        <Route exact path="/" component={HomePage} />
      </Router>
    </div>
  );
}
export default App;
