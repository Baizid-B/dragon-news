import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center  bg-gray-300 px-4 py-2 ">
            <p className="bg-[#D72050] text-white font-semibold px-4 py-2">Latest</p>
            <Marquee pauseOnHover={true} className="flex flex-row gap-4">
                <NavLink to='/'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, delectus?1</NavLink>
                <NavLink to='/'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, delectus?2</NavLink>
                <NavLink to='/'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, delectus?3</NavLink>
                <NavLink to='/'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, delectus?4</NavLink>
            </Marquee>
        </div>
    );
};

export default LatestNews;