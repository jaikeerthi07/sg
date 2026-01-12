export default function Footer() {
  return (
    <>
      {/* ================= FOOTER CSS ================= */}
      <style>{`
        :root {
          --leather-dark: #2a160a;
          --leather-brown: #8b4513;
          --leather-gold: #f4a261;
          --footer-text: #e6e6e6;
        }

        .footer {
          background: linear-gradient(135deg, #2a160a, #4e2a0a);
          color: var(--footer-text);
          padding: 60px 0 0;
          margin-top: 80px;
        }

        .footer h5 {
          color: #fff;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .footer p {
          font-size: 0.9rem;
          line-height: 1.7;
        }

        .footer ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer ul li {
          margin-bottom: 10px;
          font-size: 0.9rem;
        }

        .footer ul li a {
          color: var(--footer-text);
          text-decoration: none;
          transition: 0.3s ease;
        }

        .footer ul li a:hover {
          color: var(--leather-gold);
          padding-left: 5px;
        }

        .footer-brand {
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #fff;
          margin-bottom: 15px;
        }

        .footer-divider {
          border-top: 1px solid rgba(255,255,255,0.15);
          margin: 40px 0 20px;
        }

        .footer-bottom {
          text-align: center;
          font-size: 0.85rem;
          padding: 15px 0;
          background: rgba(0,0,0,0.15);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .footer {
            text-align: center;
          }

          .footer ul li a:hover {
            padding-left: 0;
          }
        }
      `}</style>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* BRAND */}
            <div className="col-md-4 mb-4">
              <div className="footer-brand">Leather Shop</div>
              <p>
                Premium handcrafted leather products inspired by tradition,
                quality and timeless craftsmanship.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div className="col-md-2 mb-4">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><a href="/login">Login</a></li>
              </ul>
            </div>

            {/* CATEGORIES */}
            <div className="col-md-3 mb-4">
              <h5>Categories</h5>
              <ul>
                <li><a href="/products">Wallets</a></li>
                <li><a href="/products">Belts</a></li>
                <li><a href="/products">Shoes</a></li>
                <li><a href="/products">Bags</a></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="col-md-3 mb-4">
              <h5>Contact</h5>
              <p>
                📍 Chennai, Tamil Nadu<br />
                📞 +91 98765 43210<br />
                ✉️ support@leathershop.com
              </p>
            </div>
          </div>

          <div className="footer-divider"></div>

          {/* BOTTOM BAR */}
          <div className="footer-bottom">
            © {new Date().getFullYear()} Leather Shop. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
