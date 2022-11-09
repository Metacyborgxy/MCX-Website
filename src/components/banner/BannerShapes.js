import React, { Component } from 'react';
import shape from '../../assets/img/banner/animate__shape-4.png';

export default class BannerShapes extends Component {
  render() {
    return (
      <React.Fragment>
            <div className="animate__shape-1"><img src={shape} alt="shape"/></div>
            <div className="animate__shape-2"><img src={shape} alt="shape"/></div>
            <div className="animate__shape-3"><img src={shape} alt="shape"/></div>
            <div className="animate__shape-5"><img src={shape} alt="shape"/></div>
            <div className="animate__shape-4"><img src={shape} alt="shape"/></div>
      </React.Fragment>
    )
  }
}
