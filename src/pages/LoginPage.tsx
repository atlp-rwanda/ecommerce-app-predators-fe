/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  selectStatus,
  selectRole,
  selectError,
  reset,
} from '../redux/reducers/authSlice';
import loginImg from '../assets/login.svg';
import { login } from '../redux/action/authAction';

const LoginPage = () => {
  // States definition
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginWithGoogle, SetLoginWithGoogle] = useState<boolean>(false);
  const role = useSelector(selectRole);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    status === 'succeeded' &&
      toast.success('You have signed in.') &&
      setIsloading(false);
    status === 'failed' && toast.error(error) && setIsloading(false);
    status === 'loading' && setIsloading(true);
    dispatch(reset());
  }, [status, error, dispatch]);

  const handleCredentialLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }) as any)
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch(() => {
        // console.log(status);
      });
  };

  const redirectToGoogleSSO = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    let timer: NodeJS.Timeout | null = null;
    const googleURI = 'https://ecommercepredators.onrender.com/api/login/google';
    const newWindow = window.open(googleURI, '_blank', 'width=500,height=600');
    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log('User Authenticated. ');
          if (timer) clearInterval(timer);
          SetLoginWithGoogle((prev) => !prev);
          // redirect to homepage here
        }
      }, 500);
    }
  };

  // Redirect the user to the appropriate page based on their role
  if (loginWithGoogle) return <Navigate to="/" />;
  if (role ===0 || role) {
    if (role === 2) {
      return <Navigate to="/" />;
    } else if (role === 0) {
      return <Navigate to="/admin/users" />;
    }
    else{
      return <Navigate to="/vendor" />;
    }
  }
  

  // Helper functions
  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  const canLogin = Boolean(email) && Boolean(password) && isValidEmail(email);

  // UI definition
  return (
    <div className="w-screen h-screen flex">
      <div className="lg:w-3/5 w-full h-screen flex flex-col items-center justify-center bg-white">
        <form className="lg:h-fit h-3/5 lg:w-1/2 w-4/5 bg-white flex flex-col space-y-6 shadow-lg rounded-md p-8">
          {isloading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <>
              <Link
                to="/"
                className="text-sm sm:text-base text-yellow-400 mb-2"
              >
                Home
              </Link>
              <div className="flex flex-col gap-2">
                <h1 className="capitalize text-sm sm:text-base font-bold">
                  sign in
                </h1>
                <p className="text-xs text-slate-400">
                  Sign up for the internal platform
                </p>
                <button
                  type="submit"
                  onClick={redirectToGoogleSSO}
                  className="text-sm sm:text-base bg-amber-500 text-white rounded-lg w-full py-1.5 hover:bg-amber-600 hover:shadow-md transition-colors duration-300"
                >
                  Sign In with google
                </button>
                <p className="text-xs text-slate-400 text-center">
                  Or login with email address
                </p>
              </div>
              <div className="flex flex-col gap-2 p-0 m-0">
                <input
                  name="email"
                  placeholder="Email"
                  type="email"
                  autoComplete="off"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="text-sm sm:text-base text-slate-500 border border-gray-300 placeholder-gray-500 placeholder-opacity-50 rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
                <input
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="text-sm sm:text-base text-slate-500 border border-gray-300 placeholder-gray-500 placeholder-opacity-50 rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
                <Link to="/" className="text-xs text-slate-400 ">
                  Forgot password?
                </Link>
              </div>
              <div className="flex flex-col gap-2 p-0 m-0">
                <button
                  type="submit"
                  onClick={handleCredentialLogin}
                  disabled={!canLogin}
                  className="bg-amber-500 text-white text-sm sm:text-base rounded-lg w-full py-1.5 hover:bg-amber-600 hover:shadow-md transition-colors duration-300"
                >
                  Sign In
                </button>
                <span className="flex gap-x-2">
                  <p className="text-xs text-slate-400">
                    Don't have an account?
                  </p>
                  <Link to="/register-page" className="text-xs text-yellow-700">
                    Sign Up
                  </Link>
                </span>
              </div>
            </>
          )}
        </form>
      </div>
      <div className="relative w-2/5 h-full bg-customBlue hidden lg:block">
        <h1 className="absolute top-[20%] left-[25%] text-4xl w-3/5 text-white capitalize font-extrabold">
          Everything you are. In one simple link.
        </h1>
        <img
          src={loginImg}
          alt="Login"
          className="absolute top-[40%] left-[10%] w-4/5"
        />
      </div>
    </div>
  );
};

export default LoginPage;
