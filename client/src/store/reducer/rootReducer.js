import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import orderCreateReducer from './orderReducer';
import productDetailReducer from './productDetailReducer';
import productListReducer from './productListReducer';
import userDetailReducer from './userReducer/userDetailReducer';
import userLoginReducer from './userReducer/userLoginReducer';
import userRegisterReducer from './userReducer/userRegisterReducer';
import userUpdateProfileReducer from './userReducer/userUpdateProfileReducer';

const rootReducer = () =>
  combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetail: userDetailReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
  });

export default rootReducer;
