import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdRestaurantMenu } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { RiFileList3Fill } from "react-icons/ri";

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-amber-400">
      <div className="flex">
        <div className="nav-button">
          <AiFillHome />
          <a>Home</a>
        </div>
        <div className="nav-button">
          <MdRestaurantMenu />
          <a>Menu</a>
        </div>
        <div className="nav-button">
          <FaCartShopping />
          <a>Cart</a>
        </div>
        <div className="nav-button">
          <RiFileList3Fill />
          <a>My Order</a>
        </div>
      </div>
    </nav>
  );
}
