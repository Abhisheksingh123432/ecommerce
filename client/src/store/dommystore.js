import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer,productDetailsReducer ,newProductReducer,productReducer} from "../reducers/productReducer";
import { cartReducer } from "../reducers/cartReducer";
import { userReducer, allUsersReducer, userDetailsReducer,profileReducer } from "../reducers/userReducer";
import { newOrderReducer,myOrdersReducer,allOrdersReducer,orderReducer,orderDetailsReducer } from "../reducers/orderReducer";
const reducer = combineReducers({
  products:productsReducer,
  productDetails: productDetailsReducer ,
  cart: cartReducer,
  user:userReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  newProduct : newProductReducer,
  product:productReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  orderDetails: orderDetailsReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  profile: profileReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
  orderInfo: {
    orderInfo: localStorage.getItem("orderInfo")
    ? JSON.parse(localStorage.getItem("orderInfo"))
    : [],
  },
};

const middleware = [thunk]; 

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;