import React from "react";

import "./form-input.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="form-group field">
    <input
      type="input"
      className="form-field"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${otherProps.value.length ? "shrink" : ""}
        form-label`}
      >
        {label}
      </label>
    ) : null}
  </div>

  // <label for="name" class="form_label">Name</label>
);

export default FormInput;
