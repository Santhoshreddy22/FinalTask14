import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <span className="hero-badge">
            ✨ WELCOME TO SHOPSPHERE
          </span>

          <h1>
            Shop Smarter.
            <br />
            Live Better.
          </h1>

          <p>
            Discover quality products, amazing prices,
            and a seamless shopping experience designed
            for you.
          </p>

          <div className="hero-buttons">

            <Link
              to="/products"
              className="primary-btn"
            >
              Start Shopping →
            </Link>

            <Link
              to="/categories"
              className="secondary-btn"
            >
              Explore Categories
            </Link>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-circle">
            🛍️
          </div>

          <h2>ShopSphere</h2>

          <p>
            Everything you need.
          </p>

        </div>

      </section>

      <section className="features">

        <div className="feature-card">
          <div>🚚</div>
          <h3>Fast Delivery</h3>
          <p>
            Quick and reliable delivery.
          </p>
        </div>

        <div className="feature-card">
          <div>🔒</div>
          <h3>Secure Payment</h3>
          <p>
            Safe and secure transactions.
          </p>
        </div>

        <div className="feature-card">
          <div>↩️</div>
          <h3>Easy Returns</h3>
          <p>
            Hassle-free return experience.
          </p>
        </div>

        <div className="feature-card">
          <div>💬</div>
          <h3>24/7 Support</h3>
          <p>
            We're always here to help.
          </p>
        </div>

      </section>

      <section className="why-section">

        <span className="small-title">
          WHY SHOPSPHERE?
        </span>

        <h2>
          Everything you need,
          <br />
          all in one place.
        </h2>

        <div className="why-grid">

          <div>
            <span>01</span>
            <h3>Quality First</h3>
            <p>
              We bring together products that
              offer excellent quality and value.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Simple Experience</h3>
            <p>
              Search, explore, add to cart and
              shop without unnecessary complexity.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Made for Everyone</h3>
            <p>
              A responsive shopping experience
              across desktop, tablet and mobile.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;