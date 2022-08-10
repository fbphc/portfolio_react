import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLinks = styled(Link)`
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(255, 155, 73);
  letter-spacing: 0.1rem;
  position: relative;

  &::after {
    background: none repeat scroll 0 0 transparent;
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
  @media (max-width: 768px) {
    color: #ff6f00da;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 1rem 1rem;
  }
`;
