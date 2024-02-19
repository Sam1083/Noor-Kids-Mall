import React from "react";


const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    
     window.location.href = "/login";
  };

  return (
    <>
      <h1 className="text-center text-blue-500 bg-black text-4xl">Home</h1>
      <div className="flex justify-center mt-4">
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </>
  );
};

export default Home;
