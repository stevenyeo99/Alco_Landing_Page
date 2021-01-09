import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Features from './components/features';
import Gallery from './components/gallery';
import Footer from './components/footer/footer';
import JsonData from './data/data.json';
import { Switch, Route } from 'react-router-dom';

export class App extends Component {

  state = {
    landingPageData: {},
    language: 'EN',
  }

  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  onChangeLanguage = (value) => {
    this.setState({
      language: value
    });
  }

  render() {
    let lang = 'ID';
    if (this.state.language === 'EN') {
      lang = 'EN';
    } 
    return (
      <div>
        <Navigation lang={ lang } onChangeLanguage = {this.onChangeLanguage} data={this.state.landingPageData.Navigation_Main} />
        <Header lang={ lang } data={this.state.landingPageData.Header} />
        <About lang={lang} data={this.state.landingPageData.About} />
        <Features lang={lang} data={this.state.landingPageData.Features}/>
        <Gallery />
        <Footer />
      </div>
    )
  }
}

export default App;
