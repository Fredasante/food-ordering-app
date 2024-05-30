import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomeCards from "@/components/HomeCards";

const Homepage = () => {
  return (
    <>
      <Hero />
      <CallToAction />
      <HomeCards />
      <HomeAbout />
    </>
  );
};

export default Homepage;
