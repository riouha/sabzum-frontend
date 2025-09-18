import { baseURL } from 'api';
import ProductList from 'components/Product/ProductList';
import { Product } from 'types/product';

interface PageProps {
  params: Promise<{ categoryId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const getProducts = async (categoryId: string) => {
  const response = await fetch(`${baseURL}/product?categoryId=${categoryId}`, {
    method: 'GET',
  });
  const data = await response.json();
  return data.items as Product[];
};

export default async function ProductsPage({ params }: PageProps) {
  const { categoryId } = await params;

  const products = await getProducts(categoryId);

  return (
    <div className='container mt-6'>
      <ProductList items={products} />
    </div>
  );
}
