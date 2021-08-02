import React, { Component } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

class AddCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      s_descr: "",
      l_descr: "",
      hashtags: "",
      land: 1, //Tymczasowa stała wartość
      success: false,
      error: null,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  async handleSubmit() {
    const post_data = {
      name: this.state.name,
      s_descr: this.state.s_descr,
      l_descr: this.state.l_descr,
      hashtags: this.state.hashtags,
      land: this.state.land,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post_data),
    };

    try {
      const res = await fetch(
        "http://localhost:8000/backend/city/",
        requestOptions
      );
      if (!res.ok) {
        throw Error("Wystąpił błąd podczas wysyłania danych...");
      }

      this.setState({
        name: "",
        s_descr: "",
        l_descr: "",
        hashtags: "",
        land: "",
        success: "Dodano pozycję. Możesz dodać kolejną",
      });
    } catch (e) {
      console.log(e.message);
      this.setState({ error: e.message });
    }
  }

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Dodaj nowe miasto!</h1>
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
          <TextField
            inputProps={{ maxLength: 200 }}
            name="land"
            value={this.state.land}
            label="Kraina"
            onChange={this.handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Dodaj
          </Button>
        </Grid>
        <Grid item xs={12}>
          {this.state.success && (
            <Alert variant="filled" severity="success">
              {this.state.success}
            </Alert>
          )}
        </Grid>
        <Grid item xs={12}>
          {this.state.error && (
            <Alert variant="filled" severity="error">
              {" "}
              {this.state.error}
            </Alert>
          )}
        </Grid>
      </Grid>
    );
  }
}

export default AddCity;
