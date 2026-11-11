import React from "react";
import { Link } from "react-router";

function Button({ text, to, className }) {
  return (
    <Link to={to} className={className}>
      {text}
    </Link>
  );
}

export default Button;