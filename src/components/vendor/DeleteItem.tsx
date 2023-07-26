import  {useState,Fragment } from 'react'
import { Dialog,Transition  } from '@headlessui/react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { useAppDispatch } from '../../redux/store/hooks';
import { productRemove } from '../../redux/action/ProductAction';

  type Item = { 
    productId: number,
    reason: string
  } 

  
const DeleteItem  = (props:Item) => {  
    const dispatch = useAppDispatch();

    let [isOpen, setIsOpen] = useState(false);
    let [loading, setLoading] = useState(false); 
    const [reason, setReason] = useState('');
 
    const data: Item ={
      reason:reason,
      productId:props.productId
    } 
 

    const handleDelete = async (e: { preventDefault: () => void }) => {
       e.preventDefault();
        setLoading(true);
        try {
         if(reason == 'delete'){  
          
           await dispatch(productRemove({data}) as any)
              .then(() => { 
                setLoading(false);  
                setReason('');
                setIsOpen(false);
                window.location.reload();

              })
              .catch(() => {
                setLoading(false);
                setIsOpen(true)
              });
            
          }else{ 
            toast.error('You need to confirm action'); 
            setLoading(false);
          };
        } catch (error) {
          setLoading(false);
          setIsOpen(true);
        }

       return;
         
      };
  
  return (
    <div> 
        <i onClick={() => setIsOpen(true)} className='material-symbols-rounded cursor-pointer text-red-500 cursor-pointer'>delete</i>
           <Dialog open={isOpen} onClose={() => setIsOpen(false)} as="div" className="relative z-10">
            <div className="fixed inset-0   backdrop-blur-sm bg-opacity-75 transition-opacity"></div>
              <Transition
                as={Fragment}
                show={isOpen}
                enter="transform transition duration-[400ms]"
                enterFrom="opacity-0 rotate-[-120deg] scale-50"
                enterTo="opacity-100 rotate-0 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 rotate-0 scale-100 "
                leaveTo="opacity-0 scale-95 "
              >
              <form onSubmit={handleDelete} className="bg-black/30 h-full w-full  backdrop-blur-sm fixed inset-0 z-1=50 overflow-y-auto ease-out duration-300">
              <div className="flex min-h-full  justify-center p-4 text-center items-center sm:p-0"> 

                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 sm:mx-0 sm:h-10 sm:w-10">
                        <i  className="material-symbols-rounded cursor-pointer">warning</i>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Remove item</h3>
                      <div className="mt-2">
                          <p className="text-sm text-gray-500">Are you sure you want to delete this item?  This action cannot be undone.</p>
                      </div>
                      <div className="mt-0">
                        <label className='text-sm '>Type <kbd className="border bg-slate-400">delete</kbd> to confirm</label>
                        <input onChange={e => setReason(e.target.value)} placeholder='Type delete to confirm' value={reason} className='w-full border border-primary shadow-sm ring-0 outline-0 placeholder:font-light'/> 
                      </div>
                      </div>
                  </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 flex gap-3">
                  <button  className="
                  py-1 px-3 rounded-lg font-semibold bg-red-600  text-white  hover:bg-red-100 hover:text-red-600
                  " >
                    {loading? 'loading ...' : 'confirm'} </button>
                  <button onClick={() => setIsOpen(false)}>Cancel</button>
                  </div>
                  </div> 
              </div>
              </form>
            </Transition>
            </Dialog>
        
    </div>
  )
}

export default DeleteItem
