import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
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

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Gallery />
        <Footer />
      </div>
    )
  }
}

export default App;
