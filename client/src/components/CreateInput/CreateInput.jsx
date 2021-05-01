import React from "react";

import "./CreateInput.scss";

const CreateInput = ({ label, }) => {
  return (
    <div className="input">
      <label htmlFor="input-label" className="input__label">
        {label}
      </label>
      <input>
       
      </input>
      
     
    </div>
  );
};

export default CreateInput;
