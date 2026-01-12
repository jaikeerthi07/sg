export default function TrackOrder() {
  return (
    <>
      <h2>Track Your Order</h2>

      <input className="form-control mb-2" placeholder="Enter Order ID" />
      <button className="btn btn-dark">Track</button>

      <div className="alert alert-info mt-3">
        Order Status: Dispatched 🚚
      </div>
    </>
  );
}
