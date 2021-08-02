import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { YellowButton, DeleteWindow, EditCityWindow } from "./FrontendUtils";
import Alert from "@material-ui/lab/Alert";

class CityDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      s_descr: "",
      l_descr: "",
      hashtags: "",
      land: "",
      date_added: "",
      added_by: "",
      error: null,
      openDeleteWindow: false,
      openEditWindow: false,
    };

    this.openEditWindow = this.openEditWindow.bind(this);
    this.openDeleteWindow = this.openDeleteWindow.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await fetch(`/backend/city/${this.props.match.params.id}`);
      if (!res.ok) {
        throw Error("Wystąpił błąd podczas pobierania danych...");
      }
      const item = await res.json();
      this.setState({
        id: item.id,
        name: item.name,
        s_descr: item.s_descr,
        l_descr: item.l_descr,
        hashtags: item.hashtags,
        land: item.land,
        date_added: item.date_added,
        added_by: item.added_by,
      });
    } catch (e) {
      console.log(e.message);
      this.setState({ error: e.message });
    }
    this.setState({
      openDeleteWindow: false,
      openEditWindow: false,
    });
    console.log(this.state);
  }

  openEditWindow() {
    this.setState({ openEditWindow: true });
  }

  openDeleteWindow() {
    this.setState({ openDeleteWindow: true });
  }

  closeWindow() {
    this.setState({
      openDeleteWindow: false,
      openEditWindow: false,
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  async deleteItem() {
    try {
      const res = await fetch(`/backend/city/${this.state.id}`, {
        method: "DELETE",
        redirect: "follow",
        credentials: "include",
      });
      console.log(res);
      if (!res.ok) {
        throw Error("Wystąpił błąd podczas usuwania danych...");
      }
      this.setState({ success: "Pozycja została usunięta" });
    } catch (e) {
      console.log(e.message);
      this.setState({ error: e.message });
    }
    this.setState({ openDeleteWindow: false });
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
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post_data),
    };

    try {
      const res = await fetch(
        `/backend/city/${this.state.id}/`,
        requestOptions
      );
      if (!res.ok) {
        throw Error("Wystąpił błąd podczas wysyłąnia danych...");
      }

      this.setState({
        success: "Pozycja została zmieniona",
      });
    } catch (e) {
      console.log(e.message);
      this.setState({ error: e.message });
    }
    this.setState({ openEditWindow: false });
  }

  render() {
    return (
      <div>
        <h1>Szczegóły miasta:</h1>
        <h1>Nazwa: {this.state.name}</h1>
        <p>{this.state.s_descr}</p>
        <p>Opis: {this.state.l_descr}</p>
        <p>Kraina pochodzenia: {this.state.land.name}</p>
        <p>Hashtags: {this.state.hashtags}</p>
        <p>
          Dodano dnia: {new Date(this.state.date_added).toLocaleDateString()}
        </p>
        <p>Dodano przez: {this.state.added_by}</p>

        <YellowButton
          size="small"
          variant="contained"
          color="primary"
          startIcon={<CloudUploadIcon />}
          onClick={this.openEditWindow}
        >
          Edytuj
        </YellowButton>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={this.openDeleteWindow}
        >
          Usuń
        </Button>

        {this.state.error && (
          <Alert variant="filled" severity="error">
            {this.state.error}
          </Alert>
        )}
        {this.state.success && (
          <Alert variant="filled" severity="success">
            {this.state.success}
          </Alert>
        )}
        {this.state.openDeleteWindow && (
          <DeleteWindow
            isOpen={this.state.openDeleWindow}
            onClose={this.closeWindow}
            onDelete={this.deleteItem}
          />
        )}
        {this.state.openEditWindow && (
          <EditCityWindow
            isOpen={this.state.openEditWindow}
            onClose={this.closeWindow}
            name={this.state.name}
            s_descr={this.state.s_descr}
            l_descr={this.state.l_descr}
            hashtags={this.state.hashtags}
            lad={this.state.land}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

export default CityDetail;
