import "./Color.css";

/* functional component named ColorCard */
/* receives a single prop called color, which is an object */
export default function ColorCard({ color, onDelete }) {
  function handleClick() {
    console.log("Delete Button works");
    onDelete(color.id);
  }
  return (
    <div
      /* assigns the color-card CSS class to the div */
      className="color-card"
      /* sets the background color and text color of the div to the hex and contrastText value provided by the color prop */
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      {/* apply styles to the paragraph and display hex, role and contrastText */}
      <p className="color-card-headline">{color.hex}</p>
      <p>{color.role}</p>
      <p>contrast: {color.contrastText}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}
