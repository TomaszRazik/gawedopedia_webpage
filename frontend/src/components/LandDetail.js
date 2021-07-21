import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { YellowButton, DeleteWindow, EditLandWindow } from "./FrontendUtils";
import Alert from "@material-ui/lab/Alert";

class LandDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };

    this.openEditWindow = this.openEditWindow.bind(this);
    this.openDeleteWindow = this.openDeleteWindow.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await fetch(`/backend/lands/${this.props.match.params.id}`);
      if (!res.ok) {
        throw Error("Wystąpił błąd podczas pobierania danych...");
      }
      const item = await res.json();
      console.log(item);
      this.setState({
        id: item.id,
        name: item.name,
        s_descr: item.s_descr,
        l_descr: item.l_descr,
        hashtags: item.hashtags,
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
      console.log(this.state);
      const res = await fetch(`/backend/lands/${this.state.id}`, {
        method: "DELETE",
      });
      console.log(res.status);
      if (!res.ok) {
        throw Error("Wystąpił błąd podczas usuwania danych...");
      } else {
        // Wyrażenie history.push nie działą
        let history = useHistory();
        history.push("/lands");
      }
    } catch (e) {
      console.log(e.message);
      this.setState({ error: e.message });
    }
  }

  render() {
    return (
      <div>
        <h1>Item Detail:</h1>
        <h1>{this.state.name}</h1>
        <p>{this.state.s_descr}</p>
        <p>Opis: {this.state.l_descr}</p>
        <p>Hashtags: {this.state.hashtags}</p>
        <p>
          Dodano dnia:
          {new Date(this.state.date_added).toLocaleDateString()}
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
