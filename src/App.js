import React from 'react';
import './App.css';
import Home from './component/Home';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>TO DO'S</h1>
        <Home/>
      </div>
    )
  }

}



