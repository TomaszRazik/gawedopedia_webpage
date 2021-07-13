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
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    // Dokończyć wysyłanie do Bazy danych
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
            <Button variant="contained" color="primary" type="submit">
              Dodaj
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default AddLand;
