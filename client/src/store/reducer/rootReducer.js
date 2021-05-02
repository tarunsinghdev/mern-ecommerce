import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productDetailReducer from './productDetailReducer';
import productListReducer from './productListReducer';
import userLoginReducer from './userReducer/userLoginReducer';
import userRegisterReducer from './userReducer/userRegisterReducer';

const rootReducer = () =>
  combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
  });

export default rootReducer;
