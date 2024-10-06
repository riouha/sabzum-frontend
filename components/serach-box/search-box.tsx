import { FaSearch } from 'react-icons/fa';
import css from './search-box.module.css';

export function SearchBox(props: { className?: string }) {
  return (
    <>
      <div className={props.className ? [css.box, props.className].join(' ') : css.box}>
        <input type='text' placeholder='جستجو کنید...' className={css.input} />
        <button className='roundbtn'>
          <FaSearch color='#FFF' />
        </button>
      </div>
    </>
  );
}
