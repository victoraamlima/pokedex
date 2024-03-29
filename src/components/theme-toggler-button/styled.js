import styled from "styled-components"

const StyledThemeTogglerButton = styled.button`
  all: unset;
  position: absolute;
  right: 10px;
  top: 20px;
  cursor: pointer;
`

const Theme = styled.div`
  background: ${(props) => props.theme.header.themeToggle.themeToggleButton};
  width: 70px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px;
`

const Circle = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 30px;
  background: #fff;
  display: block;
`

const IconTheme = styled.img`
  width: 20px;
  height: 20px;
`

export { IconTheme, Circle, Theme, StyledThemeTogglerButton }
