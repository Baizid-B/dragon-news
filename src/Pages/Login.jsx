import { NavLink } from "react-router-dom";


const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
                <h1 className="text-2xl font-semibold text-center">Login your account</h1>
                
                <form className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
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
                </form>
            </div>
        </div>
    );
};

export default Login;