import React, { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Loader from './components/Loader';
import HomeScreen from './screens/HomeScreen';

const CartScreen = React.lazy(() => import('./screens/CartScreen'));
const LoginScreen = React.lazy(() => import('./screens/LoginScreen'));
const ProductScreen = React.lazy(() => import('./screens/ProductScreen'));
const ProfileScreen = React.lazy(() => import('./screens/ProfileScreen'));
const RegisterScreen = React.lazy(() => import('./screens/RegisterScreen'));
const ShippingScreen = React.lazy(() => import('./screens/ShippingScreen'));
const PaymentScreen = React.lazy(() => import('./screens/PaymentScreen'));
const PlaceOrderScreen = React.lazy(() => import('./screens/PlaceOrderScreen'));
const OrderDetailsScreen = React.lazy(() =>
  import('./screens/OrderDetailsScreen')
);
const UserListScreen = React.lazy(() => import('./screens/UserListScreen'));
const UserEditScreen = React.lazy(() => import('./screens/UserEditScreen'));
const ProductListScreen = React.lazy(() =>
  import('./screens/ProductListScreen')
);
const ProductEditScreen = React.lazy(() =>
  import('./screens/ProductEditScreen')
);
const OrderListScreen = React.lazy(() => import('./screens/OrderListScreen'));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route
            path="/admin/orderlist"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <OrderListScreen {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/admin/product/:id/edit"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <ProductEditScreen {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/admin/productlist"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <ProductListScreen {...props} />
              </Suspense>
            )}
            exact
          />
          <Route
            path="/admin/productlist/:pageNumber"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <ProductListScreen {...props} />
              </Suspense>
            )}
            exact
          />
          <Route
            path="/admin/user/:id/edit"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <UserEditScreen {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/admin/userlist"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <UserListScreen {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/order/:id"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <OrderDetailsScreen {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/placeorder"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <PlaceOrderScreen {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/payment"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <PaymentScreen {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/shipping"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <ShippingScreen {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/login"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <LoginScreen {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/register"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <RegisterScreen {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/profile"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <ProfileScreen {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/product/:id"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                {console.log(
                  'History and match is',
                  props.history,
                  props.match
                )}
                <ProductScreen {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/cart/:id?"
            render={(props) => (
              <Suspense fallback={<Loader />}>
                <CartScreen {...props} />
              </Suspense>
            )}
          />
          <Route path="/search/:keyword" component={HomeScreen} exact />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/page/:pageNumber" component={HomeScreen} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={HomeScreen}
            exact
          />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
