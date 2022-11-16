import styled from "styled-components";
import colors from "../../styles/veriables/colors";

interface MenuItem {
  currentItem: boolean;
}

export const MenuItem = styled.a<MenuItem>`
  position: relative;
  overflow: hidden;
  & span {
    display: inline-block;
    transform: ${(props) => props.currentItem && "translateX(-200%)"};
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  }
  &::after,
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  }
  &::before {
    background-color: ${colors.main};
    bottom: 0;
    height: 1px;
    transform-origin: 100% 50%;
    transform: ${(props) => (props.currentItem ? "scaleX(1)" : "scaleX(0)")};
  }
  &::after {
    content: attr(data-replace);
    height: 100%;
    top: 0;
    color: ${colors.main};
    transform-origin: 100% 50%;
    transform: ${(props) =>
      props.currentItem ? "translateX(0)" : "translateX(200%)"};
    /* transform: translate3d(200%, 0, 0); */
    /*  transform: translateX(200%); */
  }
  &:hover::after {
    transform: translate(0, 0);
  }
  &:hover::before {
    transform-origin: 0% 50%;
    transform: scaleX(1);
  }
  &:hover span {
    /* transform: translate3d(-200%, 0, 0); */
    transform: translateX(-200%);
  }
`;
