import { ThemeContext } from "../../contexts/theme-contexts";
import React, { useContext, useEffect, useRef, useState } from "react";
import { StyledButtonGoTop, StyledArrow } from "./styled";
import $ from "jquery";

const ButtonGoTop = ({ quantity, addMorePokemons }) => {
  const { theme } = useContext(ThemeContext);

  const [pageYPosition, setPageYPosition] = useState(0);
  const buttonRef = useRef(null);
  function getPageYAfterScroll() {
    setPageYPosition(window.scrollY);
  }
  window.addEventListener("scroll", getPageYAfterScroll);

  useEffect(() => {
    $(buttonRef.current).click((e) => {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 500);
    });
  }, []);

  return (
    <>
      {pageYPosition > 0 && (
        <StyledButtonGoTop ref={buttonRef} href="#" theme={theme}>
          <StyledArrow />
        </StyledButtonGoTop>
      )}
    </>
  );
};

export { ButtonGoTop };