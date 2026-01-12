import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* ================== HOME PAGE CSS ================== */}
      <style>{`
        /* ---------- BRAND COLORS ---------- */
        :root {
          --leather-dark: #3b1f0e;
          --leather-brown: #8b4513;
          --leather-gold: #f4a261;
          --leather-bg: #faf7f2;
        }/* ===== HERO BANNER FIX ===== */
.hero-banner {
  width: 100vw;
  height: 80vh;
  background-image: url("/img/new.jpg"); 
   background-color: #f4a261;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  margin-left: calc(-50vw + 50%);
}

/* Dark overlay for text readability */
.hero-overlay {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(0,0,0,0.55),
    rgba(0,0,0,0.55)
  );
  display: flex;
  align-items: center;
}

/* Text styling */
.hero-banner h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
}

.hero-banner p {
  color: #eee;
  max-width: 520px;
  margin: 20px 0;
}

/* Button */
.btn-leather {
  background: linear-gradient(135deg, #8b4513, #f4a261);
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 500;
}
        /* ---------- SECTION HEADINGS ---------- */
        .section-title {
          font-weight: 600;
          color: var(--leather-dark);
          margin-bottom: 40px;
          text-align: center;
        }

        /* ---------- CATEGORIES ---------- */
        .category-card {
          background: #fff;
          border-radius: 18px;
          padding: 35px 20px;
          text-align: center;
          transition: 0.3s ease;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }

        .category-card:hover {
          transform: translateY(-8px);
        }

        .category-card h5 {
          margin-top: 15px;
          font-weight: 600;
        }

        /* ---------- FEATURED PRODUCTS ---------- */
        .product-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
          transition: 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-8px);
        }

        .product-card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
        }

        .product-card-body {
          padding: 20px;
          text-align: center;
        }

        .price {
          font-weight: 600;
          color: var(--leather-brown);
        }

        /* ---------- RESPONSIVE ---------- */
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}
<section className="hero-banner">
  <div className="hero-overlay">
    <div className="container">
      <h1>Premium Leather Collection</h1>
      <p>
        Handcrafted leather wallets, bags, belts & shoes made with
        tradition, quality and timeless elegance.
      </p>
      <button className="btn btn-leather">Shop Now</button>
    </div>
  </div>
</section>

      {/* ================== CATEGORIES ================== */}
      <section className="container my-5">
        <h2 className="section-title">Shop by Category</h2>

        <div className="row">
          {["Wallets", "Belts", "Shoes", "Bags"].map((cat, i) => (
            <div className="col-md-3 col-sm-6 mb-4" key={i}>
              <div className="category-card">
                <h5>{cat}</h5>
                <p className="text-muted mt-2">Premium Leather</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================== FEATURED PRODUCTS ================== */}
      <section className="container my-5">
        <h2 className="section-title">Featured Products</h2>

        <div className="row">
          {[
            {
              name: "Classic Leather Wallet",
              price: "₹ 899",
              img: "/img/wall.jpg"
            },
            {
              name: "Premium Leather Belt",
              price: "₹ 1299",
              img: "/img/belt.jpg"
            },
            {
              name: "Handcrafted Leather Shoes",
              price: "₹ 3499",
              img: "/img/shoe.jpg"
            }
          ].map((p, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="product-card">
                <img src={p.img} alt={p.name} />
                <div className="product-card-body">
                  <h6>{p.name}</h6>
                  <p className="price">{p.price}</p>
                  <Link to="/products" className="btn btn-leather btn-sm">
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
