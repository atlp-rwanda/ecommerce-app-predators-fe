/* eslint-disable no-irregular-whitespace */
export default function staticReview(props: {
  src: string | undefined;
  review: string;
}) {
  return (
    <>
      <div className="flex flex-col gap-10 md:flex-row lg:flex-row justify-center mt-10">
        <div className="w-52 h-fit rounded border border-gray-300 ">
          <img className=" flex justify-around" src={props.src} alt="img" />
        </div>
        <div className="w-52 h-fit  rounded border border-gray-300  ">
          <img className=" flex justify-around" src={props.src} alt="img" />
        </div>
        <div className="w-52 h-fit rounded border border-gray-300 ">
          <img className=" flex justify-around" src={props.src} alt="img" />
        </div>

        <div className="space-y-3 ">
          <p className="">Sku: 01133-9-9</p>
          <p>
            Category:{' '}
            <span className="text-gray-500 text-sm">
              20% Off, 49% Off Alex remote
            </span>
          </p>

          <div className="py-6 flex flex-col gap-3 justify-stretch lg:flex-row md:flex-row">
            <button className=" border border-gray-500 rounded-md px-2 py-1 ">
              Description
            </button>
          </div>
        </div>
      </div>
      <div className=" lg:rounded lg:border lg:border-gray-300  lg:px-20 lg:mx-40 lg:my-10 md:h-32 md:rounded md:border md:border-gray-300  ">
        <h1 className="text-primary font-semibold mt-3">Customer Reviews</h1>
        <p className="text-sm text-gray-500 py-3">{props.review}</p>
      </div>
    </>
  );
}
