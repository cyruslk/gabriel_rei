import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import './App.css';

class GigsComponents extends Component {

  render() {

    let {
      data,
      randomLayer
    } = this.props;

    const returnRandom = (array) => {
      return array[Math.floor(Math.random() * array.length)];
    }

    const dataToSpan = (data) => {

      return data
      .split("")
      .map((ele, index) => {

        const x = returnRandom(randomLayer.movingPosition).top;
        const y = returnRandom(randomLayer.movingPosition).left;

        const rotate = keyframes`
        0% {
          transform: translate(0, 0); 
        }
        50% {
          transform: translate(${x}, ${y});
        }
        100%{
          transform: translate(0, 0); 
        }
    `;

        const MovingLink =  styled.a`
        animation: ${rotate} 5s linear infinite;
      `;

        return (
          <MovingLink>{ele}</MovingLink>
        )
      })
    }
 
      return (
        <div className="gigs_container">
          {dataToSpan(data)}
        </div>
      )
    }
  }

export default GigsComponents;