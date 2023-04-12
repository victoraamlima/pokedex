import { ThemeContext, themes } from "../../contexts/theme-contexts";
import React, { useContext } from "react";
import { Circle, IconTheme, TTB, Theme } from "./styled";

const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <TTB
      onClick={() =>
        setTheme(theme === themes.light ? themes.dark : themes.light)
      }
    >
      <Theme theme={theme}>
        <IconTheme src={theme.header.themeToggle.icon} />
        <Circle />
      </Theme>
    </TTB>
  );
};

export { ThemeTogglerButton };
