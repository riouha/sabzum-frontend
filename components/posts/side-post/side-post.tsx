import css from './side-post.module.css';
import { IPost } from '../interfaces';
import Image from 'next/image';

export function SidePost(props: { post: IPost }) {
  return (
    <div className={css.block}>
      <div className={css.sidepost}>
        <div className={css.circleimg}>
          <div className={css.inner}>
            <a>{props.post.image && <Image src={props.post.image} alt='' width={64} height={64} />}</a>
          </div>
        </div>
        <div className={css.details}>
          <h6>{props.post.title}</h6>
          <ul className={css.info}>
            <li>{props.post.author.title}</li>
            <li>{props.post.date}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
