import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { YellowButton } from "./FrontendUtils";
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
      },
    };

    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
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
    pass;
  }

  handleDeleteButton() {
    pass;
  }

  render() {
    return (
      <div>
        <h1>Item Detail:</h1>
        <h1>{this.state.item.name}</h1>
        <p>{this.state.item.s_descr}</p>
        <p>{this.state.item.l_descr}</p>
        <p>{this.state.item.hashtags}</p>
        <p>{this.state.item.date_added}</p>
        <p>{this.state.item.added_by}</p>

        <YellowButton
          size="small"
          variant="contained"
          color="primary"
          startIcon={<CloudUploadIcon />}
          onClick={this.handleEditButton}
        >
          Edit
        </YellowButton>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<DeleteIcon />}
          onClick={this.handleDeleteButton}
        >
          Delete
        </Button>

        {this.state.error && (
          <Alert variant="filled" severity="error">
            {this.state.error}
          </Alert>
        )}
      </div>
    );
  }
}

export default LandDetail;
