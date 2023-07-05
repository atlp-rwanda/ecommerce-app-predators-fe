import { useRef } from "react";
import heaphones from "../../assets/images/HeadphoneTwo.png"

export default function Category() {

  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 330.5;
    }
  }
  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 330.5;
    }
  }

  return (
    <div className=" relative mt-10 font-Poppins mx-[7%]">
      <div onClick={handleScrollRight} className=" absolute h-7 w-7 bg-gray-200 rounded-full flex items-center justify-center top-[42%] left-0 cursor-pointer hover:bg-tertiary hover:text-white"><i className="material-symbols-rounded cursor-pointer">arrow_back</i></div>
      <div onClick={handleScrollLeft} className=" absolute h-7 w-7 bg-gray-200 rounded-full flex items-center justify-center top-[42%] right-0 cursor-pointer hover:bg-tertiary hover:text-white"><i className="material-symbols-rounded cursor-pointer">arrow_forward</i></div>
      <div className=" scroll-smooth snap-mandatory flex gap-3 overflow-hidden" ref={containerRef}>
        <div className=" snap-center flex gap-16 border border-gray rounded-xl px-5 py-2 items-center">
          <div className="rounded-full overflow-hidden w-24 h-24">
            <img src={heaphones}/>
          </div>
          <div className=" text-customBlue">
            <p className="font-semibold text-lg">Headphones</p>
            <p>{"(6 items)"}</p>
          </div>
        </div>
        <div className="snap-center flex gap-16 border border-gray rounded-xl px-5 py-2 items-center">
          <div className="rounded-full overflow-hidden w-24 h-24">
            <img src={heaphones}/>
          </div>
          <div className=" text-customBlue">
            <p className="font-semibold text-lg">Headphones</p>
            <p>{"(6 items)"}</p>
          </div>
        </div>
        <div className="snap-center flex gap-16 border border-gray rounded-xl px-5 py-2 items-center">
          <div className="rounded-full overflow-hidden w-24 h-24">
            <img src={heaphones}/>
          </div>
          <div className=" text-customBlue">
            <p className="font-semibold text-lg">Headphones</p>
            <p>{"(6 items)"}</p>
          </div>
        </div>
        <div className="snap-center flex gap-16 border border-gray rounded-xl px-5 py-2 items-center">
          <div className="rounded-full overflow-hidden w-24 h-24">
            <img src={heaphones}/>
          </div>
          <div className=" text-customBlue">
            <p className="font-semibold text-lg">Headphones</p>
            <p>{"(6 items)"}</p>
          </div>
        </div>
        <div className="snap-center flex gap-16 border border-gray rounded-xl px-5 py-2 items-center">
          <div className="rounded-full overflow-hidden w-24 h-24">
            <img src={heaphones}/>
          </div>
          <div className=" text-customBlue">
            <p className="font-semibold text-lg">Headphones</p>
            <p>{"(6 items)"}</p>
          </div>
        </div>
        <div className="snap-center flex gap-16 border border-gray rounded-xl px-5 py-2 items-center">
          <div className="rounded-full overflow-hidden w-24 h-24">
            <img src={heaphones}/>
          </div>
          <div className=" text-customBlue">
            <p className="font-semibold text-lg">Headphones</p>
            <p>{"(6 items)"}</p>
          </div>
        </div>
        <div className="snap-center flex gap-16 border border-gray rounded-xl px-5 py-2 items-center">
          <div className="rounded-full overflow-hidden w-24 h-24">
            <img src={heaphones}/>
          </div>
          <div className=" text-customBlue">
            <p className="font-semibold text-lg">Headphones</p>
            <p>{"(6 items)"}</p>
          </div>
        </div>
        <div className="snap-center flex gap-16 border border-gray rounded-xl px-5 py-2 items-center">
          <div className="rounded-full overflow-hidden w-24 h-24">
            <img src={heaphones}/>
          </div>
          <div className=" text-customBlue">
            <p className="font-semibold text-lg">Headphones</p>
            <p>{"(6 items)"}</p>
          </div>
        </div>
        <div className="snap-center flex gap-16 border border-gray rounded-xl px-5 py-2 items-center">
          <div className="rounded-full overflow-hidden w-24 h-24">
            <img src={heaphones}/>
          </div>
          <div className=" text-customBlue">
            <p className="font-semibold text-lg">Headphones</p>
            <p>{"(6 items)"}</p>
          </div>
        </div>
        <div className="snap-center flex gap-16 border border-gray rounded-xl px-5 py-2 items-center">
          <div className="rounded-full overflow-hidden w-24 h-24">
            <img src={heaphones}/>
          </div>
          <div className=" text-customBlue">
            <p className="font-semibold text-lg">Headphones</p>
            <p>{"(6 items)"}</p>
          </div>
        </div>
        <div className="snap-center flex gap-16 border border-gray rounded-xl px-5 py-2 items-center">
          <div className="rounded-full overflow-hidden w-24 h-24">
            <img src={heaphones}/>
          </div>
          <div className=" text-customBlue">
            <p className="font-semibold text-lg">Headphones</p>
            <p>{"(6 items)"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
