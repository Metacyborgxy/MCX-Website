import React, { Component } from 'react';


export default class Counter extends Component {
  render() {
    return (
        <section className="banner__wrapper">
            <div className="dez-coming-soon style-1 wow fadeIn wave-effect" id="WaveEffect" data-wow-duration="0.80s" data-wow-delay="0.50s">
                <div className="clearfix dez-coming-bx">
                    <div className="dez-content top-left">
                        
                        <div className="center-md">
                            <div className="countdown bottom-left">
                                <div className="date wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.0s">
                                    <span className="days time"></span>
                                    <span>Days</span>
                                </div>
                                <div className="date wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.3s">
                                    <span className="hours time"></span>
                                    <span>Hours</span>
                                </div>
                                <div className="date wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.6s">
                                    <span className="mins time"></span>
                                    <span>Minutes</span>
                                </div>
                                <div className="date wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.9s">
                                    <span className="secs time"></span>
                                    <span>Second</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
