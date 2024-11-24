import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import FindUs from "./FindUs";

const RightNavBar = () => {
    return (
        <div>
            <div className="mb-10">
                <h1 className="font-semibold mb-3">Login With</h1>
                <div className="flex flex-col gap-2">
                    <button className="btn btn-outline"> <FaGoogle></FaGoogle> Login With Google</button>
                    <button className="btn btn-outline "> <FaGithub></FaGithub> Login With GitHub</button>
                </div>
            </div>

            <div>
                <FindUs></FindUs>
            </div>
        </div>
    );
};

export default RightNavBar;