import React from "react";
import "./style.css";
const LoadingScreen = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>{" "}
    </div>
  );
};

export default LoadingScreen;
