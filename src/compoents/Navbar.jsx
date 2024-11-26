import { Link, NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className="flex flex-row justify-between items-center py-4">
            <div>
                {user&& user.email}
            </div>

            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/Career'>Career</Link>
                <Link to='/About'>About</Link>
            </div>

            <div className="login ">
                <div className="flex gap-6 items-center">
                    <div>
                        <img className="rounded-full" src={userIcon} alt="" />
                    </div>
                    {
                        user && user?.email? <NavLink onClick={logOut} to='/auth/login' className="btn btn-neutral rounded-none">Log Out</NavLink> : <NavLink to='/auth/login' className="btn btn-neutral rounded-none">Login</NavLink>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;