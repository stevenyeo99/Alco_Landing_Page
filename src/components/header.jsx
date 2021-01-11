import React, { Component } from "react";

export class Header extends Component {
  render() {
    const { index } = this.props; 
    const { title, view } = this.props.data ? this.props.lang === 'EN' ? this.props.data[index].EN : this.props.data[index].ID : 'loading...';
    let { imgUrl, link } = this.props.data ? this.props.lang === 'EN' ? this.props.data[index] : this.props.data[index] : 'loading...';

    if (index === 0 || imgUrl === null) {
      imgUrl = (new Date()).getHours() >= 8 && (new Date()).getHours() < 18 ? 'img/alco/101220_1x1M.jpg' : 'img/alco/101220_1x1M_malam.jpg';
    }

    return (
      <header id="header">
        <div className="intro" style={{backgroundImage: `url(${imgUrl})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}>
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
                    href={link}
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
