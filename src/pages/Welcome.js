import React from "react";
import { useLocation } from "react-router-dom";

const Welcome = () => {
  const location = useLocation();
  const name = location.state?.name || "User";

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>

     <p> welcome to you come</p>
     <h1>here this ie </h1>

{/*}
      <h1>Welcome, {name}!</h1>
      <p>You have successfully logged in to test.</p>
 //test
       //<p>You have successfully logg to the test not main this .</p>

      <p>You have successfully logged main.</p>
 main
 */}

    </div>
  );
};

export default Welcome;
