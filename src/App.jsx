import "./App.css";
import "./Components/Color/Color.css";
import { initialThemes } from "./lib/themes";
import { useState } from "react";
import ColorCard from "./Components/Color/ColorCard";
import { initialColors } from "./lib/colors";
import ColorForm from "./Components/Color/ColorForm";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  const [currentThemeId, setCurrentThemeId] = useState(themes[0].id);

  const currentTheme = themes.find((theme) => theme.id === currentThemeId);

  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  const themeColors = colors.filter((color) =>
    currentTheme.colors.includes(color.id)
  );

  const addColor = (newColor) => {
    setColors([newColor, ...colors]);

    const updatedThemes = themes.map((theme) => {
      if (theme.id === currentThemeId) {
        return { ...theme, colors: [newColor.id, ...theme.colors] };
      }
      return theme;
    });

    setThemes(updatedThemes);
  };

  const handleDelete = (colorId) => {
    setColors(colors.filter((color) => color.id !== colorId));
  };

  const handleColorUpdate = (updatedColor) => {
    setColors(
      colors.map((color) =>
        color.id === updatedColor.id ? updatedColor : color
      )
    );
  };

  return (
    <ThemeDisplay
      themes={themes}
      colors={themeColors}
      addColor={addColor}
      handleDelete={handleDelete}
      handleColorUpdate={handleColorUpdate}
      currentThemeId={currentThemeId}
      setCurrentThemeId={setCurrentThemeId}
    />
  );
}

export function ThemeDisplay({
  colors,
  addColor,
  handleDelete,
  handleColorUpdate,
  currentThemeId,
  themes,
  setCurrentThemeId,
}) {
  return (
    /* fragments to group multiple elements without adding extra nodes to the DOM */
    <>
      <h1>Theme Creator</h1>
      <label htmlFor="theme-selector"></label>
      <select
        id="theme-selector"
        value={currentThemeId}
        onChange={(event) => setCurrentThemeId(event.target.value)}
      >
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
      <ColorForm addColor={addColor} />
      {colors.length === 0 ? (
        <p className="no-color-card-message">
          No colors.. start by adding one!
        </p>
      ) : (
        /* Renders an unordered list without default bullet points */
        <ul style={{ listStyleType: "none" }}>
          {colors.map((color) => {
            return (
              /* color={color} passes the color object as a prop to the ColorCard component */
              <ColorCard
                key={color.id}
                color={color}
                onDelete={handleDelete}
                onUpdate={handleColorUpdate}
              />
            );
          })}
        </ul>
      )}
      {/* add vercel analytics for tracking web page traffic */}
      {/* <Analytics />*/}
    </>
  );
}
