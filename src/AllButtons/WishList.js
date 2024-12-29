import React, { useContext, useState } from "react";
import { DataContext } from "../hooks/DataContext";
import { RxCross1 } from "react-icons/rx";

const WishList = () => {
  const { setWishlistdata, wishlistdata, setProductdata } =
    useContext(DataContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRemoveWishlistItem = async (id) => {
    setIsLoading(true);
    setError(null);

    setWishlistdata((prevData) => prevData.filter((item) => item.id !== id));

    try {
      await fetch(`https://dummyjson.com/products/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      setError("Error removing item. Please try again.");
      console.error("Error removing item:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMoveToBag = (item) => {
    setWishlistdata((prev) =>
      prev.filter((wishlistItem) => wishlistItem.id !== item.id)
    );
    setProductdata((prev) => [...prev, item]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Your Wishlist</h1>

      {wishlistdata.length > 0 ? (
        <>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-semibold text-gray-900">
              My Wishlist{" "}
              <span className="text-gray-600">{wishlistdata.length} items</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {wishlistdata.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-sm rounded-lg overflow-hidden relative group transition-transform transform hover:scale-105"
              >
                <button
                  onClick={() => handleRemoveWishlistItem(item.id)}
                  className="absolute right-2 top-2 z-10 p-1 rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  disabled={isLoading}
                >
                  {isLoading ? <span>Loading...</span> : <RxCross1 size={16} />}
                </button>

                <div className="aspect-square relative bg-gray-50">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-sm text-gray-900 font-medium line-clamp-1">
                    {item.title}
                  </h3>

                  <div className="mt-2 space-x-2">
                    <span className="text-base font-semibold text-gray-900">
                      ₹
                      {(
                        item.price *
                        (1 - item.discountPercentage / 100)
                      ).toFixed(2)}
                    </span>

                    <span className="text-sm text-gray-500 line-through">
                      ₹{item.price}
                    </span>

                    <span className="text-sm text-red-500">
                      ({item.discountPercentage}% OFF)
                    </span>
                  </div>

                  <button
                    className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
                    onClick={() => handleMoveToBag(item)}
                  >
                    MOVE TO BAG
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <p className="text-gray-500 text-lg">
            Your wishlist is empty! Add items to your wishlist to see them here.
          </p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-md text-center">
          {error}
        </div>
      )}
    </div>
  );
};

export default WishList;
