import React from "react";

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container-fluid">
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">About</h6>
              <h2 className="title">What is SIMI Coin</h2>
            </div>
          </div>
          <div className="content-area">
            <div className="row">
              <div
                className="col-md-12 col-lg-6 animated"
                data-animation="fadeInLeftShorter"
                data-animation-delay="0.5s"
              >
                <h4 className="title">
                  SIMI Coin is targeted towards anyone that
                  <br />
                  wants to invest into a coin backed by real assets.
                </h4>
                <h6 className="pt-4 pb-2">
                  From the general public to small/mid/high level investors.
                  Initial offer will be £500m shares in the company via
                  cryptocurrency.
                </h6>
                <p>
                  In regards to high level investors it is a platform to invest
                  without the need of disclosing their details on shareholding.
                  Also this allows anyone that is interested in investing
                  convenience, to allow them 24/7 hour access to invest rather
                  then paperwork being exchanged back and forth during office
                  hours.
                </p>
                <p>
                  We are targeting people that want to secure their money/wealth
                  in assets which can provide them a return on investment in the
                  near future.
                </p>
              </div>
              <div
                className="col-md-12 col-lg-6 animated"
                data-animation="fadeInRightShorter"
                data-animation-delay="0.5s"
              >
                <div className="position-relative what-is-crypto-img float-xl-right">
                  <img
                    className="img-fluid"
                    src="theme-assets/images/what-is-crypto.png"
                    alt="What is Crypto?"
                  />
                  <div className="play-video text-center">
                    <a
                      href="#"
                      className="play rounded-circle btn-gradient-purple btn-glow video-btn"
                      data-toggle="modal"
                      data-src="https://www.youtube.com/embed/UXAJu3zS4bU"
                      data-target="#ico-modal"
                    >
                      <i className="ti-control-play" />
                    </a>
                    <span className="mt-2 d-none d-md-block">How it works</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
