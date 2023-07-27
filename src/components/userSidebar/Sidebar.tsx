import { useState } from 'react';
import { SearchData, Item, ResetData, ProductData } from './searchData';

function Sidebar() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleCheckboxChange = (itemId: number) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  return (
    <div className="fixed font-Poppins overflow-y-scroll  w-64 p-4 mt-32">
      <div className="mt-4">
        <div className="flex justify-between mb-3">
          <div className="flex gap-1">
            <label className="text-primary font-semibold ">categories</label>
          </div>
          <div className="text-gray-500">Reset</div>
        </div>
        {SearchData.map((item: Item) => (
          <div
            className="flex items-center gap-8 justify-between"
            key={item.id}
          >
            <div className="flex">
              <input
                type="checkbox"
                className="h-6 w-6 mr-1 my-1 rounded-full bg-slate-300" // https://codegeex.cn https://codegeex.cn https://codegeex.cn https://codegeex.cn https://"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <label className="mt-1">{item.category}</label>
            </div>
            <label className="mt-1">{item.reset}</label>
          </div>
        ))}
      </div>
      <hr className="border-gray-300 mt-3" />
      <div className="flex">
        <label className="text-primary font-semibold mt-2">Availability</label>
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex gap-1">
          <label>0</label>
          <label>selected</label>
        </div>
        <div className="text-gray-500">Reset</div>
      </div>
      <div className="mt-3">
        {ResetData.map((items: ResetData) => (
          <div
            className="flex items-center gap-8 justify-between"
            key={items.id}
          >
            <div className="flex">
              <input
                type="checkbox"
                className="h-6 w-6 mr-1 my-1 rounded-full bg-slate-300" // https://codegeex.cn https://codegeex.cn https://codegeex.cn https://codegeex.cn https://"
                checked={selectedItems.includes(items.id)}
                onChange={() => handleCheckboxChange(items.id)}
              />
              <label className="mt-1">{items.InStock}</label>
            </div>
            <label className="mt-1">{items.reset}</label>
          </div>
        ))}
      </div>
      <hr className="border-gray-300 mt-3" />{' '}
      <div className="flex">
        <label className="text-primary font-semibold mt-2">Product type</label>
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex gap-1">
          <label>0</label>
          <label>selected</label>
        </div>
        <div className="text-gray-500">Reset</div>
      </div>
      <div className="mt-3">
        {ProductData.map((items: ProductData) => (
          <div
            className="flex items-center gap-8 justify-between"
            key={items.id}
          >
            <div className="flex">
              <input
                type="checkbox"
                className="h-6 w-6 mr-1 my-1 rounded-full bg-slate-300" // https://codegeex.cn https://codegeex.cn https://codegeex.cn https://codegeex.cn https://"
                checked={selectedItems.includes(items.id)}
                onChange={() => handleCheckboxChange(items.id)}
              />
              <label className="mt-1">{items.watch}</label>
            </div>
            {items.reset}
          </div>
        ))}
      </div>
      <hr className="border-gray-300 mt-3" />{' '}
      <div className="flex">
        <label className="text-primary font-semibold mt-2">Brand</label>
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex gap-1">
          <label>0</label>
          <label>selected</label>
        </div>
        <div className="text-gray-500">Reset</div>
      </div>
      <div className="mt-3">
        {ProductData.map((items: ProductData) => (
          <div
            className="flex items-center gap-8 justify-between"
            key={items.id}
          >
            <div className="flex">
              <input
                type="checkbox"
                className="h-6 w-6 mr-1 my-1 rounded-full bg-slate-300" // https://codegeex.cn https://codegeex.cn https://codegeex.cn https://codegeex.cn https://"
                checked={selectedItems.includes(items.id)}
                onChange={() => handleCheckboxChange(items.id)}
              />
              <label className="mt-1">{items.watch}</label>
            </div>
            {items.reset}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
