import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login("user");
    navigate("/dashboard");
  };

  return (
    <div className="col-md-4 mx-auto">
      <h3 className="mb-3">User Login</h3>

      <input className="form-control mb-2" placeholder="Email" />
      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
      />

      <button className="btn btn-dark w-100" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
