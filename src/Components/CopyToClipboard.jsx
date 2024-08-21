import { useState, useEffect } from "react";

export default function CopyToClipboard({ copiedText }) {
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

  useEffect(() => {
    if (isCopy) {
      const timer = setTimeout(() => {
        setIsCopy(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isCopy]);

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
}
