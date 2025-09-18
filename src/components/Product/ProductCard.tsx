import Link from 'next/link';
import { mediaBaseURL } from 'api';
import { Product } from 'types/product';
import { numberWithCommas } from 'utils/dataCalculator';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { id, name, description, price, files } = product;

  return (
    <Link
      key={id}
      href={`/product/${id}`}
      className='text-gray-600 border border-gray-300 p-3 rounded-2xl shadow hover:shadow-md transition-shadow flex'
    >
      {files.length > 0 && (
        <img
          src={`${mediaBaseURL}/${files[0].fileId}`}
          alt={name}
          className='w-1/3 ml-4 rounded-2xl'
        />
      )}
      <div className='flex-1 flex flex-col'>
        <h2 className='font-semibold mb-1'>{name}</h2>
        <p className='text-sm'>{description}</p>
        <p className='text-green-700 font-semibold mt-auto'>
          {numberWithCommas(price)} تومان
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
