import { createStore, applyMiddleware } from "redux";
// import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../reducers";

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// export const store = configureStore({
//     reducer: {
//         rootReducer,
//         initialState,
//         composeWithDevTools(applyMiddleware(...middleware))
//     }
//   })

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
