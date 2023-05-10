import { ThemeContext } from "../../contexts/theme-contexts"
import React, { useContext, useEffect, useRef, useState } from "react"
import { StyledButtonGoTop, StyledArrow } from "./styled"
import $ from "jquery"

const ButtonGoTop = () => {
  const { theme } = useContext(ThemeContext)

  const [pageYPosition, setPageYPosition] = useState(false)

  const buttonRef = useRef(null)

  useEffect(() => {
    function getPageYAfterScroll() {
      if (window.scrollY > 0) {
        setPageYPosition(true)
      } else {
        setPageYPosition(false)
      }
    }

    window.addEventListener("scroll", getPageYAfterScroll)

    $(buttonRef.current).click(() => {
      $("html, body").animate({ scrollTop: 0 }, 500)
    })
  }, [pageYPosition])

  return (
    <>
      {pageYPosition && (
        <StyledButtonGoTop ref={buttonRef} theme={theme}>
          <StyledArrow />
        </StyledButtonGoTop>
      )}
    </>
  )
}

export { ButtonGoTop }
