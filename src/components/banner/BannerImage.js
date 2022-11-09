import React, { Component } from 'react';
import banner_img from '../../assets/img/banner/banner__img.png';

export default class BannerImage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="banner__img">
            <img src={banner_img} alt="img" />
            <div className="banner__price--wrap">
                <p className="price">0.3 ETH</p>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
