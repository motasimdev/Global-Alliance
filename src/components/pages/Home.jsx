import Banner from "../layouts/home/Banner";
import YourJuorney from "../layouts/home/YourJuorney";
import OurPartnersU from "../layouts/home/OurPartnersU";
import BecomeAPartnerSection from "../layouts/home/BecomeAPartnerSection";
import AboutSection from "../layouts/home/AboutSection";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutSection />
      <YourJuorney />
      <OurPartnersU />
      <BecomeAPartnerSection/>
    </>
  );
};

export default Home;
