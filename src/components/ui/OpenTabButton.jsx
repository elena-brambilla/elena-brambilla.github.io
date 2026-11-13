import React from "react";
import cv from "../../assets/cv.pdf";

function OpenTabButton({ text, link, newTab = false, download = false, downloadName }) {
  return (
    <a
      href={link}
      /* download={download} */
      target={newTab && !downloadName ? "_blank" : "_self"}
      rel={newTab && !downloadName ? "noopener noreferrer" : undefined}
      download={downloadName || undefined}
      className="btn-secondary"
      >
        {text}
    </a>
  );
}

export default OpenTabButton;