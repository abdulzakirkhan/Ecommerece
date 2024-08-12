/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noFound } from "../assets/images";
import { FaTrashAlt } from "react-icons/fa";
import { ChangeAddress, Modal } from "../components";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";
import ShowToast from "../components/ShowToast";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const cart = useSelector(state => state.cart)
    const [address, setAddress] = useState('village batara bara hujrah gagra');
    const [isModelOpen, setIsModelOpen] = useState(false);
    // console.log("Cart",cart)

    // remove item from cart
    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id))
        ShowToast("Item removed successfully !")
    }
    return <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
        {cart.cartItems.length > 0 ?
        <div>
            <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
                <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
                    <div className="md:w-2/3">
                        <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                            <p>PRODUCTS</p>
                            <div className="flex space-x-8">
                                <p>PRICE</p>
                                <p>QUANTITY</p>
                                <p>SUBTOTAL</p>
                                <p>REMOVE</p>
                            </div>
                        </div>
                        {cart.cartItems.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 border-b">
                                <div className="md:flex items-center space-x-4">
                                    <img src={item.image} alt="" className="w-16 h-16 object-contain rounded" />
                                    <div className="flex-1 ml-4">
                                        <h3 className="text-lg font-semibold">{ item.name}</h3>
                                    </div>
                                </div>
                                <div className="flex space-x-12 items-center">
                                    <p>{item.price}</p>
                                    <div className="flex items-center justify-center border">
                                        <button className="text-xl font-bold px-1.5 border-r" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                                        <p className="text-xl px-2">{ item.quantity}</p>
                                        <button className="text-xl px-1 border-1" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                                    </div>
                                    <p>${ (item.quantity * item.price).toFixed(2)}</p>
                                    <button className="text-red-500 hover:text-red-700" onClick={() => handleRemoveItem(item.id)}>
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
                        <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
                        <div className="flex justify-between mb-5 border-b pb-1">
                            <span className="text-sm">Total Items:</span>
                            <span>{ cart.totalQuantity}</span>
                        </div>
                        <div className="mb-4 border-b pb-2">
                            <p>Shipping:</p>
                            <p className="ml-2">Shipping to:
                                <span>{address}</span>
                            </p>
                            <button className="text-blue-500 hover:underline mt-1 ml-2" onClick={() => setIsModelOpen(true)}>change address</button>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span>Total Price : </span>
                            <span>{ cart.totalPrice.toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800" onClick={() => navigate("/checkout")}>Proced to checkout</button>
                    </div>
                </div>
                <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} children={<ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen} />} />
        </div>
            :
            <div className="flex justify-center">
                <img src={noFound} alt="" className="w-full h-96 -z-10 object-contain" />
            </div>}
  </div>;
};

export default Cart;
