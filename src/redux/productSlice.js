// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     productList: [],
//     error: null,
//     loading: false
// }
// const productListSlice = createSlice({
//     name: "productList",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProductList.pending, (state) => {
//                 state.loading = true
//                 state.error = none
//             })
//             .addCase(fetchProductList.fulfiled, (state, { payload }) => {
//                 state.productList = payload
//                 state.loading = false
//                 state.error = none
//             })
//             .addCase(fetchProductList.rejected, (state) => {
//                 state.loading = false
//                 state.error = payload
//             })
//     }
// })
// export default productListSlice.reducer
// export const fetchProductList = createAsyncThunk(
//     `https://auth-task-app.up.railway.app/api/products/search/laptop`,
//     async (data, thunkAPI) => {
//         try {
//             const response = await fetch(`https://auth-task-app.up.railway.app/api/products/search/laptop`)
//             console.log(response)
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error)
//         }
//     }
// )
