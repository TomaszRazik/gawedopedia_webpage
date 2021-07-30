import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import HomePage from "./HomePage";
import CampainList from "./CampainList";
import NpcList from "./NpcList";
import UserLogin from "./UserLogin";
import UserCreate from "./UserCreate";
import Navbar from "./Navbar";
import LandList from "./LandList";
import LandDetail from "./LandDetail";
import AddLand from "./AddLand";
import AddNpc from "./AddNpc";
import NpcDetail from "./NpcDetail";
import CityList from "./CityList";
import AddCity from "./AddCity";
import CityDetail from "./CityDetail";

function App() {
  return (
    <div>
      <Container maxWidth="sm">
        <Navbar />
        <Router>
          <Route path="/campain" component={CampainList} />
          <Switch>
            <Route path="/npc" exact component={NpcList} />
            <Route path="/npc/add" component={AddNpc} />
            <Route path="/npc/:id" component={NpcDetail} />
            <Switch>
              <Route path="/city" exact component={CityList} />
              <Route path="/city/add" component={AddCity} />
              <Route path="/city/:id" component={CityDetail} />
            </Switch>
          </Switch>
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
