/*import React, { useState } from "react";
import api from "../api/axios";
import "./Login.css";
import img from "./ice.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
// coment
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        username: formData.username,
        password: formData.password,
        expiresInMins: 30
      });

     
     const firstName = response.data.firstName;
      navigate("/welcome", { state: { name: firstName } });
    } catch (error) {
      setMessage(" Login failed. Please check credentials.");
    }
  };

  return (
    <div className="login-page">
      <div className="left-panel">
      <nav className="navbar">
        <div className="nav-logo"> Anyware app.</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      
        <form className="login-form" onSubmit={handleSubmit}>
        <p className="message">{message}</p>
        <br />
    
          <h2>Login</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Create account</button>
          <p>Do you have not an account <a href="#">Please Create Account</a></p>

        </form>
      </div>
      <div className="right-panel">
      <svg viewBox="0 0 1 1" preserveAspectRatio="none" className="clip-svg">
  <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
    <path
      d="
        M1,0
        L0.25,0
        C0.15,0.1 0.15,0.2 0.25,0.3
        C0.35,0.4 0.15,0.5 0.25,0.6
        C0.35,0.7 0.15,0.8 0.25,1
        L1,1
        L1,1
        
        Z
      "
    />
  </clipPath>
</svg>

  <img src={img} alt="Mountains" className="clipped-img" />
</div>

    </div>
  );
};

export default Login;
*/

import React, { useState } from "react";
import api from "../api/axios";
import "./Login.css";
import img from "./ice.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
// coment
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        username: formData.username,
        password: formData.password,
        expiresInMins: 30
      });

     
     const firstName = response.data.firstName;
      navigate("/welcome", { state: { name: firstName } });
    } catch (error) {
      setMessage(" Login failed. Please check credentials.");
    }
  };

  return (
    <div className="login-page">
      <div className="left-panel">
      <nav className="navbar">
        <div className="nav-logo"> Anyware app.</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      
        <form className="login-form" onSubmit={handleSubmit}>
        <p className="message">{message}</p>
        <br />
    
          <h2>Login</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password one"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Create account</button>
          <p>Do you have not an account <a href="#">Please Create Account</a></p>

        </form>
      </div>
      <div className="right-panel">
      <svg viewBox="0 0 1 1" preserveAspectRatio="none" className="clip-svg">
  <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
    <path
      d="
        M1,0
        L0.25,0
        C0.15,0.1 0.15,0.2 0.25,0.3
        C0.35,0.4 0.15,0.5 0.25,0.6
        C0.35,0.7 0.15,0.8 0.25,1
        L1,1
        L1,1
        
        Z
      "
    />
  </clipPath>
</svg>

  <img src={img} alt="Mountains" className="clipped-img" />
</div>

    </div>
  );
};

export default Login;