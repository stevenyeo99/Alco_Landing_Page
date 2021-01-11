import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="ourGroup" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>{ this.props.data ? this.props.lang === 'EN' ? this.props.data.EN.title : this.props.data.ID.title : 'loading...' }</h2>

          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="/AlcoJayaRaya"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>PT ALCO JAYA RAYA</h4>
                      </div>
                      <img
                        src="img/alco/Alco Logo - OK-1.jpg"
                        className="img-responsive company-img"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="#"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>PT WONGTECH ERA GLOBALINDO</h4>
                      </div>
                      <img
                        src="img/alco/Wongtech Logo 14 (1).png"
                        className="img-responsive company-img"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="#"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>PT ALCO DANA MANDIRI</h4>
                      </div>
                      <img
                        src="img/alco/Alco Logo - OK-1.jpg"
                        className="img-responsive company-img"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="#"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>ALCO COLLECTION</h4>
                      </div>
                      <img
                        src="img/alco/Alco Logo - OK-1.jpg"
                        className="img-responsive company-img"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="#"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>PT ALCO JAYA MOBILINDO</h4>
                      </div>
                      <img
                        src="img/alco/Alco Logo - OK-1.jpg"
                        className="img-responsive company-img"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="#"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>KOPERASI SIMPAN PINJAM ALCO DANA SEJAHTERA</h4>
                      </div>
                      <img
                        src="img/alco/Alco Logo - OK-1.jpg"
                        className="img-responsive company-img"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="#"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>ALCO conut's</h4>
                      </div>
                      <img
                        src="img/alco/conuts.JPG"
                        className="img-responsive company-img"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="#"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>ALCOfee</h4>
                      </div>
                      <img
                        src="img/alco/Alco Logo - OK-1.jpg"
                        className="img-responsive company-img"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="#"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>PT Alco Global Technology</h4>
                      </div>
                      <img
                        src="img/alco/Alco Logo - OK-1.jpg"
                        className="img-responsive company-img"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="#"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>PT Alco Farmindo Lestari</h4>
                      </div>
                      <img
                        src="img/alco/Alco Logo - OK-1.jpg"
                        className="img-responsive company-img"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
