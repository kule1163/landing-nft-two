import styled from "styled-components";
import colors from "../styles/veriables/colors";
import fontSize from "../styles/veriables/fontSize";

const navHeight = "5rem";

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1em;
  font-weight: 600;
  font-family: "Poppins";
  border-radius: 2rem;
  border: 1px solid;
  text-transform: capitalize;
`;

interface ButtonProps {
  buttonType: "contained" | "outlined";
}

export const PrimaryButton = styled(Button)<ButtonProps>`
  background-color: ${(props) =>
    props.buttonType === "contained" ? colors.main : "transparent"};
  color: ${(props) =>
    props.buttonType === "contained" ? "black" : colors.main};
  border-color: ${(props) =>
    props.buttonType === "contained" ? "transparent" : colors.main};
  &:hover {
    background-color: ${(props) =>
      props.buttonType === "contained" ? colors.hover : colors.main};
    color: black;
  }
`;

export const SectionTitle = styled.p`
  font-size: ${fontSize["step-1"]};
  font-weight: 800;
  text-transform: capitalize;
  text-align: center;
  line-height: 100%;
`;

export const Container = styled.div`
  padding-inline: 7rem !important;
  @media (max-width: 1300px) {
    padding-inline: 5rem !important;
  }
  @media (max-width: 700px) {
    padding-inline: 3rem !important;
  }
  @media (max-width: 500px) {
    padding-inline: 1rem !important;
  }
`;

export const NavbarCont = styled(Container)`
  height: ${navHeight};
`;

export const HeroCont = styled(Container)`
  padding-top: ${navHeight};
  @media (max-width: 1250px) {
    padding-top: calc(${navHeight} + 1rem) !important;
    padding-bottom: ${navHeight};
  }
  @media (max-width: 500px) {
    padding-bottom: 18rem;
  }
`;
