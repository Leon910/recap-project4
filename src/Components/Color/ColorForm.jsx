/* add state to the functional components */
import { useState } from "react";

/* import a CSS file for styling the ColorForm component */
import "./ColorForm.css";
import ColorInput from "./ColorInput";
/* iport the nanoid API to create unique Id´s for the added colors */
import { nanoid } from "nanoid";

/* implement a ColorForm component with form and three input fields */
export default function ColorForm({ addColor, isEditing }) {
  /* 
  Declare state variables for 'role', 'hex', and 'contrastText' with default values.
  These states will hold the values input by the user for the new color.
  */
  const [role, setRole] = useState("Name your new color");
  const [hex, setHex] = useState("#FF69B4");
  const [contrastText, setContrastText] = useState("#FDFEFE");

  /* event-handler for for submission and calls the handleClick function to add the new color */
  function handleSubmit(event) {
    event.preventDefault();
    handleClick();
  }

  /* button click handler - creates a new color object with a unique ID */
  function handleClick() {
    const newColor = {
      id: nanoid(),
      role: role,
      hex: hex,
      contrastText: contrastText,
    };
    console.log("Adding color:", newColor);
    {
      /* Calls the addColor function passed as a prop to add the new color to the list*/
    }
    addColor(newColor);
    {
      /* Resets the form fields to their default values after submission*/
    }
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
      <button type="submit">{isEditing ? "UPDATE COLOR" : "ADD COLOR"}</button>
    </form>
  );
}
