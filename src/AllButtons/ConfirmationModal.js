import React from "react";

const ConfirmationModal = ({
  isVisible,
  onConfirm,
  handleMoveToWishlist,
  selectedItem,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex">
          {selectedItem?.thumbnail && (
            <div className="mr-4 p-2 w-20 border-2 border flex items-center justify-center">
              <img
                src={selectedItem.thumbnail}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div>
            <span>Move from Bag</span>
            <h2 className="text-lg font-semibold text-gray-700">
              Are you sure you want to move this item from the bag?
            </h2>
          </div>
        </div>
        <div className="mt-4 flex justify-between gap-4">
          <button onClick={onConfirm} className="px-4 py-2 rounded text-sm">
            REMOVE
          </button>
          <span className="border"></span>
          <button
            className="px-4 py-2 text-pink-600 rounded text-sm"
            onClick={handleMoveToWishlist}
          >
            MOVE TO WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
