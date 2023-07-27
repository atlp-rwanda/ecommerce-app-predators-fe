import { useNavigate } from 'react-router-dom';
import red_exclamation from '../../assets/images/red_exclamation.png'
import { useEffect } from 'react';
const Payment_fail = () => {
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      'https://ecommercepredators.onrender.com/api/pay/cancel'
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  function handleSubmit(event: React.MouseEvent): void {
    event.preventDefault();
    console.log('Redirecting to checkout page...');
    navigate('/checkout');
  }
  return (
    <div>
      <div className="bg-gray-100">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <form className="flex flex-col bg-white p-8 shadow-lg max-w-md">
            <h1 className="text-2xl mb-4">Payment failed</h1>
            <p className="text-center text-gray-700 mb-4">
              Looks like your transaction did not go through! Please try again.
            </p>
            <img src={red_exclamation} alt="failed-transaction" className='mx-auto h-12 w-12 mb-4' />
            <button onClick={handleSubmit} type="submit" className='mx-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded capitalize'>
              go back
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Payment_fail;
