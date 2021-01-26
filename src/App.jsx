import React from 'react'
import { Switch, Route } from 'react-router-dom';

// Pages
import Main from './pages/main/main.page';
import AlcoJayaRaya from './pages/company/alco_jaya_raya/AlcoJayaRaya.page';
import WontechEraGlobalindo from './pages/company/wontech_era_globalindo/WontechEraGlobalindo.page';
import AlcoDanaMandiri from './pages/company/alco_dana_mandiri/AlcoDanaMandiri.page';
import AlcoCollection from './pages/company/alco_collection/AlcoCollection.page';
import AlcoJayaMobilindo from './pages/company/alco_jaya_mobilindo/AlcoJayaMobilindo.page';
import AlcoDanaSejahtera from './pages/company/alco_dana_sejahtera/AlcoDanaSejahtera.page';
import AlcoConuts from './pages/company/alco_conuts/AlcoConuts.page';
import AlcoCoffee from './pages/company/alco_coffee/AlcoCoffee.page';
import AlcoGlobalTechnology from './pages/company/alco_global_technology/AlcoGlobalTechnology.page';
import AlcoFarmindoLestari from './pages/company/alco_farmindo_lestari/AlcoFarmindoLestari.page';

// Data Content
import JsonData from './data/data.json';

export class App extends React.Component {

  state = {
    landingPageData: {},
    language: sessionStorage.getItem('language') ? sessionStorage.getItem('language') : 'EN',
    // is_visible: false,
  }

  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();

    // var scrollComponent = this;
    // document.addEventListener('scroll', function(e) {
    //   scrollComponent.toggleVisibility();
    // });
  }

  // toggleVisibility = () => {
  //   if (window.pageYOffset > 300) {
  //     this.setState({
  //       is_visible: true
  //     });
  //   } else {
  //     this.setState({
  //       is_visible: false
  //     });
  //   }
  // }

  // scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  //   });
  // }

  onChangeLanguage = (value) => {
    sessionStorage.setItem('language', value);
    this.setState({
      language: value
    });
  }

  render() {
    let lang = sessionStorage.getItem('language');
    if (this.state.language === 'EN') {
      lang = 'EN';
    } 
    
    return (
      <Switch>
        <Route exact path="/" render={(props) => <Main lang={lang} onChangeLanguage={this.onChangeLanguage} data={this.state.landingPageData} />} />
        <Route path="/AlcoJayaRaya" render={(props) => <AlcoJayaRaya lang={lang} onChangeLanguage={this.onChangeLanguage} data={this.state.landingPageData} />} />
        <Route path="/WontechEraGlobalindo" render={(props) => <WontechEraGlobalindo lang={lang} onChangeLanguage={this.onChangeLanguage} data={this.state.landingPageData} />} />
        <Route path="/AlcoDanaMandiri" render={(props) => <AlcoDanaMandiri lang={lang} onChangeLanguage={this.onChangeLanguage} data={this.state.landingPageData} />} />
        <Route path="/AlcoCollection" render={(props) => <AlcoCollection lang={lang} onChangeLanguage={this.onChangeLanguage} data={this.state.landingPageData} />} />
        <Route path="/AlcoJayaMobilindo" render={(props) => <AlcoJayaMobilindo lang={lang} onChangeLanguage={this.onChangeLanguage} data={this.state.landingPageData} />} />
        <Route path="/AlcoDanaSejahtera" render={(props) => <AlcoDanaSejahtera lang={lang} onChangeLanguage={this.onChangeLanguage} data={this.state.landingPageData} />} />
        <Route path="/AlcoConuts" render={(props) => <AlcoConuts lang={lang} onChangeLanguage={this.onChangeLanguage} data={this.state.landingPageData} />} />
        <Route path="/AlcoCoffee" render={(props) => <AlcoCoffee lang={lang} onChangeLanguage={this.onChangeLanguage} data={this.state.landingPageData} />} />
        <Route path="/AlcoGlobalTechnology" render={(props) => <AlcoGlobalTechnology lang={lang} onChangeLanguage={this.onChangeLanguage} data={this.state.landingPageData} />} />
        <Route path="/AlcoFarmindoLestari" render={(props) => <AlcoFarmindoLestari lang={lang} onChangeLanguage={this.onChangeLanguage} data={this.state.landingPageData} />} />  
      </Switch>
    )
  }
}

export default App;
