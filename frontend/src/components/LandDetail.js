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
        deleteWindow: false,
        editWindow: false,
      },
    };

    this.handleEditButton = this.handleEditButton.bind(this);
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
  }

  handleEditButton() {
    this.setState({
      editWindow: true,
    });
  }

  openDeleteWindow() {
    this.setState({
      deleteWindow: true,
    });
  }

  closeWindow() {
    this.setState({
      deleteWindow: false,
      editWindow: false,
    });
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
          onClick={this.handleEditButton}
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
        {/* Wyskakujące okienka nie działają poprawnie. Naprawić */}
        {this.state.deleteWindow && (
          <DeleteWindow
            open={this.state.deleteWindow}
            onClose={() => {
              this.setState({ deleteWindow: false });
            }}
          />
        )}
        {this.state.editWindow && (
          <EditLandWindow
            open={this.state.editWindow}
            onClose={() => {
              this.setState({ editWindow: false });
            }}
          />
        )}
      </div>
    );
  }
}

export default LandDetail;
