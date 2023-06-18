import axios, { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';

export interface fetchData {
  loading: boolean;
  response: string | null;
  err: AxiosError | Error | string | null;
  handleFetch: (url: string, data: BillAddress, token: string) => Promise<void>;
}

export interface BillAddress {
  country: string | null;
  street_address: string | null;
  town: string | null;
  state: string | null;
  post_code: string | null;
  email: string | null;
}


const useCheckout = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string | null>(null);

  const handleFetch = async (url: string, data: BillAddress, token: string) => {
    try {
      setLoading(true)
      const response: AxiosResponse = await axios.post(url, data, {
        headers: {
          'Content-Type': "application/json",
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setResponse(JSON.stringify(response.status));
      console.log(JSON.stringify(response.data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('Error message: ', error);
        console.log('Error message: ', error.response?.data);
        setErr(error.response?.data.message);
      } else {
        console.log('Unexpected error: ', error);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, response, err, handleFetch };
};

export default useCheckout;
