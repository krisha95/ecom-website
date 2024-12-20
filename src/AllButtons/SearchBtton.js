import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { DataContext } from "../hooks/DataContext";

const SearchButton = () => {
  const { setSearchTermState} = useContext(DataContext);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchItem = async () => {
    if (searchTerm) {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );
        const data = await response.json();
        setSearchTermState(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <div className="relative w-full">
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={handleSearchItem}
        type="text"
        className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full border border-gray-300 "
        placeholder="Search for products, brands, and more..."
      />
      <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default SearchButton;
