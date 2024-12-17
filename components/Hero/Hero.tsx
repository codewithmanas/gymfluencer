import HeroContent from "./HeroContent";
import TrustBadge from "./TrustBadge";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/hero-bg.jpg)',
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <TrustBadge />
        <div className="mt-8">
          <HeroContent />
        </div>
      </div>
    </div>
  );
};

export default Hero;