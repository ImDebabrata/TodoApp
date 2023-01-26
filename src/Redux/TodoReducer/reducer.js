import { createSlice } from "@reduxjs/toolkit";

// const todos = [
//   { id: "sou", title: "Dummy1" },
//   { id: "df", title: "Dummy2" },
//   { id: "sdf", title: "Dummy3" },
//   { id: "po", title: "Dummy4" },
//   { id: "sdp", title: "Dummy5" },
//   { id: "lpo", title: "Dummy6" },
//   { id: "poi", title: "Dummy7" },
//   { id: "mlk", title: "Dummy8" },
// ];
// const todos1 = [
//   { id: "oijh", title: "Dummy9" },
//   { id: "kji", title: "Dummy10" },
//   { id: "sdfr", title: "Dummy11" },
//   { id: "uyhb", title: "Dummy12" },
//   { id: "b", title: "Dummy13" },
//   { id: "kmn", title: "Dummy14" },
//   { id: "qw", title: "Dummy15" },
//   { id: "yt", title: "Dummy16" },
// ];

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    importantTodo: [],
    normalTodo: [],
  },
  reducers: {
    modifyImportantTodo(state, action) {
      state.importantTodo = action.payload;
    },
    modifyNormalTodo(state, action) {
      state.normalTodo = action.payload;
    },
    addImportantTodo(state, action) {
      state.importantTodo.push(action.payload);
    },
    addNormalTodo(state, action) {
      state.normalTodo.push(action.payload);
    },
  },
});
// export const
export const {
  modifyImportantTodo,
  modifyNormalTodo,
  addImportantTodo,
  addNormalTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
