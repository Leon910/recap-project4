import { useState } from "react";
import "./Color.css";
import ColorForm from "./ColorForm";

/* functional component named ColorCard */
/* receives a single prop called color, which is an object */

export default function ColorCard({ color, onDelete, onUpdate }) {
  /* set State for the EDIT-button: track if the color-card is in edit mode */
  const [isEditing, setIsEditing] = useState(false);

  /* handler function to delete the color-card */
  const handleDeleteClick = () => {
    const isConfirmed = window.confirm("Really delete?");

    if (isConfirmed) {
      onDelete(color.id);
    }
  };

  /* handle the click event for edit button */
  const handleEditClick = () => {
    setIsEditing(true);
  };

  /* handle the update after the editing */
  const handleUpdate = (updatedColor) => {
    /** update the color with new values and give it as a prop via ColorCard to the ColorForm */
    onUpdate(updatedColor);
    setIsEditing(false);
  };

  return (
    <div
      /* assigns the color-card CSS class to the div */
      className="color-card"
      /* sets the background color and text color of the div to the hex and contrastText value provided by the color prop */
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      {isEditing ? (
        <ColorForm color={color} onSubmit={handleUpdate} isEditing={true} />
      ) : (
        <>
          {/* apply styles to the paragraph and display hex, role and contrastText */}
          <p className="color-card-headline">{color.hex}</p>
          <p>{color.role}</p>
          <p>contrast: {color.contrastText}</p>
          <button onClick={handleDeleteClick}>DELETE</button>
          <button onClick={handleEditClick}>EDIT</button>
        </>
      )}
    </div>
  );
}
