import './App.css';
import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navabar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={9}/>
      </div>
    )
  }
}
