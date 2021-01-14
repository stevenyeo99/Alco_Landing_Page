import React, { Component } from 'react'
import parse from 'html-react-parser';

export class about extends Component {
  render() {
    const { about_title, paragraph, visi, visi_text, misi, misi_text, job_title, quotes } = this.props.data ? this.props.lang === 'EN' ? this.props.data.EN : this.props.data.ID : 'loading...';
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/alco/CEO.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>{ parse( about_title ? about_title : '' ) }</h2>
                <p>{parse( paragraph ? paragraph : '')}</p>
                <h5>{ parse( visi ? visi : '') }</h5>
                <p>{ parse( visi_text ? visi_text : '') }</p>
                <h5>{ parse( misi ? misi : '') }</h5>
                <p>{ parse( misi_text ? misi_text : '' ) }</p>
                <div class="testimonial-meta">
                  {"Budiyanto Alpi"}
                  <br/>
                  &#40;{job_title}&#41;
                  <br /><br />
                  <span style={{ fontFamily: "Georgia", fontStyle: "italic" }}>&#8220;{quotes}&#8221;</span>
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
