import Banner from "../layouts/home/Banner";
import OurPartnersU from "../layouts/home/OurPartnersU";
import BecomeAPartnerSection from "../layouts/home/BecomeAPartnerSection";
import KeyFeatures from "../layouts/home/KeyFeatures";
import StepsOfPartership from "../layouts/home/StepsOfPartership";
import IntroducingOurselves from "../layouts/home/IntroducingOurselves";

const Home = () => {
  return (
    <>
      <Banner />
      <KeyFeatures/>
      <StepsOfPartership/>
      <IntroducingOurselves/>
      <OurPartnersU />
      <BecomeAPartnerSection/>
    </>
  );
};

export default Home;
