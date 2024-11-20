import {configureStore} from '@reduxjs/toolkit';
import CrudReducer from './Reducer/Crud';

const store = configureStore({
  reducer: {
    Crud: CrudReducer
  },
});

export default store;
