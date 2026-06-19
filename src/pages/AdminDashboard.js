import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAccountDetails } from "../api/accountService";
import "./AdminDashboard.css";

function AdminDashboard() {

  const navigate = useNavigate();

  const [account, setAccount] = useState(null);

  useEffect(() => {

    const userId = localStorage.getItem("userId");

    if (!userId) {
      navigate("/");
      return;
    }

    getAccountDetails(userId)
      .then((response) => {
        setAccount(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [navigate]);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (!account) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="admin-container">

      <div className="admin-header">

        <div>
          <h1>
            🏦 {account.bankName}
          </h1>
        </div>

        <div className="admin-user-info">

          <h2>
            Welcome, {account.username}
          </h2>

          <p>
            {JSON.parse(
              localStorage.getItem("roles")
            )?.[0]}
          </p>

        </div>

      </div>

      <div className="maintenance-card">

        <h1>
          🚧 Service Not Available
        </h1>

        <p>
          Admin functionality is not planned
        </p>

      </div>

      <div className="admin-actions">

        <button onClick={logout}>
          Logout
        </button>

      </div>

    </div>
  );
}

export default AdminDashboard;