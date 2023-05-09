import React from "react";
import { SocialIcon } from "react-social-icons";
class Footer extends React.Component {
  render() {
    return (
      <div id="footer-wrap">
        <footer className="footer">
          <div className="top-footer">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-logo">
                  <a href="/" title="Mercury">
                    <img
                      src="Logo.png"
                      width="72"
                      alt="Mercury-Logo"
                      className="img-fluid"
                    />
                    CareWorker Ally
                  </a>
                  <p className="tagline">A product of group B</p>
                </div>
              </div>
              <div className="col-md-2">
                <h4>Home</h4>
                <ul className="footer-link">
                  <li>
                    <a href="/" title="Home">
                      Home
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h4>About</h4>
                <ul className="footer-link">
                  <li>
                    <a href="/faq" title="Faq">
                      Faq
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Blog">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>Join Us</h4>
                <ul className="footer-link">
                  <li>
                    <a href="mail-to:olahbohdeh@gmail.com" title="Contact">
                      olahbohdeh@gmail.com
                    </a>
                  </li>
                  <li>
                    <div className="icons">
                      <SocialIcon
                        href="#"
                        title="Facebook"
                        network="facebook"
                        bgColor="#3b5998"
                      />
                      <SocialIcon
                        href="#"
                        title="Link"
                        network=""
                        bgColor="#3b5998"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="row">
              <div className="col-md-5">
                <p className="copyright pt-3">
                  Copyright &copy; 2020 CareWorker Ally
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
