import React, { Component } from 'react';
import BannerImage from './BannerImage';
import BannerShapes from './BannerShapes';
import BannerContent from './BannerContent';
import Countdown from "react-countdown";
import Renderer from "../countdown/Renderer";

export default class Banner extends Component {
  render() {
    return (
        <section className="banner__wrapper">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-0 order-lg-2">
                        <BannerImage/>
                    </div>
                    <div className="col-lg-6">
                        <BannerContent/>
                    </div>
                </div>
            </div>
            <BannerShapes/>
        </section>
    )
  }
}
