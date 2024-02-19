import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


 

const Login = () => {
  const [formData, setFormData] = useState({    
    email: "",
    password: ""
  });

  const { email, password } = formData;
  


  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/userData/login", formData);
      if (response.data.success === true) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
   
      }
    } catch (error) {
      console.error(error);
   
    }
  }
 
  return (
    <div
      className="bg-cover bg-no-repeat bg-center bg-top h-screen flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center">
        <div className="bg-white w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-black rounded-3xl p-10 opacity-75">
          <h1 className="text-4xl flex justify-center items-start">WELCOME</h1>
          <p className="text-center">Login to your account</p>

          <form onSubmit={onSubmit} className="flex flex-col">
            <div className="my-4">
              <label htmlFor="email">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full py-2.3 px-0 text-sm text-black border-0 border-b-2 appearance-none border-gray-300 focus:border-gray-300 peer"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="my-4">
              <label htmlFor="password">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className="block w-full py-2.3 px-0 text-sm text-black border-0 border-b-2 appearance-none border-gray-300 focus:border-gray-300 peer"
                value={password}
                onChange={onChange}
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-1 text-lg">
                <input
                  type="checkbox"
                  name=""
                  id="rememberMe"
                  className="h-5 w-5 mt-1"
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <span className="text-lg">
                {/* <button>
                  <Link to="/forgot-password">Forgot Password?</Link>
                </button> */}
                <Link to="/ForgotPassword" className="text-lg">
                  Forgot Password?
                </Link>
              </span>
            </div>
            <div className="my-6 flex justify-center">
              <button
                type="submit"
                className="hover:transform scale-105 text-2xl text-white bg-black w-full max-w-md lg:max-w-lg xl:max-w-xl h-[50px] rounded-3xl cursor-pointer"
              >
                Login
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-grow border-t border-black"></div>
              <div className="mx-4 text-gray-950 text-sm">Or Login with</div>
              <div className="flex-grow border-t border-black"></div>
            </div>
            <div className="flex justify-center gap-3 mt-3">
              <img
                src="https://img.icons8.com/?size=48&id=118497&format=png"
                alt="Facebook"
                className="h-6 w-6"
              />
              <a
                href="https://web.facebook.com/?_rdc=1&_rdr"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <img
                src="https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png"
                alt="Google"
                className="h-6 w-6"
              />
              <a
                href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjX_suW16-EAxWm_7sIHb3uAn8QPAgJ"
                target="_blank"
                rel="noreferrer"
              >
                Google
              </a>
            </div>
            <div className="flex justify-center items-center mt-9">
              <div className="text-center text-gray-950">
                Don't have an account?
                <span className="font-bold text-blue-500 cursor-pointer">
                  <Link to="/signup">Sign Up</Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
