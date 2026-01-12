import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Select Payment Method</h2>

      <div className="card p-3 mb-3">
        <div className="form-check">
          <input className="form-check-input" type="radio" checked readOnly />
          <label className="form-check-label">UPI / Razorpay</label>
        </div>

        <div className="form-check mt-2">
          <input className="form-check-input" type="radio" />
          <label className="form-check-label">Cash on Delivery</label>
        </div>
      </div>

      <button
        className="btn btn-leather"
        onClick={() => navigate("/order-success")}
      >
        Pay Securely
      </button>
    </>
  );
}
