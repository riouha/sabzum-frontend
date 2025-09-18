import { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperProps } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Keyboard,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type SwiperSlideElement = ReactElement<typeof SwiperSlide>;

interface SliderProps extends SwiperProps {
  children?: SwiperSlideElement | SwiperSlideElement[];
}

const navBtnClass =
  'bg-green-600 text-white rounded-full p-2 absolute top-1/2 -translate-y-1/2 z-10 cursor-pointer outline-none select-none';

const Slider: React.FC<SliderProps> = ({ children, navigation, ...props }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode, Keyboard]}
      spaceBetween={50}
      slidesPerView={3}
      navigation={
        navigation && {
          prevEl: '.prev',
          nextEl: '.next',
          disabledClass: 'opacity-50 cursor-not-allowed!',
        }
      }
      keyboard={{ enabled: true }}
      grabCursor
      {...props}
    >
      {navigation && (
        <>
          <div className={`next left-0 ${navBtnClass}`}>›</div>
          <div className={`prev right-0 ${navBtnClass}`}>‹</div>
        </>
      )}
      {children}
    </Swiper>
  );
};

export default Slider;
