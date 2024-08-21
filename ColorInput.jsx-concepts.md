# React Concepts

## React Hooks (useState)

- `id`: A unique identifier for the input elements, used to associate the input with a label or to target it in the DOM.
- `defaultValue`: The initial value that the input fields will display. This is the color value passed down from the parent component (e.g., ColorForm).
- `onChange`: A function that gets called whenever the value of the input changes. This function is passed down from the parent component to handle the updated color value

## Props (Properties)

## Event Handlers

function handleInputValue(event) {
const newValue = event.target.value;
setInputValue(newValue);
onChange(newValue);
}

- triggered whenever the user types in the text input or selects a color from the color picker
- passing the updated color value back up the chain (to ColorForm)

## Rendering the Form

# Connections to other components
