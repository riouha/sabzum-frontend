import {
  FaTemperatureHigh,
  FaTint,
  FaSun,
  FaSeedling,
  FaRulerVertical,
} from 'react-icons/fa';
import { mediaBaseURL } from 'api';
import { Product } from 'types/product';
import { numberWithCommas } from 'utils/dataCalculator';

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  const { name, price, description, files, info } = product || {};
  const imageUrl =
    files && files.length > 0
      ? `${mediaBaseURL}/${files[0].fileId}`
      : undefined;

  return (
    <section
      className='text-gray-600'
      aria-labelledby='product-title'
      tabIndex={0}
    >
      <figure className='relative' aria-label={name}>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`تصویر محصول ${name}`}
            className='w-100 m-auto rounded-b-2xl'
            role='img'
          />
        )}
        <figcaption className='absolute top-0 flex flex-col p-4'>
          <h2 id='product-title' className='text-2xl font-bold mb-6'>
            {name}
          </h2>
          <div className='flex flex-col lg:flex-row gap-1'>
            <span>قیمت:</span>
            <span className='text-green-700 font-semibold' aria-label='قیمت'>
              {numberWithCommas(price)} تومان
            </span>
          </div>
        </figcaption>
      </figure>
      <div className='p-6'>
        <dl className='mb-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4'>
          {info?.temprature && (
            <div className='flex items-center gap-2'>
              <FaTemperatureHigh aria-label='دما' className='text-red-500' />
              <dt className='font-semibold'>دما:</dt>
              <dd>
                {info.temprature[0]} - {info.temprature[1]}
              </dd>
            </div>
          )}
          {info?.water && (
            <div className='flex items-center gap-2'>
              <FaTint aria-label='آبیاری' className='text-blue-500' />
              <dt className='font-semibold'>آبیاری:</dt>
              <dd>{info.water}</dd>
            </div>
          )}
          {info?.light && (
            <div className='flex items-center gap-2'>
              <FaSun aria-label='نور' className='text-yellow-500' />
              <dt className='font-semibold'>نور:</dt>
              <dd>{info.light}</dd>
            </div>
          )}
          {info?.pot && (
            <div className='flex items-center gap-2'>
              <FaSeedling aria-label='گلدان' className='text-green-700' />
              <dt className='font-semibold'>گلدان:</dt>
              <dd>{info.pot}</dd>
            </div>
          )}
          {info?.size && (
            <div className='flex items-center gap-2'>
              <FaRulerVertical aria-label='اندازه' className='text-gray-700' />
              <dt className='font-semibold'>اندازه:</dt>
              <dd>{info.size}</dd>
            </div>
          )}
        </dl>
        <div
          className='border-t border-gray-400 pt-4'
          aria-label='توضیحات محصول'
        >
          {description}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
