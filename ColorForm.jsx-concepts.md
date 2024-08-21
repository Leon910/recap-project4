# React Concepts

## React Hooks (useState)

const [role, setRole] = useState("Name your new color");
const [hex, setHex] = useState("#FF69B4");
const [contrastText, setContrastText] = useState("#FDFEFE");

- `role`: Holds the name or role of the color (e.g., "Primary", "Secondary"). It's initialized to "Name your new color".
- `hex`: Holds the hex code of the color, initialized to "#FF69B4" (Hot Pink).
- `contrastText`: Holds the contrast text color, initialized to "#FDFEFE" (a light shade of white).

## Props (Properties)

- `onSubmit={handleUpdate}`in ColorCard.jsx

- receives the onSubmit prop from colorCard

## Event Handlers

function handleSubmit(event) {
event.preventDefault();
handleClick();
}

- triggered when the form is submitted
- `handleClick()`: Calls the handleClick function to handle the logic of adding or updating a color -> processes the form data the user put into the fields after clicking the button
  - either adds the new color to the list (if the form is in "add" mode) or updates an existing color (if the form is in "edit" mode)

## Rendering the Form

- `onSubmit={handleSubmit}` triggers the form submission process

# Connections to other components

export default function ColorForm({ addColor, isEditing, onSubmit, color })

- receives `addColor`from App.jsx and `isEditing`, `onSubmit`, `color` from ColorCard.jsx
