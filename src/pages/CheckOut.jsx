/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CheckOut = ({ setOrder }) => {
    const navigate = useNavigate();
    const [billingToggle, setBillingToggle] = useState(false);
    const [shippingToggle, setShippingToggle] = useState(false);
    const [paymentToggle, setPaymentToggle] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const cartItems = useSelector(state => state.cart);
    const [shippingInfo, setShippingInfo] = useState({
        address: '',
        city: '',
        zipCode: ''
    });


    
    const handleOrder = () => {
        const newOrder = {
          cartItems: cartItems.cartItems,
          orderNumber: "123456",
          shippingInformation: shippingInfo,
          totalPrice: cartItems.totalPrice,
        };
        setOrder(newOrder);
        navigate("/order-confirmation")
    }

    return <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
        <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
        <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
                <div className="border p-2 mb-6">
                    <div className="flex items-center justify-between" onClick={() => setBillingToggle(!billingToggle)}>
                        <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
                        {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                    </div>
                    <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                        <div>
                            <label htmlFor="" className="block text-gray-700">Name</label>
                            <input type="text" name="name" placeholder="Enter your Name" className="w-full px-3 py-2 border" />
                        </div>
                
                        <div>
                            <label htmlFor="" className="block text-gray-700">Email</label>
                            <input type="email" name="email" placeholder="Enter Email" className="w-full px-3 py-2 border" />
                        </div>
                        <div>
                            <label htmlFor="" className="block text-gray-700">Phone</label>
                            <input type="number" name="phone" placeholder="+92 3432 24 22" className="w-full px-3 py-2 border" />
                        </div>
                    </div>
                </div>
                <div className="border p-2 mb-6">
                    <div className="flex items-center justify-between" onClick={() => setShippingToggle(!shippingToggle)}>
                        <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
                        {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                    </div>
                    <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                        <div>
                            <label htmlFor="" className="block text-gray-700">Address</label>
                            <input type="text" name="address" placeholder="Enter your address" className="w-full px-3 py-2 border" onChange={(e) => setShippingInfo({...shippingInfo, address:e.target.value})} />
                        </div>
                
                        <div>
                            <label htmlFor="" className="block text-gray-700">City</label>
                            <input type="text" name="city" placeholder="Enter city" className="w-full px-3 py-2 border" onChange={(e) => setShippingInfo({...shippingInfo, city:e.target.value})} />
                        </div>
                        <div>
                            <label htmlFor="" className="block text-gray-700">ZipCode</label>
                            <input type="number" name="zipcode" placeholder="19290" className="w-full px-3 py-2 border" onChange={(e) => setShippingInfo({...shippingInfo,zipCode:e.target.value})} />
                        </div>
                    </div>
                </div>
                <div className="border p-2 mb-6">
                    <div className="flex items-center justify-between" onClick={() => setPaymentToggle(!paymentToggle)}>
                        <h3 className="text-lg font-semibold mb-2">Payment</h3>
                        {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                    </div>
                    <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                        <div className="flex items-center mb-2 space-x-2">
                            <input type="radio" name="cod" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                            <label htmlFor="" className="block text-gray-700">Cash On Delivery</label>
                        </div>
                        <div className="flex items-center mb-2 space-x-2">
                            <input type="radio" name="dc" checked={paymentMethod === "dc"} onChange={() => setPaymentMethod("dc")} />
                            <label htmlFor="" className="block text-gray-700">Debit Card</label>
                        </div>
                        {paymentMethod === "dc" && (
                            <div className="bg-gray-100 p-4 rounded-lg mb-4">
                                <h3 className="text-xl font-semibold mb-4">Debit Card Information</h3>
                                <div className="mb-4">
                                    <label htmlFor="" className="block text-gray-700 font-semibold mb-2">Card Number</label>
                                    <input type="number" placeholder="34820 883 3849" className="border p-2 w-full rounded" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="" className="block text-gray-700 font-semibold mb-2">Card Holder name</label>
                                    <input type="text" placeholder="Holder Name" className="border p-2 w-full rounded" />
                                </div>
                                <div className="flex justify-between mb-4">
                                    <div className="w-1/2 mr-2">
                                        <label htmlFor="" className="block text-gray-700 font-semibold mb-2">Expire Date</label>
                                        <input type="date" className="border p-2 w-full rounded" />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="" className="block text-gray-700 font-semibold mb-2">CVV</label>
                                        <input type="text" placeholder='CVV' className="border p-2 rounded" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                <div className="space-y-4">
                    {cartItems.cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between">
                            <div className="flex items-center">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded" />
                                <div className="ml-4">
                                    <h4 className="text-md font-semibold">{ item.name}</h4>
                                    <span className="text-gray-600">${item.price} x { item.quantity}</span>
                                </div>
                            </div>
                            <div className="text-gray-800">
                                ${item.price * item.quantity}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 border-t pt-4">
                    <div className="flex justify-between">
                        <span>Total Price : </span>
                        <span className="font-semibold">${cartItems.totalPrice.toFixed(2)}</span>
                    </div>
                </div>
                <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800" onClick={handleOrder}>Place Order</button>
            </div>
        </div>
    </div>;
}

export default CheckOut;
