import { HeroCont, PrimaryButton } from "../../styledComponents";
import { v4 as uuidv4 } from "uuid";
import HeroBg from "../../../assets/hero.png";
import Image from "next/image";
import Advertisement from "./advertisement/Advertisement";

const Hero = () => {
  return (
    <HeroCont
      id="home"
      className="relative flex items-center justify-center w-screen min-h-screen "
    >
      <div className="flex items-center justify-between w-full h-full gap-10 hlg:flex-col">
        <div className="flex flex-col flex-shrink-0 all-child:hlg:text-center hlg:items-center hlg:justify-center ">
          <div className="flex flex-col gap-8">
            <p className="font-bold leading-none text-step0">
              Discover, collect, and <br /> sell the best{" "}
              <span className="text-main">NFT art</span>
            </p>
            <p className="inline text-b1 text-colection-600">
              ASICS NFT is the world's first and largest NFT marketplace
            </p>
            <div className="flex gap-5 hsm:w-full hmd:w-9/12 hmd:flex-col w-fit hlg:mx-auto">
              <PrimaryButton buttonType="contained">explore</PrimaryButton>
              <PrimaryButton buttonType="outlined">Create</PrimaryButton>
            </div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(94.51deg, #1B1B1B -14.5%, rgba(27, 27, 27, 0) 118.65%)",
            }}
            className="flex w-fit rounded-[2rem] hmd:w-full hmd:justify-between py-4 mt-16"
          >
            {infoItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center relative gap-5 h-fit font-bold flex-col w-full leading-none hmd:px-0 px-8 after:content-[''] after:top-1/2 after:-translate-y-1/2 not-last:after:w-[2px] after:absolute after:right-0 after:h-[60px] after:bg-colection-1000 "
              >
                <p
                  style={{ fontFamily: "Raleway" }}
                  className="text-h2 hsm:text-h3 text-main "
                >
                  {item.amount}
                </p>
                <p className="text-b2 ">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <Advertisement />
      </div>
      <div className="absolute top-0 left-0 w-screen h-full overflow-hidden -z-10 bg-colection-300 after:absolute after:top-0 after:left-0 after:bg-black after:w-full after:h-full after:bg-opacity-70">
        <Image
          className="object-fill w-full h-full"
          src={HeroBg}
          alt="hero-bg"
        />
      </div>
    </HeroCont>
  );
};

export default Hero;

interface InfoItem {
  id: string;
  title: string;
  amount: string;
}

export const infoItems: InfoItem[] = [
  { id: uuidv4(), title: "Artwork", amount: "30K" },
  { id: uuidv4(), title: "Auction", amount: "26K" },
  { id: uuidv4(), title: "Artist", amount: "19K" },
];

{
  /* <HeroCont className="relative flex items-center justify-center w-screen min-h-screen ">
<div className="flex items-center justify-between h-full gap-10 hlg:flex-col">
  <div className="flex flex-col flex-shrink-0 all-child:hlg:text-center hlg:items-center hlg:justify-center ">
    <div className="flex flex-col gap-8">
      <p className="font-bold leading-none hsm:text-h2 text-h1">
        Discover, collect, and <br /> sell the best{" "}
        <span className="text-main">NFT art</span>
      </p>
      <p className="inline text-b1 text-colection-600">
        ASICS NFT is the world's first and largest NFT marketplace
      </p>
      <div className="flex gap-5 hmd:w-9/12 hmd:flex-col w-fit hlg:mx-auto">
        <PrimaryButton buttonType="contained">explore</PrimaryButton>
        <PrimaryButton buttonType="outlined">Create</PrimaryButton>
      </div>
    </div>
    <div
      style={{
        background:
          "linear-gradient(94.51deg, #1B1B1B -14.5%, rgba(27, 27, 27, 0) 118.65%)",
      }}
      className="flex w-fit rounded-[2rem] hmd:w-full hmd:justify-between py-4 mt-16"
    >
      {infoItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center relative gap-5 h-fit font-bold flex-col w-full leading-none hmd:px-0 px-8 after:content-[''] after:top-1/2 after:-translate-y-1/2 not-last:after:w-[2px] after:absolute after:right-0 after:h-[60px] after:bg-colection-1000 "
        >
          <p
            style={{ fontFamily: "Raleway" }}
            className="text-h2 hsm:text-h3 text-main "
          >
            {item.amount}
          </p>
          <p className="text-b2 ">{item.title}</p>
        </div>
      ))}
    </div>
  </div>
  <div className="text-colection-1000 relative  bg-colection-600 hmd:w-full w-[31rem] h-[75vh] flex ">
    <div className=" flex h-fit hsm:bg-gradient-to-r hsm:from-colection-500 rounded-[2rem] absolute items-center gap-x-[3rem] left-1/2 -translate-x-1/2 hsm:backdrop-blur-sm hsm:py-4 hsm:px-10  hsm:flex-col-reverse hsm:-bottom-[37%] justify-center w-[105%] bottom-4">
      <div className="flex flex-col hsm:from-transparent p-5 gap-3 bg-gradient-to-r from-colection-500 rounded-[2rem] hsm:mr-auto">
        <div className="">
          <p className="text-[28px]">Hollow</p>
          <p className="text-[12px]">
            Creator <span className="text-main">@KijijiHub</span>
          </p>
        </div>
        <p className="mt-2 text-body2">
          Current <span className="text-main">329.009 ETH</span>
        </p>
        <PrimaryButton buttonType="contained">Place a bit</PrimaryButton>
      </div>
      <div className="flex flex-col hsm:mb-0 rounded-[2rem] bg-gradient-to-r from-colection-500 py-2 px-5 hsm:w-full hsm:mx-auto hsm:items-center text-b2">
        <p>Auction ends in</p>
        <p className="text-main">4h : 32m : 16s left</p>
      </div>
    </div>
  </div>
</div>
<div className="absolute top-0 left-0 w-screen h-full overflow-hidden -z-10 bg-colection-300 after:absolute after:top-0 after:left-0 after:bg-black after:w-full after:h-full after:bg-opacity-70">
  <Image className="object-fill w-full h-full" src={a} alt="hero-bg" />
</div>
</HeroCont> */
}
