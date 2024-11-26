import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {

    const {userLogin, setUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error ,setError] = useState({})


    const handleSubmit = (e) =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        userLogin(email, password)
        .then((result) => {
            const user = result.user;
            setUser(user)
            navigate(location?.state? location.state : '/')
        })
        .catch((err) =>{
            setError({...error, login:error.code})
        })
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
                <h1 className="text-2xl font-semibold text-center">Login your account</h1>
                
                <form onSubmit={handleSubmit} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>

                    <div className="text-center mt-4">
                        <p>Don't have a account ? <NavLink to='/auth/register' className='text-red-700'>Register</NavLink></p>
                    </div>

                    <div>
                        {
                            error.login && <label className="label"> {error.login} </label>
                        }
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default Login;