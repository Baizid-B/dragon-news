import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavBar = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((result) => result.json())
      .then((data) => {
        setCategories(data.data.news_category);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching categories");
        setLoading(false);
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="font-semibold mb-3">All Categories ({categories.length})</h1>

      {/* Loading or Error States */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex flex-col gap-2">
        {/* Map categories only if data is loaded */}
        {!loading && !error && categories.length === 0 ? (
          <p className="text-gray-500">No categories available.</p>
        ) : (
          categories.map((category) => (
            <NavLink
              to={`/category/${category.category_id}`} className={({ isActive }) =>`btn border-none ${isActive ? "bg-gray-300 text-black" : "bg-base-100"}`}
              key={category.category_id}
            >
              {category.category_name}
            </NavLink>
          ))
        )}
      </div>
    </div>
  );
};

export default LeftNavBar;
