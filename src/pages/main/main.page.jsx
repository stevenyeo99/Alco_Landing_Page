import React from 'react';

import Navigation from '../.././components/navigation';
import Header from '../.././components/header';
import About from '../.././components/about';
import Culture from '../../components/culture';
import Gallery from '../.././components/gallery';
import Footer from '../.././components/footer/footer';

const Main = ({ lang, onChangeLanguage, data}) => {
    const index = 0;
    return (
        <div>
            <Navigation lang={ lang } onChangeLanguage = {onChangeLanguage} data={data.Navigation_Main} />
            <Header lang={ lang } data={data.Header} index={index}/>
            <About lang={lang} data={data.About} />
            <Culture lang={lang} data={data.Features}/>
            <Gallery lang={lang} data={data.OurGroup} />
            <Footer />
        </div>
    );
}

export default Main;
