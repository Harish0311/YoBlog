import {configureStore} from '@reduxjs/toolkit'
import rootReducers from './reducers';

const store = configureStore({reducer: rootReducers});

export default store;