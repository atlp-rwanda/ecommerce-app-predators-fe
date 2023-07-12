import { useState } from "react";

interface Props {
  options: string[];
  label: string;
  onSelect: (country: string | null) => void;
}

const Dropdown = ({ options, label, onSelect }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string>('')

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>): void {
    onSelect(event.target.value);
    setSelectedOption(event.target.value);
  }

  return (
    <div className="flex flex-col gap-0.5 w-full">
      <label
        htmlFor="dropdown"
        className="text-gray-600 font-medium text-xs font-poppins uppercase"
      >
        {label}
      </label>
      <select
        name="dropdown"
        value={selectedOption}
        onChange={handleSelect}
        className="px-4 border text-gray-600 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 md:w-auto"
      >
        <option selected disabled value="">
          Select {label}
        </option>
        {options.map((option, key) => (
          <option key={key} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
