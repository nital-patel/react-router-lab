import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Bird from './Bird';
import birdData from './bird-data';

class Birds extends Component {
  constructor(){
    super();
    this.state = {
      birds: birdData
    }
  }

  renderBirds(array){
    return array.map(bird => {
      return (
        <li key={bird.id}>
          <Link to={`/birds/${bird.id}`}>{bird.name} </Link>
        </li>
      )
    })
  }

  render(){
    return(
      <div className='birds'>
        <ul>
          {this.renderBirds(this.state.birds)}
        </ul>
      </div>
    )
  }
}

export default Birds;
