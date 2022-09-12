export const addToCart =
  ( pizza, quantity, variant ) =>
  (dispatch, getState) => {
    var cartItems = {
      name: pizza.name,
      _id: pizza._id,
      variant: variant,
      quantity: Number(quantity),
      image: pizza.image,
      prices: pizza.prices,
      price: pizza.prices[0][variant] * quantity,
    };

    if (cartItems.quantity > 5) {
      alert('This Pizza is out of stock!');
    } else {
      if (cartItems.quantity < 1) {
        dispatch({ type: "DELETE_ITEM", payload: pizza });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItems });
      }
      
    }
      
      const cartItem = getState().cartReducer.cartItems;
      localStorage.setItem("cartItems", JSON.stringify(cartItem));
};

export const deleteItem = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_ITEM", payload: pizza });
  const cartItem = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItem));
}