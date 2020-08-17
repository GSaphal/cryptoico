import React from "react";

export default function OurCoins() {
  return (
    <section
      id="our-coin"
      className="our-coin section-pro section-padding bg-gradient"
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
              <h6 className="sub-title">About Company</h6>
              <h2 className="title">About Our Company</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-5 col-md-12 animated"
              data-animation="fadeInLeftShorter"
              data-animation-delay="0.6s"
            >
              <div className="coin-img">
                <img
                  className="img-fluid"
                  src="theme-assets/images/our-coin.png"
                  alt="Coin Image"
                />
              </div>
            </div>
            <div
              className="col-lg-7 col-md-12 animated"
              data-animation="fadeInRightShorter"
              data-animation-delay="0.6s"
            >
              <div className="dark-bg-heading mb-4">
                <h4 className="title">Introduction </h4>
              </div>
              <p className="text-light">
                In 2016 we acquired a substantial plot of land (over 100 acres)
                in Europe. According to recent testing (drillings up to 30m),
                the land was found to contain over 32.5 million tons of feldspar
                that contain highly valuable - over 70% purity - Silicon Dioxide
                (SiO2) in the form of quartz. When the legal side of a transfer
                of deeds was completed, the group was able to acquire an
                additional plot of land sitting on an extension of the same
                deposit as the main parcel. The additional plot contains over
                2,500,000 tons of high purity Silica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
