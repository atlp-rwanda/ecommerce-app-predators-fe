import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/action/ProductAction';

interface Product {
  id: number;
  name: string;
  price: string;
  picture_urls: string;
  rating: any;
}

export const Card = (product: Product) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

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
    <div className="border border-gray-300 p-4 mb-4 rounded-lg hover:shadow-lg cursor-pointer">
      <div className="md:grid-cols-2">
        <div className="w-fit h-2/3 mx-auto">
          <img src={product.picture_urls} alt="" className="w-full h-44" />
        </div>
        <div className="w-full mt-4 md:mt-0 md:pl-4 mx-auto">
          <label className="block text-primary font-semibold text-left">
            {product.name}
          </label>
          <label className="block text-left">{product.price}</label>
          <div className="flex justify-center md:justify-start">
            {renderRatingStars(parseInt(product.rating))}
          </div>
        </div>
      </div>
    </div>
  );
};
