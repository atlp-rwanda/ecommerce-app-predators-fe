import { toast } from "react-toastify";
import axios, { AxiosResponse } from "axios";

interface PaymentURL {
  data: {
    url: string;
  };
}

async function getStripeURL(token: string): Promise<string | undefined> {
  const URL = "https://ecommercepredators.onrender.com/api/pay/order";

  try {
    const response: AxiosResponse<PaymentURL> = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const paymentURL = response?.data?.data?.url;

    return paymentURL;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(`Request failed: ${error.message}`);
    } else {
      throw error;
    }
  }
}

export const redirectToPaymentPage = async (token: string): Promise<void> => {
  try {
    const paymentURL = await getStripeURL(token);
    if (paymentURL) {
      window.location.replace(paymentURL);
    } else {
      toast.error("Payment URL not found");
    }
  } catch (error) {
    if (error){
       toast.error(`Failed to redirect to payment page: ${error}`);
       throw error;
    }
   
  }
};
