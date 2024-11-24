// import { useParams } from "react-router-dom";

// const Category = () => {
//   const { category_id } = useParams();

//   return (
//     <div>
//       <h1>Category: {category_id}</h1>
//       <p>Display category details dynamically here...</p>
//     </div>
//   );
// };

// export default Category;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const Category = () => {
//   const { category_id } = useParams(); // URL theke category_id ber kora
//   const [data, setData] = useState(null);

//     useEffect(() => {
//     // API call or data fetch based on category_id
//     fetch(`https://openapi.programming-hero.com/api/news/categorieshttps://openapi.programming-hero.com/api/news/category/${category_id}`)
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, [category_id]);

//   if (!data) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>Category: {data.name}</h1>
//       <p>{data.description}</p>
//     </div>
//   );
// };

// export default Category;

