import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class AddLand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      s_descr: "",
      l_descr: "",
      hashtags: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.error = this.error.bind(this);
  }

  error = null;

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const post_data = {
      name: this.state.name,
      s_descr: this.state.s_descr,
      l_descr: this.state.l_descr,
      hashtags: this.state.hashtags,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post_data),
    };

    fetch("http://localhost:8000/backend/lands/", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e.message));
  }

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Dodaj nową krainę!</h1>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="name"
            inputProps={{ maxLength: 100 }}
            value={this.state.name}
            label="Nazwa"
            onChange={this.handleInputChange}
          />
          <TextField
            required
            name="s_descr"
            inputProps={{ maxLength: 300 }}
            value={this.state.s_descr}
            label="Krótki opis"
            onChange={this.handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            name="l_descr"
            value={this.state.l_descr}
            label="Długi opis"
            multiline
            rows={8}
            onChange={this.handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            inputProps={{ maxLength: 200 }}
            name="hashtags"
            value={this.state.hashtags}
            label="Hashtags"
            onChange={this.handleInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Dodaj
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default AddLand;
