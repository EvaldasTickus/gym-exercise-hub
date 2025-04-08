import { useEffect } from "react";
import aboutImage from "../assets/aboutUs.svg";
import { useInView } from "react-intersection-observer";

interface AboutSectionProps {
  setIsAboutVisible: (isVisible: boolean) => void;
}

const AboutUs = ({ setIsAboutVisible }: AboutSectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    setIsAboutVisible(inView);
  }, [inView, setIsAboutVisible]);

  return (
    <section ref={ref} id="about" className="about-section py-16 bg-zinc-950">
      <div className="h-auto px-5 grid items-center">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-5">ABOUT US</h2>
          <p className="text-white text-lg font-semibold lg:text-2xl">
            Looking for the perfect exercise routine? We’re here to help with
            ideas and guidance to reach your fitness goals!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex">
            <img src={aboutImage} alt="AboutImage" />
          </div>
          <div className="flex flex-col h-full text-center md:text-start mt-5 justify-center md:ml-5 lg:gap-10">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-5 whitespace-nowrap">
                OUR MISSION
              </h2>
              <p className="text-lg text-white mb-4 lg:max-w-[700px] lg:text-2xl">
                At Fitness Hub, we believe in empowering you to reach your
                fitness goals. Browse a variety of exercises designed for all
                levels, and find the perfect workout for you. Whether you're a
                beginner or an advanced athlete, we’ve got something for
                everyone.
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-5 whitespace-nowrap">
                OUR VALUES
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-white lg:text-2xl">
                <li>Commitment to Excellence</li>
                <li>Passion for Health & Fitness</li>
                <li>Supportive Community</li>
                <li>Respect for All Fitness Levels</li>
                <li>Constant Growth & Innovation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-semibold text-white">
            Looking for exercise inspiration? Get in touch with us for
            personalized ideas and plans!
          </p>
          <button className="px-10 py-2 text-white text-lg font-semibold rounded-md cursor-pointer bg-gradient-to-t from-[#5927ef] to-[#48097b] hover:from-[#6a3cf7] hover:to-[#5406a3] mt-5">
            <a href="#contact">Contact Us</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
