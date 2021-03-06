import React from "react";
import Preloader from "./components/Preloader";
import Sidenav from "./components/Sidenav";
import Navbar from "./components/Navbar";
import ThreeDGraphics from "./components/ThreeDGraphics";
import About from "./components/About";
import ProblemandSolutions from "./components/ProblemandSolutions";
import Whitepaper from "./components/Whitepaper";
import Roadmap from "./components/Roadmap";
import OurCoins from "./components/OurCoins";
import TokenDistribution from "./components/TokenDistribution";
import Team from "./components/Team";
import Advisors from "./components/Advisors";
import FAQ from "./components/FAQ";
import Modals from "./components/Modals";
import Footer from "./components/Footer";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MetaMaskInstalled: true,
    };
  }
  componentDidMount() {
    window.scroll();
    window.func();
    window.navbar();
    window.swiper();
  }
  render() {
    return (
      <React.Fragment>
        <Preloader />
        <Navbar MetaMaskInstalled={this.state.MetaMaskInstalled} />
        <div className="content-wrapper">
          <div className="content-body">
            <main>
              <ThreeDGraphics
                MetaMaskInstalled={this.state.MetaMaskInstalled}
              />
              <About />
              <ProblemandSolutions />
              <Whitepaper />
              <OurCoins />

              <Roadmap />
              <TokenDistribution />

              <FAQ />
              <Modals />
            </main>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
