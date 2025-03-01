import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-black text-white w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <IoMenu className="h-6 w-6 mr-4 lg:hidden" />
            <Link to="/" className="text-2xl font-bold">
              MB
            </Link>
          </div>
          <nav className="hidden lg:flex space-x-8">
            <Link to="/new-in" className="hover:text-red-500">
              New In
            </Link>
            <Link to="/men" className="hover:text-red-500">
              Men
            </Link>
            <Link to="/women" className="hover:text-red-500">
              Women
            </Link>
            <Link to="/kids" className="hover:text-red-500">
              Kids
            </Link>
            <Link to="/brands" className="hover:text-red-500">
              Brands
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <IoSearchSharp className="h-6 w-6" />
            <LuShoppingBag className="h-6 w-6" />
          </div>
        </div>
      </div>
    </header>
  );
};
