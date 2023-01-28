import React, { useState } from "react";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      localStorage.setItem("token", "Access_token");
      navigate("/movielist");
    } else {
      alert("Please Enter valid credential");
      navigate("/");
    }
  };
  return (
    <div className="login">
      <div className="heading">
        <h1>Login</h1>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="UserName"
          value={username}
          onChange={handleUsername}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <div className="input-container">
        <button type="submit" onClick={handleSubmit} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
