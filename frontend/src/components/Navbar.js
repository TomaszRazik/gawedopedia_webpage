import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">Gawędopedia</Typography>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/npc">
            NPC
          </Button>
          <Button color="inherit" href="/cities">
            Cities
          </Button>
          <Button color="inherit" href="/lands">
            Lands
          </Button>
          <Typography className="flexGrow1" />
          <Button color="inherit" href="/auth/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Navbar;
