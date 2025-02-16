import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import {
  removeFromCart,
  decreaseQuantity,
  addToCart,
} from "../feature/cartSlice";
import { IoTrashBin } from "react-icons/io5";
import Button from "../components/Button";

function Cart() {
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-6">
          Looks like you haven’t added anything to your cart yet.
        </p>
        <Button
          to="/all-products"
          className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition"
        >
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart ({totalQuantity} items)
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 border-b py-4">
              <img
                src={item.imageUrl || "placeholder-image.jpg"}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />

              <div className="flex-grow">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>

                {/* Quantity Adjuster */}
                <div className="flex items-center gap-4 mt-2">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                        })
                      )
                    }
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-center flex-col space-y-6">
                <p className="font-semibold">${item.totalPrice.toFixed(2)}</p>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 ml-4 hover:scale-105"
                >
                  <IoTrashBin size={30} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <Button
              to="/checkout"
              className="w-full bg-black text-white text-center mt-6"
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
