import React, { useContext, useState } from "react";
import { DataContext } from "../hooks/DataContext";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { productSelectDetails, setProductdata, productdata } =
    useContext(DataContext);
  const [selectedImage, setSelectedImage] = useState(
    productSelectDetails?.thumbnail || ""
  );
  const navigate = useNavigate();

  if (!productSelectDetails) {
    return <div className="text-center text-gray-600">No Product Selected</div>;
  }

  const {
    title,
    description,
    price,
    brand,
    category,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    reviews = [],
    returnPolicy,
    images,
  } = productSelectDetails;

  const handleBtnCart = (data) => {
    setProductdata((prodata) =>
      prodata.some((item) => item.id === data.id) ? prodata : [...prodata, data]
    );
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <img
            src={selectedImage}
            alt={`Selected ${title}`}
            className="w-full max-h-96 object-contain rounded-lg mb-4"
          />
          <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
            {images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail of ${title}`}
                className={`h-20 w-20 object-cover rounded-lg border-2 ${
                  selectedImage === image
                    ? "border-pink-500"
                    : "border-gray-200"
                } cursor-pointer`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-xl font-semibold text-gray-900">Price: ₹{price}</p>
          <p className="text-gray-700">
            <span className="font-bold">Brand:</span> {brand}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Category:</span> {category}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Availability:</span>{" "}
            {availabilityStatus}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Warranty:</span> {warrantyInformation}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Shipping:</span> {shippingInformation}
          </p>
          <div className="mt-4 space-y-2">
            {productdata.some((item) => item.id === productSelectDetails.id) ? (
              <button
                className="text-black border  w-full px-4 py-2 rounded-lg"
                onClick={handleGoToCart}
              >
                Go to Cart
              </button>
            ) : (
              <button
                className="text-black border w-full px-4 py-2 rounded-lg"
                onClick={() => handleBtnCart(productSelectDetails)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Customer Reviews
        </h2>
        {reviews.length > 0 ? (
          <div className="space-y-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <p className="font-semibold text-gray-700">
                  {review.reviewerName}
                </p>
                <p className="text-sm text-gray-500">{review.date}</p>
                <p className="mt-2">{review.comment}</p>
                <p className="mt-2 font-bold text-yellow-600">
                  Rating: {review.rating} / 5
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No reviews available.</p>
        )}
      </div>

      <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h2 className="text-xl font-bold text-gray-800">Return Policy</h2>
        <p className="text-gray-600">{returnPolicy}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
