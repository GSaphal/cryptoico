import React from "react";

export default function ProblemandSolutions() {
  return (
    <section
      id="problem-solution"
      className="problem-solution section-pro section-padding bg-gradient"
      data-midnight="white"
    >
      <div className="container-fluid">
        <div className="container">
          <div className="dark-bg-heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">Why Us?</h6>
              <h2 className="title">Why Us? </h2>
            </div>
          </div>
          <div className="problems">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="dark-bg-heading mb-4">
                  <h4
                    className="title animated"
                    data-animation="fadeInUpShorter"
                    data-animation-delay="0.2s"
                  >
                    Benefits of Simicoin
                  </h4>
                </div>
                <p
                  className="animated text-light"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.4s"
                >
                  Backed by assets (stable coin) could elborate more on why
                  stable coins are a good choice. Simicoins can be purchased and
                  held or used. They can also be exchanged for preference asset
                  shares in Silica Mining Corporation Ltd, which will then
                  return dividends to shareholders every financial year.
                </p>
              </div>
              <div className="col-md-12 col-lg-6 text-center">
                <img
                  src="theme-assets/images/problems-graphic.png"
                  className="problems-img animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                  alt="problems-graphic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
