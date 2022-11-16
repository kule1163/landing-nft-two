import styled from "styled-components";
import colors from "../../styles/veriables/colors";
import fontSize from "../../styles/veriables/fontSize";

export const BoxTittle = styled.p`
  color: ${colors["colection-1000"]};
  font-size: ${fontSize.b1};
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const BoxContent = styled.a`
  color: ${colors["colection-600"]};
  font-size: ${fontSize.b3};
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  &:hover {
    color: ${colors.main};
  }
`;
