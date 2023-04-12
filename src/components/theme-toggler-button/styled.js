import styled from "styled-components";

const Theme = styled.div`
  background: ${(props) => props.theme.header.themeToggle.themeToggleButton};
  width: 70px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px;
`;

const Circle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 30px;
  background: #fff;
  display: block;
`;

const IconTheme = styled.img`
  width: 20px;
  height: 20px;
`;

const TTB = styled.button`
  all: unset;
  position: absolute;
  right: 0;
  margin-right: 3vw;
`;

export { IconTheme, Circle, Theme, TTB };
