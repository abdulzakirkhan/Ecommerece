/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = ({ order }) => {
    const navigate=useNavigate()
    return <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">Thank you for your order</h2>
      <p>Your order has been placed successfully you will recieve an email confirmation shortly.</p>
        <div className="mt-6 p-4 border rounded-lg bg-gray-100">
            <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
            <p>Order Number : {order.orderNumber}</p>
            <div className="mt-4">
                <h2 className="text-md font-semibold mb-2">Shipping Information</h2>
                <p>Address : { order.shippingInformation.address}</p>
                <p>City : { order.shippingInformation.city}</p>
                <p>Zip Code : { order.shippingInformation.zipCode}</p>
            </div>
            <div className="mt-4">
                <h3 className="text-md font-semibold mb-2">Products Ordered</h3>
                {order.cartItems.map((item,index) => (
                    <div key={index} className="flex justify-between">
                        <p>{item.name} x { item.quantity}</p>
                        <p>{ item.price * item.quantity}</p>
                    </div>
                ))}
            </div>
            <div className="mt-4 flex justify-between">
                <span>Total price :</span>
                <span className="font-semibold">{ order.totalPrice.toFixed(2)}</span>
            </div>
            <div className="mt-6">
                <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-600">Order tracking</button>
                <button className="ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800" onClick={() => navigate('/')}>Continue Shopping</button>
            </div>
      </div>
  </div>;
};

export default OrderConfirmation;
