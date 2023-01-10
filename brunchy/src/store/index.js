import { configureStore, createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    addOrder(state, action) {
      state.push(action.payload);
    },
    clearOrder(state, action) {
      state.splice(0, state.length);
    },
  },
});

const store = configureStore({
  reducer: {
    orders: orderSlice.reducer,
  },
});

export { store };

export const { addOrder, clearOrder } = orderSlice.actions;
