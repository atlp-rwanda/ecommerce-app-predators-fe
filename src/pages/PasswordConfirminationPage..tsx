import React, { useState, ChangeEvent, FormEvent } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import reset from '../../src/assets/reset-image.svg';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updatePassword } from '../redux/action/UserAction';

const PasswordConfirminationPage: React.FC = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_Password] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirm_Password(e.target.value);
  };
  const resetData = {
    password: password,
    confirm_password: confirm_password,
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirm_password) {
      // Display an error message for password mismatch
      toast.error('Please Enter Same Password');
    }
    dispatch(updatePassword(resetData) as any)
      .then(() => {
        setPassword('');
        setConfirm_Password('');
      })
      .catch(() => {
        setLoading(true);
      });
  };

  return (
    <div className="flex flex-col h-screen md:flex-row">
      <div className="w-full md:w-1/2 h-full bg-white">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-4/5 md:w-2/3">
            <form className="mt-10 shadow-custom p-9 mx-auto rounded-xl">
              <h1 className="text-2xl font-bold text-customBlue mb-6">
                Reset Password
              </h1>
              <div className="flex flex-col mb-6">
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  placeholder="New Password"
                  autoComplete="off"
                  value={password}
                  onChange={handleNewPasswordChange}
                  className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-customBlue"
                />
              </div>
              <div className="flex flex-col mb-6">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  autoComplete="off"
                  value={confirm_password}
                  onChange={handleConfirmPasswordChange}
                  className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-customBlue"
                />
              </div>
              <div className="flex w-full">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-tertiary hover:bg-customBlueLight rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2 uppercase">
                    {isLoading ? 'Loading...' : 'Submit'}
                  </span>
                </button>
              </div>
              <h3 className="my-4 text-gray-500 font-bold text-sm sm:text-base tracking-wide">
                Now You Can{' '}
                <span className="cursor-pointer text-customBlue hover:text-red-700">
                  <a href="#" className="text-tertiary underline">
                    Sign in
                  </a>
                </span>
              </h3>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 h-full bg-customBlue">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl font-bold text-white mb-6">
            Predators E-commerce Web
          </h1>
          <h3 className="text-white text-sm sm:text-base text-center w-3/4 font-bold">
            Please enter your new password and confirm it to reset your
            password.
          </h3>
          <img src={reset} alt="" className="w-1/2 h-1/2 mt-10" />
        </div>
      </div>
    </div>
  );
};

export default PasswordConfirminationPage;
