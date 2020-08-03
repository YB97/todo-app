import React from "react";

import "./Input.css";

export const Input = ({ ...props }) => (
  <input {...props} className={`input ${props.className || ""}`} />
);
