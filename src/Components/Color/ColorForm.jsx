/* add state to the functional components */
import { useState } from "react";

/* import a CSS file for styling the ColorForm component */
import "./ColorForm.css";

/* implement a ColorForm component with form and three input fields */
export default function ColorForm() {
  /* set state with default values to later be able to change the values */
  const [role, setRole] = useState("some color");
  const [hex, setHex] = useState("#125413");
  const [contrastText, setContrastText] = useState("#ffffff");

  /* event-handler to submit the events */
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit works");
  }

  /* button click handler - not yet finished */
  function handleClick() {}

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
      <input
        name="hex"
        id="hex"
        value={hex}
        onChange={(event) => setHex(event.target.value)}
      />
      <label htmlFor="contrastText">Contrast Text</label>
      <input
        name="contrastText"
        id="contrastText"
        value={contrastText}
        onChange={(event) => setContrastText(event.target.value)}
      />
      <button onClick={handleClick}>ADD COLOR</button>
    </form>
  );
}
