import React, { Component } from "react";

export class Header extends Component {
  render() {
    const { index } = this.props; 
    const { title, view } = this.props.data ? this.props.lang === 'EN' ? this.props.data[index].EN : this.props.data[index].ID : 'loading...';
    let { imgUrl, link } = this.props.data ? this.props.lang === 'EN' ? this.props.data[index] : this.props.data[index] : 'loading...';

    if (index === 0 || imgUrl === null) {
      imgUrl = 'img/alco/101220_1x1M.jpg';
    }

    return (
      <header id="header">
        <div className="intro" id="landingPageImage" style={{backgroundImage: `url(${imgUrl})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}>
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
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
