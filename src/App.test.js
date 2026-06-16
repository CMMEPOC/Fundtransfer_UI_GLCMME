import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./pages/Login", () => () => <div>Login Page</div>);
jest.mock("./pages/ForgotPassword", () => () => <div>Forgot Password Page</div>);
jest.mock("./pages/UserDashboard", () => () => <div>User Dashboard</div>);
jest.mock("./pages/AdminDashboard", () => () => <div>Admin Dashboard</div>);
jest.mock("./pages/TransactionStatus", () => () => <div>Transaction Status</div>);
jest.mock("./components/ProtectedRoute", () => ({ children }) => children);

describe("App", () => {
  test("renders login page", () => {
    render(<App />);

    expect(screen.getByText("Login Page")).toBeInTheDocument();
  });
});