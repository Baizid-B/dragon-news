import { Outlet } from "react-router-dom";
import Navbar from "../compoents/Navbar";


const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[#f3f3f3]">
            <header className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;