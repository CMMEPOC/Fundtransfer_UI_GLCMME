import { BrowserRouter, Routes, Route }
  from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword.js";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard.js";
import AdminDashboard from "./pages/AdminDashboard.js";
import UserDashboard from "./pages/UserDashboard.js";
import TransactionStatus from "./pages/TransactionStatus.js";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute allowedRoles={["ROLE_USER"]}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transaction-status"
          element={<TransactionStatus />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;