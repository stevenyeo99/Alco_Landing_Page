import React, { Component } from "react";

export class features extends Component {
  render() {
    const { title, listItem } = this.props.data ? this.props.lang === 'EN' ? this.props.data.EN : this.props.data.ID : 'loading...';
    return (
      <div id="culture" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>{ title }</h2>
          </div>
          <div className="row">
            {this.props.data
              ? listItem.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-12 col-md-12">
                    <div className="row" style={{marginBottom: '15px'}}>
                      <div className="col-xs-12 col-md-2 col-md-offset-1 col-lg-2 col-lg-offset-1">
                        {""}
                        <img src={d.image} alt={d.title}/>
                      </div>

                      <div className="col-xs-12 col-md-9" style={{textAlign: 'left'}}>
                        {""}
                        <h3>{d.title}</h3>
                        <p>{d.text}</p>
                      </div>  
                    </div>      
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default features;
