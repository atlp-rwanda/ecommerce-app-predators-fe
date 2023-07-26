/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action/CartActions';
import { toast } from 'react-toastify';
//import PlayGame from '../components/PlayGame';
import { useParams } from 'react-router';
import { addToWishList } from '../redux/action/WishlistAction';
interface Item {
  product_id: number;
  quantity: number;
}
// eslint-disable-next-line no-irregular-whitespace
function AddToCart() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [confirmation, setConfirmation] = useState('');
  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };
  // Previous code...
  const handleAddToCart = () => {
    const item: Item = {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      product_id: parseInt(id!),
      quantity: quantity,
    };
    dispatch(addToCart(item) as any)
      .then(() => {
        /*  setConfirmation(`This product has been added to your cart.`); */
        toast.success('Product added to cart!', {
          position: 'top-right',
          autoClose: 3000,
        });
        setTimeout(() => {
          setConfirmation('');
        }, 3000);
      })
      .catch(() => {
        /*  setConfirmation('Failed to add item to cart.'); */
        toast.error('Failed to add item to cart.', {
          position: 'top-right',
          autoClose: 3000,
        });
      });
  };
  // Remaining code...

  const handleAddToWishlist = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const productId = parseInt(id!);
    dispatch(addToWishList(productId) as any)
      .then((response: any) => console.log('Added To Wish List', response))
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {});
  };
  return (
    <>
      <div className="">
        {/* Quantity selection */}
        <div className="">
          <label>Quantity:</label>
          <button className="border px-1 ml-2" onClick={handleQuantityDecrease}>
            -
          </button>
          <span className="border px-2">{quantity}</span>
          <button className="border px-1" onClick={handleQuantityIncrease}>
            +
          </button>
        </div>
        <button
          className="bg-[#EDA415] hover:bg-yellow-400 duration-500  rounded text-white px-2 py-1 mt-5 gap-2"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button className="bg-[#EDA415] hover:bg-yellow-400 duration-500  rounded text-white px-2 py-1 mt-5  ml-6">
          Buy it Now
        </button>
        <button
          className="bg-[#EDA415] hover:bg-yellow-400 duration-500 rounded text-white px-2 py-1 mt-5  ml-6"
          onClick={handleAddToWishlist}
        >
          Add to Wishlist
        </button>
        <p>{confirmation}</p>
        <hr className="mt-4" />
      </div>
    </>
  );
}
export default AddToCart;
