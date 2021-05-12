import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import orderCreateReducer from './orderReducer/orderCreateReducer';
import orderDetailsReducer from './orderReducer/orderDetailsReducer';
import orderListMyReducer from './orderReducer/orderListMyReducer';
import orderPayReducer from './orderReducer/orderPayReducer';
import productDetailReducer from './productReducer/productDetailReducer';
import productListReducer from './productReducer/productListReducer';
import productDeleteReducer from './productReducer/productDeleteReducer';
import productCreateReducer from './productReducer/productCreateReducer';
import userDeleteReducer from './userReducer/userDeleteReducer';
import userDetailReducer from './userReducer/userDetailReducer';
import userListReducer from './userReducer/userListReducer';
import userLoginReducer from './userReducer/userLoginReducer';
import userRegisterReducer from './userReducer/userRegisterReducer';
import userUpdateProfileReducer from './userReducer/userUpdateProfileReducer';
import userUpdateReducer from './userReducer/userUpdateReducer';
import productUpdateReducer from './productReducer/productUpdateReducer';
import orderListReducer from './orderReducer/orderListReducer';
import orderDeliverReducer from './orderReducer/orderDeliverReducer';
import productCreateReviewReducer from './productReducer/productCreateReviewReducer';
import productTopRatedReducer from './productReducer/ProductTopRatedReducer';

const rootReducer = () =>
  combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productCreateReview: productCreateReviewReducer,
    productTopRated: productTopRatedReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetail: userDetailReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
  });

export default rootReducer;
