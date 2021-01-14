import React from 'react';

import Navigation from '../../../components/navigation';
import Header from '../../../components/header';
import About from '../../../components/about/about.component';
import Contact from '../../../components/contact/contact.component';
import Footer from '../../../components/footer/footer';

const AlcoDanaSejahtera = ({ lang, onChangeLanguage, data }) => {
    const index = 6;
    const indexContent = 5;
    return (
        <div>
            <Navigation lang={lang} onChangeLanguage = {onChangeLanguage} data={data.Navigation_Company} />
            <Header lang={lang} data={data.Header} index={index} />
            <About lang={lang} indexContent={indexContent} data={data.company} />
            <Contact lang={lang} indexContent={indexContent} data={data.company} />
            <Footer />
        </div>
    );
}

export default AlcoDanaSejahtera;