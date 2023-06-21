import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action/CartAction';
import { Product } from '../components/ProductListing';
import PlayGame from '../components/PlayGame';

function AddToCart({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleSizeChange = (selectedSize: string) => {
    setSize(selectedSize);
  };

  const handleAddToCart = () => {
    const item = {
      product_id:product.id,
      quantity: quantity,
    };
    console.log(product.id);

    dispatch(addToCart(item) as any)
      .then(() => {
        setConfirmation(`Added ${quantity} ${item.product_id}  to the cart.`);

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
    <PlayGame/>
    <div className=" my-40 ml-[40em]">
      {/* Color selection */}
      <div className="flex">
        <label>Color:</label>
        <div className="ml-2">
          <button
            onClick={() => handleColorChange('black')}
            className={`${
              selectedColor === 'black'
                ? 'border-2 border-gray-500'
                : 'border-none'
            } bg-black rounded-full w-2 h-2 mr-2`}
          ></button>

          <button
            onClick={() => handleColorChange('yellow')}
            className={`${
              selectedColor === 'yellow'
                ? 'border-2 border-gray-500'
                : 'border-none'
            } bg-yellow-500 rounded-full w-2 h-2`}
          ></button>
        </div>
      </div>
      {/* Size selection */}
      <div className="flex mt-4">
        <label>Size:</label>
        <div className="flex gap-2 ml-2 ">
          <div
            className={`border size-box ${
              size === '30' ? 'selected border-2' : ''
            }`}
            onClick={() => handleSizeChange('30')}
          >
            30
          </div>
          <div
            className={`border size-box ${
              size === '46' ? 'selected border-2' : ''
            }`}
            onClick={() => handleSizeChange('46')}
          >
            46
          </div>
          <div
            className={`border size-box ${
              size === '48' ? 'selected border-2' : ''
            }`}
            onClick={() => handleSizeChange('48')}
          >
            48
          </div>
          <div
            className={`border size-box ${
              size === '50' ? 'selected border-2' : ''
            }`}
            onClick={() => handleSizeChange('50')}
          >
            50
          </div>
        </div>
      </div>
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
    </div>
    </>
  );
}
export default AddToCart;
