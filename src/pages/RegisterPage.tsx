import { SetStateAction, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser } from '../redux/action/UserAction';
import store from '../../src/assets/store.svg';
import { Link } from 'react-router-dom';

/**
 * RegisterPage component for user registration
 */
interface UserData {
  name: string;
  email: string;
  gender: string;
  password: string;
  preferred_currency: string;
  preferred_language: string;
}

interface RootState {
  user: {
    status: string;
  };
}

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch();
  const registrationStatus = useSelector(
    (state: RootState) => state.user.status
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currency1, setCurrency1] = useState('');
  const [gender, setGender] = useState('');
  const [language, setLanguage] = useState('');
  const [isLoading, setLoading] = useState(false);

  /**
   * Handle name change event
   * @param {Object} e - The event object
   */
  const handleNameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setName(e.target.value);
  };

  console.log(registrationStatus);

  /**
   * Handle email change event
   * @param {Object} e - The event object
   */
  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  /**
   * Handle password change event
   * @param {Object} e - The event object
   */
  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  /**
   * Handle currency change event
   * @param {Object} e - The event object
   */
  const handleCurrency1Change = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setCurrency1(e.target.value);
  };

  /**
   * Handle language change event
   * @param {Object} e - The event object
   */
  const handleLanguageChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setLanguage(e.target.value);
  };

  /**
   * Handle gender change event
   * @param {Object} e - The event object
   */
  const handleGenderChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setGender(e.target.value);
  };

  const isValidEmail = (email: string) => {
    // Simple email validation using regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  /**
   * Submit the registration form
   * @param {Object} e - The event object
   */
  /**
   * User data object
   */
  const userData: UserData = {
    name: name,
    email: email,
    gender: gender,
    password: password,
    preferred_currency: currency1,
    preferred_language: language,
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    // Perform custom validation
    if (name.trim() === '') {
      toast.error('Please enter your name.');
      setLoading(false);
      return;
    }

    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email.');
      setLoading(false);
      return;
    }

    if (password.trim() === '') {
      toast.error('Please enter a password.');
      setLoading(false);
      return;
    }

    if (currency1.trim() === '') {
      toast.error('Please select a currency.');
      setLoading(false);
      return;
    }

    if (language.trim() === '') {
      toast.error('Please select a language.');
      setLoading(false);
      return;
    }

    if (gender.trim() === '') {
      toast.error('Please enter your gender.');
      setLoading(false);
      return;
    }

    dispatch(registerUser(userData) as any)
      .then(() => {
        // Reset form
        setName('');
        setEmail('');
        setPassword('');
        setCurrency1('');
        setLanguage('');
        setGender('');
        setLoading(false); // Set loading state to false after registration is completed
      })
      .catch(() => {
        setLoading(false); // Set loading state to false if registration fails
      });
  };

  // Perform custom validation
  return (
    <div data-testid="registerPage" className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 h-full bg-white">
        <div className="flex flex-col items-center justify-center h-full">

          <div className="w-customWidth md:w-1/2 ">
            <form className="mt-10 shadow-custom p-9 w-customWidth md:w-96 rounded-xl">
              <h1 className="text-3xl font-bold text-customBlue mb-6">
                Create a new account
              </h1>

              <div className="flex flex-col mb-6">
                {/* sign in with google button and google icon in it */}
                <button
                  type="button"
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-tertiary hover:bg-red-700 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2 uppercase">Sign in with Google</span>
                </button>

                <h3 className="my-4 text-gray-500 text-center font-bold text-sm sm:text-base tracking-wide">
                  {' '}
                  or
                </h3>

                <h3 className="my-1 text-gray-500 font-bold text-sm sm:text-base tracking-wide">
                  Use your email to create a new account
                </h3>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  autoComplete="off"
                  onChange={handleNameChange}
                  value={name}
                  required
                  className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-customBlue"
                />
              </div>

              <div className="flex flex-col mb-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  autoComplete="off"
                  onChange={handleEmailChange}
                  value={email}
                  required
                  className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-customBlue"
                />
              </div>

              <div className="flex flex-col mb-6">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  autoComplete="off"
                  onChange={handlePasswordChange}
                  value={password}
                  required
                  className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-customBlue"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <select
                  name="currency"
                  id="currency"
                  onChange={handleCurrency1Change}
                  value={currency1}
                  required
                  className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-customBlue"
                >
                  <option value="">Currency</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="RWF">RWF</option>
                </select>

                <select
                  name="language"
                  id="language"
                  onChange={handleLanguageChange}
                  value={language}
                  required
                  className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-customBlue"
                >
                  <option value="">Language</option>
                  <option value="English">English</option>
                  <option value="French">French</option>
                </select>

                <select
                  name="gender"
                  id="gender"
                  onChange={handleGenderChange}
                  value={gender}
                  required
                  className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-customBlue"
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-tertiary hover:bg-customBlueLight rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2 uppercase">
                    {isLoading ? 'Loading...' : 'Sign up'}
                  </span>
                </button>
              </div>

              <h3 className="my-4 text-gray-500 font-bold text-sm sm:text-base tracking-wide">
                Already have an account?{' '}
                <span className="cursor-pointer text-customBlue hover:text-red-700">
                  <Link to="/login" className="text-tertiary">
                    Sign in
                  </Link>
                </span>
              </h3>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-1/2 h-full bg-customBlue">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl font-bold text-white mb-6">
            Welcome to our store
          </h1>

          <h3 className="text-white text-sm sm:text-base text-center w-3/4">
            Discover a wide selection of high-quality products that cater to
            your needs. Explore our collection and find the perfect items that
            elevate your lifestyle.
          </h3>

          <img src={store} alt="Store" className="w-1/2 h-1/2 mt-10" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
