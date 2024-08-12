import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const indexItem = state.cartItems.find((item) => item.id === newItem.id);

      if (indexItem) {
        indexItem.quantity++;
        indexItem.totalPrice += newItem.price;
      } else {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const findItem = state.cartItems.find((item) => item.id === id);
      if (findItem) {
        state.totalPrice -= findItem.totalPrice
        state.totalQuantity -= findItem.quantity
        state.cartItems = state.cartItems.filter((item) => item.id !== id)
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.cartItems.find((item) => item.id === id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalQuantity++;
        state.totalPrice += findItem.price;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.cartItems.find((item) => item.id === id);
      if (findItem.quantity > 1) {
        findItem.quantity--;
        findItem.totalPrice -= findItem.totalPrice;
        state.totalQuantity--;
        state.totalPrice -= findItem.price;
      } else {
        
        // Optionally handle the case when quantity is 1 (e.g., remove item from cart)
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity--;

        // Decrease the total price for the cart
        state.totalPrice -= findItem.price;
      }
    }
  },
});

export const { addToCart, removeFromCart, increaseQuantity,decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
