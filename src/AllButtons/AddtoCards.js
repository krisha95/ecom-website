import React, { useContext } from "react";
import { DataContext } from "../hooks/DataContext";
import { RxCross1 } from "react-icons/rx";

const AddToCards = () => {
  const { setProductdata, productdata } = useContext(DataContext);

  const handleRemoveCartItem = async (id) => {
    setProductdata((prevData) => prevData.filter((item) => item.id !== id));

    try {
      await fetch(`https://dummyjson.com/products/${id}`, {
        method: "DELETE",
      });
    } catch (error) {}
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">Your Cart</h1>
      {productdata.length > 0 ? (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productdata.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden relative"
            >
              <button
                className="flex absolute right-2 top-2"
                onClick={() => handleRemoveCartItem(item.id)}
              >
                <RxCross1 />
              </button>

              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {item.title}
                </h2>
                <span className="text-xl font-bold text-gray-900">
                  ₹{item.price || "N/A"}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No items in the cart</p>
      )}
    </div>
  );
};

export default AddToCards;
