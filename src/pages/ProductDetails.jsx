/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { FaCarSide } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams();
    // const products = useSelector(state => state.cart.cartItems)
    const products = useSelector((state) => state.products.products);
    const [item, setItem] = useState()
console.log(products);
console.log(item)
console.log(products)
    useEffect(() => {
        const newProduct = products.find(
            (product) => product.id === parseInt(id)
        );
        setItem(newProduct);
    }, [id,products])
    



    if (!item) return <div className="container  w-60 h-60 mx-auto flex justify-center items-center">
        <h1 className="font-bold" style={{fontSize:"65px"}}>Loading...</h1>
    </div>;
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row gap-x-16">
              <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
                  <img src={item.image} alt="" className="h-full" />                  
              </div>
              <div className="m:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
                  <h2 className="text-3xl font-semibold mb-2">{ item.name}</h2>
                  <p className="text-xl  font-semibold text-gray-800 mb-4">{item.price}</p>
                  <div className="flex items-center mb-4 gap-x-2">
                      <input type="number" id='quantity' min={"1"} className="border p-1 w-16" />
                      <button className="bg-red-600 text-white py-1.5 px-4 hover:bg-red-800">Add to cart</button>
                  </div>
                  <div className="flex flex-col gap-y-4 mt-4">
                      <p className="flex items-center">
                          <FaCarSide className="mr-1" />
                          Ask a question
                      </p>
                  </div>
              </div>
          </div>
          <div className="mt-8">
              <h3 className="text-xl font-bold mb-2">Product Description</h3>
              <p>product description will geos here</p>
          </div>
    </div>
  )
}

export default ProductDetails
