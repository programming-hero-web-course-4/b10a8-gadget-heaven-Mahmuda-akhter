import { NavLink, useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { getCartProducts, removeCart } from "../utilites/utils";
import { useEffect, useState } from "react";
import Group from "../../public/image/Group.png";

const Cart = () => {
  const { pathname } = useLocation();
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [sortActive, setSortActive] = useState(false);
  const [purchaseActive, setPurchaseActive] = useState(false);
  useEffect(() => {
    const cart = getCartProducts();
    setItems(cart);

    // Calculate total price when cart items are loaded
    const initialTotalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(initialTotalPrice);
  }, []);

  // Remove item from local storage
  const handleRemove = (product_id) => {
    removeCart(product_id);

    const updatedCart = getCartProducts();
    setItems(updatedCart);

    // Recalculate total price
    const newPrice = updatedCart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(newPrice);
  };

  // Sort items by price
  const handleSort = () => {
    const sortedCart = [...items].sort((a, b) => b.price - a.price);
    setItems(sortedCart);
    setSortActive(true);
    setPurchaseActive(false);
  };

  // Handle purchase action
  const handlePurchase = () => {
    setPurchaseActive(true);
    setSortActive(false);

    if (items.length > 0) {
      document.getElementById("my_modal_5").showModal();
    }

  };

  // Handle close button in modal
  const handleCloseButton = () => {
    setTotalPrice(0);
    setItems([]);
  };

  return (
    <div className="bg-[#f7f7f7]">
      {/* Header Section */}
      <div className="w-8/12 mx-auto flex justify-between items-center my-11">
        <h1 className="text-xl font-bold">Cart</h1>

        <div className="flex justify-end items-center gap-8 w-10/12">
          <h1 className="text-xl font-bold">Total cost: ${totalPrice}</h1>
          <button
            onClick={handleSort}
            className={`border border-[#9538e2] px-6 py-2 rounded-full ${
              sortActive ? "bg-[#9538e2] text-white" : "bg-white text-[#9538e2]"
            }`}
          >
            Sort by Price
          </button>
          <button
            onClick={handlePurchase}
            className={`border border-[#9538e2] px-6 py-2 rounded-full ${
              purchaseActive ? "bg-[#9538e2] text-white" : "bg-white text-[#9538e2]"
            }`}
          >
            Purchase
          </button>
        </div>
      </div>

      
      <div>
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.product_id}
              className="flex items-center justify-between gap-4 mb-4 bg-white w-8/12 mx-auto rounded-2xl px-5"
            >
              {/* Product Details */}
              <div className="flex items-center gap-4">
                <img
                  src={item.product_image}
                  alt=""
                  className="w-[250px] rounded-2xl"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.product_title}</h3>
                  <p className="text-md font-medium text-gray-500 mb-2">
                    {item.description}
                  </p>
                  <p className="text-md font-medium text-gray-700">
                    Price: $ {item.price}
                  </p>
                </div>
              </div>

              {/* Delete Button */}
              <div>
                {(pathname === "/dashboard" || pathname === "/dashboard/cart") && (
                  <button
                    onClick={() => handleRemove(item.product_id)}
                    className="rounded-full text-2xl text-red-500 hover:text-red-700 border border-red-500 p-1"
                    title="Remove item"
                  >
                    <RxCross1 />
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-purple-700 text-4xl font-semibold py-20">
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <img src={Group} alt="" className="w-10 mx-auto" />
          <p className="my-4 text-center font-semibold text-xl">
            Payment Successful
          </p>
          <div className="border w-9/12 mx-auto my-3"></div>
          <p className="text-center text-gray-500 font-semibold">
            Thanks for purchasing.
          </p>
          <p className="text-center text-gray-500 font-semibold">
            Total: ${totalPrice}
          </p>

          <div className="modal-action flex justify-center py-2">
            <form method="dialog">
              {/* Close the modal */}
              <NavLink
                to="/"
                onClick={handleCloseButton}
                className="bg-gray-200 py-2 px-16 text-gray-800 font-semibold"
              >
                Close
              </NavLink>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
