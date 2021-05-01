import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productDetailReducer from './productDetailReducer';
import productListReducer from './productListReducer';
import userReducer from './userReducer';

const rootReducer = () =>
  combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    userLogin: userReducer,
  });

export default rootReducer;
