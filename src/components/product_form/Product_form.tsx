import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/action/ProductAction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, ChangeEvent } from 'react';
import { MultipleFilesUpload } from '..';
import { setImages } from '../../redux/reducers/imageSlice';


interface ProductData {
    name: string,
    description: string,
    category_id: number,
    picture_urls: Array<string>,
    expiryDate: string,
    price: number,
    instock: number,
    available: boolean,
}

export default function Product_form({ visible, onClose }: { visible: boolean, onClose: () => void }) {
  const dispatch = useDispatch();
  const images = useSelector((state: {imageStore: {images: string[]}}) => state.imageStore.images)
  const [name, setName] = useState('');
  const [description, setDescr] = useState('');
  const [instock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('0');
  const [available, setAvailabe] = useState(false);
  const [date, setDate] = useState('');
  const [isLoading, setLoading] = useState(false);

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  
  function handleDescriptionChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setDescr(e.target.value);
  }
  
  function handleStockChange(e: ChangeEvent<HTMLInputElement>) {
    setStock(e.target.value);
  }
  
  function handlePriceChange(e: ChangeEvent<HTMLInputElement>) {
    setPrice(e.target.value);
  }
  
  function handleCategoryChange(e: ChangeEvent<HTMLSelectElement>) {
    setCategory(e.target.value);
  }
  
  function handleAvailabilityChange(e: ChangeEvent<HTMLSelectElement>) {
    setAvailabe(e.target.value === 'true');
  }
  
  function handleDateChange(e: ChangeEvent<HTMLInputElement>) {
    setDate(e.target.value);
  }

  const product: ProductData = {
    name: name,
    description: description,
    category_id: Number(category),
    picture_urls: images,
    expiryDate: date,
    price: Number(price),
    instock: Number(instock) | 0,
    available: available,
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setLoading(true);

    if (name.trim() === '') {
      toast.error('Please enter Product Name.');
      setLoading(false);
      return;
    }

    if (description.trim() === '') {
      toast.error('Please enter a Product Description.');
      setLoading(false);
      return;
    }

    if (Number(price) === 0) {
      toast.error('Please enter Product Price.');
      setLoading(false);
      return;
    }

    if (Number(category) === 0) {
      toast.error('Please enter Product Category.');
      setLoading(false);
      return;
    }

    if (images.length === 0 || "") {
      toast.error('Please enter Product Images.');
      setLoading(false);
      return;
    }

    if (date === '') {
      toast.error('Please enter Product Expiry Date.');
      setLoading(false);
      return;
    }
    dispatch(addProduct(product) as any)
    .then(() => {
        setName("");
        setDescr("");
        setCategory('');
        setDate('');
        setAvailabe(false);
        setPrice('');
        dispatch(setImages([]))
        setStock('');
        setLoading(false);
        onClose();
    })
    .catch(() => {
        setLoading(false);
    })
  }

  const handleOnClose = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.target as HTMLDivElement;
    if (id === 'container_form' || id === 'cancel_btn') onClose();
  };

    if(!visible) return null
  return (
    <div id='container_form' onClick={handleOnClose} className="container_form bg-black/30 h-screen w-full fixed inset-0 backdrop-blur-sm flex justify-center z-50 overflow-auto">
        <div className="add_product_form bg-white max-w-lg px-10 py-5 rounded-xl m-10 absolute">
            <div className="form__header flex flex-col">
                <i onClick={handleOnClose} id='cancel_btn' className="cancel_btn material-symbols-rounded cursor-pointer self-end">cancel</i>
                <p className="title font-light text-center mb-8 text-xl">New Product</p>
            </div>
            <form className='flex flex-col gap-5 font-light'>
                <input className='focus:outline-none shadow-md h-12 border border-black/10 rounded-lg outline-0 placeholder:font-light placeholder:text-gray-600/80 p-2 pl-4' type="text" onChange={handleNameChange} value={name} placeholder='Product Name' name="name" id="" />
                
                <textarea className='focus:outline-none shadow-md h-26 border border-black/10 rounded-lg outline-0 placeholder:font-light placeholder:text-gray-600/80 p-2 pl-4' onChange={handleDescriptionChange} value={description} placeholder='Product Description' name="description" id="" />
                <MultipleFilesUpload/>
                <div className='flex justify-between flex-wrap gap-5'>
                    <input className='focus:outline-none shadow-md h-12 border border-black/10 rounded-lg outline-0 placeholder:font-light placeholder:text-gray-600/80 p-2 pl-4' type="number" onChange={handlePriceChange} value={price} placeholder='Product Price' name="price" id="" />
                    <input className='focus:outline-none shadow-md h-12 border border-black/10 rounded-lg outline-0 placeholder:font-light placeholder:text-gray-600/80 p-2 pl-4' type="number" onChange={handleStockChange} value={instock} placeholder='Instock' name="stock" id="" />
                </div>
                <select className='focus:outline-none shadow-md h-12 border border-black/10 rounded-lg outline-0 p-2 pl-4' onChange={handleCategoryChange} defaultValue="0" name="category" id="" >
                  <option value="0">Select Product Category</option>
                  <option value="1">Electronics</option>
                  <option value="2">Headphones</option>
                  <option value="3">Gaming</option>
                  <option value="4">Phone accessories</option>
                  <option value="5">Phones</option>
                  <option value="6">Computers</option>
                  <option value="7">Tablets</option>
                  <option value="8">Home appliances</option>
                </select>
                <input className='focus:outline-none shadow-md h-12 border border-black/10 rounded-lg outline-0 placeholder:font-light placeholder:text-gray-600/80 p-2 pl-4' type="date" onChange={handleDateChange} value={date} placeholder='Expiry Date' name="expiry_date" id="" />
                <select className='focus:outline-none shadow-md h-12 border border-black/10 rounded-lg outline-0 font-light text-gray-600/80 p-2 pl-4' name="availability" onChange={handleAvailabilityChange} value={available ? 'true' : 'false'} id="">
                    <option value="true">Available</option>
                    <option value="false">Not Available</option>
                </select>
                <button type='button' className='text-white bg-customBlue w-fit py-3 px-8 rounded-xl font-extralight self-center disabled:cursor-no-drop disabled:bg-customBlue/50' onClick={handleSubmit}> {isLoading? "Loading ..." : "Save"}</button>
            </form>
        </div>
    </div>
  )
}
