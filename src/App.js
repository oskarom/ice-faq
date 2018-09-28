import React, { Component } from 'react';

import './App.css';
import { Header } from './components/header/Header';
import { Questions } from './components/questions/Questions';
import { PopularTags } from './components/popularTags/PopularTags';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Questions />
        <PopularTags />
        <div id="background-filler-row2-left"/>
        <div id="background-filler-row2-right"/>
        <div id="background-filler-row3-left"/>
        <div id="background-filler-row3-right"/>
      </div>
    );
  }
}

export default App;
