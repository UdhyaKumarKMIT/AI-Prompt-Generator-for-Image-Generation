import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      {/* Footer Section */}
      <div className="container-fluid bg-dark text-white footer_bgpath pb-3">
        <div className="container">
          <div className="row">
            <div className="col-12 text-right py-5">
              <img
                src="https://www.codewithfaraz.com/favicon.ico"
                alt="img"
                className="footer_logo"
              />
            </div>
            <div className="clearfix"></div>
            <div className="col-12 col-md-4 col-lg-3">
              <h5 className="text-uppercase font-weight-bold py-3">Get In Touch</h5>
              <p className="font-weight-medium footer_contact_color">
                <i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA
              </p>
              <p className="font-weight-medium footer_contact_color">
                <i className="fa fa-phone-alt mr-2"></i>+012 345 67890
              </p>
              <p className="font-weight-medium footer_contact_color">
                <i className="fa fa-envelope mr-2"></i>info@example.com
              </p>
              <h6 className="mt-4 mb-3 text-white text-uppercase font-weight-bold">Follow Us</h6>
              <div className="footer-icon-container">
                <div className="text-center d-inline-block">
                  <a className="footer_social_icon" href="#">
                    <div className="vertical-middle"><i className="fa-brands fa-linkedin-in"></i></div>
                  </a>
                </div>
                <div className="text-center d-inline-block">
                  <a className="footer_social_icon" href="#">
                    <div className="vertical-middle"><i className="fa-brands fa-x-twitter"></i></div>
                  </a>
                </div>
                <div className="text-center d-inline-block">
                  <a className="footer_social_icon" href="#">
                    <div className="vertical-middle"><i className="fa-brands fa-facebook-f"></i></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-2">
              <h5 className="text-uppercase font-weight-bold py-3">Category</h5>
              <ul className="footer_menu">
                <li><a href="#"><i className="fa fa-angle-right"></i>   HTML</a></li>
                <li><a href="#"><i className="fa fa-angle-right"></i>   CSS</a></li>
                <li><a href="#"><i className="fa fa-angle-right"></i>   JavaScript</a></li>
                <li><a href="#"><i className="fa fa-angle-right"></i>   React</a></li>
                 
              </ul>
            </div>
            <div className="col-12 col-md-5 col-lg-3 position-relative">
              <h5 className="text-uppercase font-weight-bold py-3">Popular Projects</h5>
              <div className="mb-3">
                <div className="mb-2 d-flex">
                  <a className="badge text-uppercase font-weight-semi-bold p-1 mr-2" href="">React</a>
                  <span className="footer_text-body">Aug 29, 2024</span>
                </div>
                <a className="text-white yellow_hover text-uppercase font-weight-medium" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
              </div>
              <div className="mb-3">
                <div className="mb-2 d-flex">
                  <a className="badge text-uppercase font-weight-semi-bold p-1 mr-2" href="">Python</a>
                  <span className="footer_text-body">Aug 29, 2024</span>
                </div>
                <a className="text-white yellow_hover text-uppercase font-weight-medium" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
              </div>
              <div className="mb-3">
                <div className="mb-2 d-flex">
                  <a className="badge text-uppercase font-weight-semi-bold p-1 mr-2" href="">C#</a>
                  <span className="footer_text-body">Aug 29, 2024</span>
                </div>
                <a className="text-white yellow_hover text-uppercase font-weight-medium" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
              </div>
            </div>
           
          </div>
          <div className="row justify-content-center pt-2 pb-4">
            <div className="col-12 col-md-8 col-lg-7">
              <div className="input-group">
                <span className="footer_newsletter footer_border">
                  <i className="fa fa-envelope"></i>
                </span>
                <input
                  type="text"
                  className="form-control footer_border"
                  placeholder="Enter your email..."
                />
                <a href="#" className="footer_newsletter footer_subcribe">
                  <i className="fa-regular fa-paper-plane"></i>  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid footer_copyright">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 py-4 Reserved"> © Copyright 2024, All rights reserved.</div>
            <div className="col-12 col-md-6 text-right py-4">
              <a href="#" className="text-white px-2 yellow_hover">Home</a>
              <a href="#" className="text-white px-2 yellow_hover">About</a>
              <a href="#" className="text-white px-2 yellow_hover">Contact</a>
              <a href="#" className="text-white px-2 yellow_hover">Latest Projects</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;