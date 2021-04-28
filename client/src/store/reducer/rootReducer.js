import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productDetailReducer from './productDetailReducer';
import productListReducer from './productListReducer';

const rootReducer = () =>
  combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
  });

export default rootReducer;
