import "./Color.css";
import { initialColors } from "../../lib/colors";

export default function ColorCard() {
  return (
    <ul className="color-list">
      {initialColors.map((color) => (
        <li
          key={color.id}
          className="color-card-headline"
          style={{ backgroundColor: color.hex, color: color.contrastText }}
        >
          {color.hex}
          {color.role}
          {color.contrastText}
        </li>
      ))}
    </ul>
  );
}
