import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload._id)
      const item = state.find((item) => item._id === action.payload._id)
      if (item) {
        item.quantity += 1
      } else {
        state.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart: (state, action) => {
      console.log(action.payload.id)
      const index = state.findIndex((item) => item._id === action.payload.id)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((item) => item._id === action.payload.id)
      if (item) {
        item.quantity <= 1 ? item.quantity : (item.quantity -= 1)
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.find((item) => item._id === action.payload.id)
      if (item) {
        item.quantity += 1
      }
    },
  },
})

export const cartSliceAction = cartSlice.actions
export default cartSlice
