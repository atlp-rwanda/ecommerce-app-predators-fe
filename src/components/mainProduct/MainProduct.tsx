export default function MainProduct({name, price, photo_url}: {name: string, price: string, photo_url: string}) {
  return (
    <div className="flex flex-col md:flex-row justify-between md:mx-auto mt-10 flex-wrap px-[7%] max-w-7xl">
      <div className='flex flex-col gap-10 items-center mb-10 justify-around'>
        <p className=' text-customBlue text-[36px] font-semibold font-Poppins'>{name}</p>
        <div className=' flex gap-5 font-Poppins'>
          <button type="button" className='h-[40px] px-5 rounded-xl bg-tertiary text-white text-sm'>Shop now</button>
          <button type="button" className='h-[40px] px-5 rounded-xl border border-customBlue text-customBlue text-sm'>View more</button>
        </div>
      </div>
      <div className="relative h-60 w-60 sm:h-80 sm:w-80 self-center">
        <img src={`${photo_url}`} className=" w-full h-full object-contain" alt=""/>
        <div className=" font-Poppins font-semibold rounded-full h-20 w-20 bg-tertiary absolute bottom-5 right-0 flex flex-col items-center justify-center text-white">
          <p>Only</p>
          <p>${price}</p>
        </div>
      </div>
    </div>
  )
}
