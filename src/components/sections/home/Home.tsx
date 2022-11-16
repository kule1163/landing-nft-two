import { HomeCont } from "../../styledComponents";
import HomeBg from "../../../assets/hero.png";
import Image from "next/image";
import Advertisement from "./advertisement/Advertisement";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <HomeCont
      id="home"
      className="relative flex items-center justify-center w-screen min-h-screen "
    >
      <div className="flex items-center justify-between w-full h-full gap-10 hlg:flex-col">
        <Hero />
        <Advertisement />
      </div>
      <div className="absolute top-0 left-0 w-screen h-full overflow-hidden -z-10 bg-colection-300 after:absolute after:top-0 after:left-0 after:bg-black after:w-full after:h-full after:bg-opacity-70">
        <Image
          className="object-fill w-full h-full"
          src={HomeBg}
          alt="hero-bg"
        />
      </div>
    </HomeCont>
  );
};

export default Home;
