/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const [search, setSearch] = useState()
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const cartItems = useSelector((state) => state.cart.cartItems);
 

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true)
  }
  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true)
  }

  // filter functionality
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search))
    navigate('/filter-data')
  }

  return <nav className="bg-white shadow-md">
    <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
      <div className="text-lg font-bold">
        <Link to={"/"}>JCPenney</Link>
      </div>
      <div className="relative flex-1 mx-4">
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="Search Product" className="w-full rounded-md border py-2 px-4"onChange={(e) => setSearch(e.target.value)} />
          <FaSearch className="absolute top-3 right-3 text-red-600" />
        </form>
      </div>
      <div className="flex items-center space-x-4 relative">
        <Link to={"/cart"}><FaShoppingCart className="text-xl" />
        {cartItems && cartItems.length > 0 && <span className="absolute bottom-3 left-4 inline-flex justify-center items-center w-5 h-5 rounded-full text-xs font-medium bg-red-500 text-white">{cartItems.length}</span>}
        </Link>
        <div className="px-4">
          <button className="hidden md:block" onClick={() => setIsModelOpen(true)}>Login | Register</button>
          <button className="block md:hidden"><FaUser /></button>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
      <Link to={"/"} className="hover:underline">Home</Link>
      <Link to={"/shop"} className="hover:underline">Shop</Link>
      <Link to={"/"} className="hover:underline">Contact</Link>
      <Link to={"/"} className="hover:underline">About</Link>
    </div>
    <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} children={isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />} />
  </nav>;
};

export default Navbar;
