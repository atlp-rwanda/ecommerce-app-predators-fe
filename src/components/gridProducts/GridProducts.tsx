import { useSelector } from "react-redux";
import { Product } from "../../utils/miscFunctions";
import { useEffect, useState } from "react";

export default function GridProducts() {
    const HomeProducts = useSelector((state: {HomeProducts: {data: {products: Product[]}}}) => state.HomeProducts.data.products);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        if(HomeProducts?.length) {
        const newProducts: Product[] = [];
        for (let i = 0; i < 3; i++) {
            let index = i % HomeProducts.length;
            newProducts.push(HomeProducts[index]);
        }
        setProducts(newProducts);
        }
    }, [HomeProducts]);
        const renderRatingStars = (filledStars: number) => {
            const maxStars = 5;
            const stars = [];

            for (let i = 1; i <= maxStars; i++) {
                if (i <= filledStars) {
                stars.push(<span key={i}>⭐️</span>);
                } else {
                stars.push(<span key={i}>☆</span>);
                }
            }

            return stars;
        };

  return (
    <div className="mx-[7%] mt-10 flex gap-3 flex-col md:flex-row">
        <div className="flex gap-4 border border-gray-300 p-3 rounded-lg max-[640px]:flex-col hover:shadow-lg py-10 md:w-[65%]">
            <div className="rounded-lg overflow-hidden md:w-[50%]">
                <img src={products[2]?.picture_urls[0]} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="flex flex-col gap-2 justify-between">
                <p className=" font-Poppins font-semibold text-customBlue cursor-default">{`${products[2]?.name}`}</p>
                <p className="font-Poppins font-semibold text-gray-500 cursor-default">${`${products[2]?.price}`}</p>
                <p className="cursor-default">{renderRatingStars(0)}</p>
                <div className="flex gap-3">
                    <div className="rounded-full text-tertiary bg-blue-100 h-10 w-10 flex items-center justify-center font-bold cursor-pointer">57</div>
                    <div className="rounded-full text-tertiary bg-blue-100 h-10 w-10 flex items-center justify-center font-bold cursor-pointer">11</div>
                    <div className="rounded-full text-tertiary bg-blue-100 h-10 w-10 flex items-center justify-center font-bold cursor-pointer">33</div>
                    <div className="rounded-full text-tertiary bg-blue-100 h-10 w-10 flex items-center justify-center font-bold cursor-pointer">59</div>
                </div>
                <div className="flex gap-5">
                    <div className="flex bg-blue-200 rounded-xl h-10 items-center justify-center gap-2 p-2 cursor-pointer">
                        <span className=" font-Poppins text-[12px] cursor-pointer">Add to cart</span><span className="material-symbols-rounded rounded-full bg-tertiary text-white p-1 cursor-pointer">shopping_cart</span>
                    </div>
                    <div className=" bg-blue-200 px-3 rounded-xl flex justify-center items-center h-10 cursor-pointer">
                        <span className="material-symbols-rounded cursor-pointer">visibility</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-row md:flex-col gap-3 md:w-[35%] max-[580px]:flex-col">
            {products.slice(0,2).map((product, idx) => {
                return (<div key={idx} className="border p-3 border-gray-300 rounded-lg hover:shadow-lg cursor-pointer flex flex-col gap-3 justify-between grow md:flex-row">
                    <div className='rounded-lg overflow-hidden w-52 h-32 self-center relative max-[580px]:w-[90%]'>
                        <img src={`${product.picture_urls[0]}`} alt="" className=' h-full w-full object-contain'/>
                    </div>
                    <div className="flex flex-col gap-4 w-[50%] self-center">
                        <p className=" break-words text-primary font-Poppins text-left">{product.name}</p>
                        <p className=" break-words text-left font-Poppins font-semibold text-gray-500">${product.price}</p>
                        <div className="flex">
                            {renderRatingStars(0)}
                        </div>
                    </div>
                </div>
                )
            })
            }
        </div>
    </div>
  )
}
