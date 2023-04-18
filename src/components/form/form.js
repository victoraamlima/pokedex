import React, { useContext, useState } from "react";
import { FilterIcon, Span } from "./styled";
import {
  FilterCheckbox,
  Filter,
  BoxInput,
  LabelInput,
  LabelText,
  HamburgerFilter,
  ContainerFilterIcon,
} from "./styled";
import { ThemeContext } from "../../contexts/theme-contexts";

const Form = ({ types, selectedTypes, onSelectedTypesChange }) => {
  const handleTypeChange = (event) => {
    const type = event.target.value;
    const checked = event.target.checked;
    if (checked) {
      onSelectedTypesChange(
        (prevSelectedTypes) => new Set([...prevSelectedTypes, type])
      );
    } else {
      onSelectedTypesChange(
        (prevSelectedTypes) =>
          new Set([...prevSelectedTypes].filter((t) => t !== type))
      );
    }
  };

  const { theme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);

  const handleHamburgerFilter = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Filter>
      <FilterIcon>
        <ContainerFilterIcon />
        <HamburgerFilter type={"checkbox"} onChange={handleHamburgerFilter} />
        <Span />
      </FilterIcon>

      <FilterCheckbox checked={checked} theme={theme}>
        {types.map((type) => {
          return (
            <React.Fragment key={type}>
              <LabelInput>
                <LabelText>{type}</LabelText>
                <BoxInput
                  type="checkbox"
                  value={type}
                  checked={selectedTypes.has(type)}
                  onChange={handleTypeChange}
                />
              </LabelInput>
            </React.Fragment>
          );
        })}
      </FilterCheckbox>
    </Filter>
  );
};

export { Form };