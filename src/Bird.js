import React, { Component } from 'react';
import birdData from './bird-data';

class Bird extends Component {

  weaponMap(array){
    return array.map((weapon, index) => {
      return (
        <li key={index}>
          {weapon}
        </li>
      )
    })
  }

  specifyBird(){
    const birdId = Number(this.props.match.params.id);
    const thisBird = birdData.find(bird => bird.id == birdId);
    return (
      <div className='bird'>
        <h1> This bird is the {thisBird.name} </h1>
        <p> {thisBird.description} </p>
        <img src={thisBird.image} alt='bird' />
        <ul>
          {this.weaponMap(thisBird.weapons)}
        </ul>
      </div>
    )
  }

  render(){
    return(
      <div className='bird-holder'>
        {this.specifyBird()}
      </div>
    )
  }

}
export default Bird;
