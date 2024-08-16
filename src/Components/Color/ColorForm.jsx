import { useState } from "react";

export default function ColorForm() {
  const [role, setRole] = useState("");
  const [hex, setHex] = useState("");
  const [contrastText, setContrastText] = useState("");

  function handleInput(event) {
    event.preventDefault();
    console.log("works");
  }

  function handleClick() {}

  return (
    <form onSubmit={handleInput} className="form-flex">
      <label htmlFor="searchTerm">Role</label>
      <input
        name="searchTerm"
        id="searchTerm"
        value={role}
        onChange={(event) => setRole(event.target.value)}
      />
      <label htmlFor="searchTerm">Hex</label>
      <input
        name="searchTerm"
        id="searchTerm"
        value={hex}
        onChange={(event) => setHex(event.target.value)}
      />
      <label htmlFor="searchTerm">Contrast Text</label>
      <input
        name="searchTerm"
        id="searchTerm"
        value={contrastText}
        onChange={(event) => setContrastText(event.target.value)}
      />
      <button onClick={handleClick}>ADD COLOR</button>
    </form>
  );
}
