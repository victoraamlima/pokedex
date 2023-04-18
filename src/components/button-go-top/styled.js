import styled from "styled-components";

const StyledButtonGoTop = styled.a`
  // all: unset;
  width: 6rem;
  height: 6rem;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  //   background: ${({ theme }) => theme.background};
  background: rgba(196, 48, 38, 0.7);;
  z-index: 5;
`;

const StyledArrow = styled.span`
  position: relative;
  display: flex;
  // align-items: center;
  // justify-content: center;
  width: 0.4rem;
  height: 4rem;
  background: #fff;
  border-radius: 0.5rem;

  &:before {
    content: "";
    position: absolute;
    top: -0.25rem;
    left: -0.8rem;
    display: block;
    width: 0.4rem;
    height: 2.5rem;
    background: #fff;
    border-radius: 0.5rem;
    transform: rotate(45deg);
  }

  &:after {
    content: "";
    position: absolute;
    top: -0.25rem;
    left: 0.8rem;
    display: block;
    width: 0.4rem;
    height: 2.5rem;
    background: #fff;
    border-radius: 0.5rem;
    transform: rotate(-45deg);
  }
`;
export { StyledButtonGoTop, StyledArrow };
