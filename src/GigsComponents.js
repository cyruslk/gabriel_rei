import React, { Component } from 'react';
import Letters from "./Letters"
import './App.css';

class GigsComponents extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: null,
        randomLayer: null,
        link: null
    }
  }
  componentDidMount(){
    const text = this.props.text;
    const link = this.props.link;
    const randomLayer = this.props.randomLayer;
    this.setState({
      text,
      randomLayer,
      link
    })
  }

  returnRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  stopAnim = () => {
  }


   displayLetters = () => {
     if(!this.state.text){
       return null;
     }

     const text = this.state.text;
     const link = this.state.link;


     const initialPosition = this.state.randomLayer.initialPosition;
     const movingPosition = this.state.randomLayer.movingPosition;


     console.log(initialPosition, movingPosition);

     let renderTextLetters = text.split("")
     .map((ele, index) => {
       return (
         <Letters
            link={link}
            letter={ele}
            animation={this.returnRandom(initialPosition)}
            endAnimation={this.returnRandom(movingPosition)}
            key={index}
        />
       )
     })
     return (
       <div>
         {renderTextLetters}
       </div>
     )
  }


  render() {

      return (
        <div
        onMouseEnter={this.stopAnim}
        onMouseLeave={this.stopAnim}
        className="gigs_text_container">
           {this.displayLetters()}
        </div>
      )
    }
  }

export default GigsComponents;