import { configureStore } from '@reduxjs/toolkit'
import modalReducer from "./reducers/modal-reducer";
import hexReducer from './reducers/hex-reducer';
import switchReducer from './reducers/switch-reducer';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    hex: hexReducer,
    switch: switchReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch