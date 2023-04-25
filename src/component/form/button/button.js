import React from "react";
import "./button.scss";

function Button(props) {
   return (
      <button
         className={`button ${`button-${props.class}`}`}
         style={{ width: props.width }}
      >
         {props.text}
      </button>
   );
}

function Social(props) {
   return (
      <a href={props.link} className={`social`}>
         <i className="social__icon">i</i>
      </a>
   );
}

// <ButtonBlue text="Search" width="200px" class="blue" />
// <Social name = "instagram" link = "https//"
export {Button, Social};
