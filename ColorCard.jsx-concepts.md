- responsible for rendering individual color cards
- also provides options to edit or delete the color

# React Concepts

## React Hooks (useState)

const [isEditing, setIsEditing] = useState(false);

- `isEditing`:tracks whether the color card is in edit mode or not

## Props (Properties)

- `color`: An object representing the color with properties like id, hex, role, and contrastText
- `onDelete`: A function passed from the parent component (App) to handle deleting the color
- `onUpdate`: A function passed from the parent component to handle updating the color

## Event Handlers

### Delete Handler

const handleDeleteClick = () => {
const isConfirmed = window.confirm("Really delete?");

if (isConfirmed) {
onDelete(color.id);
}
};

- triggered when the user clicks the "DELETE" button

### Edit Mode Handler

const handleEditClick = () => {
setIsEditing(true);
};

- when EDIT clicked, sets `isEditing` to true, triggering the component to render in edit mode

### Cancel Edit Handler

const handleCancelClick = () => {
setIsEditing(false);
};

- resets the `isEditing` state to false, exiting the edit mode and returning to the regular display of the color card

### Update Handler

const handleUpdate = (updatedColor) => {
onUpdate(updatedColor);
setIsEditing(false);
};

- called when the user submits changes to a color. It calls the onUpdate function passed from the parent component, then exits edit mode by setting isEditing to false

## Rendering the Form

# Connections to other components
