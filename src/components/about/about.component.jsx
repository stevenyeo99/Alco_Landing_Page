import React from 'react';
import parse from 'html-react-parser';

const About = ({ lang, indexContent, data }) => {
    const { section, visi_title, visi, misi_title, misi, about_content } = data ? lang === 'EN' ? data[indexContent].ID : data[indexContent].ID : 'loading...';
    return (
        <div id="aboutCompany" class="text-center">
            <div class="container">
                <div class="col-md-8 col-md-offset-2 section title">
                    <h2>{section ? section[0] : 'loading...'}</h2>
                    { about_content ? parse(about_content[0]) : 'loading...'}
                    <h3>{visi_title}</h3>
                    <p>{visi}</p>
                    <h3>{misi_title}</h3>
                    <p>{misi}</p>
                    <h3>{ section ? section[1] : 'loading...' }</h3>
                    { about_content ? parse(about_content[1]) : 'loading...' }
                </div>
            </div>
        </div>
    )
}

export default About;