import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

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
        <Button
          variant="contained"
          color="primary"
          href="http://localhost:8000/lands/add"
        >
          Add new
        </Button>
        <ul>
          {this.state.landData.map((item) => (
            <div key={item.id}>
              <h1>
                <Link to={`/lands/${item.id}`}>
                  {item.id}. {item.name}
                </Link>
              </h1>
              <p>Opis: {item.s_descr}</p>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default LandList;
