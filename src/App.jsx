import "./App.css";
import ColorCard from "./Components/Color/Color";
import { initialColors } from "./lib/colors";
import ColorForm from "./Components/Color/ColorForm";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm />
      <ul style={{ listStyleType: "none" }}>
        <li>
          {initialColors.map((color) => {
            return <ColorCard key={color.id} color={color} />;
          })}
        </li>
      </ul>
    </>
  );
}

export default App;
