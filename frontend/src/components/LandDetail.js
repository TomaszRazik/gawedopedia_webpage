import React, { Component } from "react";

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
      },
    };
  }
  async componentDidMount() {
    try {
      const res = await fetch(`/backend/lands/${this.props.match.params.id}`);
      const item = await res.json();
      this.setState({
        item,
      });
    } catch (e) {
      console.log(e);
      console.log(this.state.item);
    }
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
      </div>
    );
  }
}

export default LandDetail;
