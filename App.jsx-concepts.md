# React Concepts

## React Hooks (useState)

const [colors, setColors] = useState(initialColors);

- `colors`: This is the state variable that holds the current list of colors.
- `setColors`: This function is used to update the colors state.
- `initialColors`: The initial value for colors when the component first renders

## Props (Properties)

<ColorForm addColor={addColor} />
- allows `ColorForm` to call `addColor` when a new color is added, updating the state in the App component

<ColorCard
  key={color.id}
  color={color}
  onDelete={handleDelete}
  onUpdate={handleColorUpdate}
/>

- passing several props to the ColorForm and ColorCard components
  - addColor, handleDelete and handleColorUpdate are functions passed as props

## Lifting State Up

- The App component manages the state for the list of colors (see above React Hooks)
- App passes parts of this state (or functions to modify it) as props to ColorForm and ColorCard

## Event Handlers

- Event handlers are functions that respond to user interactions, such as clicks, form submissions, or other actions

- user submits a form to add a new color -> `addColor` handles adding a new color
  - updates the list of colors by adding the `newColor`-object to the array
- user handleDelete handles deleting a color
- handleColorUpdate handles updating an existing color

## Conditional Rendering

- render different elements or components based on a condition
- If 'colors.length' is 0, a message is displayed encouraging the user to add a color. Otherwise, the list of ColorCard components is rendered

# JavaScript Array Methods

## map

{colors.map((color) => {
return (
<ColorCard
      key={color.id}
      color={color}
      onDelete={handleDelete} 
      onUpdate={handleColorUpdate}
    />
);
})}

- .map-method is used to iterate over an array and transform each element. It returns a new array.
- Each color object in the colors array is transformed into a ColorCard component

## map for Update

setColors(
colors.map((color) =>
color.id === updatedColor.id ? updatedColor : color
)
);

- map checks each color’s id. If it matches updatedColor.id, that color is replaced with the updated version; otherwise, the original color is retained.

## filter

- .filter-method creates a new array containing only the elements that pass a given test (i.e., the elements for which the callback function returns true)

setColors(colors.filter((color) => color.id !== colorId));

- filter is used to remove a color from the list

# Connections to other components

## ColorCard

onDelete={handleDelete}

- When the Delete button is clicked in ColorCard, the onDelete function is called with color.id as its argument
- This color.id is passed as colorId to the handleDelete function
- Inside handleDelete, colorId is used to filter out the color with that specific id from the colors array, effectively deleting it

## ColorForm

- (see above Props)
