import { PrimaryButton, Container, SectionTitle } from "../../styledComponents";
import React from "react";
// Import Swiper React components
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { StyledSwiper, StyledSwiperSlide } from "./styledComponents";
import { v4 as uuidv4 } from "uuid";
import HeaderFramer from "../../framerMotion/HeaderFramer";

const NotableDrops = () => {
  return (
    <Container id="explore" className="w-screen py-8 bg-colection-1000">
      <HeaderFramer>
        <SectionTitle className="text-center text-colection-100">
          Notable Drops
        </SectionTitle>
      </HeaderFramer>

      <StyledSwiper
        className="swmd:w-[24rem] swsm:w-full"
        pagination={true}
        navigation={true}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          1050: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 2,
          },
        }}
        modules={[Pagination, Navigation]}
      >
        {notableDrops.map((item) => (
          <StyledSwiperSlide key={item.id}>
            <div className="flex relative flex-col rounded-[2rem] overflow-hidden h-[50vw] !max-h-[650px] !min-h-[600px] border-2">
              <div className="relative w-full h-full bg-colection-600"></div>
              <div className="flex flex-col gap-4 p-5 bg-colection-200">
                <div>
                  <p className="text-[1.6em] font-bold">{item.title}</p>
                  <p className="mt-2 text-b3">
                    Creator <span className="text-main">@{item.creator}</span>
                  </p>
                </div>
                <p className="mt-2 text-b2 text-colection-700">
                  Current bid{" "}
                  <span className="text-main">{item.amount} ETH</span>
                </p>
                <PrimaryButton buttonType="contained">
                  Place a bid
                </PrimaryButton>
              </div>
              <div className="tracking-widest text-b3 absolute top-[1rem] right-[1rem] rounded-[1rem] bg-colection-200 bg-opacity-60 py-2 px-4 backdrop-blur-md flex flex-col">
                <p>Auction ends in</p>
                <p className="font-bold">4h : 32m : 16s left</p>
              </div>
            </div>{" "}
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </Container>
  );
};

export default NotableDrops;

interface NotableDrop {
  id: string;
  title: string;
  creator: string;
  amount: string;
}

export const notableDrops: NotableDrop[] = [
  { id: uuidv4(), title: "Apolo", creator: "burhan", amount: "329.009" },
  { id: uuidv4(), title: "Veens", creator: "angel", amount: "329.009" },
  { id: uuidv4(), title: "Glowglass", creator: "alfinas", amount: "329.009" },
  { id: uuidv4(), title: "Apolo", creator: "burhan", amount: "329.009" },
  { id: uuidv4(), title: "Veens", creator: "angel", amount: "329.009" },
  { id: uuidv4(), title: "Glowglass", creator: "alfinas", amount: "329.009" },
  { id: uuidv4(), title: "Apolo", creator: "burhan", amount: "329.009" },
  { id: uuidv4(), title: "Veens", creator: "angel", amount: "329.009" },
  { id: uuidv4(), title: "Glowglass", creator: "alfinas", amount: "329.009" },
];
