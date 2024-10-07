import { useState, useEffect } from 'react';
import { BoombanCard } from '../../components/boomban-card/boomban-card';
import { CategorySidebar } from '../../components/categories/category-sidebar';
import { Header } from '../../components/header/header';
import { SideNavbar } from '../../components/navbar/side-navbar/side-navbar';
import { LargeOverlayedPost } from '../../components/posts/large-overlayed/large-overlayed-post';
import { ReadonlySuneditor } from '../../components/post-editor/suneditor';
import { useRouter } from 'next/router';
import { IPost } from '../../components/posts/interfaces';
import { postService } from '../../services/post/post.service';
import { PostModel } from '../../services/post/post.model';
import { fileService } from '../../services/file/file.service';

export default function Post() {
  const router = useRouter();
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [post, setPost] = useState<PostModel>();

  useEffect(() => {
    if (router.query.slug) {
      postService.getPostBySlug(router.query.slug as string).then((result) => {
        if (!result.error) setPost(result.data);
      });
    }
  }, [router]);

  return (
    <>
      <Header handleOpenSideMenu={setShowSideMenu} />
      {/* <Navbar handleOpenSideMenu={SetShowSideMenu} /> */}
      <SideNavbar show={showSideMenu} setShow={setShowSideMenu} />
      <div className='home_container'>
        <div className='hot_favourites'>
          <div className='hot_post'>
            {post && (
              <LargeOverlayedPost
                post={{
                  id: post.id,
                  slug: post.slug,
                  title: post.title,
                  thumbnail: fileService.getImageUrl(post.thumbnail!),
                  category: 'گل و گیاه',
                  date: new Intl.DateTimeFormat('fa-IR').format(new Date(post.createDate)),
                  author: {
                    id: 1,
                    fullname: 'نام نویسنده',
                  },
                }}
              />
            )}
          </div>
          <div className='favourite_posts'>
            <BoombanCard />
          </div>
        </div>

        <div className='sublayout'>
          <div className='post'>{post && <ReadonlySuneditor value={decodeURI(post?.htmlContent!)} />}</div>

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
          </div>
        </div>
      </div>
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
