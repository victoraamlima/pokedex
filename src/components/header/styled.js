import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  // width: calc(100vw - 15px);
  min-height: 70px;
  justify-content: space-between;
  padding-top: 20px;
  position: relative;
  top: 0;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  background: ${(props) => props.theme.header.background};
  height: 70px;
  // width: 100vw;
  width: 100%;
  z-index: 0;
`;

const H1 = styled.h1`
  width: 150px;
  height: 45px;
  line-height: 5px;
  position: absolute;
  left: calc(50% - (150px / 2));
  text-align: center;
  // font-family: "Pokemon";
  font-weight: 400;
  font-size: 32px;
  background: linear-gradient(180deg, #f7ba4c 20.05%, #ab6e00 73.41%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  -webkit-text-stroke: 2.5px #000;
  text-stroke: 2px #000;
  letter-spacing: 2px;
`;

export { StyledHeader, H1, Background };
