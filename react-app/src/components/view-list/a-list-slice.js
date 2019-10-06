import { createSlice, PayloadAction } from "redux-starter-kit";

let initialState = {
  title: "init state Title",
  numberOfItems: 2,
  items: [
    {
      header: "Grocery shopping",
      items: [
        {
          content: "Lettuce"
        },
        {
          content: "Steak"
        }
      ]
    },
    {
      header: "Workout",
      items: [
        {
          content: "bench press"
        }
      ]
    }
  ]
};

const aListSlice = createSlice({
  slice: "aList",
  initialState,
  reducers: {
    displayList(state, action) {
      state.title = action.payload.title;
      state.items = action.payload.items;
      state.numberOfItems = action.payload.items.length;
    }
  }
});

export const { displayList } = aListSlice.actions;

export default aListSlice.reducer;
