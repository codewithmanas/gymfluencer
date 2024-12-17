import Navbar from "../Navbar/Navbar";
import HeroContent from "./HeroContent";
import TrustBadge from "./TrustBadge";

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen">

      <Navbar />

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/assets/images/asset3.jpeg')",
          filter: "brightness(0.4)"
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <TrustBadge />
        <div className="mt-4">
          <HeroContent />
        </div>

        {/* Overlay */}
      <div className="absolute w-full left-0 bottom-0 -inset-x-32 bg-gradient-to-t from-black/95 pt-[10%] overflow-hidden"></div>

      </div>
    </div>
  );
};

export default Hero;