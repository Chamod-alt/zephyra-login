import React from "react";
import { useLocation } from "react-router-dom";

const Welcome = () => {
  const location = useLocation();
  const name = location.state?.name || "User";

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
     <p> welcome to you come</p>
     <h1>here this ie </h1>
    </div>
  );
};

export default Welcome;
