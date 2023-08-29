import React from "react";

const Loader = (props) => {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
};

export default Loader;