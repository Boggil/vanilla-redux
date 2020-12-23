import { combineReducers } from 'redux';
import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit';

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

/**
 * createReducer는 Immer를 사용하므로 불변성을 관리해준다.
 * 그래서 push가 가능함.
 * */
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() }); // push is mutate state
  },
  [deleteToDo]: (state, action) =>
    state.filter(toDo => toDo.id !== action.payload)  // filter is return new array
});

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() }); // push is mutate state
    },
    remove: (state, action) =>
      state.filter(toDo => toDo.id !== action.payload)
  }
});

// const store = configureStore({ reducer: toDos.reducer });
// const store = configureStore({ reducer });
const rootReducer = combineReducers({
  reducer: toDos.reducer
});

export const { add, remove } = toDos.actions;

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };

// export default store;
export default rootReducer;