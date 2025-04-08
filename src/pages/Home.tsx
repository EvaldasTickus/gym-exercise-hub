import HeroSection from "../sections/HeroSection";
import MiddleSection from "../sections/MiddleSection";
import AboutUs from "../sections/AboutUs";
import ContactUs from "../sections/ContactUs";
import Footer from "../components/Footer";

interface HomeProps {
  setIsAboutVisible: (visible: boolean) => void;
  setIsContactVisible: (visible: boolean) => void;
  setIsMiddleVisible: (visible: boolean) => void;
}

const Home = ({ setIsAboutVisible, setIsContactVisible, setIsMiddleVisible }: HomeProps) => {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <MiddleSection setIsMiddleVisible={setIsMiddleVisible} />
      <AboutUs setIsAboutVisible={setIsAboutVisible} />
      <ContactUs setIsContactVisible={setIsContactVisible} />
      <Footer />
    </div>
  );
};

export default Home;
