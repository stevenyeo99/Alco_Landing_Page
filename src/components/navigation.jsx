import React, { Component } from "react";
import SwitchSelector from "react-switch-selector";

export class Navigation extends Component {
  render() {
    // Switch bar options
    const options = [
      {
        label: "EN",
        value: "EN",
        selectedBackgroundColor: "#0000FF",
        selectedFontColor: "#FFFFFF"
      },
      {
        label: "ID",
        value: "ID",
        selectedBackgroundColor: "#ff0000",
        selectedFontColor: "#FFFFFF"
      }
    ];

    const initialSelectedIndex = options.findIndex(({value}) => value === 'ENG');

    const { title } = this.props.data ? this.props.lang === 'EN' ? this.props.data.EN : this.props.data.ID : 'loading...';
    const { link } = this.props.data ? this.props.data : 'loading...';

    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <img src="img/alco/Alco Logo - OK-1.jpg" alt="alco" />
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              { title ?
                title.map((value, index) => {
                  return (<li>
                    <a href={link[index]} className='page-scroll'>
                      { value }
                    </a>
                  </li>)
                }) : '.....'
              }
              
              <li>
                <a href={"https://web.facebook.com/alco.co.id"} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook-square link fa-lg" style={{ marginTop: "4px" }}></i>
                </a>
              </li>
              <li>
                <a href={"https://www.instagram.com/alcogroup.id/"} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram link fa-lg" style={{ marginTop: "4px" }}></i>
                </a>
              </li>

              <li>
                <div className="your-required-wrapper" style={{width: 100, height: 30, marginTop: "28px", marginLeft: "15px"}}>
                    <SwitchSelector
                        onChange={this.props.onChangeLanguage}
                        options={options}
                        initialSelectedIndex={initialSelectedIndex}
                        backgroundColor={"#353b48"}
                        fontColor={"#f5f6fa"}
                    />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
