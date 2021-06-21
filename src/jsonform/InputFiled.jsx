import React from "react";

function InputFiled(props) {
  console.log(props);
  return (
    <div>
      <div class="input-div">
        <label>{props.labledata}</label>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          required={props.required}
          onChange={props.handleChange}
        
        />
      </div>
    </div>
  );
}

export default InputFiled;



