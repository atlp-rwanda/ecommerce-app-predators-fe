import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../redux/action/ProductAction';
import AddToCart from '../pages/AddToCart';
import StaticReview from '../components/StaticReview';
import { FaCheck } from 'react-icons/fa';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/Footer';

function ViewProduct() {
  const { id } = useParams(); // Get the product ID from the URL params
  const selectedProduct = useSelector(
    (state: any) => state.CollectionProducts?.data
  );
  // console.log(selectedProduct)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductById(id) as any);
  }, [dispatch, id]);
  if (!selectedProduct) {
    return <p>Product loading....</p>;
  }
  // console.log(selectedProduct?.data?.item?.review);
  return (
    <>
      <div className="grid">
          <Navigation />
        <div className="">
          <div className="flex flex-col container mx-auto">
            <div className="flex-1 p-1 font-semibold text-md w-full bg-white">
              <div className="flex gap-2 justify-start">
                <div className="">Home</div>
                <div className="text-center mt-1">
                  <i className="material-symbols-rounded cursor-pointer">
                    arrow_forward_ios
                  </i>
                </div>
                <div className="">All categories</div>
                <div className="text-center mt-1">
                  <i className="material-symbols-rounded cursor-pointer">
                    arrow_forward_ios
                  </i>
                </div>
                <div className="">{selectedProduct?.data?.item?.name}</div>
              </div>
            </div>
            <div className="w-full p-5 mt-5 max-sm:-mt-10">
              <div className="flex flex-col md:flex-row lg:flex-row justify-center">
                <div className="w-[100%] lg:w-[50%] md:w-[40%] h-[400px] flex justify-center align-baseline">
                  <img
                    src={selectedProduct?.data?.item?.picture_urls[0]}
                    alt="img"
                  />
                </div>
                <div className="w-[100%] lg:w-[50%] md:w-[50%] ">
                  <div className="flex flex-col gap-4 ">
                    <h1 className="font-semibold text-2xl text-primary">
                      {selectedProduct?.data?.item?.name}
                    </h1>

                    <p className="w-[80%] font-extralight">
                      {selectedProduct?.data?.item?.description}
                    </p>
                    <p className="font-medium">
                      $ {selectedProduct?.data?.item?.price}
                    </p>
                    <div className="text-yellow-500 flex">
                      <svg
                        className="w-6 h-6 "
                        fill="yellow"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 1l2.583 5.236 5.83.849-4.227 4.127 1.001 5.816L10 16.355l-5.187 3.673 1.001-5.816L1.587 7.085l5.83-.849L10 1zm0 2l-2.238 4.54-4.973.723 3.61 3.533-.853 4.976L10 14.283l4.454 2.329-.853-4.976 3.61-3.533-4.973-.723L10 3zm0 3.764L11.018 9.3l.32.334.32-.334L14 7.524l-1.096-1.394.193-.383 1.459-.105-1.527-.076L14 4.164l-.095-1.43-1.527.076 1.459.105.193.383L14 7.524l-1.018.24L10 6.764z" />
                      </svg>
                      <svg
                        className="w-6 h-6"
                        fill="yellow"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 1l2.583 5.236 5.83.849-4.227 4.127 1.001 5.816L10 16.355l-5.187 3.673 1.001-5.816L1.587 7.085l5.83-.849L10 1zm0 2l-2.238 4.54-4.973.723 3.61 3.533-.853 4.976L10 14.283l4.454 2.329-.853-4.976 3.61-3.533-4.973-.723L10 3zm0 3.764L11.018 9.3l.32.334.32-.334L14 7.524l-1.096-1.394.193-.383 1.459-.105-1.527-.076L14 4.164l-.095-1.43-1.527.076 1.459.105.193.383L14 7.524l-1.018.24L10 6.764z" />
                      </svg>
                      <svg
                        className="w-6 h-6"
                        fill="yellow"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 1l2.583 5.236 5.83.849-4.227 4.127 1.001 5.816L10 16.355l-5.187 3.673 1.001-5.816L1.587 7.085l5.83-.849L10 1zm0 2l-2.238 4.54-4.973.723 3.61 3.533-.853 4.976L10 14.283l4.454 2.329-.853-4.976 3.61-3.533-4.973-.723L10 3zm0 3.764L11.018 9.3l.32.334.32-.334L14 7.524l-1.096-1.394.193-.383 1.459-.105-1.527-.076L14 4.164l-.095-1.43-1.527.076 1.459.105.193.383L14 7.524l-1.018.24L10 6.764z" />
                      </svg>
                      <svg
                        className="w-6 h-6"
                        fill="yellow"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 1l2.583 5.236 5.83.849-4.227 4.127 1.001 5.816L10 16.355l-5.187 3.673 1.001-5.816L1.587 7.085l5.83-.849L10 1zm0 2l-2.238 4.54-4.973.723 3.61 3.533-.853 4.976L10 14.283l4.454 2.329-.853-4.976 3.61-3.533-4.973-.723L10 3zm0 3.764L11.018 9.3l.32.334.32-.334L14 7.524l-1.096-1.394.193-.383 1.459-.105-1.527-.076L14 4.164l-.095-1.43-1.527.076 1.459.105.193.383L14 7.524l-1.018.24L10 6.764z" />
                      </svg>
                      <svg
                        className="w-6 h-6"
                        fill="yellow"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 1l2.583 5.236 5.83.849-4.227 4.127 1.001 5.816L10 16.355l-5.187 3.673 1.001-5.816L1.587 7.085l5.83-.849L10 1zm0 2l-2.238 4.54-4.973.723 3.61 3.533-.853 4.976L10 14.283l4.454 2.329-.853-4.976 3.61-3.533-4.973-.723L10 3zm0 3.764L11.018 9.3l.32.334.32-.334L14 7.524l-1.096-1.394.193-.383 1.459-.105-1.527-.076L14 4.164l-.095-1.43-1.527.076 1.459.105.193.383L14 7.524l-1.018.24L10 6.764z" />
                      </svg>
                      <label htmlFor="star">No reviews</label>
                    </div>
                    <p className="flex">
                      Availability:
                      <FaCheck className="text-green-500 ml-2" size={24} />{' '}
                      <span className="text-green-500">In stock</span>
                    </p>
                    <hr className="mt-3 mb-3 " />
                  </div>
                  <AddToCart />
                </div>
              </div>

              <StaticReview
                src={selectedProduct?.data?.item?.picture_urls}
                review={selectedProduct?.data?.item?.reviews}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default ViewProduct;