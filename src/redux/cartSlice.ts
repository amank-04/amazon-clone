import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type productItems = {
  items: ProductItem[];
  total: number;
};

const initialState: productItems = {
  items: [],
  total: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductItem>) => {
      state.items = [...state.items, action.payload];
      state.total += action.payload.price
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const ind = state.items.findIndex((item) => item.id === action.payload);

      let newItems = [...state.items];

      if (ind >= 0) {
        state.total -= state.items[ind].price
        newItems.splice(ind, 1);
      } else {
        console.log(`${action.payload} item not exist in cart`);
      }
      state.items = newItems;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
