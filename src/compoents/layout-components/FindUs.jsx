import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

const FindUs = () => {
    return (
        <div>
            <h1 className="font-semibold mb-5">Find Us On</h1>

            <div>
                <div className="join flex join-vertical *:bg-base-100 rounded-none">
                    <button className="btn join-item justify-start"> <FaFacebook className="text-blue-500"></FaFacebook> Facebook</button>
                    <button className="btn join-item justify-start"> <FaXTwitter className=""></FaXTwitter> X</button>
                    <button className="btn join-item justify-start"> <FiInstagram className="text-red-500"></FiInstagram> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;