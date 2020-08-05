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
export default function App() {
  return (
    <React.Fragment>
      <Preloader />
      <Sidenav />
      <Navbar />
      <div className="content-wrapper">
        <div className="content-body">
          <main>
            <ThreeDGraphics />
            <About />
            <ProblemandSolutions />
            <Whitepaper />
            <Roadmap />
            <OurCoins />
            <TokenDistribution />
            <Team />
            <Advisors />
            <FAQ />
            <Modals />
          </main>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
