import { SetStateAction, useState, } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser } from '../redux/action/UserAction';
import store from '../../src/assets/store.svg'
const RegisterPage = () => {
    const dispatch = useDispatch();
    const registrationStatus = useSelector((state: any) => state.user.status);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currency1, setCurrency1] = useState('');
    const [gender, setGender] = useState('');
    const [language, setLanguage] = useState('');
    const [isLoading, setLoading] = useState(false);
    const handleNameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
    };

    const handleCurrency1Change = (e: { target: { value: SetStateAction<string>; }; }) => {
        setCurrency1(e.target.value);
    };

    const handleLanguageChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setLanguage(e.target.value);
    };
    const handleGenderChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setGender(e.target.value);
    };
    const userData = {
        name: name,
        email: email,
        gender: gender,
        password: password,
        preferred_currency: currency1,
        preferred_language: language
    };
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true
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
    return (
        <div className="flex h-screen">
            <div className="w-1/2 h-full bg-white">
                <div
                    className="flex flex-col items-center justify-center h-full ">
                    <ToastContainer />
                    <div className="w-1/2">
                        <form className="mt-10 shadow-custom p-9 w-96 rounded-xl ">
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
                                <h3 className="my-4 text-gray-500 text-center font-bold text-sm sm:text-base tracking-wide ">
                                    {' '}
                                    or
                                </h3>
                                <h3 className="my-1 text-gray-500 font-bold text-sm sm:text-base tracking-wide">
                                    Use your email to create new account
                                </h3>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your Name"
                                    autoComplete="off"
                                    onChange={handleNameChange}
                                    value={name}
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
                                    className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-customBlue"
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <input
                                    type="text"
                                    name="currency"
                                    id="currency"
                                    placeholder="Currency"
                                    autoComplete="off"
                                    onChange={handleCurrency1Change}
                                    value={currency1}
                                    className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-customBlue"
                                />
                                <select
                                    name="language"
                                    id="language"
                                    onChange={handleLanguageChange}
                                    value={language}
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
                                    <span className="mr-2 uppercase">{isLoading ? 'Loading...' : 'Sign up'}</span>
                                </button>
                            </div>
                            <h3 className="
                my-4 text-gray-500 font-bold text-sm sm:text-base tracking-wide
              ">
                                Already have an account? <span className="
                cursor-pointer text-customBlue hover:text-red-700
              ">
                                    <a href="#" className="text-tertiary">Sign in</a>
                                </span>
                            </h3>
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-full bg-customBlue">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-3xl font-bold text-white mb-6">
                        Welcome to our store
                    </h1>
                    <h3 className="text-white text-sm sm:text-base text-center w-3/4">
                        Discover a wide selection of high-quality products that cater to your needs. Explore our collection and find the perfect items that elevate your lifestyle.
                    </h3>
                    <img src={store} alt="" className='
                w-1/2 h-1/2 mt-10
            ' />
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
