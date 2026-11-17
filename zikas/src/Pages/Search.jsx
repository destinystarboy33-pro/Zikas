
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const searchValue = search.trim();

    // Don't make an API request when search is empty
    if (!searchValue) return;

    const controller = new AbortController();

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");
        setProducts([]);

        const response = await axios.get(
          "https://zikas.onrender.com/product/search",
          {
            params: { search: searchValue },
            signal: controller.signal
          }
        );

        setProducts(response.data.products || []);

      } catch (err) {
        if (!controller.signal.aborted) {
          console.log(err);
          setError("Unable to search products. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 400);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };

  }, [search]);

  return (
    <div className="min-h-screen bg-white">

      <main className="max-w-7xl mx-auto px-5 md:px-10">

        {/* SEARCH INPUT */}
        <section className="pb-12">

          <button
            onClick={() => navigate(-1)}
            className="w-11 h-11 border border-gray-200 rounded-full flex items-center justify-center transition hover:bg-gray-100"
            aria-label="Go back"
          >
            <i className="fa-solid fa-arrow-left text-xl" />
          </button>

          <div className="max-w-5xl mx-auto">

            <div className="flex items-center gap-3 border border-gray-200 rounded-full px-5 py-3 md:px-7 md:py-4 shadow-sm focus-within:border-orange-500 focus-within:shadow-md transition">

              <i className="fa-solid fa-magnifying-glass text-xl text-gray-500" />

              <input
                type="text"
                placeholder="Search for shoes, bags, clothing..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
                className="flex-1 min-w-0 outline-none text-base md:text-lg bg-transparent"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="text-gray-400 hover:text-black"
                  aria-label="Clear search"
                >
                  <i className="fa-solid fa-xmark text-lg" />
                </button>
              )}

              <button
                type="button"
                aria-label="Search"
                className="hidden sm:flex w-12 h-12 rounded-full bg-black text-white items-center justify-center hover:bg-orange-500 transition"
              >
                <i className="fa-solid fa-arrow-right" />
              </button>

            </div>
          </div>

        </section>

        {/* SEARCH RESULTS */}
        <section className="border-t border-gray-200 pt-9 pb-16">

          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">

            <h2 className="text-2xl font-black">
              Search Results
            </h2>

            {search.trim() && !loading && (
              <p className="text-sm text-gray-500">
                {products.length} results for{" "}
                <span className="text-orange-500 font-semibold">
                  "{search}"
                </span>
              </p>
            )}

          </div>

          {!search.trim() ? (

            <div className="py-16 text-center">
              <i className="fa-solid fa-bag-shopping text-4xl text-gray-300" />

              <h3 className="text-xl font-bold mt-5">
                What are you looking for?
              </h3>

              <p className="text-gray-500 mt-2">
                Enter a product name to explore our collection.
              </p>
            </div>

          ) : loading ? (

            <div className="py-20 text-center">
              <i className="fa-solid fa-spinner fa-spin text-3xl text-orange-500" />

              <p className="text-gray-500 mt-4">
                Finding your products...
              </p>
            </div>

          ) : error ? (

            <div className="py-20 text-center">
              <p className="text-red-500">{error}</p>
            </div>

          ) : products.length === 0 ? (

            <div className="py-20 text-center">
              <i className="fa-solid fa-magnifying-glass text-4xl text-gray-300" />

              <h3 className="text-xl font-bold mt-5">
                No products found
              </h3>

              <p className="text-gray-500 mt-2">
                Try another product name.
              </p>
            </div>

          ) : (

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

              {products.map((product) => (
                <Link
                  to={`/productdetails/${product._id}`}
                  key={product._id}
                  className="group"
                >

                  <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-[4/5]">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />

                  </div>

                  <div className="pt-4">

                    <h3 className="font-bold text-sm md:text-base text-gray-900 group-hover:text-orange-500 transition">
                      {product.name}
                    </h3>

                    <p className="font-bold text-base mt-2">
                      ₦{Number(product.amount).toLocaleString("en-NG")}
                    </p>

                  </div>

                </Link>
              ))}

            </div>

          )}

        </section>

      </main>

    </div>
  );
};

export default Search;
