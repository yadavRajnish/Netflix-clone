import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/Netflix-Logo-White-17-1024x277.png";
import { BsSearch, BsList } from "react-icons/bs";

const Navbar = () => {
  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);

  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!isBurgerOpen);
  };

  return (
    <div>
      <div className="bg-main sticky top-0 z-20">
        <div className="bg-main justify-between items-center gap-10 lg:grid px-2 py-5 mx-auto container grid-cols-7 grid">
          <div className="col-span-2 lg:block hidden ">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="h-9 ps-4 w-fit" />
            </Link>
          </div>
          <div className="col-span-2 text-white hidden xl:gap-12 2xl:gap-18 justify-between lg:flex xl:justify-start items-center">
            <div className="flex gap-10">
              <NavLink to="/" className={Hover}>
                Home
              </NavLink>
              <NavLink to="/movies" className={Hover}>
                Movies
              </NavLink>
              <NavLink to="/contact" className={Hover}>
                Contact
              </NavLink>
              <NavLink to="/login" className={Hover}>
                Login
              </NavLink>
            </div>
          </div>

          <div className="col-span-3 flex justify-between w-[100vw] items-center pr-10">
            {/* Burger icon on the left */}
            <div className="lg:hidden">
              <BsList
                onClick={toggleBurger}
                className="text-white text-2xl cursor-pointer"
              />
            </div>

            {isBurgerOpen && (
              <div className="flex flex-col mt-4 gap-4">
                <NavLink to="/" className={Hover}>
                  Home
                </NavLink>
                <NavLink to="/movies" className={Hover}>
                  Movies
                </NavLink>
                <NavLink to="/contact" className={Hover}>
                  Contact
                </NavLink>
                <NavLink to="/login" className={Hover}>
                  Login
                </NavLink>
              </div>
            )}
            {/* Search icon on the right */}
            <div className="flex justify-end w-[25vw] pr-2 md:pr-10">
              <NavLink to="/search" className="text-red-500 text-2xl">
                <BsSearch />
              </NavLink>
            </div>

            {/* Burger menu */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
