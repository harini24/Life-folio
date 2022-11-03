import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import sections from '../components/Navigation/slice'
const reducer = combineReducers({
    sections
  })
  const store = configureStore({
    reducer,
  })
  export default store;