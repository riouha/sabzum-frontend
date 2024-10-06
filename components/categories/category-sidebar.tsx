import { BsThreeDots } from 'react-icons/bs';
import css from './category-sidebar.module.css';

export interface ICategory {
  id: number;
  name: string;
  postsCount?: number;
}

export function CategorySidebar(props: { categories: ICategory[] }) {
  return (
    <div className={css.card}>
      <h3>کاوش موضوعات</h3>
      <ul className={css.list}>
        {props.categories.map((category) => (
          <li key={category.id}>
            <span>{category.name}</span>
            <label>{`(${new Intl.NumberFormat('fa-IR').format(category.postsCount ?? 0)})`}</label>
          </li>
        ))}
      </ul>
      <BsThreeDots color='#8f9bad' size='20px' />
    </div>
  );
}
