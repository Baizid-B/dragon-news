import { Link, useLoaderData } from "react-router-dom";
import Header from "../compoents/Header";
import RightNavBar from "../compoents/layout-components/RightNavBar";
import { FaArrowLeftLong } from "react-icons/fa6";


const NewsDetails = () => {

    const data = useLoaderData();
    const news = data.data[0];
    console.log(news);

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-4">
                <section className="col-span-9 mx-auto md:mx-0">

                    <div><h2 className="font-semibold">Dragon News</h2></div>
                    
                    {/* card design */}

                    <div className="card bg-base-100 shadow-xl my-3 border">
                        <figure className="px-6 pt-6">
                            <img
                            src={news?.image_url}
                            alt="Shoes"
                            className="w-full rounded-xl" />
                        </figure>

                        <div className="card-body text-left pl-6">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news ?.details}</p>
                            <div className="card-actions mt-6">
                                <Link to={`/category/${news ?.category_id}`} className="btn btn-success text-white !font-semibold"> <FaArrowLeftLong></FaArrowLeftLong> All news in this category</Link>
                            </div>
                        </div>
                    </div>


                </section>

                <aside className="col-span-3 mx-auto md:mx-0">
                    <RightNavBar></RightNavBar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;