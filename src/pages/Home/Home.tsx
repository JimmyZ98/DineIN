import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BsFillBellFill } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md";

export default function Home() {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute h-full w-full rounded-2xl bg-hero-image bg-cover bg-center"></div>
      <div className="h-full w-full backdrop-filter backdrop-blur backdrop-brightness-50 flex flex-col justify-center items-center">
        <img src={logo} alt="logo" width="300" className="rounded-full" />
        <div className="flex space-x-5 pb-20">
          <Link to="/menu" className="home-button">
            <div className="h-20">
              <MdRestaurantMenu size={20} />
            </div>
            <span className="text-xs">ORDER NOW</span>
          </Link>
          <button className="home-button">
            <div className="h-20">
              <BsFillBellFill />
            </div>
            <span className="text-xs">CALL WAITER</span>
          </button>
        </div>
      </div>
    </div>
  );
}
