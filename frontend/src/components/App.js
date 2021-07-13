import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import CampainList from "./CampainList";
import NpcList from "./NpcList";
import UserLogin from "./UserLogin";
import UserCreate from "./UserCreate";
import Navbar from "./Navbar";
import { Container } from "@material-ui/core";
import LandList from "./LandList";
import LandDetail from "./LandDetail";
import AddLand from "./AddLand";

function App() {
  return (
    <div>
      <Container maxWidth="sm">
        <Navbar />
        <Router>
          <Route path="/campain" component={CampainList} />
          <Route path="/npc" component={NpcList} />
          <Switch>
            <Route path="/lands" exact component={LandList} />
            <Route path="/lands/add" component={AddLand} />
            <Route path="/lands/:id" component={LandDetail} />
          </Switch>
          <Route path="/auth/login" component={UserLogin} />
          <Route path="/auth/create-user" component={UserCreate} />
          <Route exact path="/" component={HomePage} />
        </Router>
      </Container>
    </div>
  );
}
export default App;
