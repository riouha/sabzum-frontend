import { Header } from '../components/header/header';
import { PostRow } from '../components/posts/row-post/post-row';
import { LargeOverlayedPost } from '../components/posts/large-overlayed/large-overlayed-post';
import { BoombanCard } from '../components/boomban-card/boomban-card';
import { CategorySidebar } from '../components/categories/category-sidebar';
import { SideNavbar } from '../components/navbar/side-navbar/side-navbar';
import { useState, useEffect } from 'react';
import { SidePost } from '../components/posts/side-post/side-post';
import { MiddleBanner } from '../components/middle-banner/middle-banner';
import { PostModel } from '../services/post/post.model';
import { postService } from '../services/post/post.service';
import { Footer } from '../components/footer/footer';
import { fileService } from '../services/file/file.service';

const NEWS = [
  {
    id: 1,
    date: '1401/10/10',
    title: 'چرا دلالان مسکن برنده بازارها شدند؟',
    author: 'فردای اقتصاد',
    image: 'https://media.fardayeeghtesad.com/d/2022/12/04/4/10670.jpg',
  },
  {
    id: 2,
    date: '1401/10/10',
    title: 'معاملات مسکن داغ‌تر می‌شود؟',
    author: 'فردای اقتصاد',
    image: 'https://media.fardayeeghtesad.com/d/2022/12/21/4/11882.jpg',
  },
  {
    id: 3,
    date: '1401/10/10',
    title: 'سرنوشت ناامیدکننده مسکن ملی',
    author: 'فردای اقتصاد',
    image: 'https://media.fardayeeghtesad.com/d/2022/11/05/4/8436.jpg',
  },
  {
    id: 4,
    date: '1401/10/10',
    title: 'در چه شرایطی مالکان خانه مسکونی از پرداخت مالیات معاف می شوند؟',
    author: 'اقتصاد انلاین',
    image:
      'https://static3.eghtesadonline.com/thumbnail/BDdiU9gbKj0s/XNE-VVgRri1eRAk6IJ6Mza55scbpkrmAkjGBs_do02Xvt6CP8LgvBUk7bhAwqB4R1ua0tqkDH_rTYT42RrYhphbJ9Q2XvX6L/%D8%AF%D8%B1+%DA%86%D9%87+%D8%B4%D8%B1%D8%A7%DB%8C%D8%B7%DB%8C+%D9%85%D8%A7%D9%84%DA%A9%D8%A7%D9%86+%D8%AE%D8%A7%D9%86%D9%87+%D9%85%D8%B3%DA%A9%D9%88%D9%86%DB%8C+%D8%A7%D8%B2+%D9%BE%D8%B1%D8%AF%D8%A7%D8%AE%D8%AA+%D9%85%D8%A7%D9%84%DB%8C%D8%A7%D8%AA+%D9%85%D8%B9%D8%A7%D9%81+%D9%85%DB%8C+%D8%B4%D9%88%D9%86%D8%AF%D8%9F.jpg',
  },
  {
    id: 5,
    date: '1401/10/10',
    title: '۵۰ درصد از خانوارهای ایرانی خودرو ندارند / کدام مالکان خودرو معاف از مالیات می‌شوند؟',
    author: 'دنیای اقتصاد',
    image:
      'https://static3.donya-e-eqtesad.com/thumbnail/Vlkq3m6sXTWE/QHn8O9nsSzT8qCU7RegsN6Pbb5v74eEtbKeSOh05RaYla9wWYBYrfEt7TZyzEhnm/%D8%A2%D9%84%D9%88%D8%AF%DA%AF%DB%8C+%D8%A8%D9%87+%D8%A2%D8%B3%D9%85%D8%A7%D9%86+%D8%AA%D9%87%D8%B1%D8%A7%D9%86+%D8%A8%D8%A7%D8%B2%DA%AF%D8%B4%D8%AA+copy.jpg',
  },
  {
    id: 6,
    date: '1401/10/10',
    title: 'بیت کوین یک سرمایه گذاری خوب است/ سرمایه گذاران طلا احمق هستند!',
    author: 'ملکانا',
    image: 'https://www.melkana.com/blog/wp-content/uploads/2022/12/6642-150x150.jpg',
  },
  {
    id: 7,
    date: '1401/10/10',
    title: 'عطش سیری ناپذیر وام بانکی در ایران / چرا افزایش نرخ سود بانکی تورم را خیلی کم نمی کند؟',
    author: 'اقتصاد نیوز',
    image:
      'https://static4.eghtesadnews.com/thumbnail/msKL78TZh1EV/HNXPOu-gYQgnB2fMDkK7mke0S39fxhogKjffI2V27aS9oGCdDQCFyXxRyX647MzQwGcBsTrR56ozVVP8dMbHmum7ioSbEEkx85GlR9oCoZ3DaRzXwcxoLg,,/youlLa3Li32T.jpg',
  },
  {
    id: 8,
    date: '1401/10/10',
    title: 'آخرین وضعیت قیمت اوراق مسکن / هزینه وام مسکن چقدر شد؟',
    author: 'اکوایران',
    image:
      'https://static3.ecoiran.com/thumbnail/L5pADqW6FpMe/oZRmDytQCqPbx64THpRbAF899BMitgIDSfP66penUZ6m9xMsVHbWjBoW4bIRHlTclq6Z_b1l_bR3FJ_vqz--jOehnuZmMO0s_4ngQ9jVKYg,/%D9%81%D8%B1%D9%88%D8%B1%DB%8C%D8%B2%D8%B4.jpg',
  },
  {
    id: 9,
    date: '1401/10/10',
    title: 'درآمد شهرداری تهران از عوارض قطع درختان چقدر است؟',
    author: 'دارایان',
    image: 'https://www.daraian.com/fa/media/k2/items/cache/1c7c8641d8b115b778eeda8c8002b8a9_L.jpg',
  },
];

export default function Home() {
  const [showSideMenu, SetShowSideMenu] = useState(false);
  const [posts, setPosts] = useState<PostModel[]>([]);
  useEffect(() => {
    postService.getPosts().then((data) => setPosts(data.data?.posts ?? []));
  }, []);

  return (
    <>
      <Header handleOpenSideMenu={SetShowSideMenu} />
      {/* <Navbar handleOpenSideMenu={SetShowSideMenu} /> */}
      <SideNavbar show={showSideMenu} setShow={SetShowSideMenu} />
      <div className='home_container'>
        <div className='hot_favourites'>
          <div className='hot_post'>
            <LargeOverlayedPost
              post={{
                id: 1,
                slug: '1',
                title: 'نحوه کاشت، آبیاری و نگهداری از درختچه بونسای ژاپنی',
                thumbnail: 'https://glamourgarden.com/wp-content/uploads/2023/08/Bonsai-1024x636.jpg',
                category: 'الهام بخش',
                date: '27/9/1401',
                author: {
                  id: 1,
                  fullname: 'نام نویسنده',
                },
              }}
            />
          </div>
          <div className='favourite_posts'>
            <BoombanCard />
          </div>
        </div>

        <MiddleBanner />

        <div className='sublayout'>
          <div className='post'>
            {posts.map((post) => (
              <PostRow
                key={post.id}
                post={{
                  id: post.id,
                  slug: post.slug,
                  title: post.title,
                  content: post.content ?? '',
                  category: 'گل و گیاه',
                  date: post.published
                    ? new Intl.DateTimeFormat('fa-IR').format(new Date(post.published))
                    : post.createDate,
                  author: post.author
                    ? {
                        id: post.author.id,
                        fullname: post.author.fullname,
                        // avatar: post.author.avatar,
                      }
                    : {
                        id: post.author!.id,
                        fullname: post.author!.fullname,
                        avatar: post.thumbnail,
                      },
                  thumbnail: fileService.getImageUrl(post.thumbnail!),
                }}
                style={{ marginBottom: '30px' }}
              />
            ))}
          </div>

          <div className='side'>
            <CategorySidebar
              categories={[
                { id: 1, name: 'بررسی ساختمان', postsCount: 5 },
                { id: 2, name: 'خرید آپارتمان', postsCount: 4 },
                { id: 3, name: 'خرید ویلا', postsCount: 3 },
                { id: 4, name: 'سبک زندگی', postsCount: 1 },
                { id: 5, name: 'سیاست', postsCount: 14 },
                { id: 6, name: 'اقتصاد', postsCount: 10 },
                { id: 7, name: 'فرهنگ', postsCount: 1 },
                { id: 8, name: 'علمی' },
              ]}
            />

            <br />
            <br />
            <div className='lastnews'>
              <h3>مطالب پربازدید</h3>
              {NEWS.map((x) => (
                <SidePost key={x.id} post={x as any} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          .lastnews {
            border: 1px solid #ebebeb;
            border-radius: 10px;
            padding: 0 15px;
          }

          .lastnews h3 {
            color: #203656;
            text-align: center;
          }

          .hot_favourites {
            margin: 3vh 0;
            display: flex;
          }
          .hot_post {
            flex: 12;
            position: relative;
            margin-left: 1rem;
          }
          .favourite_posts {
            flex: 5;
          }

          .home_container {
            padding: 0 20vw;
          }

          .sublayout {
            margin: 40px auto;
            display: flex;
          }

          .post {
            flex: 12;
            // width: 55%
            padding: 30px;
            border: 1px solid #ebebeb;
            border-radius: 10px;
            margin-left: 1rem;
          }

          .side {
            flex: 5;
            // width: 45%;
            // background: #aaa;
          }

          @media only screen and (max-width: 1400px) {
            .home_container {
              padding: 0 3vw;
            }
          }

          @media only screen and (max-width: 600px) {
            .side {
              display: none;
            }
            .favourite_posts {
              display: none;
            }
            .hot_post {
              margin-left: 0;
            }
            .post {
              margin-left: 0;
            }
          }
        `}
      </style>
    </>
  );
}
