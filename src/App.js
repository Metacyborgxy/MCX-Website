import React, { Component } from 'react'
import './App.css';
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import './assets/fonts/emeraldBR.ttf';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <main>
          <Banner/>
        </main>
      </React.Fragment>
    )
  }
}
