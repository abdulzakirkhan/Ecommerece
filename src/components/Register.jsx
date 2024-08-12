/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
const Register = ({openLogin}) => {
    return <div>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form>
            <div className="mb-4">
                <label htmlFor="" className="block text-gray-700">Name</label>
                <input type="text" placeholder="Enter Email" className="w-full px-3 py-2 border" />
            </div>
            <div className="mb-4">
                <label htmlFor="" className="block text-gray-700">Email</label>
                <input type="email" placeholder="Enter Email" className="w-full px-3 py-2 border" />
            </div>
            <div className="mb-4">
                <label htmlFor="" className="block text-gray-700">Password</label>
                <input type="password" placeholder="Password" className="w-full px-3 py-2 border" />
            </div>
            <div className="mb-4 flex items-center justify-between">
                <label htmlFor="" className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-gray-700">Remember Me</span>
                </label>
                <a href="" className="text-red-800">Forgot Password?</a>
            </div>
            <div className="mb-4">
                <button type="submit" className="w-full bg-red-600 text-white py-2">Sign Up</button>
            </div>
        </form>
        <div className="text-center">
            <span className="text-gray-700">Allready Have an Account?</span>
            <button className="text-red-800" onClick={openLogin}>Sign In</button>
        </div>
  </div>;
};



export default Register;
