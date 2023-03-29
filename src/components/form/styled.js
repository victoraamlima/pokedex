import styled from "styled-components";

// const styledFilter = styled.div

const FilterIcon = styled.div`
  width: 50px;
  height: 30px;
  // background: #fff;
  // color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  `;
  
  const Span = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 3px;
  background: #fff;
  border-radius: 5px;

  &:hover {
    background: #000;
  }

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

export { FilterIcon, Span };
