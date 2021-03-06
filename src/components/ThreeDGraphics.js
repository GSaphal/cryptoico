import React, { Component } from "react";
import ModalVideo from "react-modal-video";

export default class ThreeDGraphics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simi_tokens: 1,
      price: 0.5,
      success: false,
      error: false,
      isOpen: false,
      playing: false,
      isLoading: false,
      errorMessage: "There was error during purchase.",
    };
    this.openModal = this.openModal.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  VideoModal = () => {
    return (
      <div
        className="modal  model-lg  fade"
        id="video"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg  modal-dialog-centered"
          role="document"
        >
          <div
            className="modal-content"
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <React.Fragment>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Purchase Token
                </h5>
                <button
                  type="button"
                  className="close text-light"
                  data-dismiss="modal"
                  style={{ fontSize: "3rem" }}
                  aria-label="Close"
                  onClick={() => {
                    this.setState({
                      playing: false,
                    });
                  }}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <ReactPlayer
                width="100%"
                height="100%"
                url="1.mp4"
                controls={true}
                playing={this.state.playing && true}
              />
            </React.Fragment>
          </div>
        </div>
      </div>
    );
  };
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
            <div className="container">
              <div className="banner-wrapper">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-6  col-sm-12 col-md-12">
                    <div className="banner-content pt-5">
                      <h1
                        className="best-template animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="1.5s"
                      >
                        SIMI Coin is modern, clean and gradient ui ico most
                        trending template of 2019
                      </h1>
                      <h3
                        className="mb-4 d-block white animated"
                        data-animation="fadeInUpShorter"
                        data-animation-delay="1.6s"
                      >
                        First decentralized marketing platform that allows
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
                  <div className=" col-sm-12 col-lg-6 col-md-12 move-first mt-3">
                    <div
                      className="crypto-3d-graphic animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="1.7s"
                    >
                      <img
                        onClick={this.openModal}
                        src="./Capture.JPG"
                        className="img-fluid"
                      />
                      <ModalVideo
                        channel="custom"
                        isOpen={this.state.isOpen}
                        url="1.mp4"
                        onClose={() => this.setState({ isOpen: false })}
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
      </div>
    );
  }
}
