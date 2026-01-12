import { useNavigate } from "react-router-dom";

export default function Address() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Delivery Address</h2>

      <input className="form-control mb-2" placeholder="Full Name" />
      <input className="form-control mb-2" placeholder="Mobile Number" />
      <input className="form-control mb-2" placeholder="Address Line" />
      <input className="form-control mb-2" placeholder="City" />
      <input className="form-control mb-2" placeholder="Pincode" />

      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate("/payment")}
      >
        Continue to Payment
      </button>
    </>
  );
}
