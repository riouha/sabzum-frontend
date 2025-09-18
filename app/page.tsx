import { baseURL } from 'api';
import CategoryTabs from 'components/CategoryTabs';
import ErrorAlert from 'components/common/ErrorAlert';
import { ProductCategory } from 'types/product';
import { ApiResponse } from 'types/api-response';

const getCategories = async (): Promise<ApiResponse<ProductCategory[]>> => {
  try {
    const response = await fetch(`${baseURL}/product-category`, {
      method: 'GET',
    });
    if (!response.ok) {
      return { error: response.status, message: response.statusText };
    }
    const data = await response.json();
    return { result: data.items };
  } catch (error: any) {
    return {
      error: 500,
      message: error?.message || 'خطا در دریافت دسته‌بندی‌ها',
    };
  }
};

export default async function HomePage() {
  const response = await getCategories();

  if ('error' in response) {
    return (
      <div className='container py-8'>
        <ErrorAlert message={response.message} />
      </div>
    );
  } else {
    const topCategories = response.result
      .filter((cat) => cat.parentId === null)
      .reverse();
    return (
      <div className='container'>
        <CategoryTabs categories={topCategories} />
      </div>
    );
  }
}
