import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class NpcList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      npcObject: {
        id: "",
        name: "",
        avatar: "",
        s_descr: "",
        l_descr: "",
        hashtags: "",
        city: "",
        date_added: "",
        added_by: "",
      },
      npcData: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:8000/backend/npc");
      const npcData = await res.json();
      this.setState({
        npcData,
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
          href="http://localhost:8000/npc/add"
        >
          Dodaj NPC
        </Button>
        <ol>
          {this.state.npcData.map((item) => (
            <div key={item.id}>
              <h1>
                <li>
                  <Link to={`/npc/${item.id}`}>{item.name}</Link>
                </li>
              </h1>
            </div>
          ))}
        </ol>
      </div>
    );
  }
}

export default NpcList;
