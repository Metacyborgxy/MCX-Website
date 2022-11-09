import React, { Component } from 'react';
import opensea_icon from '../../assets/img/icons/opensea.png';


import MintButton from './MintButton';

export default class BannerContent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="banner__content--wrap">
            <h2 className="banner--title">Mint Your <span>Digital Assets</span> MCX NFTs</h2>
            <p>Mint here your MetaCyborg XY character non fungible token NFTs.</p>
            <div className="banner__btn--wrap">
                <MintButton/>
                <a href="https://opensea.io/MetaCyborgX" className="btn opensea__btn" target="_blank" rel="noreferrer"><img src={opensea_icon} alt="icon" />OPENSEA</a>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
