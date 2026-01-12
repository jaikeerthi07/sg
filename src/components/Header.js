import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">SG Leathers</Link>

        <div>
          <Link to="/products" className="btn btn-outline-light me-2">Products</Link>
          <Link to="/wishlist" className="btn btn-outline-light me-2">Wishlist</Link>
          <Link to="/cart" className="btn btn-outline-light me-2">Cart</Link>

          {!user && (
            <>
              <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
              <Link to="/seller-login" className="btn btn-outline-warning">Seller</Link>
            </>
          )}

          {user === "user" && (
            <Link to="/dashboard" className="btn btn-success">Dashboard</Link>
          )}

          {user === "seller" && (
            <Link to="/seller-dashboard" className="btn btn-warning">Seller Panel</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
