import React from 'react';
import parse from 'html-react-parser';

const Contact = ({ lang, indexContent, data }) => {
    const { section, map_text, addr_title, phone_title, phone_content, email_content } = data ? lang === 'EN' ? data[indexContent].EN : data[indexContent].ID : 'loading...';
    const { googleMap, websiteExist, websiteContent, addressCombinePhone, addressPhoneContent, orderOnline } = data ? data[indexContent] : '';
    return (
        <div id="contact">
            <div className="container">
                <div className="col-md-8">
                    <div className="row">
                        <div className="section-title">
                            <h2>{ section ? section[2] : 'loading...' }</h2>
                            
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="google-maps">
                                        <iframe src={googleMap} width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-md-offset-1 contact-info">
                
                    {
                        addressCombinePhone === 'false' ? <div className="contact-item">
                            <h3>{ section ? section[3] : 'loading...'}</h3>
                            <p>
                                <span>
                                    <i className="fa fa-map-marker"></i> { addr_title ? addr_title : 'loading...' }
                                </span>
                                <p>{ map_text ? parse(map_text) : 'loading...' }</p>
                            </p>
                        </div> : null
                    }

                    { orderOnline ?
                        <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-shopping-cart"></i> { phone_title ? phone_title : 'loading...' }
                                </span>
                                { orderOnline ? parse(orderOnline) : 'loading...' }
                            </p>
                        </div>
                        : null
                    }
                    

                    {
                        addressCombinePhone === 'false' ? <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-phone"></i> { phone_title ? phone_title : 'loading...' }
                                </span>
                                { phone_content ? parse(phone_content) : 'loading...' }
                            </p>
                        </div> : null
                    }
                    
                    {
                        addressCombinePhone === 'true' ? <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-book"></i> { addr_title ? addr_title : 'loading...' }/{phone_title ? phone_title : 'loading...'}
                                </span>
                                { addressPhoneContent ? parse(addressPhoneContent) : 'loading...' }
                            </p>
                        </div> : null
                    }

                    {
                        websiteExist === 'true' ? <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-globe"></i> Website
                                </span>
                                { websiteContent ? parse(websiteContent) : 'loading...' }
                            </p>
                        </div> : null
                    }

                    { 
                        email_content ?
                        <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-envelope-o"></i> Email
                                </span>
                                { parse(email_content) } 
                            </p>
                        </div>
                        : null 
                    }
                </div>
            </div>
        </div>
    );
}

export default Contact;