import React, { useContext } from 'react';
import logo from '../../../../assets/images/login/login.svg';
import { AuthContext } from '../../../../Provider/AuthProvider';

const Registration = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegisterbtn = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
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
                <div className="w-1/2 mr-10 p-24">
                    <img src={logo} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegisterbtn} className="card-body">
                        <h1 className="text-3xl font-bold">Registration</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" placeholder="User Name" name='name' className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Register" />
                        </div>
                        <p>Already have an account? Please <a href="/login" className='text-green-500'>Login</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;