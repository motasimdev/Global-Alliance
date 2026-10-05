import Banner from "../layouts/home/Banner";
import YourJuorney from "../layouts/home/YourJuorney";
import OurPartnersU from "../layouts/home/OurPartnersU";
import BecomeAPartnerSection from "../layouts/home/BecomeAPartnerSection";
import KeyFeatures from "../layouts/home/KeyFeatures";
import StepsOfPartership from "../layouts/home/StepsOfPartership";

const Home = () => {
  return (
    <>
      <Banner />
      <KeyFeatures/>
      {/* <YourJuorney /> */}
      <StepsOfPartership/>
      <OurPartnersU />
      <BecomeAPartnerSection/>
    </>
  );
};

export default Home;
