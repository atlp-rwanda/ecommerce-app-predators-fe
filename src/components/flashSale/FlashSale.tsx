export default function FlashSale() {
  return (
    <div className="px-[7%] mt-10 font-Poppins">
      <div className="relative rounded-lg overflow-hidden h-72">
          <img className=" w-full h-full object-cover -scale-x-100" src="https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
          <div className="absolute w-full h-full top-0 rounded-lg overflow-hidden flex justify-end">
            <div className="w-2/5 h-full flex flex-col items-center justify-around py-10">
              <button type="button" className=' py-2 px-5 rounded-2xl bg-tertiary text-white text-[12px] cursor-pointer'>New Laptop</button>
              <p className="text-customBlue font-bold text-3xl">Sale up to 50% off</p>
              <p className="text-white text-[14px]">16inch HD display</p>
              <button type="button" className=' py-2 px-6 rounded-2xl bg-tertiary text-white text-[12px] cursor-pointer'>Shop now</button>
            </div>
          </div>
      </div>
    </div>
  )
}
