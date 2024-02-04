import React from "react";

const SwitchToggle = () => {
  return (
    <div className="switchtoggle">
      <p>Manneul</p>
      <input type="checkbox" id="switch" class="checkbox" />

      <label for="switch" class="toggle">
        <p></p>
      </label>

      <p>Annuel</p>
    </div>
  );
};

export default SwitchToggle;
