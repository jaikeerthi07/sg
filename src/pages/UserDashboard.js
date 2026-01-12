import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function UserDashboard() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h2>User Dashboard</h2>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>My Orders</h5>
            <p>View your order history</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Profile</h5>
            <p>Manage your account details</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Saved Addresses</h5>
            <p>Manage delivery addresses</p>
          </div>
        </div>
      </div>

      <button className="btn btn-danger mt-4" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
