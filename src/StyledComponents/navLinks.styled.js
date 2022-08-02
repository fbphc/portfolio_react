import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLinks = styled(Link)`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(255, 155, 73);
  letter-spacing: 0.15rem;
  position: relative;

  &::after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      bottom: -2px;
      left: 50%;
      position: absolute;
      background: rgba(255, 111, 0, 1);
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    &:hover {
      color: rgba(255, 111, 0, 1);
    }
    &:hover::after {
      width: 100%;
      left: 0;
    }
`;
