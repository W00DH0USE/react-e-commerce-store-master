import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-row">
          <div className="home-column">
            <div className="home-banner">
              <div className="home-banner-column-container">
                <div className="home-banner-column">
                  <div className="homer-banner-img-container">
                    <img className="homer-banner-img" src={"https://glyde.com/media/wysiwyg/phones_1.png"} alt="banner-pic" />
                  </div> 
                </div>
                <div className="home-banner-column column-right">
                  <div className="home-banner-column-right">
                    <div className="home-banner-content">
                      <h1>Take The Guesswork Out <br /> Of Buying And Selling <br /> Used Phones.</h1>
                      <h3>Premium Phones. Lower Prices. Money Back <br />Guarantee.</h3>
                      <Link to="/products">
                        <button className="buttonContainer buttonContainer-white">
                          shop now
                        </button>
                      </Link>
                      <Link to="/sell">
                        <button className="buttonContainer buttonContainer-white2">
                          sell phone
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-container home-banner">
          <div className="about-container-row">
            <div className="home-banner-column-right">
              <h1 className="about-container-title">Premium Pre-Owned delivered by Ring-Ring Buy!</h1>
            </div>
            <div className="about-column-group">
              <div className="about-column">
                <div className="about-img-container">
                  <img src="https://glyde.com/media/wysiwyg/function-icon_1.png" alt="about-img" className="about-img"/>
                  <h2 className="about-column-title">+50 Functional Tests</h2>
                </div>
                <div className="about-column-text-container">
                  <p className="about-column-text">
                    From charging port to Bluetooth, all our used phones pass 30+ functional tests.
                  </p>
                </div>
              </div>
              <div className="about-column">
                <div className="about-img-container">
                  <img src="https://glyde.com/media/wysiwyg/cosmetic-icon.png" alt="about-img" className="about-img"/>
                  <h2 className="about-column-title">Comprehensive Cosmetic Inspection</h2>
                </div>
                <div className="about-column-text-container">
                  <p className="about-column-text">
                    We inspect every inch, taking only the phones in best condition.
                  </p>
                </div>
              </div>
              <div className="about-column">
                <div className="about-img-container">
                  <img src="https://glyde.com/media/wysiwyg/certified-icon.png" alt="about-img" className="about-img"/>
                  <h2 className="about-column-title">Certified Premium Condition</h2>
                </div>
                <div className="about-column-text-container">
                  <p className="about-column-text">
                    Only 1 in 10 used phones receive our Premium Pre-Owned grade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-top">
            <div className="footer-top-container">
              <div className="footer-top-column">
                <div className="row">
                  <div className="row-container">
                    <div className="footer-top-column-text-container">
                      <h5>Apple</h5>
                      <ul className="footer-column-ul">
                        <li>
                          <Link to="/products">
                            <button className="footer-top-links">
                              Buy iPhone X Pro
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/products">
                            <button className="footer-top-links">
                              Buy iPhone X
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/products">
                            <button className="footer-top-links">
                              Buy iPhone Xs
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/products">
                            <button className="footer-top-links">
                              Buy iPhone Xs Max
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-top-column">
                <div className="row">
                  <div className="row-container">
                    <div className="footer-top-column-text-container">
                      <h5>Samsung</h5>
                      <ul className="footer-column-ul">
                        <li>
                          <Link to="/products">
                            <button className="footer-top-links">
                              Buy Sumsung Galaxy S10+
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/products">
                            <button className="footer-top-links">
                              Buy Sumsung Galaxy S10
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/products">
                            <button className="footer-top-links">
                              Buy Sumsung Galaxy S9+
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/products">
                            <button className="footer-top-links">
                              Buy Sumsung Galaxy S9
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-top-column">
                <div className="row">
                  <div className="row-container">
                    <div className="footer-top-column-text-container">
                      <h5>About</h5>
                      <ul className="footer-column-ul">
                        <li>
                          <Link to="/products">
                            <button className="footer-top-links">
                              Why Us?
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/products">
                            <button className="footer-top-links">
                              Buyback Guarantee
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/products">
                            <button className="footer-top-links">
                              Help Center
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/products">
                            <button className="footer-top-links">
                              FAQ
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-top-column">
                <div className="row">
                  <div className="row-container">
                    <div className="footer-top-column-text-container">
                      <h5>Other</h5>
                      <ul className="footer-column-ul">
                        <li>
                          <Link to="/products">
                            <button className="footer-top-links">
                              Contact Us
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/products">
                            <button className="footer-top-links">
                              Orders
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Footer */}
          <div className="footer-bottom">
            <div className="footer-bottom-container">
              <div className="footer-bottom-row">
                <div className="copyright-container">
                  <p className="copyright">Copyright © 2020 · Ring-Ring Buy</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
