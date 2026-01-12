import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={product.image}
          alt={product.name}
          className="img-fluid rounded"
        />
      </div>

      <div className="col-md-6">
        <h2>{product.name}</h2>
        <p className="text-muted">{product.category}</p>

        <h3>₹ {product.price * qty}</h3>

        <div className="d-flex align-items-center mb-3">
          <button
            className="btn btn-outline-dark"
            onClick={() => qty > 1 && setQty(qty - 1)}
          >
            -
          </button>
          <span className="mx-3">{qty}</span>
          <button
            className="btn btn-outline-dark"
            onClick={() => setQty(qty + 1)}
          >
            +
          </button>
        </div>

        <button
          className="btn btn-leather me-2"
          onClick={() => {
            addToCart({ ...product, qty });
            navigate("/cart");
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
