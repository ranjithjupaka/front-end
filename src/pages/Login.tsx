import React, { useState } from "react";
import { Link } from "react-router-dom";
import AboutUsBanner from "../components/AboutUsBanner";
import { IMAGE } from "../constent/theme";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email address");
      return;
    }

    // Basic password validation
    if (password === "") {
      setError("Please enter a password");
      return;
    }

    const data = {
      email: email,
      password: password,
    }
    console.log(data)
    const response = await axios.post('http://127.0.0.1:5000/login', data)
    console.log(response)
    alert(response.data)

    // Validation passed
    setError("");
    // Your login logic here...
    alert("Login Successful!");
    // Reset fields after successful login
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage: `url(${IMAGE.home_banner1})`, // Enclose url() in backticks (`) to use template literals
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "400px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h6>Your algo trading success begins here...</h6>
          <h4>Login</h4>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={handleEmailChange}
            required
          />
          <br />
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={handlePasswordChange}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </div>
          {/* Error handling */}
          {error && <p className="text-danger">{error}</p>}
        </form>
      </div>
      {/* <div
        className="main-bnr overlay-black-dark"
        style={{ backgroundImage: `url(${IMAGE.home_banner1})` }}
      ></div> */}
    </>
  );
};

export default Login;
