import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducer/rootReducer';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

const configStore = () => {
  const store = createStore(
    rootReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  // console.log(store.getState());
  return store;
};

export default configStore;
