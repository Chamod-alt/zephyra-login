import React from "react";
import { useLocation } from "react-router-dom";

const Welcome = () => {
  const location = useLocation();
  const name = location.state?.name || "User";

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Welcome, {name}!</h1>
      <p>You have successfully logged in to test.</p>
      <p>You have successfully logged main.</p>
    </div>
  );
};

export default Welcome;
