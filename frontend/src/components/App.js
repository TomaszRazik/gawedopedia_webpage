import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CampainList from "./CampainList";
import NpcList from "./NpcList";
import UserLogin from "./UserLogin";
import UserCreate from "./UserCreate";
import Navbar from "./Navbar";
import { Container } from "@material-ui/core";
import LandList from "./LandList";

function App() {
  return (
    <div>
      <Container maxWidth="sm">
        <Navbar />
        <Router>
          <Route path="/campain" component={CampainList} />
          <Route path="/npc" component={NpcList} />
          <Route path="/lands" component={LandList} />
          <Route path="/lands/:id" component={LandDetail} />
          <Route path="/auth/login" component={UserLogin} />
          <Route path="/auth/create-user" component={UserCreate} />
          <Route exact path="/" component={HomePage} />
        </Router>
      </Container>
    </div>
  );
}
export default App;
