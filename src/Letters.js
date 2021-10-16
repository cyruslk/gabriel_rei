import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import './App.css';

class Letters extends Component {
  constructor(props) {
    super(props);
    this.state = {
    letter: null,
    animation: null,
    endAnimation: null
  }
}

componentDidMount(){
  this.setState({
    letter: this.props.letter,
    link: this.props.link,
    animation: this.props.animation,
    endAnimation: this.props.endAnimation
  })
}

  render(){
    if(!this.state.animation){
      return(
        <div>
          loading
        </div>
      )
    }else{

      const animation = this.state.animation;
      const endAnimation = this.state.endAnimation;
      const keysAnimation = Object.keys(animation);
      const keysEndAnimation = Object.keys(endAnimation);
      const valuesAnimation = Object.values(animation)
      const valuesEndAnimation = Object.values(endAnimation);


      const rotate = keyframes`
        0% {
          ${keysAnimation[0]}:${animation.left};
          ${keysAnimation[1]}:${animation.top};
        }
        50% {
          ${keysEndAnimation[0]}:${endAnimation.left};
          ${keysEndAnimation[1]}:${endAnimation.top};
        }
        100%{
          ${keysAnimation[0]}:${animation.left};
          ${keysAnimation[1]}:${animation.top};
        }
      `;

      const MovingSpan =  styled.span`
          animation: ${rotate} 5s linear infinite;
      `;

      return(
        <MovingSpan
          className="letter">
            <a
            target="_blank"
            rel="noreferrer noopener"
            href={this.state.link}>
            {this.state.letter}
            </a>
        </MovingSpan>
      )
    }
  }
}

export default Letters;