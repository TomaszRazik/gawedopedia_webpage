import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class LandList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landObject: {
        id: "",
        name: "",
        s_descr: "",
        l_descr: "",
        hashtags: "",
        date_added: "",
        added_by: "",
      },
      landData: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:8000/backend/lands");
      const landData = await res.json();
      this.setState({
        landData,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          Add new
        </Button>
        <ul>
          {this.state.landData.map((item) => (
            <div key={item.id}>
              <h1>
                {item.id}. {item.name}
              </h1>
              <p>Opis: {item.s_descr}</p>
              <span>{item.l_descr}</span>
              <h6>{item.hashtags}</h6>
              <p>Added: {item.date_added}</p>
              <h6>Added by: {item.added_by}</h6>
              <Button variant="contained">Edit</Button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default LandList;
