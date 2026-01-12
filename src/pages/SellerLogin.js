import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SellerLogin() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login("seller");
    navigate("/seller-dashboard");
  };

  return (
    <div className="col-md-4 mx-auto">
      <h3 className="mb-3">Seller Login</h3>

      <input className="form-control mb-2" placeholder="Seller Email" />
      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
      />

      <button className="btn btn-warning w-100" onClick={handleLogin}>
        Login as Seller
      </button>
    </div>
  );
}
