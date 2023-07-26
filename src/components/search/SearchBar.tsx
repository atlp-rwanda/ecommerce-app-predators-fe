import React from 'react';

interface SearchBarProps {
  onSearchText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchText }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    onSearchText(text);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search anything"
        className="py-3 px-6 rounded-full text-black outline-none w-96"
        onChange={handleInputChange}
      />
      <button className="bg-tertiary px-8 rounded-full hover:bg-yellow-600 absolute right-0 py-3">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
