'use client';
import { Fragment, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { mediaBaseURL } from 'api';
import { ProductCategory } from 'types/product';
import Button from './common/Button';
import Slider from './common/Slider';

const CategoryTabs: React.FC<{ categories: ProductCategory[] }> = ({
  categories,
}) => {
  const [activeTab, setActiveTab] = useState(categories[0]?.id ?? null);

  const isActive = (id: number) => id === activeTab;

  return (
    <div className='w-full max-w-4xl mx-auto'>
      {/* <div className='overflow-x-auto whitespace-nowrap no-scrollbar mb-4 space-x-3 flex justify-center'> */}
      <Slider className='sm:w-fit!' slidesPerView='auto' spaceBetween={10}>
        {categories.map(({ id, name, imageId }) => (
          <SwiperSlide key={id} className='flex! justify-center w-fit!'>
            <Button
              key={id}
              variant='text'
              onClick={() => setActiveTab(id)}
              className='relative font-semibold gap-2 p-2!'
            >
              <img
                src={`${mediaBaseURL}/${imageId}`}
                alt={name}
                className='w-6 h-6 object-cover'
              />
              {name}
              <span
                className={`absolute left-0 right-0 bottom-0 h-0.75 rounded-full transition-transform duration-300 bg-green-600
                ${isActive(id) ? 'scale-x-100' : 'scale-x-0'}`}
              ></span>
            </Button>
          </SwiperSlide>
        ))}
      </Slider>
      <div className='p-4 border border-green-800 rounded-xl'>
        {categories
          .filter(({ id }) => isActive(id))
          .map(({ id, subs }) => (
            <Fragment key={id}>
              {subs.length > 0 ? (
                <Slider
                  navigation
                  slidesPerView={2}
                  spaceBetween={-30}
                  breakpoints={{
                    480: {
                      slidesPerView: 3,
                    },
                    640: {
                      slidesPerView: 4,
                    },
                    768: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  {subs.map(({ id, name, imageId }) => (
                    <SwiperSlide key={id} className='flex! justify-center'>
                      <Button
                        key={id}
                        variant='text'
                        className='flex-col'
                        href={`/category/${id}`}
                      >
                        <div className='border-2 rounded-full p-3'>
                          <img
                            src={`${mediaBaseURL}/${imageId}`}
                            alt={name}
                            className='w-6 h-6 object-cover'
                          />
                        </div>
                        {name}
                      </Button>
                    </SwiperSlide>
                  ))}
                </Slider>
              ) : (
                <p className='text-gray-500'>دسته‌بندی خالی</p>
              )}
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
