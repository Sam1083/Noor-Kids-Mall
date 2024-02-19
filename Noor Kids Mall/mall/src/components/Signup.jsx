import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "", 
  });

  const { firstName, lastName, email, phone, password, confirmPassword } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password Does not match");
    } else {
      try {
        const response = await axios.post("http://localhost:4000/api/userData", formData);
        alert(response.data.message);
        navigate("/login");
      } catch (error) {
        console.error(error);
      }
    }
  };


  return (
    <div
      className="bg-cover bg-no-repeat bg-center bg-top h-screen flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-3 flex justify-center">
        <div className="bg-white w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-black rounded-3xl p-10 opacity-75 mb-1">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src="" alt="Your Company" />
            <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 mb-10">
              Become a Member
            </h2>
          </div>
          <form onSubmit={onSubmit}>
            <div className="">
              <label htmlFor="firstName" className="form-label">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                autoComplete="given-name"
                className="block w-full py-2.3 px-0 text-sm text-black border-0 border-b-2 appearance-none border-gray-300 focus:border-gray-300 peer"
                id="firstName"
                value={firstName}
                onChange={onChange}
                required
              />
            </div>
            <div className="">
              <label htmlFor="lastName" className="form-label">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                autoComplete="family-name"
                className="block w-full py-2.3 px-0 text-sm text-black border-0 border-b-2 appearance-none border-gray-300 focus:border-gray-300 peer"
                id="lastName"
                value={lastName}
                onChange={onChange}
                required
              />
            </div>
            <div className="">
              <label htmlFor="email" className="form-label">
                Email address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                className="block w-full py-2.3 px-0 text-sm text-black border-0 border-b-2 appearance-none border-gray-300 focus:border-gray-300 peer"
                id="email"
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="">
              <label htmlFor="phone" className="form-label">
                Phone<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                autoComplete="tel"
                className="block w-full py-2.3 px-0 text-sm text-black border-0 border-b-2 appearance-none border-gray-300 focus:border-gray-300 peer"
                id="phone"
                value={phone}
                onChange={onChange}
                required
              />
            </div>
            <div className="">
              <label htmlFor="password" className="form-label">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                className="block w-full py-2.3 px-0 text-sm text-black border-0 border-b-2 appearance-none border-gray-300 focus:border-gray-300 peer"
                id="password"
                value={password}
                onChange={onChange}
                required
              />
            </div>
            <div className="">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                autoComplete="new-password"
                className="block w-full py-2.3 px-0 text-sm text-black border-0 border-b-2 appearance-none border-gray-300 focus:border-gray-300 peer"
                id="confirmPassword"
                value={confirmPassword}
                onChange={onChange}
                required
              />
            </div>
            <div className="flex justify-center my-4 gap-1">
              Already a Member? Click to Login?
              <span className="font-bold text-blue-500 cursor-pointer">
                <Link to="/login">Login</Link>
              </span>
            </div>
            <div className="flex justify-center mt-3">
              <button
                type="submit"
                className="text-2xl w-full max-w-md lg:max-w-lg xl:max-w-xl h-12 rounded-3xl cursor-pointer text-white bg-gray-950">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
