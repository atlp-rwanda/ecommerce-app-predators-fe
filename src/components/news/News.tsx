import { Link } from "react-router-dom";
import product from "../../assets/images/tablet.png"

export default function News() {
  return (
    <div className="px-[7%] mt-10 flex flex-col mb-10">
      <div className="flex justify-between mb-5">
        <h3 className="font-Poppins text-customBlue font-semibold text-2xl whitespace-nowrap">Latest News</h3>
        <Link to={""} className="text-customBlue font-Poppins">View all</Link>
      </div>
      <div className="news font-Poppins flex gap-3 max-[560px]:items-center max-[560px]:flex-col">
        <div className="border rounded-lg py-5 px-3 flex items-center gap-2 max-[766px]:flex-col">
          <div className=" flex-1 w-40 overflow-hidden rounded-md">
            <img src={product} alt="" />
          </div>
          <div className=" flex-1 flex flex-col text-customBlue gap-3 ">
            <div className="date_of_publish flex"><p className="border rounded-xl px-2 text-sm">22, Oct, 2021</p></div>
            <div className="title font-semibold">Who avoids a pain that produces?</div>
            <div>
              <p className="text-[11px]">Ea velit qui laboris duis proident mollit sit irure do mollit incididunt.Nisi proident duis proident ipsum amet cupidatat pariatur sint cillum esse velit sit fugiat pariatur.</p>
              <p className="text-[11px] font-semibold mt-7">By Spacing Tech</p>
            </div>
          </div>
        </div>
        <div className="border rounded-lg py-5 px-3  flex items-center gap-2 max-[766px]:flex-col">
          <div className=" flex-1 w-40 overflow-hidden rounded-md">
            <img src={product} alt="" />
          </div>
          <div className=" flex-1 flex flex-col text-customBlue gap-3 ">
            <div className="date_of_publish flex"><p className="border rounded-xl px-2 text-sm">22, Oct, 2021</p></div>
            <div className="title font-semibold">Who avoids a pain that produces?</div>
            <div>
              <p className="text-[11px]">Ea velit qui laboris duis proident mollit sit irure do mollit incididunt.Nisi proident duis proident ipsum amet cupidatat pariatur sint cillum esse velit sit fugiat pariatur.</p>
              <p className="text-[11px] font-semibold mt-7">By Spacing Tech</p>
            </div>
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
