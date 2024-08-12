/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer, Navbar } from "./components"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import CheckOut from "./pages/CheckOut"
import { useState } from "react"
import OrderConfirmation from "./pages/OrderConfirmation"
import FilterData from "./pages/FilterData"
import ProductDetails from "./pages/ProductDetails"

function App() {

  const [order, setOrder] = useState(null)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut setOrder={setOrder} />} />
          <Route path="/order-confirmation" element={<OrderConfirmation order={order} />} />
          <Route path="/filter-data" element={<FilterData />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
