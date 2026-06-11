import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();
  const username = localStorage.getItem("loginId");
  const role = localStorage.getItem("role");


  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      welcome to dashboard, {username}!
      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;