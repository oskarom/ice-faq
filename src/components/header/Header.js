import React, { Component } from 'react';

import { AskQuestionButton } from '../askQuestionButton/AskQuestionButton';

import './Header.css';
import logo from '../../assets/Icelandair_logo.png';


export class Header extends Component {
  render() {
    return (
      <div id="header">
        <img src={logo} alt=""/>
        <AskQuestionButton />
      </div>
    )
  }
}

