import { configureStore } from '@reduxjs/toolkit'
import movie from './Slices/movie'


const store = configureStore({
  reducer: {
    movie,
  },
})
//style cho dispatch
export type AppDispatch = typeof store.dispatch;
//type cho state
export type RootState = ReturnType<typeof store.getState>;

export default store;