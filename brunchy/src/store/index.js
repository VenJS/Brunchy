import { configureStore, createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    addOrder(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    orders: orderSlice.reducer,
  },
});

export { store };

export const { addOrder } = orderSlice.actions;
