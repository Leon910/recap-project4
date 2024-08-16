import { useState } from "react";
import "./ColorForm.css";

export default function ColorForm() {
  const [role, setRole] = useState("some color");
  const [hex, setHex] = useState("#125413");
  const [contrastText, setContrastText] = useState("#ffffff");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit works");
  }

  function handleClick() {}

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
