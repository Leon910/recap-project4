# React Concepts

## React Hooks (useState)

### useState

const [isCopy, setIsCopy] = useState(false);

- `isCopy` tracks whether the text has been copied

### useEffect

useEffect(() => {
if (isCopy) {
const timer = setTimeout(() => {
setIsCopy(false);
}, 3000);

    return () => clearTimeout(timer);

}
}, [isCopy]);

- monitors the `isCopy` state
- If `isCopy` is true (i.e., the text was copied), it sets a timeout to reset `isCopy` back to false after 3 seconds.
- `clearTimeout` ensures that the timeout is cleared if the component unmounts before the timeout completes

## Props (Properties)

## Event Handlers

const handleCopyClick = async () => {
try {
await navigator.clipboard.writeText(copiedText);
setIsCopy(true);
} catch (error) {
console.error("Copy failed", error);
}
};

- copies `copiedText` to the clipboard using `navigator.clipboard.writeText`

return (

  <div>
    <button onClick={handleCopyClick}>COPY</button>
    {isCopy && (
      <p style={{ color: "white", backgroundColor: "#1bff3d" }}>
        SUCCESSFULLY COPIED!
      </p>
    )}
  </div>
);

- If `isCopy` is true, it displays a message "SUCCESSFULLY COPIED!" with specific styles.

## Rendering the Form

# Connections to other components
