export default function CopyToClipboard({ copiedText }) {
  /* handle the click event for copy button */
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(copiedText);
    } catch (error) {
      console.error("Copy failed");
    }
  };
  handleCopyClick();

  return <button onClick={handleCopyClick}>COPY</button>;
}
