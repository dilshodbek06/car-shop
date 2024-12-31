import { useRef, useState } from "react";
import "./search-input.scss";
import { LuSearch } from "react-icons/lu";
import apiClient from "../../helpers/apiClient";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const inputRef = useRef();

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggestions based on input value
    if (value.trim() === "") {
      setFilteredSuggestions([]);
    } else {
      setIsSearching(true);
      const res = await apiClient(`/product`, "get", null, {
        name: value,
      });
      setIsSearching(false);
      const filtered = res?.data?.content?.map((item) => item.name);
      setFilteredSuggestions(filtered);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
    inputRef.current.focus();
  };

  return (
    <div className="my-search-input ">
      <div className="mt-10 relative  w-full">
        <div className="input-wrapper">
          <input
            placeholder="Qidirish..."
            value={inputValue}
            onChange={handleInputChange}
            ref={inputRef}
          />
          <LuSearch className="search-btn" />
        </div>

        <div>
          {isSearching ? (
            <div className="loading-result bg-white">Loading...</div>
          ) : (
            filteredSuggestions.length > 0 && (
              <div className="shadow-lg absolute w-full bg-white z-50">
                {filteredSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
