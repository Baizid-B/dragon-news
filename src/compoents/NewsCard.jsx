import { LuBookmark } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { BsShareFill, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {others_info,rating,total_view,title,author,thumbnail_url,details,} = news || {};

  return (
    <div className="card bg-white shadow-xl rounded-lg border border-gray-200 mb-4">
      <div className="p-4">

        {/* Author Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h3 className="text-sm font-semibold">{author.name}</h3>
              <p className="text-xs text-gray-500">{author.published_date}</p>
            </div>
          </div>
          <div className="flex flex-row">
            
            <div>
              <button className="btn btn-ghost text-black">
                <LuBookmark size={18} />
              </button>
            </div>

            <div>
              <button className="btn btn-ghost text-black">
                <BsShareFill size={18} />
              </button>
            </div>

          </div>
        </div>

        {/* Thumbnail */}
        <img src={thumbnail_url} alt={title}
          className="w-full bg-cover rounded-lg mb-4"
        />

        {/* Title */}
        <h2 className="text-lg font-bold mb-2">{title}</h2>

        {/* Details */}
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
            {details.slice(1, 150)}...{" "}
            <Link to={`/news/${news._id}`} className="text-primary font-semibold">Read More</Link>
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Ratings */}
            <div className="flex items-center text-yellow-500 mr-2">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
            </div>
            <p className="text-sm text-gray-600">{rating.number}</p>
          </div>
          <div className="flex items-center text-gray-500">
            <FaRegEye className="mr-2" />
            <Link>{total_view}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;