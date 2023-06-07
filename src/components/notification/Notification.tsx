import{ useState } from 'react'

function Notification(props: any) { 
  
  const [isOpenNotification, SetisOpenNotification]= useState(props.OpenPane);
  
  return (
    <div className={`fixed transition-transform  ease-in-out duration-500 shadow-md right-0 p-4 h-[100%] bg-white ${props.OpenPane && isOpenNotification ? 'block': 'hidden'} `}>   
     <div className="flex relative">
      <div className="text-red-600 cursor-pointer bg-red-300 rounded-[50%] w-[30px] h-[30px] text-center absolute left-[-40px] top-[-10px] flex flex-col justify-center" 
          onClick={() => SetisOpenNotification(false)}
      >
        <i className='material-symbols-rounded'>close</i>
      </div>
    </div>
      <div className="flex mb-3 mt-3">
    
        <div className="flex-1">
          <h2 className='text-xl'>Notification</h2>
        </div>
        <div className="flex gap-4">
          <button className=' text-customBlue  rounded-lg px-3'>Unread</button>
           <button className=' text-customBlue  rounded-lg px-3'>Read</button>
        </div>
        <div className=""></div>
      </div>
        <div className="flex flex-col gap-2  overflow-auto h-[100%]">
            <div className="border  rounded-md p-4">
              <span className="font-semibold">Notification </span>
              <p>This is the content of notification </p>
            </div>        
        </div>
    </div>

  )
}

export default Notification