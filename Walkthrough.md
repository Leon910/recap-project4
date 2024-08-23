# 1: Display Theme Colors

## Step 1 - Setting Up the App-Component

- manages the list of colors and renders ColorCard component

## Step 2 - State Initialization

- The colors state is initialized with initialColors and managed by useLocalStorageState, which syncs the state with the browser's local storage under the key "colors"
- initialColors used from seperate file

## Step 3 - Rendering

- headline

## Step 4 - Setting up ColorCard-Component

- represents each color, displaying its hex value, role, and contrastText

## Step 5 - Styling the color cards

- ColorCard takes a color object as a prop (from App.jsx)
- set color background, text color etc.
- displays hex, role and contrastText
- use Color.css

## Step 6 - Add ColorCard-Component to App.jsx

- integrate to render

# 2: Add a color to the theme

## Step 1 - Setting Up the ColorForm-Component

- allow users to add new colors to the theme by inputting a role, hex value, and contrast text

## Step 2 - Define the State in ColorForm

- Use the useState hook to create state variables for role, hex, and contrastText.
- Initialize them with default values to guide the user

## Step 3 - Handle Form Submission

- Implement a handleSubmit function that will handle form submissions
- should prevent the default form behavior and call a function to add the new color to the theme (which will be passed as a prop)

## Step 4 - Create a newColor Object

- Store the role, hex, contrastText, and id in a new color object and use a unique ID creator

## Step 5 - Reset the form

- After a color is added, reset the form fields back to their default values

## Step 6 - Rendering

- create a form with lable and input-fields

## Step 7 - Setting up the ColorInput-Component

- Manage the state for the input value and synchronize text and color input fields
- create a handler function called whenever the user types in the input fields or selects a color
- Integrate ColorForm-Component in App.jsx render

# 3: Delete a color from the theme

## Step 1 - Add Delete Button to Each Color Card

- Ensure each ColorCard includes a "Delete" button that triggers the delete functionality

## Step 2 - Implement the Delete Function

- add handleDelete function in APP.jsx
- function filters out the color with the specified colorId from the colors array and updates the state

## Step 3 - Handle Delete Function

- handleDeleteClick prompts the user for confirmation before calling the onDelete function, which triggers the handleDelete function in App.jsx

## Step 4 - Display a Message When No Colors Are Left

- conditionally renders a message if no colors are present or maps through the colors array to create a ColorCard for each color (see step 6)

# 4: Edit a color from the theme

## Step 1 - Add Edit Button and State Management to ColorCard

- when clicked, this button should toggle the card into edit mode and show the ColorForm component pre-filled with the current color's details
- handleEditClick sets isEditing to true, causing the ColorForm to render in edit mode.
- handleCancelClick sets isEditing to false, hiding the ColorForm.

## Step 2 - Modify ColorForm

- Modify the ColorForm component to handle both creating and editing colors. When in edit mode, the form should be pre-filled with the existing color details

if (isEditing) {
/_ If editing, call the onSubmit function to update the color _/
onSubmit(newColor);
} else {
/_ If adding a new color, call the addColor function _/
addColor(newColor);
/_ Reset the form fields after adding a new color _/
setRole("Name your new color");
setHex("#FF69B4");
setContrastText("#FDFEFE");
}
}

## Step 3 - Add handler Function to App.jsx

- handleColorUpdate with the updatedColor
