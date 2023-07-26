import { useSelector } from 'react-redux';
import { Product, mapCategories } from '../../utils/miscFunctions';
import { useEffect, useState } from 'react';

export default function FlashSale() {
  const HomeProducts = useSelector(
    (state: { HomeProducts: { data: { products: Product[] } } }) =>
      state.HomeProducts.data.products
  );
  const [products, setProducts] = useState<Product[]>([]);
  let randomNumber = Math.floor(Math.random() * 10);

  useEffect(() => {
    if (HomeProducts?.length) {
      const newProducts: Product[] = [];
      for (let i = 0; i < 3; i++) {
        let index = i % HomeProducts.length;
        newProducts.push(HomeProducts[index]);
      }
      setProducts(newProducts);
      randomNumber %= newProducts.length;
    }
  }, [HomeProducts]);
  return (
    <div className="px-[7%] mt-10 font-Poppins relative">
      <div className="relative rounded-lg overflow-hidden h-72">
        <img
          className=" w-full h-full object-cover -scale-x-100"
          src={`${products[randomNumber ? randomNumber : 0]?.picture_urls[0]}`}
          alt=""
        />
        <div className="absolute w-full h-full top-0 rounded-lg overflow-hidden flex justify-end">
          <div className="w-2/5 h-full flex flex-col items-center justify-around py-10">
            <button
              type="button"
              className=" py-2 px-5 rounded-2xl bg-tertiary text-white text-[12px] cursor-pointer"
            >
              New{' '}
              {`${mapCategories(
                products[randomNumber ? randomNumber : 0]?.category_id
              )}`}
            </button>
            <p className="text-customBlue font-bold text-3xl">
              Sale up to 50% off
            </p>
            <p className="text-white text-[14px]">Don't Miss!</p>
            <button
              type="button"
              className=" py-2 px-6 rounded-2xl bg-tertiary text-white text-[12px] cursor-pointer"
            >
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
