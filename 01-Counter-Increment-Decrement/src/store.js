import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './Reducer/counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
