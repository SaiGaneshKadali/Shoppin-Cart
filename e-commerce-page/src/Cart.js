import React, { useState, useEffect } from "react";

function Cart(props) {
  const { cart, setCart } = props;

  // state variable for total price of items in cart
  const [cartTotal, setCartTotal] = useState(0);




  // function to remove an item from the cart
  function removeFromCart(item) {
    setCart(cart.filter((i) => i.id !== item.id));
  }

  // // function to decrease item quantity by 1
  // function decreaseQuantity(item) {
  //   if (item.quantity > 0) {
  //     setCart(
  //       cart.map((i) =>
  //         i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
  //       )
  //     );
  //   }
  // }


  function increaseQuantity(item) {
    setCart(
      cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
    setCartTotal(cartTotal + parseInt(item.price));

  }

  function decreaseQuantity(item) {
    setCart(
      cart.map((i) =>
        i.id === item.id
          ? i.quantity === 1
            ? null
            : { ...i, quantity: i.quantity - 1 }
          : i
      ).filter((i) => i !== null)
    );
    setCartTotal(cartTotal - parseInt(item.price));

  }

  // function to empty the cart
  function emptyCart() {
    setCart([]);
  }

  // calculate total number of items in cart
  const totalItems =
    cart && cart.length > 0
      ? cart.reduce((total, item) => total + (item.quantity || 0), 0)
      : 0;

  useEffect(() => {
    setCartTotal(
      cart && cart.length > 0
        ? cart.reduce((total, item) => {
          console.log(`Item price: ${item.price}, Item quantity: ${item.quantity}`);
          return total + Number(item.price) * item.quantity;
        }, 0)
        : 0
    );
  }, [cart]);

  return (
    <div className="cart-page">
      {cart && cart.length === 0 ? (
        <p className="cart-head">Your Cart is Empty</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} className="cart-image" />
                  </td>
                  <td className="cart-item-name">{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <button onClick={() => decreaseQuantity(item)} className="cart-ID">
                      -
                    </button>
                    {item.quantity}
                    <button onClick={() => increaseQuantity(item)} className="cart-ID">
                      +
                    </button>
                  </td>
                  <td>
                    <button onClick={() => removeFromCart(item)} className="cart-remove-btn">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <p className="cart-total">Total Items: {totalItems}</p>
            <p className="cart-total">Total Cost: ₹{cartTotal}</p>
          </div>
          <button onClick={() => emptyCart()} className="cart-btn">
            Empty Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
