import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    var listStyle = {
      fontSize: "13px",
      lineHeight: "20px",
      padding: "12px",
      fontWeight: "600",
    };
    var listStyle1 = {
      fontSize: "12px",
      lineHeight: "20px",
      padding: "12px",
      fontWeight: "400",
      width: "10px",
    };

    return (
      <React.Fragment>
        <header className="page-header">
          <nav className="main-menu static-top  navbar-light  navbar navbar-expand-lg fixed-top mb-1">
            <div className="container">
              <a
                className="navbar-brand animated"
                data-animation="fadeInDown"
                data-animation-delay="1s"
                href="#head-area"
              >
                <img
                  src="theme-assets/images/navbar-logo.png"
                  alt="Crypto Logo"
                  style={{ height: "50px" }}
                />
                <span className="brand-text">
                  <span className="font-weight-bold">SIMI</span> Crowdsale
                </span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div id="navigation" className="navbar-nav ml-auto">
                  <ul className="navbar-nav mt-0">
                    <li
                      className="nav-item  mt-2"
                      data-animation="fadeInDown"
                      data-animation-delay="1.1s"
                    >
                      <a className="nav-link" href="index.html#about">
                        What is SIMI
                      </a>
                    </li>
                    <li
                      className="nav-item  mt-2"
                      data-animation="fadeInDown"
                      data-animation-delay="1.2s"
                    >
                      <a
                        className="nav-link"
                        href="index.html#problem-solution"
                      >
                        Solutions
                      </a>
                    </li>
                    <li
                      className="nav-item  mt-2"
                      data-animation="fadeInDown"
                      data-animation-delay="1.3s"
                    >
                      <a className="nav-link" href="index.html#whitepaper">
                        Whitepaper
                      </a>
                    </li>
                    <li
                      className="nav-item "
                      data-animation="fadeInDown"
                      data-animation-delay="1.4s"
                    >
                      <a
                        className="nav-link mt-2"
                        href="index.html#token-sale-mobile-app"
                      >
                        Token Sale
                      </a>
                    </li>
                    <li
                      className="nav-item  mt-2"
                      data-animation="fadeInDown"
                      data-animation-delay="1.5s"
                    >
                      <a className="nav-link" href="index.html#roadmap">
                        Roadmap
                      </a>
                    </li>
                    {this.props.MetaMaskInstalled ? (
                      <li
                        className="dropdown show mr-2  mt-2 px-2 animated"
                        data-animation="fadeInDown"
                        data-animation-delay="1.6s"
                      >
                        <a
                          className="dropdown-toggle white mt-3  "
                          href="#"
                          role="button"
                          id="more"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Wallet
                        </a>
                        <div className="dropdown-menu" aria-labelledby="more">
                          <div className="dropdown-item" style={listStyle}>
                            <img
                              src="theme-assets/images/wallet.png"
                              alt="Crypto Logo"
                              className="px-2"
                              style={{
                                height: "20px",
                              }}
                            />
                            2bg3fjy345k2jsh3kdnh4
                          </div>
                          <hr className="m-0" />{" "}
                          <div className="dropdown-item" style={listStyle1}>
                            <img
                              src="theme-assets/images/logo.png"
                              alt="Crypto Logo"
                              className="pl-3 pr-2"
                              style={{ height: "20px" }}
                            />
                            12 ETH
                          </div>
                          <div className="dropdown-item" style={listStyle1}>
                            <img
                              src="theme-assets/images/logo.png"
                              alt="Crypto Logo"
                              className="pl-3 pr-2"
                              style={{ height: "20px" }}
                            />
                            1223 SIMI
                          </div>
                        </div>
                      </li>
                    ) : (
                      <React.Fragment>
                        <form class="form-inline mt-2 mt-md-0">
                          <a
                            class="btn btn-sm btn-gradient-purple btn-glow my-3 my-sm-0  mt-2"
                            data-animation="fadeInDown"
                            data-animation-delay="1.8s"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            Connect
                          </a>
                        </form>
                      </React.Fragment>
                    )}
                  </ul>
                  <span id="slide-line"></span>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <React.Fragment>
                <div className="modal-body">Connecting....</div>
              </React.Fragment>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
