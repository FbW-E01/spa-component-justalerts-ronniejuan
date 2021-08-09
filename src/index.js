import React from "react";
import ReactDOM from "react-dom";

const Box = (props) => {
  // if (props.hide === true) {
  //   return null;
  // }

  let type = "primary";
  switch (props.type) {
    case "red":
      type = "danger";
      break;
    case "orange":
      type = "warning";
      break;

    default:
      type = "primary";
  }

  let hideBox;
  if (props.hide) hideBox = "d-none";

  return (
    <div className={`alert alert-${type} ${hideBox}`} role="alert">
      {props.message}
    </div>
  );
};
// ?????

// Do not edit below this line
const jsx = (
  <>
    <Box type="blue" message="Blue box" />
    <Box type="red" message="Red box" />
    <Box type="orange" message="Orange box" />
    <Box hide type="red" message="Hidden box" />
  </>
);
const element = document.getElementById("target");

ReactDOM.render(jsx, element);
