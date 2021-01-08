import React, { Component } from 'react'
import Particles from 'react-particles-js';
import parse from 'html-react-parser';

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/alco/CEO.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>{parse( this.props.data ? this.props.lang === 'EN' ? this.props.data.EN.paragraph : this.props.data.ID.paragraph : 'loading...' )}</p>
                <h5>{ parse(this.props.data ? this.props.lang === 'EN' ? this.props.data.EN.visi : this.props.data.ID.visi : 'loading...') }</h5>
                <p>{ parse(this.props.data ? this.props.lang === 'EN' ? this.props.data.EN.visi_text : this.props.data.ID.visi_text : 'loading...') }</p>
                <h5>{ parse(this.props.data ? this.props.lang === 'EN' ? this.props.data.EN.misi : this.props.data.ID.misi : 'loading...') }</h5>
                <p>{ parse(this.props.data ? this.props.lang === 'EN' ? this.props.data.EN.misi_text : this.props.data.ID.misi_text : 'loading...') }</p>
              </div>
            </div>
          </div>
          <br/>
          <div className='text-center'>
            <div className='container'>
              <div className="section-title">
                <h2 id="culture">Company Culture</h2>
              </div>

              <div className="row">
                <div className="col-xs-12 col-md-12">
                
                
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
