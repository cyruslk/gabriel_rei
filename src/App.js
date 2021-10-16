import React, { Component } from 'react';
import GigsComponents from "./GigsComponents"
import axios from "axios";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: null,
      links: null,
      offsetX: null,
      offsetY: null,
      pageWidth: null,
      pageHeight: null,
      randomLayer: null,
      windowWidth: null,
      onClickBubbles: true
    };
  };

  componentDidMount(){

    let randomLayer = {
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

    axios.get("https://sheet.best/api/sheets/8a72d66a-5c0b-421d-a962-22d4ac672346")
    .then((response) => {
      const data = response.data;
      return data;
    })
    .then((data) => {
      let menu = data.filter((ele) => { return ele.type === "menu"});
      let links = data.filter((ele) => { return ele.type === "links"});
      this.setState({
        menu,
        randomLayer,
        links
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  displayMenu = () => {
    if(!this.state.menu){
      return (
        <div>
          loading
        </div>
      )
    }

    let linksFromMenu = this.state.menu.map((ele, index) => {
      return (
        <div key={index}>
          <a href={ele.links}
             target="_blank"
             rel="noopener noreferrer">
            <span>
              {ele.name}
            </span>
          </a>
        </div>
      )
    });
    return linksFromMenu;
  };

  displayGigsComponents = () => {
    if(!this.state.links){
      return null;
    }
  let renderGigsComponents = this.state.links.map((ele, index) => {
    return (
      <GigsComponents
        link={ele.links}
        randomLayer={this.state.randomLayer}
        text={ele.name}
        key={index}
       />
    )
  })
  return renderGigsComponents;
  }

  _onMouseMove = (event) => {
    this.setState({
      offsetX: event.nativeEvent.offsetX,
      offsetY: event.nativeEvent.offsetY
    })
  };


  displayMenu = () => {
    if(!this.state.menu){
      return null;
    }

    let renderMenuSpan = this.state.menu.map((ele, index) => {
      return (
        <span key={index}>
          <a href={ele.links}>
            {ele.name}
          </a>
        </span>
      )
    });

    return (
      <nav className="menu_spans">
        {renderMenuSpan}
      </nav>
    )
  }

  displayOnClickBubbles = () => {
    return (
      <div className="onclick_bubles">
      </div>
    )
  }


  render() {
      return (
        <div>
            <main
              id="main_wrapper">
                <div id="menu">
                  {this.displayMenu()}
                </div>
                <div id="gigs">
                  {this.displayGigsComponents()}
                </div>
            </main>
        </div>
      )
  }
}

export default App;