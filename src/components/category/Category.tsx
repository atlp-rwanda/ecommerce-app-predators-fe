import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { mapCategories, Product, groupObjectsByProperty } from "../../utils/miscFunctions";


export default function Category() {

  const HomeProducts = useSelector((state: {HomeProducts: {data: {products: Product[]}}}) => state.HomeProducts.data.products);
  const [categories, setCategories] = useState<Product[][]>([]);

  useEffect(() => {
    if(HomeProducts?.length) {
      const newProducts: Product[] = [];
      let groups: Product[][] = [];
      for(let i = 0; i < HomeProducts.length; i++) {
        let index = i % HomeProducts.length;
        newProducts.push(HomeProducts[index]);
      }
      groups = groupObjectsByProperty(newProducts, "category_id");
      setCategories(groups);
    }
  }, [HomeProducts]);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 330.5;
    }
  }
  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 330.5;
    }
  }

  return (
    <div className=" relative mt-10 font-Poppins mx-[7%]">
      <div onClick={handleScrollRight} className=" absolute h-7 w-7 bg-gray-200 rounded-full flex items-center justify-center top-[42%] left-0 cursor-pointer hover:bg-tertiary hover:text-white"><i className="material-symbols-rounded cursor-pointer">arrow_back</i></div>
      <div onClick={handleScrollLeft} className=" absolute h-7 w-7 bg-gray-200 rounded-full flex items-center justify-center top-[42%] right-0 cursor-pointer hover:bg-tertiary hover:text-white"><i className="material-symbols-rounded cursor-pointer">arrow_forward</i></div>
      <div className=" scroll-smooth snap-mandatory flex gap-3 overflow-hidden" ref={containerRef}>
        {categories.map((category) => mapCategories(category[0].category_id)!="Unknown"?(
          <div className=" snap-center flex gap-16 border border-gray rounded-xl px-5 py-2 items-center" key={category[0].category_id}>
            <div className="rounded-full overflow-hidden w-24 h-24">
              <img src={`${category[0].picture_urls[0]}`}/>
            </div>
            <div className=" text-customBlue">
              <p className="font-semibold text-lg">{mapCategories(category[0].category_id)}</p>
              <p>{`(${category.length} items)`}</p>
            </div>
          </div>
        ): "")}
      </div>
    </div>
  )
}
