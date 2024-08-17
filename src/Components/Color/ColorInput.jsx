import { useState } from "react";

/* component definition with "id" as unique identifier for the input element, allowing it to be targeted in the DOM and "defaultValue" as initial value for the input fields */
export default function ColorInput({ id, defaultValue }) {
  /* state declaration: setInputValue updates the inputValue (holds the current value of the input) */
  const [inputValue, setInputValue] = useState(defaultValue);

  /* handler function called whenever the user types in the input fields or selects a color */
  /* "event"-object holds information about the event that occurred */
  /* "event.target.value" is new value entered by the user */
  /* "setInputValue" updates the "inputValue" with new value */
  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <div>
        {/* onChange: any changes to the text input will update the inputValue state */}
        <input
          type="text"
          id={id}
          name={id}
          value={inputValue}
          onChange={handleInputValue}
        />
        {/* type="color" sets a color picker */}
        <input type="color" value={inputValue} onChange={handleInputValue} />
      </div>
    </>
  );
}
