import { useLoaderData } from "react-router-dom";
import NewsCard from "../compoents/NewsCard";

const CategoryNews = () => {
    const { data: news } = useLoaderData();
    console.log(news)
    return (
        <div>
            <div className="pb-3">
                <h1 className="font-semibold">Dragon News Home</h1>
                {/* <p className="text-sm">({news.length}) Dragon News Home</p> */}
            </div>

            <div className="flex flex-col gap-6">
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;