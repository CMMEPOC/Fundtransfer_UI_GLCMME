import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/authService";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loginId || !password) {
      setMessage("Please enter Login ID and Password");
      return;
    }

    try {
      const response = await login(loginId, password);
      const data = response.data;
      localStorage.setItem("accessToken", data.accessToken);
localStorage.setItem("refreshToken", data.refreshToken);

localStorage.setItem("userId", data.user.id);
localStorage.setItem("username", data.user.username);

localStorage.setItem("loginId", data.user.username);
localStorage.setItem("roles", JSON.stringify(data.user.roles));

      setMessage("Login successful");
        const roles = data.user.roles;

    if (roles.includes("ROLE_ADMIN")) {
      navigate("/admin-dashboard");
    } else if (roles.includes("ROLE_USER")) {
      navigate("/user-dashboard");
    } else {
      navigate("/dashboard");
    }

  } catch (error) {
    if (error.response?.status === 401) {
    setMessage("Invalid login ID or password");
    } else {
      setMessage("Something went wrong");
    }
  }
};

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <h2>🏦 Mphasis Banking Login</h2>
          <p>Access your account safely</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">

          <label>Login ID</label>
          <input
            type="text"
            placeholder="Enter your login ID"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>

          <Link to="/forgot-password" className="forgot-link">
            Forgot Password?
          </Link>

          {message && (
            <p
              className={
                message === "Login successful"
                  ? "success-msg"
                  : "error-msg"
              }
            >
              {message}
            </p>
          )}

        </form>

      </div>
    </div>
  );
}

export default Login;
