import React from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import home from "../assets/icons/HomeB.svg";


const Home = () => {
  return (
    <div className="bg-sombre">
      <Navbar />
      <div className="flex justify-center items-center h-screen  ">
        <img
          src={home}
          alt=""
          className="w-[600px] absolute z-0 top-60 mx-[20%]"
        />
        <div className="z-30 absolute flex w-full justify-center items-center h-screen  px-2">
          <div className="flex flex-col w-[20%] ">
            <button className="bg-primaryGreen p-2 rounded-xl mb-5">
              <Link to="/signup"> Sign up as an business owner</Link>
            </button>
            <button className="text-white border-2 border-primaryGreen  p-2 rounded-xl">
              Sign up as an emplyee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home