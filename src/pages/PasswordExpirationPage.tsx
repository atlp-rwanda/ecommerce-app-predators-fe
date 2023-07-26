import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { passwordExpirationAction } from '../redux/action/passwordExpirationAction';

function PopupMessage() {
  const dispatch = useDispatch();
  const { passwordExpiration, status } = useSelector(
    (state: any) => state.passwordExpiration
  );

  useEffect(() => {
    dispatch(passwordExpirationAction() as any);
  }, [dispatch]);

  // console.log('this backend feedback', passwordExpiration);

  if (passwordExpiration && passwordExpiration.expired === false) {
    return <div></div>;
  }

  if (!status) {
    return null; // Don't render anything if there is no popup message
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-900">
      <div className="bg-white rounded-lg p-8 shadow-md">
        <p className="text-center mb-4 border border-gray-300 p-4">
          <span className="text-red-500 font-bold">
            Please change your password. It has expired!
          </span>
        </p>

        <p className="text-center mb-4">
          <span className="text-gray-600">Click here to continue</span>
        </p>

        <Link to="/confirm-password-page">
          <button className="bg-tertiary hover:bg-red-500 text-white font-semibold py-2 px-4 rounded w-full toastify-color-warning">
            Change Password
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PopupMessage;
