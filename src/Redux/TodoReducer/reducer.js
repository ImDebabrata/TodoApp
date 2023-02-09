import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
      state.importantTodo.push(action?.payload);
    },
    addNormalTodo(state, action) {
      state.normalTodo.push(action?.payload);
    },
    getNormalTodo(state, action) {
      state.normalTodo = action.payload;
    },
    getImportantTodo(state, action) {
      state.importantTodo = action.payload;
    },
    deleteImportantTodo(state, action) {
      state.importantTodo.splice(action.payload, 1);
    },
    deleteNormalTodo(state, action) {
      state.normalTodo.splice(action.payload, 1);
    },
  },
});
// export const
export const {
  modifyImportantTodo,
  modifyNormalTodo,
  addImportantTodo,
  addNormalTodo,
  getNormalTodo,
  getImportantTodo,
  deleteImportantTodo,
  deleteNormalTodo,
} = todoSlice.actions;

export const addTodo = (payload) => (dispatch) => {
  return axios
    .post(`${process.env.REACT_APP_API}/todo/add`, payload)
    .then((res) =>
      payload.category === "important"
        ? dispatch(addImportantTodo(res.data.todo))
        : dispatch(addNormalTodo(res.data.todo))
    )
    .catch((err) => console.log(err.response.data.res));
};

export const getTotos = (token) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_API}/todo`, { token })
    .then((res) => {
      const todos = res.data.todos;
      const important = todos.filter((item) => item.category === "important");
      const normal = todos.filter((item) => item.category === "normal");
      dispatch(getImportantTodo(important));
      dispatch(getNormalTodo(normal));
    })
    .catch((err) => console.log(err));
};

export const deleteTodo = (payload) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_API}/todo/delete/${payload._id}`)
    .then(() => {
      if (payload.category === "important") {
        dispatch(deleteImportantTodo(payload.index));
      } else {
        dispatch(deleteNormalTodo(payload.index));
      }
    })
    .catch((err) => console.log(err));
};

export default todoSlice.reducer;
