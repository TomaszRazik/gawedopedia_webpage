import React, { Component } from "react";

class LandDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: "",
      s_descr: "",
      l_descr: "",
      hashtags: "",
      date_added: "",
      added_by: "",
    };
  }
  async componentDidMount() {
    try {
      const res = await fetch(
        "http:/localhost:8000/backend/lands/${this.state.id}/"
      );
      const detailData = await res.json();
      this.setState({
        detailData,
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.s_descr}</p>
        <p>{this.state.l_descr}</p>
        <p>{this.state.hashtags}</p>
        <p>{this.state.date_added}</p>
        <p>{this.state.added_by}</p>
      </div>
    );
  }
}

export default LandDetail;
