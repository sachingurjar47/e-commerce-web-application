import { createSlice } from "@reduxjs/toolkit";
import { Data, Product } from "../types/types";

interface Cart extends Product {
  count?: number;
}
export interface InitialState {
  carts: Cart[];
}
export type getDataPayload = {
  payload: InitialState["carts"];
};
export type getRecordPayload = {
  payload: Product;
};
const initialState: InitialState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getData: (state: InitialState, action: getDataPayload) => {
      state.carts = action.payload;
    },
  },
});

export const { getData } = cartSlice.actions;

export default cartSlice.reducer;
