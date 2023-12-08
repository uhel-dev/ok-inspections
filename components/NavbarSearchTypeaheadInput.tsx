import React, { useState } from "react";
import Link from "next/link";

const NavbarSearchTypeaheadInput = ({ suggestionsIn, isLoaded, placeholder, pathPrefix }: any) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length > 0) {
      const filteredSuggestions = suggestionsIn
        .filter((sug: string) => sug.toLowerCase().includes(value.toLowerCase()));
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className={`p-3`}>
      {!isLoaded && <div>Loading locations...</div>}
      {isLoaded && (
        <div>
          <input
            placeholder={placeholder}
            className={`p-2 placeholder-black text-black font-uk-reg-plates-bold-caps w-full bg-24h-yellow text-sm xl:text-base`}
            type="text"
            id={`navbar-search-by-car`}
            value={inputValue}
            onChange={handleInputChange}
          />
          {suggestions.length > 0 && (
            <div className="bg-white shadow-md mt-2 max-h-60 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <Link key={index} href={`${pathPrefix === "/tyres/tyre-services-in" ? `${pathPrefix}-${suggestion.replaceAll(" ", "-")}` : `${pathPrefix}/${suggestion.replaceAll(" ", "-")}`}`.toLowerCase()}>
                  <div
                    className="p-2 hover:bg-gray-100 cursor-pointer text-black"
                    onClick={() => setInputValue(suggestion)}
                  >
                    {suggestion}
                  </div>
                </Link>
              ))}
            </div>
          )}

          { suggestions.length === 0 && inputValue.length > 0 && (
            <div className={`p-2 text-white bg-red-600`}>
              No results found for `{inputValue}`
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavbarSearchTypeaheadInput