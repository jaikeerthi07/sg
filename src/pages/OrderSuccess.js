import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="text-center">
      <h2>🎉 Order Placed Successfully</h2>
      <p>Your leather product is on the way!</p>

      <Link to="/track-order" className="btn btn-dark mt-3">
        Track Order
      </Link>
    </div>
  );
}
