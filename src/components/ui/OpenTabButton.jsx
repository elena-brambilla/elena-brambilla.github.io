import React from "react";

function OpenTabButton({ text, link, newTab = false, download = false }) {
  return (
    <a
      href={link}
      download={download}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="btn-secondary"
      >
        {text}
    </a>
  );
}

export default OpenTabButton;