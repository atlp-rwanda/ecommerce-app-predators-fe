/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action/CartAction';
import PlayGame from '../components/PlayGame';
import { useParams } from 'react-router';

interface Item {
  product_id: number;
  quantity: number;
}

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

  const handleAddToCart = () => {
    const item: Item = {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      product_id: parseInt(id!),
      quantity: quantity,
    };

    dispatch(addToCart(item) as any)
      .then(() => {
        setConfirmation(` This product has been added your the cart.`);

        // Clear confirmation after 3 seconds
        setTimeout(() => {
          setConfirmation('');
        }, 3000);
      })
      .catch(() => {
        setConfirmation('Failed to add item to cart.');
      });
  };

  return (
    <>
      <PlayGame />
      <div className=" lg:ml-[60em]   lg:w-80 lg:my-80 lg:mt-[-10em] md:ml-[30em]   md:w-80 md:my-80 md:mt-[-15em]  xs:ml-[30em]   xs:w-80 xs:my-60 xs:mt-[-9.5em]">
        {/* Quantity selection */}
        <div className="py-3 mt-3">
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
          className="bg-[#EDA415] rounded text-white px-2 py-1 mt-5"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <p>{confirmation}</p>
        <hr className="lg:my-20 xs:my-10 " />
      </div>
    </>
  );
}
export default AddToCart;