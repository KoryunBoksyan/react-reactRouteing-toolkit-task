import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoryReducer from './reducers/categoryReducer/categorySlice';
import catReducer from './reducers/catsReducer/catSlice';


const rootReducer = combineReducers({
  categoryReducer,
  catReducer,
});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
