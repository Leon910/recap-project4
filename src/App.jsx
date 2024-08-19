/*  imports the CSS styles specific to the App component */
import "./App.css";
/* imports the ColorCard component */
import ColorCard from "./Components/Color/Color";
/* imports the initialColors array, which contains a list of color objects */
import { initialColors } from "./lib/colors";
/* imports the ColorForm component, which provides a form to add new colors */
import ColorForm from "./Components/Color/ColorForm";
/* imports the Analytics component functionalities from vercel */
/* import { Analytics } from "@vercel/analytics/react"; */
import { useState } from "react";

/* define the structure of the UI */
function App() {
  /* 
  Declares a state variable 'colors' initialized with 'initialColors'.
  'setColors' is a function used to update the 'colors' state.
  */
  const [colors, setColors] = useState(initialColors);

  /*
  Function to add a new color to the list of colors.
  It updates the 'colors' state by adding the new color at the beginning of the array.
  */
  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  /* Function to handle the deletion of a color */
  /* callback function "color => color.id" is applied to each element (color) in the colors array. */
  /* checks if the id of the current color is not equal to the colorId passed to handleDelete. */
  const handleDelete = (colorId) => {
    setColors(colors.filter((color) => color.id !== colorId));
  };

  return (
    /* fragments to group multiple elements without adding extra nodes to the DOM */
    <>
      <h1>Theme Creator</h1>
      <ColorForm addColor={addColor} />
      {/* Renders an unordered list without default bullet points */}
      <ul style={{ listStyleType: "none" }}>
        <li>
          {/* iterates over the colors array and renders a ColorCard for each color object */}
          {colors.map((color) => {
            /* color={color} passes the color object as a prop to the ColorCard component */
            return (
              <ColorCard key={color.id} color={color} onDelete={handleDelete} />
            );
          })}
        </li>
      </ul>

      {/* add vercel analytics for tracking web page traffic */}
      {/* <Analytics />*/}
    </>
  );
}

export default App;
