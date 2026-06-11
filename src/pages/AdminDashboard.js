import { useNavigate } from "react-router-dom";

function AdminDashboard() {

    const navigate = useNavigate();
    const username = localStorage.getItem("loginId");


    const logout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>

            <p>Welcome, {username}!</p>

            <button onClick={logout}>
                Logout
            </button>
        </div>
    );
}

export default AdminDashboard;