import { useContext, useState } from "react";
// import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const {createNewUser, setUser} = useContext(AuthContext);
    const [error , setError] = useState({})

    const hendleSubmit = (e) =>{
        e.preventDefault()

        // get Data
        const form = new FormData(e.target)
        const name = form.get('name')
        if (name.length < 5) {
            setError({...error, name:'must be more then 6 chartacter longer'})
            return;
        }
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(form);
        console.log({name , photo, email , password});

        createNewUser(email,password)
        .then((result) =>{
            const user = result.user;
            setUser(user)
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }


    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
                <h1 className="text-2xl font-semibold text-center">Register your account</h1>
                
                <form onSubmit={hendleSubmit} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" required />
                    </div>

                    {
                        error.name && (
                            <label className="label">
                                <span className="label-text text-red-500">{error.name}</span>
                            </label>
                        )
                    }

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Enter your photo url" name='photo' className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" name='email' className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" required />

                        <label className="label">
                            <div className="flex flex-row gap-2 mt-4">
                                <div>
                                    <input type="checkbox" defaultChecked className="checkbox" />
                                </div>

                                <div>
                                    <p className="font-semibold text-[#706F6F]">Accept Term & Conditions</p>
                                </div>
                            </div>
                        </label>
                    </div>

                    <div className="form-control ">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;