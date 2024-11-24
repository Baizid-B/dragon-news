import { Link, NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between items-center py-4">
            <div className=""></div>
            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/Career'>Career</Link>
                <Link to='/About'>About</Link>
            </div>
            <div className="login ">
                <div className="rounded-full flex gap-6 items-center">
                    <div>
                        <img src={userIcon} alt="" />
                    </div>
                    <NavLink to='/auth/login' className="btn btn-neutral rounded-none">Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;