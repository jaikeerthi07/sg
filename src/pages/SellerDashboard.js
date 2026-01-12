import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function SellerDashboard() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Seller Dashboard</h2>

      <div className="row mt-4">
        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <h6>Total Products</h6>
            <h4>24</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <h6>Total Orders</h6>
            <h4>112</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <h6>Pending Orders</h6>
            <h4>8</h4>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <h6>Total Revenue</h6>
            <h4>₹ 2,45,000</h4>
          </div>
        </div>
      </div>

      <hr className="my-4" />

      <h4>Add New Product</h4>

      <div className="row">
        <div className="col-md-4">
          <input className="form-control mb-2" placeholder="Product Name" />
        </div>
        <div className="col-md-4">
          <input className="form-control mb-2" placeholder="Category" />
        </div>
        <div className="col-md-4">
          <input className="form-control mb-2" placeholder="Price" />
        </div>
      </div>

      <button className="btn btn-success mt-2">Add Product</button>

      <button className="btn btn-danger mt-4 ms-3" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
