import React, { Component } from "react";

export class Header extends Component {
  render() {
    const imgUrl = (new Date()).getHours() >= 6 && (new Date()).getHours() < 5 ? '../img/alco/101220_1x1M.jpg' : '../img/alco/101220_1x1M_malam.jpg';
    return (
      <header id="header">
        <div className="intro" style={{background: `url(${imgUrl}) center center no-repeat`, backgroundSize: 'cover'}}>
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
