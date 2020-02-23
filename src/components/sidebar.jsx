import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/about.png)" }}
              />
              <h1 id="colorlib-logo" className="text-center">
               Saodat Sadirbaeva
              </h1>
              <span className="email">
                <a href="mailto:saodat.9808@gmail.com">
                  <i className="icon-mail"></i> <br />
                  saodat.9808@gmail.com
                </a>
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <p className="text-center sao-socials">
                <a
                  href="https://www.facebook.com/sadirbaevas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1"
                >
                  <i className="icon-facebook2" />
                </a>
                <a
                  href="https://www.instagram.com/sadirbaevas/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/in/saodat-sadirbaeva-123344187"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin2" />
                </a>
              <a
                href="https://github.com/saodat1998"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-github"></i>
              </a>
            </p>
            <div className="colorlib-footer">
              <p>
                <small>
                  WEB DEVELOPER
                  <i className="icon-beer" aria-hidden="true"></i>
                  <i className="icon-heart" aria-hidden="true" />
                </small>
              </p>
              <p>
                <small>Build with React</small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
