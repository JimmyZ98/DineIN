import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute h-full w-full rounded-2xl bg-hero-image bg-cover bg-center"></div>
      <div className="h-full w-full backdrop-filter backdrop-blur backdrop-brightness-50 flex flex-col justify-center items-center">
        <img src={logo} alt="logo" width="300" className="rounded-full" />
        <div className="flex">
          <Link to="/menu">Order Now</Link>
          <button>Call Waiter</button>
        </div>
      </div>
    </div>
  );
}
