/* add state to the functional components */
import { useState } from "react";

/* import a CSS file for styling the ColorForm component */
import "./ColorForm.css";
import ColorInput from "./ColorInput";
/* iport the nanoid API to create unique Id´s for the added colors */
import { nanoid } from "nanoid";

/* implement a ColorForm component with form and three input fields */
export default function ColorForm({ addColor }) {
  /* set state with default values to later be able to change the values */
  const [role, setRole] = useState("Name your new color");
  const [hex, setHex] = useState("#FF69B4");
  const [contrastText, setContrastText] = useState("#FDFEFE");

  /* event-handler to submit the events */
  function handleSubmit(event) {
    event.preventDefault();
    handleClick();
  }

  /* button click handler - not yet finished */
  function handleClick() {
    const newColor = {
      id: nanoid(),
      role: role,
      hex: hex,
      contrastText: contrastText,
    };
    console.log("Adding color:", newColor);
    addColor(newColor);
    setRole(role);
    setHex(hex);
    setContrastText(contrastText);
  }

  /* input elements are tied to state via the value attribute with the name e.g. "role" */
  /* onChange updates the corresponding state when the user types into the input field */
  return (
    <form onSubmit={handleSubmit} className="form-flex">
      <label htmlFor="role">Role</label>
      <input
        type="text"
        id="role"
        name="role"
        value={role}
        onChange={(event) => setRole(event.target.value)}
      />
      <label htmlFor="hex">Hex</label>
      <ColorInput
        id="hex"
        defaultValue={hex}
        onChange={(value) => setHex(value)}
      />

      <label htmlFor="contrastText">Contrast Text</label>
      <ColorInput
        id="contrastText"
        defaultValue={contrastText}
        onChange={(value) => setContrastText(value)}
      />

      <button type="submit">ADD COLOR</button>
    </form>
  );
}
