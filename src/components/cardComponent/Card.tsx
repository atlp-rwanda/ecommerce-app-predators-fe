import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/action/ProductAction';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: string;
  picture_urls: string[];
  rating: string;
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
    <Link to={`/viewProduct/${product.id}`} className="border p-3 border-gray-300 rounded-lg hover:shadow-lg cursor-pointer flex flex-col gap-3 justify-between w-60">
      <div className='rounded-lg overflow-hidden w-52 h-52'>
        <img src={product.picture_urls[0]} alt="" className='w-full h-full object-contain'/>
      </div>
      <div>
        <p className=" break-words text-primary font-semibold text-left">
          {product.name}
        </p>
        <p className=" break-words text-left">{product.price}</p>
      </div>
      <div className="flex justify-center md:justify-start">
        {renderRatingStars(parseInt(product.rating))}
      </div>
    </Link>

  );
};
