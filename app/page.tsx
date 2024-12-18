import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero/Hero";
import InfiniteSlider from "@/components/InfiniteSlider";
import Mission from "@/components/Mission";
import OurServices from "@/components/OurServices";
import Stats from "@/components/Stats";
import VideoShowcase from "@/components/VideoShowcase";


export default function Home() {
  return (
    <>
      <Hero />
      <InfiniteSlider />
      <Mission />
      <Stats />
      <VideoShowcase />
      <OurServices />
      <Benefits />
    </>
  );
}
