import Hero from "@/components/Hero/Hero";
// import HeroContent from "@/components/Hero/HeroContent";
import InfiniteSlider from "@/components/InfiniteSlider";
import Mission from "@/components/Mission";


export default function Home() {
  return (
    <>
      <Hero />
      <InfiniteSlider />
      <Mission />
      {/* <HeroContent /> */}
    </>
  );
}
