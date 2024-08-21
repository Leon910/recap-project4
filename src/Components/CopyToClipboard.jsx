import { useState, useEffect } from "react";

export default function CopyToClipboard({ copiedText }) {
  /** tracks whether the text has been copied */
  const [isCopy, setIsCopy] = useState(false);
  /* handle the click event for copy button */
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(copiedText);

      setIsCopy(true);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  /** tracks whether the text has been copied */
  useEffect(() => {
    if (isCopy) {
      const timer = setTimeout(() => {
        setIsCopy(false);
      }, 3000);

      /** tracks whether the text has been copied */
      return () => clearTimeout(timer);
    }
  }, [isCopy]);

  return (
    <div>
      <button onClick={handleCopyClick}>COPY</button>

      {/** tracks whether the text has been copied */}
      {isCopy && (
        <p style={{ color: "white", backgroundColor: "#1bff3d" }}>
          SUCCESSFULLY COPIED!
        </p>
      )}
    </div>
  );
}
