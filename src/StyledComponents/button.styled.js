import styled from "styled-components";

export const ButtonStyled = styled.button`
border: 2px solid rgba(253, 171, 108, 0.753);
padding: 0.3rem 0.5rem;
font-weight: bold;
margin-top: 1rem;
  background-color: transparent;
  text-transform: uppercase;
  color: rgba(238, 238, 238, 0.782);
  letter-spacing: 0.1rem;
  position: relative;
  transition: all 0.1s;

  &::after {
      background: none repeat scroll 0 0 transparent;
      content: "";
      display: block;
      height: 2px;
      bottom: -10px;
      left: 50%;
      position: absolute;
      background: rgba(253, 171, 108, 0.753);
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }

    &:active{
        transform: scale(0.9);
    }
    
    &:hover::after {
      width: 100%;
      left: 0;
    }
`;
