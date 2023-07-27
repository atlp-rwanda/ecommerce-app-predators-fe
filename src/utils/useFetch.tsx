import axios from 'axios';
import { useState } from 'react';

const useFetch = (url: string) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleGoogle = async (response: any) => {
    setLoading(true);
    console.log(response);
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setLoading(false);
        return res.json();
      })
      .then((data) => {
        if (data) {
          console.log(data);
        }
        throw new Error(data?.message || data);
      })
      .catch((err) => {
        setErr(err);
        console.log(err);
      });

    try {
      const response = await axios.get('/api/auth/google');
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error('Google authentication failed.', error);
    }
  };

  return { loading, err, handleGoogle };
};

export default useFetch;
