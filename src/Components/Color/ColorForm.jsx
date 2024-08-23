/* add state to the functional components */
import { useState } from "react";

/* import a CSS file for styling the ColorForm component */
import "./ColorForm.css";
import ColorInput from "./ColorInput";
/* iport the nanoid API to create unique Id´s for the added colors */
import { nanoid } from "nanoid";

/* implement a ColorForm component with form, three input fields and submit-event handler */
export default function ColorForm({ addColor, isEditing, onSubmit, color }) {
  /* 
  Declare state variables for 'role', 'hex', and 'contrastText' with default values.
  These states will hold the values input by the user for the new color.
  */
  const [role, setRole] = useState("Name your new color");
  const [hex, setHex] = useState("#FF69B4");
  const [contrastText, setContrastText] = useState("#FDFEFE");

  function handleSubmit(event) {
    event.preventDefault();
    handleClick();
  }

  async function handleClick() {
    const contrastResult = await checkContrast(hex, contrastText);
    const overallResult = contrastResult.overall;

    /** create a newColor-object and store data inside */
    const newColor = {
      id: color
        ? color.id
        : nanoid() /* Use existing ID if editing, or create a new one if adding */,
      role: role,
      hex: hex,
      contrastText: contrastText,
      contrastStatus: overallResult,
    };

    if (isEditing) {
      /* If editing, call the onSubmit function to update the color */
      onSubmit(newColor);
    } else {
      /* If adding a new color, call the addColor function */
      addColor(newColor);
      /* Reset the form fields after adding a new color */
      setRole("Name your new color");
      setHex("#FF69B4");
      setContrastText("#FDFEFE");
    }
  }

  async function checkContrast() {
    try {
      const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            colors: [hex, contrastText],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data!");
      }
      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Error checking contrast ratio:", error);
    }
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
