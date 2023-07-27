import {
  Navigation,
  Category,
  News,
  FlashSale,
  Testimony,
  Popular,
  Carousel,
  GridProducts,
} from '../components';
import { FaCrown, FaCube } from 'react-icons/fa';
import { RiShieldKeyholeFill } from 'react-icons/ri';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getHomeProducts } from '../redux/action/HomeProducts';


function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(getHomeProducts() as any);
  }, []);

  return (
    <>
    <div>
      <Navigation  />
      <div className="px-[7%]">
        <Carousel/>
      </div>
      <Category />
      <Popular />
      <FlashSale />
      <GridProducts />
      <div className="mx-[7%] mt-10 bg-blue-100 rounded-lg flex items-center justify-evenly py-7 flex-wrap gap-2">
        <div className="flex items-center gap-10">
          <FaCube className="scale-[250%] text-tertiary" />
          <div className=" text-customBlue font-Poppins">
            <p className="text-sm font-semibold">Free delivery</p>
            <p className="text-[12px]">on order above $5,000</p>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <FaCrown className="scale-[250%] text-tertiary" />
          <div className=" text-customBlue font-Poppins">
            <p className="text-sm font-semibold">Best quality</p>
            <p className="text-[12px]">best quality in low price</p>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <RiShieldKeyholeFill className="scale-[250%] text-tertiary" />
          <div className=" text-customBlue font-Poppins">
            <p className="text-sm font-semibold">Best quality</p>
            <p className="text-[12px]">best quality in low price</p>
          </div>
        </div>
      </div>
      <Testimony />
      <News />
      <Footer/>
    </div>
    {/* <PopupMessage/> */}
    </>
  )
}

export default LandingPage;
