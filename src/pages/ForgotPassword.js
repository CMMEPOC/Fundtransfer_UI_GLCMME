import { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = () => {
    if (!email) {
      setMessage("Please enter your registered email");
      return;
    }

    setLoading(true);

    // simulate API call
    setTimeout(() => {
      setLoading(false);
      setMessage("Password reset link sent to your email");
    }, 1500);
  };

  return (
    <div className="fp-page">

      <div className="fp-card">

        <h2>🔐 Forgot Password</h2>

        <p className="sub-text">
          Enter your registered email and we will send you a reset link
        </p>

        <input
          type="email"
          placeholder="Enter registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleReset} disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        {message && (
          <p className="message">{message}</p>
        )}

      </div>

    </div>
  );
}

export default ForgotPassword;