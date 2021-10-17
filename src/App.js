import React, { Component } from 'react';
import GigsComponents from "./GigsComponents"
import axios from "axios";
import './App.css';

class App extends Component {

  data = [
    "Secret Witness – 'Volume I' -",
    "Gabriel Rei – City Of Dreams -",
    "Laroie – Speed of Life -",
    "Mixes -",
    "Interview with Bolting Bits -"
  ];

  randomLayer = {
    initialPosition: [
      {left: "0vw",top: "0vw"},
      {left: "0vw",top: "0vw"},
      {left: "0vw",top: "0vw"},
      {left: "0vw",top: "0vw"},
      {left: "0vw",top: "0vw"},
      {left: "0vw",top: "0vw"}
    ],
    movingPosition: [
      {left: "1vw", top: "0.5vw"},
      {left: "1.3vw",top: "0.7vw"},
      {left: "3.4vw",top: "1.5vw"},
      {left: "2.2vw",top: "0.5vw"},
      {left: "-1.4vw",top: "0.3vw"},
      {left: "1.3vw",top: "-1.7vw"},
    ]
  };

  generateParentComponents = () => {
    return this.data
    .map((ele, index) => {
      return (
        <GigsComponents 
          data={ele}
          randomLayer={this.randomLayer}
        />
      )
    })
  }

  render() {
      return (
        <div className="gigt_container_master">
           {this.generateParentComponents()}
        </div>
      )
  }
}

export default App;