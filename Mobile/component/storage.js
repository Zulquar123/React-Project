export const getCart = () => {
  const cartItems = localStorage.getItem("cart");
  if (cartItems) {
    return JSON.parse(cartItems);
  }
  return [];
};

const saveCart = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};


export const addCart = (id) => {
  const cart = getCart();
  cart.push(id);
  // save to local storage
  saveCart(cart);
};

export const removeCartLS = (id) => {
  const cart = getCart();
  const remaining = cart.filter((idx) => idx !== id); // removing items(id) from the cart.
  saveCart(remaining);
};