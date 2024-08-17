/*  imports the CSS styles specific to the App component */
import "./App.css";
/* imports the ColorCard component */
import ColorCard from "./Components/Color/Color";
/* imports the initialColors array, which contains a list of color objects */
import { initialColors } from "./lib/colors";
/* imports the ColorForm component, which provides a form to add new colors */
import ColorForm from "./Components/Color/ColorForm";
import { Analytics } from "@vercel/analytics/react";

/* define the structure of the UI */
function App() {
  return (
    /* fragments to group multiple elements without adding extra nodes to the DOM */
    <>
      <h1>Theme Creator</h1>
      <ColorForm />
      {/* Renders an unordered list without default bullet points */}
      <ul style={{ listStyleType: "none" }}>
        <li>
          {/* iterate over the initialColors array and renders a ColorCard for each color object */}
          {initialColors.map((color) => {
            /* color={color} passes the color object as a prop to the ColorCard component */
            return <ColorCard key={color.id} color={color} />;
          })}
        </li>
      </ul>

      {/* add vercel analytics for tracking web page traffic */}
      <Analytics />
    </>
  );
}

export default App;
