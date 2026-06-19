import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAccountDetails } from "../api/accountService";
import "./UserDashboard.css";

function UserDashboard() {
  const navigate = useNavigate();

  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      navigate("/");
      return;
    }

    getAccountDetails(userId)
      .then((response) => {
        console.log("Account API Response:", response.data);
        setAccount(response.data);
      })
      .catch((error) => {
        console.error("Account API Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate]);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <h2>Loading account details...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard-container">

      <div className="header">
        <div>
          <h1>
            🏦 {account?.bankName || "Bank Dashboard"}
          </h1>
        </div>

        <div className="user-info">
          <h2>
            Welcome, {localStorage.getItem("username")}
          </h2>

          <p>
            {JSON.parse(localStorage.getItem("roles"))?.[0]}
          </p>
        </div>
      </div>

      <div className="dashboard-cards">

        <div className="card">
          <h3>Available Balance</h3>
          <h1>
            ₹{account?.balance || account?.currentBalance || 0}
          </h1>
        </div>

        <div className="card">
          <h3>Account Number</h3>
          <h1>
            {account?.accountNumber || "N/A"}
          </h1>
        </div>

        <div className="card">
          <h3>IFSC Code</h3>
          <h1>
            {account?.ifsc || account?.ifscCode || "N/A"}
          </h1>
        </div>

        <div className="card">
          <h3>Account Type</h3>
          <h1>
            {account?.accountType || "N/A"}
          </h1>
        </div>

      </div>

      <div className="action-buttons">

        <button>
          Fund Transfer
        </button>

        <button>
          Statement
        </button>

        <button onClick={logout}>
          Logout
        </button>

      </div>

    </div>
  );
}

export default UserDashboard;