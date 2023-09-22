import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdMenuBook } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { RiFileList3Fill } from "react-icons/ri";

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-amber-500 z-10">
      <div className="flex">
        <Link to="/" className="nav-button">
          <AiFillHome />
          <span className="text-xs">HOME</span>
        </Link>
        <Link to="/menu" className="nav-button">
          <MdMenuBook />
          <span className="text-xs">MENU</span>
        </Link>
        <Link to="/cart" className="nav-button">
          <FaCartShopping />
          <span className="text-xs">CART</span>
        </Link>
        <Link to="/myorder" className="nav-button">
          <RiFileList3Fill />
          <span className="text-xs">ORDER</span>
        </Link>
      </div>
    </nav>
  );
}
