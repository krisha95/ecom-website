import { useContext, useEffect, useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import { DataContext } from "../hooks/DataContext";
import { RxCross1 } from "react-icons/rx";
import cartImage from "../Image/empty-bag.webp";
import { NavLink } from "react-router-dom";

const AddToCards = () => {
  const { setProductdata, productdata, setWishlistdata } =
    useContext(DataContext);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [itemToRemove, setItemToRemove] = useState([]);

  const [counter, setCounter] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
    setSelectedIds(productdata.map((item) => item.id));
  }, [productdata]);

  const handleRemoveCartItems = () => {
    setIsModalVisible(true);
    setItemToRemove(selectedIds); // Pass all selected IDs
  };

  const confirmRemoveItems = async () => {
    if (itemToRemove?.length > 0) {
      setIsModalVisible(false);
      setItemToRemove([]);
      setProductdata((prev) =>
        prev.filter((item) => !itemToRemove.includes(item.id))
      );
      setSelectedIds([]);

      try {
        for (const id of itemToRemove) {
          await fetch(`https://dummyjson.com/products/${id}`, {
            method: "DELETE",
          });
        }
      } catch (error) {
        console.error("Error removing items:", error);
      }
    }
  };

  const handleMoveToWishlistItems = () => {
    const itemsToMove = productdata.filter((item) =>
      selectedIds.includes(item.id)
    );

    setWishlistdata((prev) => [...prev, ...itemsToMove]);
    setProductdata((prev) =>
      prev.filter((item) => !selectedIds.includes(item.id))
    );
    setSelectedIds([]);
    setIsModalVisible(false);
  };

  const handleMainCheckboxChange = (checked) => {
    setSelectedIds(checked ? productdata.map((item) => item.id) : []);
  };

  const handleItemCheckboxChange = (id, checked) => {
    setSelectedIds((prev) =>
      checked ? [...prev, id] : prev.filter((selectedId) => selectedId !== id)
    );
  };

  const IncItem = (id) => {
    setCounter((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const DecItem = (id) => {
    setCounter((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const calculatePriceDetails = () => {
    let mrp = 0;
    let discount = 0;

    productdata.forEach((item) => {
      const quantity = counter[item.id] || 1;
      const itemPrice = item.price * quantity;
      mrp += itemPrice;
      discount += (item.discountPercentage / 100) * itemPrice;
    });

    return { mrp, discount };
  };

  const { mrp, discount } = calculatePriceDetails();
  const totalAmount = mrp - discount;
  const allSelected = selectedIds.length === productdata.length;
  const selectedCount = selectedIds.length;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Your Cart
      </h1>

      {productdata?.length > 0 ? (
        <>
          <div className="p-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="grid gap-6 lg:col-span-3">
                <div className="flex items-center gap-2 justify-between">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={(e) => handleMainCheckboxChange(e.target.checked)}
                    className="form-checkbox w-5 h-5 text-pink-600"
                  />
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-600">
                        {selectedCount}/{productdata.length} ITEMS SELECTED
                      </span>
                    </div>
                    <div className="text-gray-600 flex gap-3 text-bold text-sm">
                      <span onClick={handleRemoveCartItems}>REMOVE</span>
                      <span className="border"></span>
                      <span onClick={handleMoveToWishlistItems}>
                        MOVE TO WISHLIST
                      </span>
                    </div>
                  </div>
                </div>
                {productdata.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded-sm p-4 flex items-start relative bg-white"
                  >
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(item.id)}
                      onChange={(e) =>
                        handleItemCheckboxChange(item.id, e.target.checked)
                      }
                      className="form-checkbox h-5 w-5 text-pink-600 absolute top-4 left-4"
                    />

                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-28 object-contain border bg-gray-100"
                    />

                    <div className="ml-6 flex-1">
                      <h2 className="text-lg font-medium text-gray-800 truncate">
                        {item.title}
                      </h2>
                      <div className="mt-2 text-sm text-gray-600 space-x-2">
                        <span className="font-semibold text-gray-900">
                          ₹
                          {(
                            item.price *
                            (1 - item.discountPercentage / 100) *
                            (counter[item.id] || 1)
                          ).toFixed(2)}
                        </span>
                        <span className="line-through text-gray-400">
                          ₹{(item.price * (counter[item.id] || 1)).toFixed(2)}
                        </span>
                        <span className="text-red-500">
                          ({item.discountPercentage}% OFF)
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-4 border rounded-lg w-28 p-2">
                        <button
                          className="px-2 py-1"
                          onClick={() => IncItem(item.id)}
                        >
                          +
                        </button>
                        <div className="text-lg font-semibold text-center">
                          {counter[item.id] || 1}
                        </div>
                        <button
                          className="px-2 py-1"
                          onClick={() => DecItem(item.id)}
                        >
                          -
                        </button>
                      </div>
                    </div>

                    <button
                      className="absolute right-4 top-4 text-gray-400"
                      onClick={() => handleRemoveCartItems(item)}
                    >
                      <RxCross1 size={20} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
                  <h3 className="font-semibold text-lg mb-4 text-gray-800">
                    PRICE DETAILS ({selectedCount} Items)
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Total MRP</span>
                      <span>₹{mrp.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Discount on MRP</span>
                      <span>-₹{discount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platform Fee</span>
                      <span className="text-green-600">FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping Fee</span>
                      <span className="text-green-600">FREE</span>
                    </div>
                    <div className="flex justify-between font-semibold pt-4 border-t border-gray-200">
                      <span>Total Amount</span>
                      <span>₹{totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-md">
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mt-28">
            <div className="flex justify-center items-center">
              <img src={cartImage} alt="cartImage" />
            </div>
            <h3 className="text-center text-black">Hey, it feels so light!</h3>
            <p className="text-center">
              There is nothing in your bag. Let's add some items.
            </p>
            <NavLink
              to="/wishlist"
              className="flex justify-center items-center mt-8 "
            >
              <button className="border border-rose-500 rounded-md px-5 py-3">
                ADD ITEMS FROM WISHLIST
              </button>
            </NavLink>
          </div>
        </>
      )}

      <ConfirmationModal
        isVisible={isModalVisible}
        onConfirm={confirmRemoveItems}
        handleMoveToWishlist={handleMoveToWishlistItems}
        selectedItems={productdata.filter((item) =>
          selectedIds.includes(item.id)
        )}
      />
    </div>
  );
};

export default AddToCards;
