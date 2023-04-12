import styled from "styled-components";

const Span = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 3px;
  background: #fff;
  border-radius: 5px;

  &:before {
    content: "";
    position: absolute;
    bottom: 10px;
    display: block;
    width: 50px;
    height: 3px;
    background: #fff;
    border-radius: 5px;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    display: block;
    width: 30px;
    height: 3px;
    background: #fff;
    border-radius: 5px;
  }
`;

const ContainerFilterIcon = styled.div`
  width: 50px;
  height: 30px;
  position: absolute;
  z-index: 1;
  cursor: pointer;
`;

const FilterIcon = styled.label`
  width: 55px;
  height: 30px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: 2vw;

  &:hover ${Span} {
    -webkit-box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 1);

    &::before,
    &::after {
      -webkit-box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 1);
      -moz-box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 1);
    }
  }
`;

const HamburgerFilter = styled.input`
  all: unset;

  &:checked + ${Span} {
    background: #9e9e9e;
    &::before,
    &::after {
      background: #9e9e9e;
    }
  }
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const FilterCheckbox = styled.div`
  display: ${(props) => (props.checked ? "flex" : "none")};
  background: ${(props) => props.theme.header.backgroundFilter};
  border-top: 1px solid #770707;
  flex-direction: column;
  flex-flow: column wrap;
  gap: 5px;
  height: 150px;
  width: 100vw;
  padding: 10px;
`;

const BoxInput = styled.input`
  all: unset;
  position: absolute;
  border: 3px solid #ffffff;
  width: 15px;
  height: 15px;
  background: transparent;
  top: 1.5px;
  left: -25px;

  &:checked::after {
    content: "X";
    position: absolute;
    top: -6px;
    left: 2px;
    color: #ffffff;
    font-size: 18px;
  }
`;

const LabelInput = styled.label`
  position: relative;
  left: 30px;
  display: flex;
  min-width: 85px;
  cursor: pointer;
`;

const LabelText = styled.span`
  color: #ffffff;
  font-weight: 500;

  &:hover {
    color: #000;
  }
  &::first-letter {
    text-transform: uppercase;
  }
`;

export {
  FilterIcon,
  Span,
  FilterCheckbox,
  Filter,
  BoxInput,
  LabelInput,
  LabelText,
  HamburgerFilter,
  ContainerFilterIcon,
};
