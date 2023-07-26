import profile_image from '../../assets/dashboard/account_photo.jpg'

export default function Testimony() {
  return (
    <div className=' mt-10 px-[7%] max-[780px]:hidden flex flex-col'>
      <div className='flex gap-5'>
        <div className=" font-Poppins p-3 border rounded-md">
          <div className='flex items-center gap-10'>
            <div className="image rounded-full overflow-hidden h-20 w-20 outline-dashed outline-tertiary outline-2 outline-offset-2">
              <img src={profile_image} alt="" className='object-cover' />
            </div>
            <div className="name">Juan Kirkland</div>
          </div>
          <div className="review bg-blue-100 rounded-md p-2 mt-5 text-sm">
            Do mollit id deserunt reprehenderit qui. Ut pariatur deserunt occaecat irure sit culpa et amet. Id labore ullamco do reprehenderit in et et exercitation ad.
          </div>
        </div>
        <div className=" font-Poppins p-3 border rounded-md">
          <div className='flex items-center gap-10'>
            <div className="image rounded-full overflow-hidden h-20 w-20 outline-dashed outline-tertiary outline-2 outline-offset-2">
              <img src={profile_image} alt="" className='object-cover' />
            </div>
            <div className="name">Dwayne Campbell</div>
          </div>
          <div className="review bg-blue-100 rounded-md p-2 mt-5 text-sm">
            Do mollit id deserunt reprehenderit qui. Ut pariatur deserunt occaecat irure sit culpa et amet. Id labore ullamco do reprehenderit in et et exercitation ad.
          </div>
        </div>
        <div className=" font-Poppins p-3 border rounded-md">
          <div className='flex items-center gap-10'>
            <div className="image rounded-full overflow-hidden h-20 w-20 outline-dashed outline-tertiary outline-2 outline-offset-2">
              <img src={profile_image} alt="" className='object-cover' />
            </div>
            <div className="name">Marry Jones</div>
          </div>
          <div className="review bg-blue-100 rounded-md p-2 mt-5 text-sm">
            Do mollit id deserunt reprehenderit qui. Ut pariatur deserunt occaecat irure sit culpa et amet. Id labore ullamco do reprehenderit in et et exercitation ad.
          </div>
        </div>
      </div>
      <div className='Pagination flex gap-3 self-center mt-10'>
        <div className='h-3 w-3 rounded-full bg-tertiary cursor-pointer'></div>
        <div className='h-3 w-3 rounded-full border border-gray cursor-pointer'></div>
        <div className='h-3 w-3 rounded-full border border-gray cursor-pointer'></div>
        </div>
    </div>
  )
}
