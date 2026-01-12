import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + shipping;

  return (
    <>
      {/* ================= CART PAGE CSS ================= */}
      <style>{`
        :root {
          --leather-dark: #3b1f0e;
          --leather-brown: #8b4513;
          --leather-gold: #f4a261;
        }

        .cart-title {
          font-weight: 600;
          margin-bottom: 30px;
          color: var(--leather-dark);
        }

        .cart-card {
          background: #fff;
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }

        .cart-item {
          display: flex;
          gap: 15px;
          padding: 15px 0;
          border-bottom: 1px solid #eee;
        }

        .cart-item:last-child {
          border-bottom: none;
        }

        .cart-item img {
          width: 90px;
          height: 90px;
          object-fit: cover;
          border-radius: 12px;
        }

        .cart-item h6 {
          font-weight: 600;
          margin-bottom: 5px;
        }

        .cart-item-price {
          font-weight: 600;
          color: var(--leather-brown);
        }

        .qty-box {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .qty-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid #ccc;
          background: #fff;
          font-weight: bold;
        }

        .remove-btn {
          background: none;
          border: none;
          color: #dc3545;
          font-size: 0.9rem;
          margin-top: 8px;
        }

        .summary-box {
          background: #fff;
          border-radius: 18px;
          padding: 25px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 0.95rem;
        }

        .summary-total {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--leather-dark);
        }

        .btn-leather {
          background: linear-gradient(
            135deg,
            var(--leather-brown),
            var(--leather-gold)
          );
          color: #fff;
          border: none;
          padding: 12px;
          border-radius: 30px;
          width: 100%;
          font-weight: 500;
        }

        .btn-leather:hover {
          opacity: 0.9;
          color: #fff;
        }

        .empty-cart {
          text-align: center;
          padding: 60px 0;
        }

        @media (max-width: 768px) {
          .cart-item {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="container my-5">
        <h2 className="cart-title">Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h5>Your cart is empty</h5>
            <Link to="/products" className="btn btn-dark mt-3">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="row">
            {/* CART ITEMS */}
            <div className="col-md-8">
              <div className="cart-card">
                {cart.map(item => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />

                    <div className="flex-grow-1">
                      <h6>{item.name}</h6>
                      <p className="cart-item-price">
                        ₹ {item.price * item.qty}
                      </p>

                      <div className="qty-box">
                        <button className="qty-btn">−</button>
                        <span>{item.qty}</span>
                        <button className="qty-btn">+</button>
                      </div>

                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SUMMARY */}
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="summary-box">
                <h5 className="mb-3">Order Summary</h5>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹ {subtotal}</span>
                </div>

                <div className="summary-row">
                  <span>Shipping</span>
                  <span>₹ {shipping}</span>
                </div>

                <hr />

                <div className="summary-row summary-total">
                  <span>Total</span>
                  <span>₹ {total}</span>
                </div>

                <Link to="/address" className="btn btn-leather mt-4">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
