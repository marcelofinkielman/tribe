import React from "react";
import "./SubmitButton.scss";

function PrimaryButton({ label, handleClick }) {
  return (
    <button className="primary-button" onClick={handleClick}>
      {label}
    </button>
  );
}

export default PrimaryButton;