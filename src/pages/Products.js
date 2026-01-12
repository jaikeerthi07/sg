import { useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const allProducts = [
    {
      id: 1,
      name: "Classic Leather Wallet",
      price: 899,
      category: "Wallets",
      image: "/img/wall.jpg"
    },
    {
      id: 2,
      name: "Premium Leather Belt",
      price: 1299,
      category: "Belts",
      image: "/img/belt.jpg"
    },
    {
      id: 3,
      name: "Handcrafted Leather Shoes",
      price: 3499,
      category: "Shoes",
      image: "/img/shoe.jpg"
    },
    {
      id: 4,
      name: "Leather Travel Bag",
      price: 4999,
      category: "Bags",
      image: "/img/hb-z1.jpg"
    }
  ];

  const categories = ["All", "Wallets", "Belts", "Shoes", "Bags"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("");

  const filteredProducts = allProducts
    .filter(p =>
      selectedCategory === "All" ? true : p.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  return (
    <>
      {/* ================= PRODUCTS PAGE CSS ================= */}
      <style>{`
        :root {
          --leather-dark: #3b1f0e;
          --leather-brown: #8b4513;
          --leather-gold: #f4a261;
        }
        /* ===== PRODUCTS BANNER FIX ===== */
.products-banner {   
  width: 100vw;
  height:35vh;
  background-image: url("/img/new.jpg");  
   background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  margin-left: calc(-50vw + 50%);
}

/* Dark overlay */
.products-overlay {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(0,0,0,0.55),
    rgba(0,0,0,0.55)
  );
  display: flex;
  align-items: center;
}

/* Text */
.products-banner h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
}

.products-banner p {
  color: #eee;
  margin-top: 10px;
  max-width: 500px;
}

/* Responsive */
@media (max-width: 768px) {
  .products-banner {
    height: 35vh;
  }

  .products-banner h1 {
    font-size: 2rem;
  }
}

        /* Filters */
        .filter-box {
          background: #fff;
          padding: 20px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .filter-btn {
          border-radius: 30px;
          margin-bottom: 10px;
        }

        /* Product Cards */
        .product-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
          transition: 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-6px);
        }

        .product-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .product-body {
          padding: 18px;
          text-align: center;
        }

        .product-body h6 {
          font-weight: 600;
        }

        .price {
          color: var(--leather-brown);
          font-weight: 600;
        }

        .btn-leather {
          background: linear-gradient(
            135deg,
            var(--leather-brown),
            var(--leather-gold)
          );
          color: #fff;
          border: none;
          border-radius: 30px;
          padding: 8px 20px;
        }

        .btn-leather:hover {
          opacity: 0.9;
          color: #fff;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .filter-box {
            margin-bottom: 20px;
          }
        }
      `}</style>

     {/* ================= PRODUCTS BANNER ================= */}
<section className="products-banner">
  <div className="products-overlay">
    <div className="container">
      <h1>Our Leather Products</h1>
      <p>Explore premium handcrafted leather collections</p>
    </div>
  </div>
</section>


      {/* ================= FILTER + PRODUCTS ================= */}
      <div className="container">
        <div className="row">
          {/* FILTERS */}
          <div className="col-md-3">
            <div className="filter-box">
              <h6 className="mb-3">Categories</h6>

              {categories.map(cat => (
                <button
                  key={cat}
                  className={`btn btn-sm w-100 filter-btn ${
                    selectedCategory === cat
                      ? "btn-dark"
                      : "btn-outline-dark"
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}

              <hr />

              <h6 className="mb-2">Sort by Price</h6>
              <select
                className="form-select"
                onChange={e => setSortOrder(e.target.value)}
              >
                <option value="">Default</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="col-md-9">
            <div className="row">
              {filteredProducts.map(p => (
                <div className="col-md-4 mb-4" key={p.id}>
                  <div className="product-card">
                    <img src={p.image} alt={p.name} />
                    <div className="product-body">
                      <h6>{p.name}</h6>
                      <small className="text-muted">{p.category}</small>
                      <p className="price mt-2">₹ {p.price}</p>
                      <Link
                        to={`/product/${p.id}`}
                        className="btn btn-leather btn-sm"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {filteredProducts.length === 0 && (
                <p>No products found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
