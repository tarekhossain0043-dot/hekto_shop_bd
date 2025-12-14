import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { useSwiper } from "swiper/react";
const CustomArrowForSlider = () => {
  const swiper = useSwiper();
  return (
    <div className="flex absolute top-1/2 left-16 w-full transform -translate-y-1/2 z-10 items-start flex-col gap-6">
      {/* left button */}
      <button
        onClick={() => swiper.slidePrev()}
        className="p-2 w-10 h-10 rounded-full bg-hero-primary hover:bg-hero-primary flex items-center justify-center text-white"
      >
        <ChevronLeft size={30} className="cursor-pointer" />
      </button>
      {/* right button */}
      <button
        onClick={() => swiper.slideNext()}
        className="p-2 w-10 h-10 rounded-full bg-slate-200 hover:bg-hero-primary flex items-center justify-center text-white"
      >
        <ChevronRight size={30} className="cursor-pointer" />
      </button>
    </div>
  );
};

export default CustomArrowForSlider;
