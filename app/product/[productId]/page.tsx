import { baseURL } from 'api';
import ProductDetails from 'components/Product/ProductDetails';
import { Product } from 'types/product';

interface PageProps {
  params: Promise<{ productId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const getProduct = async (productId: string) => {
  const response = await fetch(`${baseURL}/product/${productId}`, {
    method: 'GET',
  });
  const data = await response.json();
  return data as Product;
};

export default async function ProductPage({ params }: PageProps) {
  const { productId } = await params;
  const product = await getProduct(productId);

  return (
    <div className='container'>
      <ProductDetails product={product} />
    </div>
  );
}
