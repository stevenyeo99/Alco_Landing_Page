import React, { Component } from "react";

export class Header extends Component {
  render() {
    const imgUrl = (new Date()).getHours() >= 8 && (new Date()).getHours() < 18 ? 'img/alco/101220_1x1M.jpg' : 'img/alco/101220_1x1M_malam.jpg';
    const { title, view } = this.props.data ? this.props.lang === 'EN' ? this.props.data.EN : this.props.data.ID : 'loading...';
    return (
      <header id="header">
        <div className="intro" style={{background: `url(${imgUrl}) center center no-repeat`, backgroundSize: 'cover'}}>
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    { title }
                    <span></span>
                  </h1>
                  <br/>
                  <a
                    href="#portfolio"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    { view }
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
