import axios from "axios";


export const placeOrder = (shippingAddress) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });

  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;

  var reducePrice = cartItems.reduce((x, item) => x + item.price, 0);
  var totalPrice = reducePrice.toFixed(2);
  
  var shippingAddress = localStorage.getItem("shippingAddress");

  try {
    const res = await axios.post("/api/orders/placeorders", {
      totalPrice,
      currentUser,
      cartItems,
      shippingAddress,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    console.log(res);
    localStorage.removeItem("cartItems");
    localStorage.removeItem("shippingAddress");

  } catch (err) {
    dispatch({ type: "PLACE_ORDER_FAIL" });
    console.log(err);
  }
};


export const getUserOrders = () => async (dispatch, getState) => {

  const currentUser = getState().loginUserReducer.currentUser;

  dispatch({ type: "GET_USER_ORDERS_REQUEST" });

  try {
    const res = await axios.post("/api/orders/getusersorders", {userid : currentUser._id});
    dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_USER_ORDERS_FAIL", payload: err });
  }
};