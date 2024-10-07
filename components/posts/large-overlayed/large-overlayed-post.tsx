import css from './styles.module.css';
import { IPost } from '../interfaces';
import Link from 'next/link';
import { fileService } from '../../../services/file/file.service';

export function LargeOverlayedPost(props: { post: IPost }) {
  return (
    <div className={css.large_overlayed_post}>
      <div className={css.details}>
        <Link href={props.post.link || `/post/${props.post.slug}`} target={props.post.link ? '_blank' : undefined}>
          <h2 className={css.title}>{props.post.title}</h2>
        </Link>
        <ul className={css.meta}>
          <li>{props.post.author.fullname}</li>
          <li>{props.post.date}</li>
          <li>{props.post.category}</li>
        </ul>
      </div>
      <Link href={props.post.link || `/post/${props.post.slug}`} target={props.post.link ? '_blank' : undefined}>
        <div className={css.image_div}>
          <div
            className={css.inner_img}
            style={{ backgroundImage: `url(${fileService.getImageUrl(props.post.thumbnail)})` }}
          ></div>
        </div>
      </Link>
    </div>
  );
}
