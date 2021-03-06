import React from "react";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="faq section-padding bg-gradient"
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
              <h6 className="sub-title">question</h6>
              <h2 className="title">FAQ</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <nav>
                <div
                  className="nav nav-pills nav-underline mb-5 animated"
                  data-animation="fadeInUpShorter"
                  data-animation-delay="0.5s"
                  id="myTab"
                  role="tablist"
                >
                  <a
                    href="#general"
                    className="nav-item nav-link active"
                    id="general-tab"
                    data-toggle="tab"
                    aria-controls="general"
                    aria-selected="true"
                    role="tab"
                  >
                    General
                  </a>
                  <a
                    href="#ico"
                    className="nav-item nav-link"
                    id="ico-tab"
                    data-toggle="tab"
                    aria-controls="ico"
                    aria-selected="false"
                    role="tab"
                  >
                    SIMI
                  </a>
                  <a
                    href="#token"
                    className="nav-item nav-link"
                    id="token-tab"
                    data-toggle="tab"
                    aria-controls="token"
                    aria-selected="false"
                    role="tab"
                  >
                    Tokens
                  </a>
                  <a
                    href="#client"
                    className="nav-item nav-link"
                    id="client-tab"
                    data-toggle="tab"
                    aria-controls="client"
                    aria-selected="false"
                    role="tab"
                  >
                    Client
                  </a>
                  <a
                    href="#legal"
                    className="nav-item nav-link"
                    id="legal-tab"
                    data-toggle="tab"
                    aria-controls="legal"
                    aria-selected="false"
                    role="tab"
                  >
                    Legal
                  </a>
                </div>
              </nav>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="general"
                  role="tabpanel"
                  aria-labelledby="general-tab"
                >
                  <div
                    id="general-accordion"
                    className="collapse-icon accordion-icon-rotate"
                  >
                    <div
                      className="card animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.1s"
                    >
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <a
                            className="btn-link"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <span className="icon gradient-crypto" />
                            What is Silica?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#general-accordion"
                      >
                        <div className="card-body">
                          Silica is silicon dioxide (SiO2). Silicon compounds
                          are the most significant component of the Earth’s
                          crust.Since sand is plentiful, easy to mine and
                          relatively easy to process, it is the primary ore
                          source of silicon. The metamorphic rock, quartzite, is
                          another source. Silica is used in food, beverages,
                          glass, cosmetics, pharmaceuticals, building,
                          construction, steel, petroleum, fibre optics,
                          semiconductor, electronics, rubbers, plastics,
                          sealants, health & beauty & much more.
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.2s"
                    >
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <span className="icon gradient-crypto" />
                            Where is Silica Used?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#general-accordion"
                      >
                        <div className="card-body">
                          Silica is used in food, beverages, glass, cosmetics,
                          pharmaceuticals, building, construction, steel,
                          petroleum, fibre optics, semiconductor, electronics,
                          rubbers, plastics, sealants, health & beauty & much
                          more.There has been an increase in product demand from
                          electronics sector, owing to its high thermal
                          stability and resistance to weathering, ozone,
                          moisture, and UV radiation.Additionally, demand for
                          feldspar silica in building/ceramics and glass
                          industries continues to rise.
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animated"
                      data-animation="fadeInUpShorter"
                      data-animation-delay="0.3s"
                    >
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <span className="icon gradient-crypto" />
                            What's the market of Silica looks like?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#general-accordion"
                      >
                        <div className="card-body">
                          Forecasted profit in the year one (one investments
                          funds are reached) is £28,558,185, rising in year two
                          to £39,698,677 and then also £39,698,677 by year
                          three. This provides a Return on Capital of 34.85% in
                          year three. These figures are based on delivery of
                          300,000 tonnes in year 2 and year 3. We estimate the
                          actual capacity to be around 800,000 tonnes per year.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="ico"
                  role="tabpanel"
                  aria-labelledby="ico-tab"
                >
                  <div
                    id="ico-accordion"
                    className="collapse-icon accordion-icon-rotate"
                  >
                    <div className="card">
                      <div className="card-header" id="icoHeadingOne">
                        <h5 className="mb-0">
                          <a
                            className="btn-link"
                            data-toggle="collapse"
                            data-target="#icoCollapseOne"
                            aria-expanded="true"
                            aria-controls="icoCollapseOne"
                          >
                            <span className="icon gradient-crypto" />
                            Pityful a rethoric question ran over her cheek?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="icoCollapseOne"
                        className="collapse show"
                        aria-labelledby="icoHeadingOne"
                        data-parent="#ico-accordion"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="icoHeadingTwo">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#icoCollapseTwo"
                            aria-expanded="false"
                            aria-controls="icoCollapseTwo"
                          >
                            <span className="icon gradient-crypto" />
                            Which roasted parts of sentences fly into your
                            mouth?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="icoCollapseTwo"
                        className="collapse"
                        aria-labelledby="icoHeadingTwo"
                        data-parent="#ico-accordion"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="icoHeadingThree">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#icoCollapseThree"
                            aria-expanded="false"
                            aria-controls="icoCollapseThree"
                          >
                            <span className="icon gradient-crypto" />
                            Collapsible Group Item #3
                          </a>
                        </h5>
                      </div>
                      <div
                        id="icoCollapseThree"
                        className="collapse"
                        aria-labelledby="icoHeadingThree"
                        data-parent="#ico-accordion"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="token"
                  role="tabpanel"
                  aria-labelledby="token-tab"
                >
                  <div
                    id="token-accordion"
                    className="collapse-icon accordion-icon-rotate"
                  >
                    <div className="card">
                      <div className="card-header" id="tokenHeadingOne">
                        <h5 className="mb-0">
                          <a
                            className="btn-link"
                            data-toggle="collapse"
                            data-target="#tokenCollapseOne"
                            aria-expanded="true"
                            aria-controls="tokenCollapseOne"
                          >
                            <span className="icon gradient-crypto" />
                            Collapsible Group Item #1
                          </a>
                        </h5>
                      </div>
                      <div
                        id="tokenCollapseOne"
                        className="collapse show"
                        aria-labelledby="tokenHeadingOne"
                        data-parent="#token-accordion"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="tokenHeadingTwo">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#tokenCollapseTwo"
                            aria-expanded="false"
                            aria-controls="tokenCollapseTwo"
                          >
                            <span className="icon gradient-crypto" />
                            Collapsible Group Item #2
                          </a>
                        </h5>
                      </div>
                      <div
                        id="tokenCollapseTwo"
                        className="collapse"
                        aria-labelledby="tokenHeadingTwo"
                        data-parent="#token-accordion"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="tokenHeadingThree">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#tokenCollapseThree"
                            aria-expanded="false"
                            aria-controls="tokenCollapseThree"
                          >
                            <span className="icon gradient-crypto" />
                            Collapsible Group Item #3
                          </a>
                        </h5>
                      </div>
                      <div
                        id="tokenCollapseThree"
                        className="collapse"
                        aria-labelledby="tokenHeadingThree"
                        data-parent="#token-accordion"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="client"
                  role="tabpanel"
                  aria-labelledby="client-tab"
                >
                  <div
                    id="client-accordion"
                    className="collapse-icon accordion-icon-rotate"
                  >
                    <div className="card">
                      <div className="card-header" id="clientHeadingOne">
                        <h5 className="mb-0">
                          <a
                            className="btn-link"
                            data-toggle="collapse"
                            data-target="#clientCollapseOne"
                            aria-expanded="true"
                            aria-controls="clientCollapseOne"
                          >
                            <span className="icon gradient-crypto" />
                            Collapsible Group Item #1
                          </a>
                        </h5>
                      </div>
                      <div
                        id="clientCollapseOne"
                        className="collapse show"
                        aria-labelledby="clientHeadingOne"
                        data-parent="#client-accordion"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="clientHeadingTwo">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#clientCollapseTwo"
                            aria-expanded="false"
                            aria-controls="clientCollapseTwo"
                          >
                            <span className="icon gradient-crypto" />
                            Collapsible Group Item #2
                          </a>
                        </h5>
                      </div>
                      <div
                        id="clientCollapseTwo"
                        className="collapse"
                        aria-labelledby="clientHeadingTwo"
                        data-parent="#client-accordion"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="clientHeadingThree">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#clientCollapseThree"
                            aria-expanded="false"
                            aria-controls="clientCollapseThree"
                          >
                            <span className="icon gradient-crypto" />
                            Collapsible Group Item #3
                          </a>
                        </h5>
                      </div>
                      <div
                        id="clientCollapseThree"
                        className="collapse"
                        aria-labelledby="clientHeadingThree"
                        data-parent="#client-accordion"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="legal"
                  role="tabpanel"
                  aria-labelledby="legal-tab"
                >
                  <div
                    id="legal-accordion"
                    className="collapse-icon accordion-icon-rotate"
                  >
                    <div className="card">
                      <div className="card-header" id="legalHeadingOne">
                        <h5 className="mb-0">
                          <a
                            className="btn-link"
                            data-toggle="collapse"
                            data-target="#legalCollapseOne"
                            aria-expanded="true"
                            aria-controls="legalCollapseOne"
                          >
                            <span className="icon gradient-crypto" />
                            Collapsible Group Item #1
                          </a>
                        </h5>
                      </div>
                      <div
                        id="legalCollapseOne"
                        className="collapse show"
                        aria-labelledby="legalHeadingOne"
                        data-parent="#legal-accordion"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="legalHeadingTwo">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#legalCollapseTwo"
                            aria-expanded="false"
                            aria-controls="legalCollapseTwo"
                          >
                            <span className="icon gradient-crypto" />
                            Collapsible Group Item #2
                          </a>
                        </h5>
                      </div>
                      <div
                        id="legalCollapseTwo"
                        className="collapse"
                        aria-labelledby="legalHeadingTwo"
                        data-parent="#legal-accordion"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="legalHeadingThree">
                        <h5 className="mb-0">
                          <a
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#legalCollapseThree"
                            aria-expanded="false"
                            aria-controls="legalCollapseThree"
                          >
                            <span className="icon gradient-crypto" />
                            Collapsible Group Item #3
                          </a>
                        </h5>
                      </div>
                      <div
                        id="legalCollapseThree"
                        className="collapse"
                        aria-labelledby="legalHeadingThree"
                        data-parent="#legal-accordion"
                      >
                        <div className="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
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
