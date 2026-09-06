import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  useParams,
  useSearchParams,
} from "react-router-dom";

import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";

function Products() {

  const { categoryName } = useParams();

  const {
    data,
    loading,
    error,
  } = useFetch(
    "https://fakestoreapi.com/products"
  );

  const [searchParams, setSearchParams] =
    useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [category, setCategory] = useState(
    categoryName
      ? decodeURIComponent(categoryName)
      : searchParams.get("category") || "all"
  );

  const searchRef = useRef(null);

  useEffect(() => {

    if (categoryName) {
      setCategory(
        decodeURIComponent(categoryName)
      );
    }

  }, [categoryName]);

  useEffect(() => {

    const params = {};

    if (search) {
      params.search = search;
    }

    if (category !== "all") {
      params.category = category;
    }

    setSearchParams(params);

  }, [
    search,
    category,
    setSearchParams,
  ]);

  const categories = [
    "all",
    ...new Set(
      data.map(product => product.category)
    ),
  ];

  const filteredProducts =
    data.filter(product => {

      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  const focusSearch = () => {
    searchRef.current.focus();
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="error-message">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <section className="products-page">

      <div className="page-header">

        <span className="small-title">
          OUR COLLECTION
        </span>

        <h1>Explore Products</h1>

        <p>
          Find products that match your style,
          needs and budget.
        </p>

      </div>

      <div className="product-controls">

        <div className="search-box">

          <input
            ref={searchRef}
            type="text"
            value={search}
            placeholder="Search products..."
            onChange={e =>
              setSearch(e.target.value)
            }
          />

          <button onClick={focusSearch}>
            🔍
          </button>

        </div>

        <select
          value={category}
          onChange={e =>
            setCategory(e.target.value)
          }
        >

          {categories.map(item => (
            <option
              key={item}
              value={item}
            >
              {item === "all"
                ? "All Categories"
                : item}
            </option>
          ))}

        </select>

      </div>

      <div className="results-info">
        <strong>
          {filteredProducts.length}
        </strong>{" "}
        products found
      </div>

      {filteredProducts.length === 0 ? (

        <div className="empty-state">
          <div>🔎</div>
          <h2>No products found</h2>
          <p>
            Try changing your search or category.
          </p>
        </div>

      ) : (

        <div className="product-grid">

          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      )}

    </section>
  );
}

export default Products;