import { useSelector } from "react-redux";
import { Card } from ".."
import { useEffect, useState, MouseEvent } from "react";
import { groupObjectsByProperty, Product, mapCategories } from "../../utils/miscFunctions";


export default function Popular() {
const HomeProducts = useSelector((state: {HomeProducts: {data: {products: Product[]}}}) => state.HomeProducts.data.products);
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string | null>("All");
  const [categories, setCategories] = useState<Array<number | string>>([]);

  const handleCategoryChange= (event: MouseEvent<HTMLButtonElement>) => {
    const currentTarget = event.currentTarget;
    if (currentTarget) {
      const id = currentTarget.getAttribute('id');
      setCategory(_prevCat => id)
    }
  }

  useEffect(() => {
    if(HomeProducts?.length) {
      const newProducts: Product[] = [];
      for (let i = 0; i < HomeProducts.length; i++) {
        let index = i % HomeProducts.length;
        newProducts.push(HomeProducts[index]);
      }
      let _categories: Product[][] = groupObjectsByProperty(newProducts, "category_id")
      const catArr: Array<number | string> = []
      _categories.map(item => catArr.push(mapCategories(item[0].category_id)))
      catArr.unshift("All");
      setCategories(catArr.filter((arrr: number | string) => arrr!="Unknown"));
    }
  }, [HomeProducts])

  useEffect(() => {
    if(HomeProducts?.length) {
      const newProducts: Product[] = [];
      for (let i = 0; i < HomeProducts.length; i++) {
        let index = i % HomeProducts.length;
        newProducts.push(HomeProducts[index]);
      }
      if(category==="All"){
        setProducts(_prevValues => newProducts);
      }
      else {
        let __categories: Product[][] = groupObjectsByProperty(newProducts, "category_id");
        let filteredProducts: Product[] = [];
      
        __categories.map(item => {
          if (mapCategories(item[0].category_id) === category) {
            filteredProducts = item;
          }
        });
        setProducts(_prev => filteredProducts);
      }
    }
  }, [HomeProducts, category]);

  return (
    <div className="px-[7%] mt-10 flex flex-col">
      <div className="flex max-[820px]:flex-col gap-5 justify-between font-Poppins">
        <p className="text-customBlue font-semibold text-2xl whitespace-nowrap">Popular products</p>
        <div className="flex gap-5 flex-wrap">
          {categories.map((cat, idx) => {
            return <button key={`${idx}${cat}`} id={`${cat}`} onClick={handleCategoryChange} type="button" className={`px-5 py-1 h-[30px] rounded-3xl border border-customBlue ${cat == category? "text-white bg-customBlue" : ""} hover:text-white hover:bg-customBlue text-customBlue text-sm`}>{cat}</button>
          })}
        </div>
      </div>
      <div className={`flex flex-wrap gap-10 mt-8`}>
        {
          products.map((product: Product, index) => (
            <Card
              key={`${product.id} ${index}`}
              name={product.name}
              price={product.price}
              picture_urls={product.picture_urls}
              id={product.id}
              rating={"0"}
            />
          ))}
      </div>
    </div>
  )
}
