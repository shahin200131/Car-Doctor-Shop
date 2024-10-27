import React, { useContext } from 'react';
import logo from '../../../assets/images/login/login.svg';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {

    const {loginUser} = useContext(AuthContext);

    const handleLoginbtn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-10 p-24">
                    <img src={logo} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLoginbtn} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-blue-400">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    <div className='text-center mb-5'>
                        <h1>Or Login in with</h1>
                        <div className='flex space-x-6 text-2xl justify-center p-5 '>
                            <FaFacebook></FaFacebook>
                            <FcGoogle />
                            <FaLinkedin></FaLinkedin>
                        </div>
                        <p >Don't have account? Please <a href="/register" className='text-green-500'>Register</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;