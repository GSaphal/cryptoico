import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";

export default class ThreeDGraphics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simi_tokens: 1,
      price: 0.5,
      success: false,
      error: false,
      isLoading: false,
      errorMessage: "There was error during purchase.",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    try {
      this.setState({
        isLoading: true,
      });
      setTimeout(() => {
        if (this.state.simi_tokens % 1 === 0) {
          this.setState({
            success: true,
            simi_tokens: 1,
            isLoading: false,
            error: false,
          });
        } else {
          this.setState({
            error: true,
            simi_tokens: 1,
            isLoading: false,
            success: false,
          });
        }
      }, 3000);
    } catch (e) {
      this.setState({
        errorMessage: e.message,
      });
    }
  };
  render() {
    return (
      <div>
        <section className="head-area" id="head-area" data-midnight="white">
          <div id="particles-js" />
          <div className="head-content container-fluid bg-gradient d-flex align-items-center">
            <div className="container-fluid">
              <div className="banner-wrapper">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-12 offset-2">
                    <div className="banner-content pt-5">
                      <h1
                        className="best-template animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="1.5s"
                      >
                        SIMI Crowdsale is modern, clean and{" "}
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
                  <div className="col-lg-6 col-md-12 move-first mt-3">
                    <div
                      className="crypto-3d-graphic animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="1.7s"
                    >
                      <ReactPlayer
                        width="80%"
                        height="400px"
                        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
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
              {this.props.MetaMaskInstalled ? (
                <React.Fragment>
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
                    {" "}
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
                      <p>
                        {this.state.success && (
                          <div className="text-success">
                            <i class="fa fa-check px-2"></i>
                            You have successfully purchased .
                          </div>
                        )}
                        {this.state.error && (
                          <div className="text-danger">
                            <i class="fa fa-times px-2"></i>
                            {this.state.errorMessage}
                          </div>
                        )}
                      </p>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-lg btn-gradient-purple btn-glow animated"
                      onClick={this.handleClick}
                    >
                      {this.state.isLoading && (
                        <i class="fa fa-spinner fa-spin px-2"></i>
                      )}
                      Buy Token
                    </button>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className="modal-body p-4">
                    You are not connected to Meta Mask . Please connect and
                    reload the site.
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-sm btn-gradient-purple btn-glow animated"
                      onClick={() => window.location.reload()}
                    >
                      Refresh Page
                    </button>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
        {/*/ Header: 3D Graphics */}
      </div>
    );
  }
}
