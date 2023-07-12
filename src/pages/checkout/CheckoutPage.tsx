import { useState } from 'react';
import Dropdown from '../../components/checkout/Dropdown';
import Input from '../../components/checkout/Input';
import Rightside from '../../assets/images/Right-side.jpg';
import useRestCountries, {
  FetchRegionType,
} from '../../utils/useRestCountries';
import { Link, Navigate } from 'react-router-dom';
import useCheckout, { BillAddress } from '../../utils/useCheckout';
import { toast } from 'react-toastify';
import { redirectToPaymentPage } from '../../utils/payment_funcs';
import { getTokenFromLS } from '../../utils/token_funcs';

const CheckoutPage = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedTown, setSelectedTown] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedStreetAddress, setSelectedStreetAddress] = useState<
    string | null
  >(null);
  const [selectedPostCode, setSelectedPostCode] = useState<string | null>(null);
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);

  const { data: countries } = useRestCountries(FetchRegionType.Countries);
  const { data: capitals } = useRestCountries(FetchRegionType.Capitals);
  const states: string[] = ['No state', 'California', 'Shanghai'];

  const address: BillAddress = {
    country: selectedCountry,
    state: selectedState,
    town: selectedTown,
    street_address: selectedStreetAddress,
    post_code: selectedPostCode,
    email: selectedEmail,
  };

  const { loading, err, response, handleFetch: checkout } = useCheckout();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const checkoutURL = 'https://ecommercepredators.onrender.com/api/checkout';
    const token = getTokenFromLS('token');
    if (token) {
      checkout(
        checkoutURL,
        address,
        token
      );
    }
  }

  if (loading) {
    // Handle loading state
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (err) {
    // Handle error state
    toast.error(err);
    return <Navigate to="/" />;
  }

  if (response) {
    // Handle success state
    toast.success(response);
    const token = getTokenFromLS('token');
    if (token) {
      redirectToPaymentPage(token);
    } else {
      toast.error('Missing Login Token.');
      <Navigate to="/" />;
    }
  }

  return (
    <div className="bg-white h-screen">
      <div className="flex flex-col md:flex-row">
        <div className="bg-blue-500 min-h-screen hidden lg:block w-1/2">
          <img
            src={Rightside}
            alt="delivery man"
            className="h-screen w-full object-cover"
          />
        </div>
        <div className="bg-white w-full lg:w-1/2 overflow-hidden">
          <div className="min-h-screen max-h-screen flex flex-col items-center justify-center">
            <div className="p-10 rounded shadow-lg max-w-md">
              <Link
                to={'/'}
                className="self-start text-blue-800 font-medium underline decoration-solid mb-4"
              >
                Back
              </Link>
              <h1 className="text-black font-medium text-md text-center uppercase mb-4">
                {' '}
                Billing address
              </h1>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center gap-4 h-full"
              >
                <Dropdown
                  label="Country"
                  options={countries}
                  onSelect={setSelectedCountry}
                />
                <Dropdown
                  label="Capital"
                  options={capitals}
                  onSelect={setSelectedTown}
                />
                <Input
                  label="street address"
                  defaultVal="kg 157 ave"
                  callback={setSelectedStreetAddress}
                />
                <Dropdown
                  label="State"
                  options={states}
                  onSelect={setSelectedState}
                />
                <Input
                  label="postal code"
                  defaultVal="12345"
                  callback={setSelectedPostCode}
                />
                <Input
                  label="email"
                  defaultVal="someone@myemail.com"
                  callback={setSelectedEmail}
                />
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-7 py-1 mt-4 rounded"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
