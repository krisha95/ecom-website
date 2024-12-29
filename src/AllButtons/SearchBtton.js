

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchButton = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchItem = () => {
    if (searchTerm) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="relative w-full">
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") handleSearchItem();
        }}
        type="text"
        className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full border border-gray-300"
        placeholder="Search for products, brands, and more..."
      />
      <FaSearch
        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
        onClick={handleSearchItem}
      />
    </div>
  );
};

export default SearchButton;

