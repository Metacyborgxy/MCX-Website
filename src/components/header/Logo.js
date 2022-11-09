import React, { Component } from 'react';
import logo from '../../assets/img/logo/logo.png';


export default class Logo extends Component {
  render() {
    return (
      <React.Fragment>
            <div className="logo">
                <a href="/#"><img src={logo} alt={'mcx-logo'} /></a>
            </div>
      </React.Fragment>
    )
  }
}
