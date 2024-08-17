/* add state to the functional components */
import { useState } from "react";

/* import a CSS file for styling the ColorForm component */
import "./ColorForm.css";
import ColorInput from "./ColorInput";

/* implement a ColorForm component with form and three input fields */
export default function ColorForm() {
  /* set state with default values to later be able to change the values */
  const [role, setRole] = useState("Name your new color");

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
      <ColorInput id="hex" defaultValue={"#FF69B4"} />

      <label htmlFor="contrastText">Contrast Text</label>
      <ColorInput id="contrastText" defaultValue={"#FDFEFE"} />

      <button onClick={handleClick}>ADD COLOR</button>
    </form>
  );
}
