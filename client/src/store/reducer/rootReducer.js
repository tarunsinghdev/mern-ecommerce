import { combineReducers } from 'redux';
import productDetailReducer from './productDetailReducer';
import productListReducer from './productListReducer';

const rootReducer = () =>
  combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
  });

export default rootReducer;
