import heroImage from "../assets/hero.svg";

const HeroSection = () => {
  return (
    <section id="home" className="bg-zinc-950">
      <div className="grid md:grid-cols-2  h-screen items-center justify-items-center px-2">
        <div className="message-container">
          <h1 className="text-3xl md:text-7xl font-bold">UNLEASH</h1>
          <h1 className="text-3xl md:text-7xl font-bold">ELEVATE</h1>
          <h2 className="text-3xl md:text-7xl font-bold">IGNITE</h2>
          <p className="text-xl md:text-3xl mt-4 font-semibold">
            Push your limits, achieve more.
          </p>
          <button className="px-10 py-2 text-white mt-5 text-lg font-semibold rounded-md cursor-pointer bg-gradient-to-t from-[#b76cf5] to-[#290348] hover:from-[#6a3cf7] hover:to-[#5406a3]">
            Explore
          </button>
        </div>
        <div>
          <img src={heroImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
