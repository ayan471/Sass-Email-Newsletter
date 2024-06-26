import Header from "@/shared/widgets/header/header";
import React from "react";

import Footer from "@/shared/widgets/footer/footer";
import Banner from "./elements/bannner";
import Branding from "./elements/branding";
import Benefits from "./elements/benefits";
import FeatureHighlight from "./elements/feature.highlight";
import Pricing from "./elements/pricing";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
