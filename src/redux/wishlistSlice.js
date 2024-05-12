import { createSlice } from "@reduxjs/toolkit"

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { wishlistItems: [] },
  reducers: {
    addToWishlist: (state, action) => {
      const item = state.wishlistItems.find(
        (item) => item._id === action.payload._id
      )
      if (item) {
        item.quantity += 1
      } else {
        state.wishlistItems.push({ ...action.payload, quantity: 1 })
      }
    },
    clearWishlist: (state) => {
      return { ...state, wishlistItems: [] }
    },
    removeFromWishlist: (state, action) => {

      const index = state.wishlistItems.findIndex((item) => item._id === action.payload)
      if (index !== -1) {
        state.wishlistItems.splice(index, 1)
      }
    },
  },
})

export const wishlistSliceAction = wishlistSlice.actions
export default wishlistSlice
