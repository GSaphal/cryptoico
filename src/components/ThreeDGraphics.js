import React, { Component } from "react";

export default class ThreeDGraphics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simi_tokens: 1,
      price: 0.5,
      success: false,
      error: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log(this.state.simi_tokens);
    console.log(Number.isInteger(this.state.simi_tokens));
    if (this.state.simi_tokens % 1 === 0) {
      this.setState({
        success: true,
        simi_tokens: 1,

        error: false,
      });
    } else {
      this.setState({
        error: true,
        simi_tokens: 1,

        success: false,
      });
    }
  };
  render() {
    window.func();
    return (
      <div>
        <section className="head-area" id="head-area" data-midnight="white">
          <div id="particles-js" />
          <div className="head-content container-fluid bg-gradient d-flex align-items-center">
            <div className="container">
              <div className="banner-wrapper">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    {this.state.error && (
                      <div
                        className="alert alert-danger alert-dismissible fade show"
                        role="alert"
                        id="danger-alert"
                      >
                        <strong>Sorry</strong> Some error occoured.
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                    )}
                    {this.state.success && (
                      <div
                        className="alert alert-success alert-dismissible fade show"
                        role="alert"
                        id="success-alert"
                      >
                        <strong>Success</strong> You have successfully purchased
                        the token.
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                    )}
                    <div className="banner-content pt-5">
                      <h1
                        className="best-template animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="1.5s"
                      >
                        Crypto ICO is modern, clean and{" "}
                        <br className="d-none d-xl-block" />
                        gradient ui ico most trending{" "}
                        <br className="d-none d-xl-block" />
                        template of 2019
                      </h1>
                      <h3
                        className="mb-4 d-block white animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="1.6s"
                      >
                        First decentralized marketing platform that allows{" "}
                        <br className="d-none d-xl-block" />
                        merchants and affiliates.
                      </h3>
                      <div className="mt-5">
                        <a
                          data-toggle="modal"
                          data-target="#exampleModal"
                          className="btn btn-lg btn-gradient-purple btn-glow mr-2 animated text-light"
                          data-animation="fadeInUpShorter"
                          data-animation-delay="1.7s"
                        >
                          Purchase Token
                        </a>
                        <a
                          href="#whitepaper"
                          className="btn btn-lg btn-gradient-purple btn-glow animated"
                          data-animation="fadeInUpShorter"
                          data-animation-delay="1.8s"
                        >
                          Whitepaper
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 move-first">
                    <div
                      className="crypto-3d-graphic animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="1.7s"
                    >
                      <img
                        src="theme-assets/images/banner-graphic.png"
                        className="graphic-3d-img mx-auto d-block"
                        alt="CICO"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Purchase Token
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  Price of 1 Simi Token is {this.state.price + " Ethereum"}{" "}
                </p>
                <form>
                  <input
                    className="form-control form-control-lg"
                    type="number"
                    name="simi_tokens"
                    value={this.state.simi_tokens}
                    onChange={(e) =>
                      this.setState({ [e.target.name]: e.target.value })
                    }
                    placeholder="Number of Simi Tokens"
                  />
                  <p>
                    Total Price=
                    {this.state.simi_tokens * this.state.price +
                      " Ethereum"}{" "}
                  </p>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-lg btn-gradient-purple btn-glow animated"
                  onClick={this.handleClick}
                  data-dismiss="modal"
                >
                  Buy Token
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*/ Header: 3D Graphics */}
      </div>
    );
  }
}
