import React from "react";

export default function TokenDistribution() {
  return (
    <section
      id="token-distribution"
      className="token-distribution section-padding"
    >
      <div className="container-fluid">
        <div className="container">
          <div className="heading text-center">
            <div
              className="animated"
              data-animation="fadeInUpShorter"
              data-animation-delay="0.3s"
            >
              <h6 className="sub-title">Token stats</h6>
              <h2 className="title">Token Distribution</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 col-lg-6 pr-5 animated"
              data-animation="fadeInLeftShorter"
              data-animation-delay="0.6s"
            >
              <div className="content-area">
                <h4>Details</h4>
                <p className="mt-1">
                  Initial funds of £4 million are required to complete an
                  existing option to purchase the fully licensed and permitted
                  land title and to begin mineral extraction. Production can
                  commence within 6 -12 weeks of acquiring land title.
                  Forecasted profit in the year one is £28,558,185, rising in
                  year two to £39,698,677 and then also £39,698,677 by year
                  three. This provides a Return on Capital of 34.85% in year
                  three. These figures are based on delivery of 300,000 tonnes
                  in year 2 and year 3. We estimate the actual capacity to be
                  around 800,000 tonnes per year.
                  <br />
                  <br />
                  Investing into Simicoin allows us to raise funds to start the
                  mining process which in turn will secure return on investment
                  for everyone that has invested into the project.
                  <br />
                  <br />
                  Symbol: SIMI
                  <br /> <br />
                  £1 ≈ 0.0033 ETH = 1 Share = 1 SIMI Token
                  <br />
                </p>
                {/* <p>
                  <span>Symbol:</span>{" "}
                  <strong className="grey-accent2">CIC</strong>
                </p>
                <p>
                  <span>Initial Value:</span>{" "}
                  <strong className="grey-accent2">1 ETH = 3177.38 CIC</strong>
                </p>
                <p>
                  <span>Type:</span>{" "}
                  <strong className="grey-accent2">ERC20</strong>
                </p> */}
              </div>
            </div>
            <div
              className="col-md-12 col-lg-6 move-first animated"
              data-animation="fadeInRightShorter"
              data-animation-delay="0.6s"
            >
              <div className="token-img">
                <img
                  className="img-fluid"
                  src="theme-assets/images/chart.png"
                  alt="token-distribution"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
