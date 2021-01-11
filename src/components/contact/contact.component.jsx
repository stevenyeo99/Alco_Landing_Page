import React from 'react';
import parse from 'html-react-parser';

const Contact = ({ lang, indexContent, data }) => {
    const { section, map_text, addr_title, phone_title, phone_content, email_content } = data ? lang === 'EN' ? data[indexContent].EN : data[indexContent].ID : 'loading...';
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
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0341425123165!2d104.01183161475386!3d1.1359924991713939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d9897925758b7b%3A0xf113c0ea775e5408!2sPT.%20Alco%20Jaya%20Raya!5e0!3m2!1sen!2sid!4v1610375317177!5m2!1sen!2sid" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-md-offset-1 contact-info">
                    <div className="contact-item">
                        <h3>{ section ? section[3] : 'loading...'}</h3>
                        <p>
                            <span>
                                <i className="fa fa-map-marker"></i> { addr_title ? addr_title : 'loading...' }
                            </span>
                            <p>{ map_text }</p>
                        </p>
                    </div>

                    <div className="contact-item">
                        <p>
                            <span>
                                <i className="fa fa-phone"></i> { phone_title ? phone_title : 'loading...' }
                            </span>
                            { phone_content ? parse(phone_content) : 'loading...' }
                        </p>
                    </div>

                    <div className="contact-item">
                        <p>
                            <span>
                                <i className="fa fa-envelope-o"></i> Email
                            </span>
                            { email_content ? parse(email_content) : 'loading...' }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;