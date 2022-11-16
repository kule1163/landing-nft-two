import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import right from "../../../assets/right.png";
import left from "../../../assets/left.png";
import colors from "../../../styles/veriables/colors";

export const StyledSwiper = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    border: 2px solid ${colors["colection-1000"]} !important;
    background-color: ${colors["colection-1000"]} !important;
    width: 64px !important;
    height: 64px !important;
    border-radius: 50%;
    right: 10px;
    color: ${colors["colection-1000"]} !important;
    &::after {
      display: none;
    }
    &::before {
      display: none;
    }
  }
  .swiper-button-next {
    background: url(${right.src}) center center no-repeat;
  }
  .swiper-button-prev {
    background: url(${left.src}) center center no-repeat;
  }
  .swiper-pagination {
    margin-top: 1rem;
    position: relative;
  }
  .swiper-pagination-bullet-active {
    color: black !important;
    background-color: black !important;
  }
`;
export const StyledSwiperSlide = styled(SwiperSlide)``;
