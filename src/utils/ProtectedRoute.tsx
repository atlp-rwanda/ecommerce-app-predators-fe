import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProtectedRoute = (props: {
    children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {
        const userToken = localStorage.getItem('token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            navigate('/login');
            toast.error('You are unauthorized. Please log in.'); // Display error notification
            return;
        }

        const tokenData = JSON.parse(atob(userToken.split('.')[1])); // Decode the token data
        const currentTimestamp = Math.floor(Date.now() / 1000); // Current timestamp in seconds
        if (tokenData.exp && currentTimestamp > tokenData.exp) {
            setIsLoggedIn(false);
            navigate('/login');
            toast.error('Your session has expired. Please log in again.'); // Display error notification
            return;
        }

        setIsLoggedIn(true);
    };

    useEffect(() => {
        checkUserToken();
    }, []);

    return (
        <>
            {isLoggedIn ? props.children : null}
            <ToastContainer /> {/* Add the ToastContainer component here */}
        </>
    );
};

export default ProtectedRoute;
