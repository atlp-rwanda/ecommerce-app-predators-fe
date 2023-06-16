import{ useState,useEffect } from 'react' 
import { DisplayNotificationAction } from '../../redux/action/NotificationAction';
import { useAppDispatch,useAppSelector } from '../../redux/store/hooks';  
import moment from 'moment';

type ItemData = {
    id: number,
    user_id:number,
    product_id: number,
    message: string,
    is_read: boolean,
    receive_notifications: boolean,
    createdAt: string, 
}
const Notification =  ()=> {
    const NotificationData = useAppSelector((state): { data: null } | { data: { notifications: ItemData[] } } => state.notifications);

    // 

    const dispatch = useAppDispatch();
    const [isPaneOpen, setIsPaneOpen] = useState(false); 
    let [loading, setLoading] = useState(true);  

  useEffect(() => { 
     dispatch(DisplayNotificationAction()as any) 
 
  }, [dispatch])
  
    const openNotificationPane = () =>{
        setIsPaneOpen(true); 
        setLoading(false)   
      }

    const  ClosenotificationPane = ()=>{ 
      setIsPaneOpen(false);
      setLoading(false)   

    }
  return (
    <>
      <div className="cursor-pointer" onClick={()=> openNotificationPane()}> <i className="material-symbols-rounded" >notifications</i></div>
      
        <div className={`fixed transition-transform max-w-[400px] ease-in-out duration-500 shadow-md right-0 p-4 h-[100%] bg-white ${isPaneOpen? 'block': 'hidden'} `}>   
          <div className="flex relative">
            <div className="text-red-600 cursor-pointer bg-red-300 rounded-[50%] w-[30px] h-[30px] text-center absolute left-[-40px] top-[-10px] flex flex-col justify-center" 
          onClick={()=>ClosenotificationPane()}
            >
              <i className='material-symbols-rounded'>close</i>
            </div>
          </div>
            <div className="flex mb-3 mt-3">
          
              <div className="flex-1">
                <h2 className='text-xl text-customBlue'>Notification</h2>
              </div>
            </div>
            <div className="flex mb-3 mt-3">
              <div className="flex gap-4">
                <button className=' text-customBlue  rounded-lg px-3'>Unread</button>
                <button className=' text-customBlue  rounded-lg px-3'>Read</button>
              </div>
              <div className=""></div>
            </div>
              <div className="flex flex-col gap-2  overflow-auto h-[80%]">
                   {loading ? 'loading ... ' : (
                    NotificationData.data && NotificationData.data.notifications && NotificationData.data.notifications.length ? (
                     NotificationData.data.notifications.map((item: ItemData) => (
                        <div className="border hover:bg-gray-200 hover:shadow-sm cursor-pointer rounded-md p-4 break-words" key={item.id}>
                          <div className="flex"> 
                            <div className="flex-1">
                              <span className="font-semibold text-customBlue">Notification </span>
                            </div>
                            <div className="">
                              <i className='material-symbols-rounded'>more_vert</i> 
                            </div>
                          </div>
                          <p className="text-gray-800">{item.message}</p>
                          <p><small> {moment(item.createdAt).fromNow()}</small></p>
                        </div>
                      ))
                    ) : (
                      <div className="border hover:bg-gray-200 hover:shadow-sm cursor-pointer rounded-md p-4 break-words">
                        <p className="text-gray-800">No notifications</p>
                      </div>
                    )
                  )}

              </div>
          </div>
    </>


  )
}

export default Notification