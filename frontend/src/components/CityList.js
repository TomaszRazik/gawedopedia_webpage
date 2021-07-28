import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityObject: {
        id: "",
        name: "",
        s_descr: "",
        l_descr: "",
        hashtags: "",
        land: "",
        date_added: "",
        added_by: "",
      },
      cityData: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:8000/backend/cities");
      const cityData = await res.json();
      this.setState({
        cityData,
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
          href="http://localhost:8000/cities/add"
        >
          Dodaj Miasto
        </Button>
        <ol>
          {this.state.cityData.map((item) => (
            <div key={item.id}>
              <h1>
                <li>
                  <Link to={`/cities/${item.id}`}>{item.name}</Link>
                </li>
              </h1>
            </div>
          ))}
        </ol>
      </div>
    );
  }
}

export default CityList;
