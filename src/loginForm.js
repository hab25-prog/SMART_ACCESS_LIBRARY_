import React, { useState } from "react";

const LoginForm = ({ handlLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Logging in with\nEmail: ${email}\nPassword: ${password}`);
    if (email === "" || password === "") return;
    handlLogin();
  };

  return (
    <main className="main">
      <h1 className="title">Log In</h1>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          autoComplete="username"
        />

        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          autoComplete="current-password"
        />

        <button type="submit" className="button">
          Log In
        </button>
      </form>
      <p className="register-text">
        Don’t have an account?{" "}
        <a href="/register" className="register-link">
          Register
        </a>
      </p>
    </main>
  );
};

export default LoginForm;
