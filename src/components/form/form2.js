import React from "react";

const Form2 = ({ types, selectedTypes, onSelectedTypesChange }) => {

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

  return (
    <div>
      {types.map((type) => {
        return (
          <React.Fragment key={type}>
            <label>
              <input
                type="checkbox"
                value={type}
                checked={selectedTypes.has(type)}
                onChange={handleTypeChange}
              />
              {type}
            </label>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export { Form2 };
