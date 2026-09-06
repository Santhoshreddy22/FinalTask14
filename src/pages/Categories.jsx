import { Link } from "react-router-dom";

function Categories() {

  const categories = [
    {
      name: "electronics",
      title: "Electronics",
      icon: "💻",
      description:
        "Discover technology and electronic essentials.",
    },

    {
      name: "jewelery",
      title: "Jewelry",
      icon: "💎",
      description:
        "Elegant accessories for every occasion.",
    },

    {
      name: "men's clothing",
      title: "Men's Fashion",
      icon: "👔",
      description:
        "Modern clothing for your everyday style.",
    },

    {
      name: "women's clothing",
      title: "Women's Fashion",
      icon: "👗",
      description:
        "Trendy fashion designed for every occasion.",
    },
  ];

  return (
    <section className="categories-page">

      <div className="page-header">

        <span className="small-title">
          DISCOVER
        </span>

        <h1>Shop by Category</h1>

        <p>
          Explore our collection by category.
        </p>

      </div>

      <div className="category-grid">

        {categories.map(category => (

          <Link
            key={category.name}
            to={`/products/category/${encodeURIComponent(
              category.name
            )}`}
            className="category-card"
          >

            <div className="category-icon">
              {category.icon}
            </div>

            <h2>
              {category.title}
            </h2>

            <p>
              {category.description}
            </p>

            <strong>
              Explore →
            </strong>

          </Link>

        ))}

      </div>

      <div className="routing-demo">

        <h2>React Router Features</h2>

        <p>
          This application uses routing,
          nested routing, useParams and
          useSearchParams.
        </p>

      </div>

    </section>
  );
}

export default Categories;