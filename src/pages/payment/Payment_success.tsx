import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment_success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-lg max-w-md">
          <h2 className="text-2xl mb-4">Payment Successful</h2>
          <p className="text-gray-700 mb-4">
            Thank you for your payment! Your transaction was successful.
          </p>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-600 mx-auto mb-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 00-2 0v5a1 1 0 002 0V6zm-1 6a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>
            <a
              href="/"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment_success;
