import { useState, SetStateAction, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateProduct, getProductById } from '../redux/action/UpdateProduct';
import { Link, useParams } from 'react-router-dom'; 
import Layout from '../Layout';

interface ProductTypes {
  id: number;
  name: string;
  description: string;
  price: number;
  picture_urls: string[];
  available: boolean;
  expiryDate: string;
  instock: number;
}

export default function UpdateProduct() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const product = useSelector((state: any) => state.getProductById.data);
  const [uname, setName] = useState(product?.data?.item.name);
  const [udescription, setDescription] = useState(product?.data?.item.description);
  const [uprice, setPrice] = useState(product?.data?.item.price);
  const [upicture_urls, setPicture_urls] = useState<string[]>([product?.data?.item.picture_urls]);
  const [uavailable, setAvailable] = useState(product?.data?.item.available);
  const [uinstock, setInstock] = useState(product?.data?.item.instock);
  const [uexpiryDate, setExpiryDate] = useState(product?.data?.item.expiryDate);


  const productData = {
    id: Number(id),
    name: uname,
    description: udescription,
    price: uprice,
    picture_urls: upicture_urls,
    available: uavailable,
    instock: uinstock,
    expiryDate: uexpiryDate,
  };


  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(() => e.target.value)
  };

  const handleDescription = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setDescription(e.target.value);
  };

  const handlePictureUrls = (e: { target: { value: string } }) => {
    const urls = e.target.value.split(','); // Split the value using a delimiter (e.g., comma)
    setPicture_urls(urls);
  };

  const handlePrice = (e: { target: { value: string } }) => {
    const value = parseInt(e.target.value);
    setPrice(value);
  };
  const handleExpirationDate = (e: { target: { value: string } }) => {
    const value = (e.target.value);
    setExpiryDate(value);
  };

  const handleInstock = (e: { target: { value: string } }) => {
    const value = parseInt(e.target.value);
    setInstock(value);
  };
  const handleAvailable = (e: { target: { value: string } }) => {
    const value = JSON.parse(e.target.value);
    setAvailable(value);
  };


  useEffect(() => {
    dispatch(getProductById(id as unknown as number) as any).then((res: any) => {
      setName(res?.payload?.data?.item?.name);
      setDescription(res?.payload?.data?.item?.description);
      setPrice(res?.payload?.data?.item?.price);
      setPicture_urls(res?.payload?.data?.item?.picture_urls);
      setAvailable(res?.payload?.data?.item?.available);
      setInstock(res?.payload?.data?.item?.instock);
      setExpiryDate(res?.payload?.data?.item?.expiryDate.slice(0, 10));
    });
  }, [dispatch, id]);

  // handle submit function

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      await dispatch(updateProduct(productData as ProductTypes) as any);
      console.log(productData)
      toast.success('Updated successfully');
      setLoading(true);

      setName('');
      setDescription('');
      setPrice(0);
      setPicture_urls([]);
      setAvailable('');
      setInstock(0);
      setExpiryDate(new Date());
      window.location.replace('/vendor');
    } catch (error) {
      console.log(error);
      toast.error('Error updating');
      setLoading(false);
    }
  };


  const [, setShowForm] = useState(false);

  return (

    <Layout> 

      <div>
        <div
          id="container_form"
          className="flex justify-center m-10 items-center"
        >
          <form className=" flex flex-col shadow-custom p-9  rounded-xl w-[80%]">
            <div className="flex justify-between w-full p-2 ">
              <h3 className="font-semibold">Update product</h3>
              <hr/>
              <div>
                <Link
                  to="/vendor"
                  onClick={() => setShowForm(false)}
                  className="flex items-center justify-center shadow-sm  ring-1 ring-inset ring-red-300 bg-red-300 text-red-600 rounded-full w-8 h-8"
                >
                  <i
                    id="cancel_btn"
                    className="material-symbols-rounded"
                  >
                    close
                  </i>
                </Link>
              </div>
            </div>

            <div className="mt-2">
              <input
                type="text"
                value={uname}
                onChange={handleName}
                placeholder="Product Name"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-2 ">
              <textarea
                  rows={6}
                value={udescription}
                onChange={handleDescription}
                placeholder="Product description"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="mt-2">
                <input
                  type="text"
                  value={uprice}
                  onChange={handlePrice}
                  placeholder="Price"
                  className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <input
                  type="number"
                  value={uinstock}
                  onChange={handleInstock}
                  placeholder="Instock"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <select
                  value={uavailable}
                  onChange={handleAvailable}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="true">Available</option>
                  <option value="false">Not Available</option>
                </select>



              </div>
            </div>
            <div className="mt-2">
              <input
                type="date"
                value={uexpiryDate}
                onChange={handleExpirationDate}
                placeholder="expiry date"
                className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-2">
              <input
                type="url"
                value={upicture_urls}
                onChange={handlePictureUrls}
                placeholder="Image Urls"
                className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <Link
              to={`/vendor`}
              type="submit"
              onClick={handleSubmit}
              className="flex items-center justify-center  text-white  bg-customBlue  rounded mt-3 py-2 w-21"
            >
              <span className="mr-2 uppercase">{isLoading ? "Loading ..." : "UPDATE"}</span>
            </Link>
          </form >

        </div >

      </div >

    </Layout >
  );


}


// console.log('fixing')