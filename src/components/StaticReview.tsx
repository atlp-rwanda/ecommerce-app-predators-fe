import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

export default function staticReview(props: { src: string | undefined }) {
  return (
    <>
      <div className="flex justify-evenly lg:w-[80em]  md:gap-20  md:mt-[-16em] xs:ml-20 xs:gap-20 xs:w-[50em] xs:mt-[-10em]">
        <div className="w-48 h-60 rounded border border-gray-300 md:ml-16">
          <img
            className=" flex justify-around mt-10"
            src={props.src}
            alt="img"
          />
        </div>
        <div className="w-48 h-60 rounded border border-gray-300">
          <img
            className=" flex justify-around mt-10"
            src={props.src}
            alt="img"
          />
        </div>
        <div className="w-48 h-60 rounded border border-gray-300">
          <img
            className=" flex justify-around mt-10"
            src={props.src}
            alt="img"
          />
        </div>

        <div className="space-y-3">
          <p className="">Sku: 01133-9-9</p>
          <p>
            Category:{' '}
            <span className="text-gray-500 text-sm">
              20% Off, 49% Off Alex remote
            </span>
          </p>
          <p className="flex p">
            Share:{' '}
            <span className="flex gap-4 text-gray-500 px-2 py-1.5">
              <FaGoogle />
              <FaFacebook />
              <IoLogoWhatsapp />
            </span>
          </p>

          <div className="py-6 ">
            <button className=" border border-gray-500 rounded-md px-2 py-1 ">
              Description
            </button>
            <button className="text-white border border-gray-500 rounded-md px-6 py-1 mt-5 bg-primary">
              Reviews
            </button>
          </div>
        </div>
      </div>
      <div className=" lg:h-32 lg:rounded lg:border lg:border-gray-300  lg:px-20 lg:mx-40 lg:my-10 md:h-32 md:rounded md:border md:border-gray-300  md:px-20 md:ml-20 md:mx-[-10em] md:my-10 xs:h-32 xs:rounded xs:border xs:border-gray-300  xs:px-20 xs:ml-20 xs:my-10 xs:mx-[-20em]">
        <h1 className="text-primary font-semibold mt-3">Customer Reviews</h1>
        <p className="text-sm text-gray-500 py-3">No Review yet</p>
        <button className="text-white border border-gray-500 rounded px-6  mt-2 bg-primary">
          {' '}
          WriteReviews
          <hr />
        </button>
      </div>
    </>
  );
}
