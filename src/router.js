import React from 'react';
import App from './App';
import Birds from './Birds';
import Bird from './Bird';
import Nav from './Nav'
import { BrowserRouter, Route } from 'react-router-dom';

export default (
  <BrowserRouter>
    <div className='router'>
      <Nav />
      <Route exact path='/' component={App} />
      <Route exact path='/birds' component={Birds} />
      <Route path='/birds/:id' component={Bird} />
    </div>
  </BrowserRouter>
)
