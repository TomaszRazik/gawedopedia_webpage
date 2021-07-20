import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { YellowButton, DeleteWindow, EditLandWindow } from "./FrontendUtils";
import Alert from "@material-ui/lab/Alert";

class LandDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: "",
        name: "",
        s_descr: "",
        l_descr: "",
        hashtags: "",
        date_added: "",
        added_by: "",
        error: null,
        openDeleteWindow: false,
        openEditWindow: false,
      },
    };

    this.openEditWindow = this.openEditWindow.bind(this);
    this.openDeleteWindow = this.openDeleteWindow.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await fetch(`/backend/lands/${this.props.match.params.id}`);
      if (!res.ok) {
        throw Error("Wystąpił błąd podczas pobierania danych...");
      }
      const item = await res.json();
      this.setState({
        item,
      });
    } catch (e) {
      console.log(e.message);
      this.setState({ error: e.message });
    }
    this.setState({
      openDeleteWindow: false,
      openEditWindow: false,
    });
  }

  openEditWindow() {
    this.setState({
      openEditWindow: true,
    });
  }

  openDeleteWindow() {
    this.setState({
      openDeleteWindow: true,
    });
  }

  closeWindow = () => {
    this.setState({
      openDeleteWindow: false,
      openEditWindow: false,
    });
  };

  async deleteItem() {
    try {
      const res = await fetch(`/backend/lands/${this.props.match.params.id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw Error("Wystąpił błąd podczas usuwania danych...");
      }
    } catch (e) {
      console.log(e.message);
      this.setState({ error: e.message }); //Tu jest bug. Sprawdzić czemu nie działa
    }
  }

  render() {
    return (
      <div>
        <h1>Item Detail:</h1>
        <h1>{this.state.item.name}</h1>
        <p>{this.state.item.s_descr}</p>
        <p>Opis: {this.state.item.l_descr}</p>
        <p>Hashtags: {this.state.item.hashtags}</p>
        <p>
          Dodano dnia:
          {new Date(this.state.item.date_added).toLocaleDateString()}
        </p>
        <p>Dodano przez: {this.state.item.added_by}</p>

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
          variant="contained"
          color="secondary"
          size="small"
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
        {this.state.openDeleteWindow && (
          <DeleteWindow
            isOpen={this.state.openDeleteWindow}
            onClose={this.closeWindow}
            onDelete={this.deleteItem}
          />
        )}
        {this.state.openEditWindow && (
          <EditLandWindow
            isOpen={this.state.openEditWindow}
            onClose={this.closeWindow}
          />
        )}
      </div>
    );
  }
}

export default LandDetail;
