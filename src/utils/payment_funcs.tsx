import axios, { AxiosResponse } from 'axios';

async function getStripeURL(token: string) {
  const URL = 'https://ecommercepredators.onrender.com/api/pay/order';
  const response: AxiosResponse = await axios.get(URL, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const paymentURL = response?.data?.url;
  return paymentURL;
}

export const redirectToPaymentPage = async (token: string): Promise<void> => {
  const paymentURL = await getStripeURL(token);

  if (paymentURL) {
    console.log(paymentURL);
    window.location.replace(paymentURL);
  }
  return;
};


