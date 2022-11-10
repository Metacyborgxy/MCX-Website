import React, { Component } from 'react';
import opensea_icon from '../../assets/img/icons/opensea.png';
import Countdown from "react-countdown";
import Renderer from "../countdown/Renderer";

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
            {/* countdown */}
            <div className="cs-01-countdown space-mt--50">
              <Countdown
                date={new Date("December 31, 2022 12:12:00")}
                renderer={Renderer}
              />
            </div>
        </div>
      </React.Fragment>
    )
  }
}
