import Image from 'next/image';
import Link from 'next/link';
import { BsShare, BsThreeDots } from 'react-icons/bs';
import { FaRegEye, FaHeart, FaBookmark, FaRegBookmark, FaRegHeart } from 'react-icons/fa';
import { IPost } from '../interfaces';
import css from './post-row.module.css';
import { fileService } from '../../../services/file/file.service';

export function PostRow(props: { post: IPost; style?: React.CSSProperties }) {
  return (
    <div className={css.block} style={props.style}>
      <div className={css.post}>
        <Link href={props.post.link || `/post/${props.post.slug}`} target={props.post.link ? '_blank' : undefined}>
          <div className={css.picture}>
            {props.post.thumbnail && (
              <Image src={fileService.getImageUrl(props.post.thumbnail)} alt='' width={260} height={150} />
            )}
          </div>
        </Link>
        <div className={css.info}>
          <ul className={css.info_top_list}>
            <li>
              <Image
                src={props.post.link ? props.post.author.avatar! : '/images/woman.png'}
                alt='author'
                width={30}
                height={30}
                className={css.author}
              />
              <span>{props.post.author.fullname}</span>
            </li>
            <li>{props.post.category}</li>
            <li>{props.post.date}</li>
          </ul>
          <Link href={props.post.link || `/post/${props.post.slug}`} target={props.post.link ? '_blank' : undefined}>
            <h3>{props.post.title}</h3>
          </Link>
          <p>{props.post.content ?? ''}</p>
          <div className={css.operations}>
            <div>
              <FaRegHeart className={css.operation_icon} />
              <FaRegBookmark className={css.operation_icon} />
              <BsShare className={css.operation_icon} />
              <div className={css.views}>
                <FaRegEye />
                <span>1</span>
              </div>
            </div>
            <Link href={props.post.link || `/post/${props.post.slug}`} target={props.post.link ? '_blank' : undefined}>
              <BsThreeDots className={css.more} size='20px' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
